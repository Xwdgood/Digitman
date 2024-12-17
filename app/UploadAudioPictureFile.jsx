import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types"; // 导入 PropTypes
import { useEffect, useRef, useState } from "react";
import '../styles/globals.css'; // 假设你将 Tailwind 样式放在 styles 文件夹中




const UploadAudioPictureFile = ({ audioUrl, onImageNameGenerated }) => {
  const [image, setImage] = useState(null);  // 用于存储图片
  const [imageName, setImageName] = useState("");  // 用于存储图片文件名
  const [loading, setLoading] = useState(false);  // 用于显示上传状态
  const [message, setMessage] = useState("");  // 状态信息
  const videoRef = useRef(null);  // 用于显示摄像头视频流
  const canvasRef = useRef(null);  // 用于截图
  const [cameraStream, setCameraStream] = useState(null);  // 用于存储摄像头流

  // 设置图片文件名，假设图片是 jpg 格式
  useEffect(() => {
    if (audioUrl) {
      const audioFileName = audioUrl.split("/").pop();
      const baseFileName = audioFileName.split(".")[0];
      const generatedImageName = `${baseFileName}.jpg`;
      setImageName(generatedImageName);

      // 调用父组件的回调函数，传递图片名称
      if (onImageNameGenerated) {
        onImageNameGenerated(generatedImageName); // 传递图片名称
      }
    }
  }, [audioUrl, onImageNameGenerated]);

  // 启动摄像头并显示视频流
  const startCamera = async () => {
    try {
      // 请求摄像头权限
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraStream(stream);  // 保存摄像头流
    } catch (error) {
      console.error("访问摄像头失败", error);
      setMessage("无法访问摄像头，请检查设备权限。");
    }
  };

  // 停止摄像头
  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());  // 停止所有轨道
    }
  };

  // 拍照功能
  const takePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        const renamedImage = new File([blob], imageName, { type: "image/jpeg" });
        setImage(renamedImage);  // 更新为新的图片文件
        stopCamera();  // 拍照后停止摄像头
      });
    }
  };

  // 选择本地图片
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 使用基于音频文件名生成的图片名称
      const renamedImage = new File([file], imageName, { type: file.type });
      setImage(renamedImage);  // 更新图片文件为新的文件名
    }
  };

  // 上传文件
  const handleUpload = async () => {
    if (!image) {
      setMessage("请确保图片文件已选择！");
      return;
    }

    setLoading(true);
    setMessage("正在上传...");

    const formData = new FormData();

    try {
      // 只上传图片，忽略音频部分
      formData.append("image_file", image); // 上传图片文件

      // 发送上传请求到原来的 API 路径
      const response = await fetch("http://119.255.238.247:8000/api/upload-audio-and-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("文件上传成功！");
      } else {
        setMessage("文件上传失败，请稍后重试！");
      }
    } catch (error) {
      console.error("上传失败：", error);
      setMessage("上传过程中发生了错误！");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4">
      <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4" >上传图片</h2>

      {/* 显示音频文件 */}
      <div>
        {audioUrl && (
          <div>
            <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4" >音频准备好：</h3>
            <p>{audioUrl}</p>
            {/* <audio controls>
              <source src={audioUrl} type="audio/wav" />
              您的浏览器不支持音频播放。
            </audio> */}
          </div>
        )}
      </div>

      {/* 本地图片上传部分 */}
      <div>
        <label htmlFor="imageUploadLocal" className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4" >选择本地图片:</label>
        <Input
          id="imageUploadLocal"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full border border-gray-300 p-2 rounded-md"
        />
        {image && <p className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4" >已选择图片: {imageName}</p>} {/* 显示图片名称 */}
      </div>

      {/* 摄像头显示 */}
      <div>
        <video ref={videoRef} width="300" height="200" autoPlay></video>
        <Button className="mr-4" onClick={startCamera}>启动摄像头</Button>
        <Button onClick={takePhoto}>拍照上传</Button>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </div>

      {/* 显示拍照后的图片 */}
      {image && (
        <div>
          <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4" >拍摄到的图片：</h3>
          <img src={URL.createObjectURL(image)} alt="Captured" width="200" />
        </div>
      )}

      {/* 上传按钮 */}
      <Button onClick={handleUpload} className="mt-4" disabled={loading}>
        {loading ? "上传中..." : "上传"}
      </Button>

      {/* 显示状态信息 */}
      {message && <p>{message}</p>}
    </div>
  );
};

// 为 audioUrl 添加 PropTypes 校验
UploadAudioPictureFile.propTypes = {
  audioUrl: PropTypes.string.isRequired, // 校验 audioUrl 必须是字符串并且是必填的
  onImageNameGenerated: PropTypes.func,  // 添加回调函数的 prop 校验
};

export default UploadAudioPictureFile;
