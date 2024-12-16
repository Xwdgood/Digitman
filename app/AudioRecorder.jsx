import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver"; // 导入 file-saver 库
import { useRef, useState } from "react";
import '../styles/globals.css'; // 假设你将 Tailwind 样式放在 styles 文件夹中

const AudioRecorder = ({ recordWavName, onRecordingComplete, setRecordWavName }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

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
//管发送旅客将阿拉丁
    // 设置新的录音文件名
    const newFileName = generateFileName();
    setRecordWavName(newFileName);  // 更新文件名

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);

        // 当录音数据可用时，存储到音频数据块中
        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        // 当录音停止时，创建 Blob 并触发下载
        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",  // 音频格式
          });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);  // 设置音频 URL 以便播放

          // 获取动态生成的文件名
          const fileName = newFileName;
          // 触发上传的回调，通知父组件处理文件
          onRecordingComplete(audioBlob, fileName);
          // 自动保存录音文件
          saveAs(audioBlob, fileName);
        };

        mediaRecorderRef.current.start();
      })
      .catch((err) => {
        console.error("Error accessing audio: ", err);
      });
  };

  // 停止录音
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">音频录制</h2>
      <Button onClick={startRecording} className="mr-4" disabled={isRecording}>
        {isRecording ? "录音中..." : "开始录音"}
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        停止录音
      </Button>

      <br />
      {audioUrl && (
        <div>
          <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">播放录音：</h3>
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
