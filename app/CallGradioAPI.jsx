import { Button } from "@/components/ui/button";
import PropTypes from "prop-types"; // 引入 PropTypes
import React, { useState } from "react";

const CallGradioApi = ({ audioName, imageName, onVideoSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCallApi = async () => {
    if (!audioName || !imageName) {
      setMessage("音频和图片文件名必须提供！");
      return;
    }
  
    setLoading(true);
    setMessage("正在调用 Gradio API...");
  
    // 创建一个超时的 Promise，5分钟 = 300000ms
    const timeout = new Promise((_, reject) => setTimeout(() => reject("请求超时，未收到响应"), 300000));
  
    try {
      // 使用 Promise.race 来确保在 5 分钟内响应或超时
      const response = await Promise.race([
        fetch(
          `http://119.255.238.247:8000/api/call-gradio-api?audio_name=${audioName}&image_name=${imageName}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",  // 禁用缓存
            },
          }
        ),
        timeout, // 超时的 Promise
      ]);
  
      const data = await response.json();
      if (data.success) {
        setMessage("API 调用成功，视频生成中...");
        onVideoSuccess(); // 通知父组件视频生成开始
      } else {
        setMessage(`API 调用失败: ${data.error}`);
        setLoading(false); // 恢复按钮状态
      }
    } catch (error) {
      setMessage(`发生错误: ${error.message}`);
      setLoading(false); // 恢复按钮状态
    }
  };
  

  return (
    <div >
      <Button onClick={handleCallApi} className="mt-4 " disabled={loading}>
        {loading ? "正在生成..." : "调用 Gradio API"}
      </Button>
      {message && <p className="mt-2 text-gray-700">{message}</p>}
    </div>
  );
};

// PropTypes 校验
CallGradioApi.propTypes = {
  audioName: PropTypes.string.isRequired, // 确保 audioName 是字符串且必填
  imageName: PropTypes.string.isRequired, // 确保 imageName 是字符串且必填
  onVideoSuccess: PropTypes.func.isRequired, // 确保回调函数必填
};

export default CallGradioApi;
