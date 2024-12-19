import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const DynamicChart = () => {
  const [temperatureData, setTemperatureData] = useState([]); // 存储温度数据
  const [utilizationData, setUtilizationData] = useState([]); // 存储GPU利用率数据
  const [categories, setCategories] = useState([]); // 存储时间轴数据
  const [isVisible, setIsVisible] = useState(true); // 控制窗口是否可见
  const [isMinimized, setIsMinimized] = useState(false); // 控制窗口是否最小化
  const temperatureChartRef = useRef(null); // 温度图表容器
  const utilizationChartRef = useRef(null); // GPU利用率图表容器
  const temperatureChart = useRef(null); // 存储温度图表实例
  const utilizationChart = useRef(null); // 存储GPU利用率图表实例

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  useEffect(() => {
    // 如果小窗最小化了，不初始化echarts图表
    if (isMinimized || !temperatureChartRef.current || !utilizationChartRef.current) return;

    // 只在组件第一次加载时初始化ECharts实例
    if (!temperatureChart.current) {
      temperatureChart.current = echarts.init(temperatureChartRef.current);
    }
    if (!utilizationChart.current) {
      utilizationChart.current = echarts.init(utilizationChartRef.current);
    }

    // 初始化温度图表
    const temperatureOption = {
      title: {
        text: 'GPU工作温度监控'
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
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: categories
      },
      yAxis: {
        type: 'value',
        scale: true,
        name: '实时温度 (°C)',
        max: 70,
        min: 60,
        boundaryGap: [0.2, 0.2]
      },
      series: [
        {
          name: '工作温度',
          type: 'line',
          data: temperatureData,
          color: '#FF6347'  // 设置线条颜色为番茄红
        }
      ]
    };

    // 初始化GPU利用率图表
    const utilizationOption = {
      title: {
        text: 'GPU利用率监控'
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
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: categories
      },
      yAxis: {
        type: 'value',
        scale: true,
        name: 'GPU利用率 (%)',
        max: 5,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      series: [
        {
          name: 'GPU利用率',
          type: 'line',
          data: utilizationData
        }
      ]
    };

    temperatureChart.current.setOption(temperatureOption);
    utilizationChart.current.setOption(utilizationOption);

    // 定义获取GPU数据的函数
    const fetchGPUStatsData = async () => {
      try {
        const response = await fetch("http://119.255.238.247:8000/api/gpu-stats"); // 你的API地址
        const data = await response.json();

        if (data.error) {
          console.error("Error fetching GPU data:", data.error);
        } else {
          const { temperature, utilization } = data;

          // 更新 categories（时间轴）
          const newTime = new Date().toLocaleTimeString().replace(/^\D*/, '');
          setCategories(prevCategories => {
            const newCategories = [...prevCategories, newTime];
            return newCategories.slice(-10); // 保持最近10个时间点
          });

          // 更新温度数据
          setTemperatureData(prev => {
            const newData = [...prev, temperature];
            return newData.slice(-10); // 保持最近10个数据点
          });

          // 更新GPU利用率数据
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
      // 销毁 ECharts 实例，防止内存泄漏
      temperatureChart.current.dispose();
      utilizationChart.current.dispose();
    };
  }, [isMinimized]); // 只在第一次加载时初始化 ECharts 实例

  // 更新图表数据
  useEffect(() => {
    if (isMinimized || !temperatureChart.current || !utilizationChart.current) return;

    // 只更新数据，不重绘整个图表
    if (temperatureData.length) {
      temperatureChart.current.setOption({
        series: [
          { data: temperatureData }
        ]
      });
    }

    if (utilizationData.length) {
      utilizationChart.current.setOption({
        series: [
          { data: utilizationData }
        ]
      });
    }

    // 更新时间轴
    temperatureChart.current.setOption({
      xAxis: {
        data: categories
      }
    });

    utilizationChart.current.setOption({
      xAxis: {
        data: categories
      }
    });
  }, [temperatureData, utilizationData, categories]); // 当 temperatureData, utilizationData 或 categories 更新时更新图表

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
            height: isMinimized ? '50px' : '600px',  // 增加高度来容纳两个图表
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
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
                  x
                </button>
              </div>

              {/* 温度图表 */}
              <div ref={temperatureChartRef} style={{ width: '100%', height: '45%' }}></div>

              {/* GPU利用率图表 */}
              <div ref={utilizationChartRef} style={{ width: '100%', height: '45%' }}></div>
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
