import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import '../styles/globals.css';

const AudioUploader = ({ audioBlob, recordWavName }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null); // 添加状态来存储上传提示信息

  // 监听录音的音频文件并生成播放链接
  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      const file = new File([audioBlob], recordWavName, { type: "audio/wav" });
      setAudioFile(file);
    }
  }, [audioBlob, recordWavName]);

  // 上传音频文件
  const uploadAudio = async () => {
    if (!audioFile) {
      console.error("没有选择音频文件");
      return;
    }

    // 清空上次的上传状态
    setUploadStatus(null);

    const formData = new FormData();
    formData.append("file", audioFile);

    try {
      const response = await fetch("http://10.204.10.11:8000/api/upload-audio", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setUploadStatus("文件上传成功!"); // 成功时设置提示
        console.log("文件上传成功:", data.message);
      } else {
        setUploadStatus(`文件上传失败: ${data.error}`); // 失败时设置提示
        console.error("文件上传失败:", data.error);
      }
    } catch (error) {
      setUploadStatus(`上传音频时出错: ${error.message}`); // 出现错误时设置提示
      console.error("上传音频时出错:", error);
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">
        上传音频
      </h2>

      {audioFile ? (
        <div>
          <p className="mb-2">当前选择的音频是：{audioFile.name}</p>
          <audio controls src={audioUrl} className="mb-4"></audio>
        </div>
      ) : (
        <p>没有选择音频文件</p>
      )}

      <Button onClick={uploadAudio} disabled={!audioFile}>
        上传音频
      </Button>

      {/* 显示上传状态 */}
      {uploadStatus && (
        <p className="mt-4 text-green-500">{uploadStatus}</p>
      )}
    </div>
  );
};

export default AudioUploader;
