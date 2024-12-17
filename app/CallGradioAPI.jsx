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

    try {
      const response = await fetch(
        `http://119.255.238.247:8000/api/call-gradio-api?audio_name=${audioName}&image_name=${imageName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8">
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
