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
  const [historicalData, setHistoricalData] = useState([]); // 保留所有数据
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8000/api/gpu-usage"); // 连接到后端API

    // 监听SSE消息
    eventSource.onmessage = function (event) {
      console.log("Received SSE message:", event.data); // 打印接收到的数据

      try {
        // 去掉data: 前缀并解析数据
        const jsonData = event.data.replace(/^data: /, ''); // 去掉 "data: " 部分
        const data = JSON.parse(jsonData); // 解析数据

        if (data.gpu_usage && data.gpu_usage.length > 0) {
          const gpuData = data.gpu_usage[0];
          const timestamp = Date.now(); // 获取当前时间戳

          // 更新当前数据
          setCurrentData({
            utilization: gpuData.utilization,
            memory_used: gpuData.memory_used,
            memory_total: gpuData.memory_total,
            temperature: gpuData.temperature,
            power_usage: gpuData.power_usage,
            power_limit: gpuData.power_limit,
            fan_speed: gpuData.fan_speed,
            timestamp, // 将时间戳添加到当前数据中
          });

          // 更新历史数据，保留所有历史数据
          setHistoricalData((prev) => {
            const newHistory = [
              ...prev,
              { ...gpuData, timestamp } // 添加时间戳
            ];
            return newHistory; // 不限制数据点的数量
          });
        }
      } catch (error) {
        console.error("Failed to parse SSE data:", error);
      }
    };

    // 错误处理
    eventSource.onerror = function (error) {
      console.error("SSE connection error:", error);
      if (error.event) {
        console.error("Error event details:", error.event);
      }
      eventSource.close();
    };

    return () => {
      eventSource.close(); // 组件卸载时关闭SSE连接
    };
  }, []);

  if (!currentData) return <div>Loading...</div>;

  return (
    <div className="w-full p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">GPU 监控面板</h1>

      {/* 实时利用率和温度曲线图 */}
      <div className="bg-white rounded-lg shadow p-4">
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
                formatter={(value, name) => [
                  `${value.toFixed(1)}${name === "temperature" ? "°C" : "%"}`,
                  name === "temperature" ? "温度" : "GPU利用率",
                ]}
                labelFormatter={(label) => new Date(label).toLocaleTimeString()}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="utilization"
                stroke="#8884d8"
                name="GPU利用率"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="temperature"
                stroke="#ff7300"
                name="温度"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 内存使用量条形图 */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">显存使用情况</h2>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[currentData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, currentData.memory_total]} />
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
              value={currentData.power_usage}
              title="瓦特"
              max={currentData.power_limit}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">风扇转速</h2>
          <div className="h-48">
            <GaugeChart value={currentData.fan_speed} title="%" />
          </div>
        </div>
      </div>
    </div>
  );
}
