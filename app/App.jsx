import React, { useState } from "react";
import AudioRecorder from './AudioRecorder';  // 导入 AudioRecorder 组件
import UploadAudioPictureFile from './UploadAudioPictureFile';  // 导入 UploadAudioPictureFile 组件
import TextToSpeech from './TextToSpeech';    // 导入 TextToSpeech 组件
import AudioUploader from "./AudioUploader";
import CallGradioApi from './CallGradioAPI';  // 导入 CallGradioApi 组件
import VideoChecker from './VideoChecker';  // 引入 VideoChecker 组件

function App() {
  const [audioUrl, setAudioUrl] = useState("");  // 用于存储生成的音频URL
  const [audioName, setAudioName] = useState("");  // 用于存储音频文件名
  const [imageName, setImageName] = useState("");  // 用于存储图片文件名
  const [startChecking, setStartChecking] = useState(false);  // 控制视频生成检查的开始

  // 当音频生成成功时，更新 audioUrl 和 audioName
  const handleAudioGenerated = (url, fileName) => {
    setAudioUrl(url);  // 更新生成的音频URL
    setAudioName(fileName);  // 更新音频文件名
  };

  // 当图片文件名更新时，设置 imageName
  const handleImageNameGenerated = (name) => {
    console.log("Image name received from child:", name);
    setImageName(name);  // 你可以在父组件中保存 imageName
  };

  // 当点击 "调用 Gradio API" 按钮时，发送请求
  const handleCallGradioApi = async () => {
    // 检查 audioName 和 imageName 是否已经准备好
    if (audioName && imageName) {
      const params = new URLSearchParams();
      params.append("audio_name", audioName);  // 添加音频文件名
      params.append("image_name", imageName);  // 添加图片文件名

      try {
        const response = await fetch(`http://localhost:8000/api/call-gradio-api?${params.toString()}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Gradio API Response:", result);  // 打印返回结果
          // 一旦调用成功，开始检查视频是否生成
          setStartChecking(true);
        } else {
          const errorData = await response.json();
          console.error("API Error:", errorData);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    } else {
      console.error("Both audioName and imageName are required.");
    }
  };

  console.log("audioName:", audioName);  // 打印音频名称
  console.log("imageName:", imageName);  // 打印图片名称

  return (
    <div className="App">
      <h1>音频录制与上传应用</h1>
      <p>请念出录音文本：我正在调试前端系统</p>

      {/* 录音功能 */}
      <AudioRecorder />  {/* 使用 AudioRecorder 组件 */}
      <AudioUploader />  {/* 使用 AudioUploader 组件 */}

      {/* 文本转语音功能 */}
      <TextToSpeech onAudioGenerated={handleAudioGenerated} />  {/* 使用 TextToSpeech 组件 */}
      
      {/* 上传功能 */}
      {audioUrl && (
        <UploadAudioPictureFile 
          audioUrl={audioUrl} 
          onImageNameGenerated={handleImageNameGenerated}  // 传递回调函数
        /> 
      )}

      {/* 调用 Gradio API 功能 */}
      <button onClick={handleCallGradioApi}>调用 Gradio API</button>

      {/* 引入 VideoChecker 组件 */}
      <VideoChecker startChecking={startChecking} audioName={audioName} />
    </div>
  );
}

export default App;
