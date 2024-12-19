import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import '../styles/globals.css'; 

const UploadAudioPictureFile = ({ audioUrl, onImageNameGenerated }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(""); 
  const videoRef = useRef(null);
  const canvasRef = useRef(null); 
  const [cameraStream, setCameraStream] = useState(null); 
  const [isCameraActive, setIsCameraActive] = useState(false); 

  useEffect(() => {
    if (audioUrl) {
      const audioFileName = audioUrl.split("/").pop();
      const baseFileName = audioFileName.split(".")[0];
      const generatedImageName = `${baseFileName}.jpg`;
      setImageName(generatedImageName);

      if (onImageNameGenerated) {
        onImageNameGenerated(generatedImageName); 
      }
    }
  }, [audioUrl, onImageNameGenerated]);

  const startCamera = async () => {
    try {
      setImage(null); 
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraStream(stream);  
      setIsCameraActive(true);  
    } catch (error) {
      console.error("访问摄像头失败", error);
      setMessage("无法访问摄像头，请检查设备权限。");
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());  
    }
    setIsCameraActive(false);  
  };

  // 修改1: 在拍照完成后自动上传图片
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
        setImage(renamedImage); 
        stopCamera(); 
        handleUpload(renamedImage); // 自动上传拍摄的图片
      });
    }
  };

  // 修改2: 在选择本地图片后自动上传图片
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const renamedImage = new File([file], imageName, { type: file.type });
      setImage(renamedImage); 
      handleUpload(renamedImage); // 自动上传本地图片
    }
  };

  const handleUpload = async (file) => {
    if (!file) {
      setMessage("请确保图片文件已选择！");
      return;
    }

    setLoading(true);
    setMessage("正在上传...");

    const formData = new FormData();
    try {
      formData.append("image_file", file); // 只上传图片

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
    <div>
      <h2 className="text-3xl font-medium text-gray-700 p-2 rounded-lg block mb-4 ">数字人视频生成</h2>

      <div>
        <label htmlFor="imageUploadLocal" className="text-xl font-medium text-gray-700 ml-[100px] p-2 rounded-lg block mb-4" >请根据参考样式与手势选择本地图片或拍照上传:</label>
        <img src="/0003.png" alt="示例图片" className="ml-[200px] w-[250px] h-auto" />
        <Input
          id="imageUploadLocal"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-[400px] h-[40px] border border-black ml-[120px] p-2 rounded-md text-[30px] mt-4"
        />
      </div>

      <div>
        <Button className="mr-4 mt-4 mb-4 ml-[150px]" onClick={startCamera}>启动摄像头</Button>
        {isCameraActive && (
          <Button className="ml-[160px] mb-4" onClick={takePhoto}>拍照</Button>
        )}
        <video
          ref={videoRef}
          width="280"
          height="200"
          autoPlay
          style={{ display: isCameraActive ? 'block' : 'none' }} 
          className="ml-[180px]"
        ></video>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas> 
      </div>

      {image && (
        <div>
          <h3 className="text-xl font-medium ml-[100px] text-gray-700 p-2 rounded-lg block mb-4" >图片已选择：</h3>
          <img className="ml-[180px]" src={URL.createObjectURL(image)} alt="Captured" width="280" />
        </div>
      )}

      {message && <p className="ml-[180px] text-green-500 mt-4">{message}</p>}
    </div>
  );
};

UploadAudioPictureFile.propTypes = {
  audioUrl: PropTypes.string.isRequired, 
  onImageNameGenerated: PropTypes.func, 
};

export default UploadAudioPictureFile;
