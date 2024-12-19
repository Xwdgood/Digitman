import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const DynamicChart = () => {
  const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }
    return res;
  })();

  const categories2 = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(10 - len - 1);
    }
    return res;
  })();

  const [temperatureData, setTemperatureData] = useState([]); // 存储温度数据
  const [utilizationData, setUtilizationData] = useState([]); // 存储GPU利用率数据
  const [isVisible, setIsVisible] = useState(true); // 控制窗口是否可见
  const [isMinimized, setIsMinimized] = useState(false); // 控制窗口是否最小化
  const chartRef = useRef(null); // 使用 useRef 来获取 chart-container

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  useEffect(() => {
    // 如果小窗最小化了，不初始化echarts图表
    if (isMinimized || !chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'GPU状态监控'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: categories
        },
        {
          type: 'category',
          boundaryGap: true,
          data: categories2
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '实时温度 (°C)',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: 'GPU利用率 (%)',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: '工作温度',
          type: 'line',
          data: temperatureData
        },
        {
          name: 'GPU利用率',
          type: 'line',
          data: utilizationData
        }
      ]
    };

    // Set the initial option
    myChart.setOption(option);

    // 定义获取GPU数据的函数
    const fetchGPUStatsData = async () => {
      try {
        const response = await fetch("http://119.255.238.247:8000/api/gpu-stats"); // 你的API地址
        const data = await response.json();

        if (data.error) {
          console.error("Error fetching GPU data:", data.error);
        } else {
          const { temperature, utilization } = data;

          // 只更新温度和利用率数据，不调用 setOption
          setTemperatureData(prev => {
            const newData = [...prev, temperature];
            return newData.slice(-10); // 保持最近10个数据点
          });

          setUtilizationData(prev => {
            const newData = [...prev, utilization];
            return newData.slice(-10); // 保持最近10个数据点
          });
        }
      } catch (error) {
        console.error("Failed to fetch GPU stats:", error);
      }
    };

    // 每隔2.1秒请求一次GPU数据
    const intervalId = setInterval(fetchGPUStatsData, 2100);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
      myChart.dispose(); // 销毁 ECharts 实例，防止内存泄漏
    };
  }, [isMinimized]); // 只监听 isMinimized，避免多次重新渲染

  // 更新图表数据
  useEffect(() => {
    if (isMinimized || !chartRef.current) return;

    const myChart = echarts.init(chartRef.current);
    
    // 只更新数据，不重绘整个图表
    if (temperatureData.length && utilizationData.length) {
      myChart.setOption({
        xAxis: [
          { data: categories },
          { data: categories2 },
        ],
        series: [
          { data: temperatureData },
          { data: utilizationData },
        ]
      });
    }
  }, [temperatureData, utilizationData]); // 当 temperatureData 和 utilizationData 更新时更新图表

  return (
    <div>
      {/* 小窗悬浮框 */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: isMinimized ? '20px' : '20px',
            right: '20px',
            width: isMinimized ? '50px' : '500px',
            height: isMinimized ? '50px' : '400px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 1000,
          }}
        >
          {!isMinimized ? (
            <>
              {/* 控制按钮区 */}
              <div
                style={{
                  padding: '4px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {/* 最小化按钮 */}
                <button
                  onClick={toggleMinimize}
                  style={{
                    marginRight: '10px',
                    padding: '1px 12px',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#e0e0e0')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                >
                  {/* 使用“减号”符号作为最小化按钮 */}
                  -
                </button>

                {/* 关闭按钮 */}
                <button
                  onClick={toggleVisibility}
                  style={{
                    padding: '1px 12px',
                    backgroundColor: '#ff4d4f',
                    border: '1px solid #cc0000',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#e60000')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff4d4f')}
                >
                  {/* 使用“x”符号作为关闭按钮 */}
                  x
                </button>
              </div>

              {/* 图表容器 */}
              <div ref={chartRef} style={{ width: '100%', height: '95%' }}></div>
            </>
          ) : (
            // 最小化后的小图标按钮
            <button onClick={toggleMinimize} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
              还原
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicChart;
