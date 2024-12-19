import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 自定义 GaugeChart 组件
const GaugeChart = ({ value, title, max = 100 }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-full h-full">
          {/* 背景圆环 */}
          <circle
            cx="64"
            cy="64"
            r="54"
            fill="none"
            stroke="#eee"
            strokeWidth="12"
          />
          {/* 进度圆环 */}
          <circle
            cx="64"
            cy="64"
            r="54"
            fill="none"
            stroke="#82ca9d"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${(2 * Math.PI * 54 * percentage) / 100} ${2 * Math.PI * 54}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{Math.round(value)}</span>
          <span className="text-sm text-gray-500">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default function GPUDashboard() {
  const [gpuData, setGpuData] = useState(null); // 当前GPU数据
  const [historicalData, setHistoricalData] = useState([]); // 历史数据

  useEffect(() => {
    // 定义获取GPU数据的函数
    const fetchGPUStats = async () => {
      try {
        const response = await fetch("http://119.255.238.247:8000/api/gpu-stats");
        const data = await response.json();

        if (data.error) {
          console.error("Error fetching GPU data:", data.error);
        } else {
          // 更新当前 GPU 数据
          setGpuData(data);

          // 更新历史数据
          setHistoricalData((prev) => {
            const newHistory = [...prev, { ...data, timestamp: Date.now() }];
            return newHistory.slice(-30); // 保留最近50条数据
          });
        }
      } catch (error) {
        console.error("Failed to fetch GPU stats:", error);
      }
    };

    // 每隔5秒钟请求一次GPU数据
    const intervalId = setInterval(fetchGPUStats, 1000);

    // 清理定时器
    return () => clearInterval(intervalId);
  }, []);

  // 如果数据还没有加载完成，则显示加载提示
  if (!gpuData) return <div>Loading...</div>;

  return (
    <div className="w-full p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">GPU 监控面板</h1>

      {/* 实时利用率和温度曲线图 */}
    
      {/* <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">GPU 利用率和温度趋势</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                type="number"
                domain={["auto", "auto"]}
                tickFormatter={(time) => new Date(time).toLocaleTimeString()}
              />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value, name) => {
                  // 根据 `name` 值来显示正确的单位和描述
                  if (name === "temperature") {
                    return [`${value.toFixed(1)}°C`, "温度"];
                  } else if (name === "utilization") {
                    return [`${value.toFixed(1)}%`, "GPU利用率"];
                  }
                  return value;
                }}
                labelFormatter={(label) => new Date(label).toLocaleTimeString()}
              />
              <Legend />
              {/* GPU利用率曲线，蓝色 
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="utilization"
                stroke="#8884d8"
                name="GPU利用率" // 正确的名字
              />
              {/* 温度曲线，橙色 *
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="temperature"
                stroke="#ff7300"
                name="温度" // 修正了名称，表示温度
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}


      {/* 内存使用量条形图 */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">显存使用情况</h2>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[gpuData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, gpuData.memory_total]} />
              <Tooltip formatter={(value) => `${(value).toFixed(0)}MB`} />
              <Legend />
              <Bar dataKey="memory_used" fill="#82ca9d" name="已用显存" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 功率和风扇速度仪表盘 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">功率使用</h2>
          <div className="h-48">
            <GaugeChart
              value={gpuData.power_usage}
              title="瓦特"
              max={gpuData.power_limit}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">风扇转速</h2>
          <div className="h-48">
            <GaugeChart value={gpuData.fan_speed} title="%" />
          </div>
        </div>
      </div>
    </div>
  );
}
