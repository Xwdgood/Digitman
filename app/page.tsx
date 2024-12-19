"use client";  // 确保客户端渲染

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useState } from "react";
import AudioRecorderAndUploader from './AudioRecorderAndUploader'; // 新的录音与上传组件
import Dashboard from './Dashboard'; // 导入仪表盘组件
import TextToSpeech from './TextToSpeech';
import UploadAudioPictureFile from './UploadAudioPictureFile';
import VideoChecker from './VideoChecker';
import DynamicChart from './DynamicChart'

export default function Home() {
  const [audioUrl, setAudioUrl] = useState("");
  const [audioName, setAudioName] = useState("");
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordWavName, setRecordWavName] = useState('');  // 动态文件名

  const handleAudioGenerated = (url, fileName) => {
    setAudioUrl(url);
    setAudioName(fileName);
  };

  const handleImageNameGenerated = (name) => {
    setImageName(name);
  };

  const handleRecordingComplete = (blob, fileName) => {
    setAudioBlob(blob);
    setAudioName(fileName);  // 传递文件名给父组件
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
      const response = await fetch(`http://119.255.238.247:8000/api/call-gradio-api?${params.toString()}`, {
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
        

        {/* 用新的 AudioRecorderAndUploader 组件替换旧的录音和上传音频功能 */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4">
        <h1 id="section-1" className="text-3xl font-medium text-gray-700 p-2 rounded-lg block mb-4 ">音频克隆</h1>
        <p >
          <span className="text-xl font-medium text-gray-700 ml-[100px] p-2 rounded-lg block mb-4">
            请按下录音按钮并念出下面的文本：
          </span>
          <span className="text-2xl font-bold text-blue-600 bg-yellow-300 p-2 ml-[250px] rounded-lg shadow-md">
            我正在记录声音模版
          </span>
        </p>
        <AudioRecorderAndUploader onRecordingComplete={handleRecordingComplete} />

        <TextToSpeech onAudioGenerated={handleAudioGenerated} />
        </div>

        {audioUrl && (
          <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4">
            <UploadAudioPictureFile
              audioUrl={audioUrl}
              onImageNameGenerated={handleImageNameGenerated}
            />
            <Button className="ml-[280px] mt-4" onClick={handleCallGradioApi} disabled={loading}>
              {loading ? "正在生成..." : "生成视频"}
            </Button>
            {videoUrl && (
              <VideoChecker videoUrl={videoUrl} isLoading={loading} />
            )}
          </div>
        )}

        {/* 在页面底部添加仪表盘 */}
        <DynamicChart />
        {/* <Dashboard /> */}
      </section>
    </div>
  );
}
