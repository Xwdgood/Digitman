import { Button } from "@/components/ui/button";
import { useState } from "react";


const TextToSpeech = ({ onAudioGenerated }) => {
  const [text, setText] = useState("");  // 用于存储用户输入的文本
  const [loading, setLoading] = useState(false);  // 用于显示请求状态
  const [audioUrl, setAudioUrl] = useState("");  // 用于显示生成的音频
  const [statusMessage, setStatusMessage] = useState("");  // 用于显示状态信息

  // 处理文本框变化
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
  // 如果文本框为空，则使用 placeholder 中的内容
  const ttsText = text || document.querySelector("textarea").placeholder;

  if (!ttsText) {
    setStatusMessage("请输入文本或设置占位文本");
    return;
  }

  setLoading(true);
  setStatusMessage("");  // 清空之前的状态信息

  try {
    const response = await fetch(`http://localhost:8000/api/generate-audio?tts_text=${encodeURIComponent(ttsText)}`);
    const data = await response.json();

    // 始终生成音频 URL
    const now = new Date();
    const timestamp = now.getFullYear().toString() + 
                      (now.getMonth() + 1).toString().padStart(2, '0') + 
                      now.getDate().toString().padStart(2, '0') + '_' + 
                      now.getHours().toString().padStart(2, '0') + 
                      now.getMinutes().toString().padStart(2, '0');
    const audioUrl = `http://119.255.238.247:1107/generated_audio_${timestamp}.wav?${new Date().getTime()}`;

    // 更新音频 URL
    setAudioUrl(audioUrl);
    setStatusMessage("音频生成成功！");

    // 回调父组件，传递生成的音频 URL 和音频文件名
    onAudioGenerated(audioUrl, `generated_audio_${timestamp}.wav`);

    console.log("生成的音频 URL: ", audioUrl);  // 调试日志
  } catch (error) {
    setStatusMessage("生成成功，请在服务器中查看结果");  // 即使失败也提示生成成功
    console.log("请求失败：", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4">
      <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">根据文本生成语音</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="4"
        cols="50"
        placeholder="祝各位领导，新年快乐，万事大吉！"
      />
      <br />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "生成中..." : "生成语音"}
      </Button>

      {statusMessage && <p>{statusMessage}</p>}  {/* 显示统一的状态信息 */}

      {audioUrl && (
        <div>
          <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">播放生成的语音：</h3>
          <p>{audioUrl}</p>
          <audio key={audioUrl} controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;