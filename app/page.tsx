"use client";  // 确保客户端渲染

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useState } from "react";
import AudioRecorder from './AudioRecorder';
import AudioUploader from "./AudioUploader";
import Dashboard from './Dashboard'; // 导入仪表盘组件
import TextToSpeech from './TextToSpeech';
import UploadAudioPictureFile from './UploadAudioPictureFile';
import VideoChecker from './VideoChecker';

export default function Home() {
  const generateFileName = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `recorded_audio_${year}${month}${day}_${hours}${minutes}${now.getMilliseconds()}.wav`;  // Add milliseconds for uniqueness
  };

  const [audioUrl, setAudioUrl] = useState("");
  const [audioName, setAudioName] = useState("");
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordWavName, setRecordWavName] = useState(generateFileName()); // Use dynamic file name

  const handleAudioGenerated = (url, fileName) => {
    setAudioUrl(url);
    setAudioName(fileName);
  };

  const handleImageNameGenerated = (name) => {
    setImageName(name);
  };

  const handleRecordingComplete = (blob, fileName) => {
    setAudioBlob(blob);
    setAudioName(fileName); // 传递文件名给父组件
  };

  const handleCallGradioApi = async () => {
    if (!audioName || !imageName) {
      console.error("Both audioName and imageName are required.");
      return;
    }

    setLoading(true);

    const params = new URLSearchParams();
    params.append("audio_name", audioName);
    params.append("image_name", imageName);

    try {
      const response = await fetch(`http://localhost:8000/api/call-gradio-api?${params.toString()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Gradio API Request Sent");
        const videoGeneratedUrl = `http://119.255.238.247:1107/generated_audio_${audioName.match(/(\d{8}_\d{4})/)[0]}_sig.mp4`;
        setVideoUrl(videoGeneratedUrl);
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setLoading(false);  // 请求完成后停止 loading
    }
  };

  return (
    <div className="App">
      <div className="mb-40 flex flex-col items-center pt-6 text-center md:flex-row md:items-start md:text-left lg:grow mt-20">
        <div className="md:w-1/2">
          <h1 className="mb-5 items-center text-5xl text-gray-900 sm:text-6xl">Digitman Generatation System</h1>
          <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
            Digitman is a free to use AI tool made with CosyVoice, Echomimic,
            ReactJS and styled with Tailwind CSS
          </p>
          <div className="flex justify-center">
            <a
              href="#section-1"
              className="mt-2 inline-flex items-center rounded-lg border bg-gray-900 px-5 py-3 font-medium text-white transition duration-500 ease-in-out"
            >
              <span className="justify-center">开始创造</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <Image
            className="ml-24 w-full md:ml-1 max-w-lg"
            alt="iPhone-12"
            src="/color2-removebg-preview.png"
            width={320}
            height={320}
          />
        </div>
      </div>
      <section className="text-gray-900">
        <p id="section-1">
          <span className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">
            请按下录音按钮并念出下面的文本：
          </span>
          <span className="text-2xl font-bold text-blue-600 bg-yellow-300 p-2 rounded-lg shadow-md">
            我正在记录声音模版
          </span>
        </p>

        <AudioRecorder 
          recordWavName={recordWavName} 
          onRecordingComplete={handleRecordingComplete} 
          setRecordWavName={setRecordWavName} // Add the function to update file name
        />
        {audioBlob && <AudioUploader audioBlob={audioBlob} recordWavName={recordWavName} />}

        <TextToSpeech onAudioGenerated={handleAudioGenerated} />

        {audioUrl && (
          <UploadAudioPictureFile
            audioUrl={audioUrl}
            onImageNameGenerated={handleImageNameGenerated}
          />
        )}

        <Button onClick={handleCallGradioApi} disabled={loading}>
          {loading ? "正在生成..." : "调用 Gradio API"}
        </Button>

        {videoUrl && (
          <VideoChecker videoUrl={videoUrl} isLoading={loading} />  
        )}

        {/* 在页面底部添加仪表盘 */}
        <Dashboard />
      </section>
    </div>
  );
}