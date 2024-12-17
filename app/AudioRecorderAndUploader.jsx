import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import '../styles/globals.css';

const AudioRecorderAndUploader = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [recordWavName, setRecordWavName] = useState('');

  // 生成新的文件名（基于当前时间戳）
  const generateFileName = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `recorded_audio_${year}${month}${day}_${hours}${minutes}${seconds}.wav`;
  };

  // 开始录音
  const startRecording = () => {
    audioChunksRef.current = []; // 清空上次的音频数据
    setIsRecording(true);

    // 设置新的录音文件名
    const newFileName = generateFileName();
    setRecordWavName(newFileName);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl); // 设置音频 URL 以便播放

          // 创建文件并传递到上传处理
          const file = new File([audioBlob], newFileName, { type: "audio/wav" });
          setAudioFile(file);
          onRecordingComplete(audioBlob, newFileName);

          // 自动上传音频
          uploadAudio(file, newFileName);
        };

        mediaRecorderRef.current.start();
      })
      .catch((err) => {
        console.error("Error accessing audio: ", err);
      });
  };

  // 停止录音并自动上传
  const stopRecording = () => {
    if (mediaRecorderRef.current) {  // 确保 mediaRecorderRef 已初始化
      mediaRecorderRef.current.stop();  // 停止录音
    }
    setIsRecording(false);
  };

  // 上传音频
  const uploadAudio = async (audioFile, fileName) => {
    if (!audioFile) {
      setUploadStatus("没有选择音频文件！");
      return;
    }

    setUploadStatus("上传中...");

    const formData = new FormData();
    formData.append("file", audioFile);

    try {
      const response = await fetch("http://119.255.238.247:8000/api/upload-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`上传失败: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.success) {
        setUploadStatus("文件上传成功!");
        console.log("文件上传成功:", data.message);
      } else {
        setUploadStatus(`文件上传失败: ${data.error}`);
        console.error("文件上传失败:", data.error);
      }
    } catch (error) {
      setUploadStatus(`上传音频时出错: ${error.message}`);
      console.error("上传音频时出错:", error);
    }
  };

  return (
    <div >
      <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">音频录制与上传</h2>

      {/* 开始/停止录音按钮 */}
      <Button onClick={startRecording} className="mr-4" disabled={isRecording}>
        {isRecording ? "录音中..." : "开始录音"}
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        停止录音
      </Button>

      <br />
      
      {/* 播放录音预览 */}
      {audioUrl && (
        <div>
          <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">播放录音：</h3>
          <audio controls src={audioUrl}></audio>
        </div>
      )}

      {/* 显示上传状态 */}
      {uploadStatus && (
        <p className="mt-4 text-green-500">{uploadStatus}</p>
      )}
    </div>
  );
};

export default AudioRecorderAndUploader;
