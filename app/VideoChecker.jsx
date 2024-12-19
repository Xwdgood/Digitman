import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const VideoChecker = ({ videoUrl, isLoading }) => {
  const [message, setMessage] = useState("视频未生成");

  useEffect(() => {
    if (isLoading) {
      setMessage("视频生成中，请稍候...");
    } else if (videoUrl) {
      setMessage("视频生成成功！");
    }
  }, [isLoading, videoUrl]);

  return (
    <div>
      {/* <h2 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">视频生成状态</h2> */}
      <p className="text-xl ml-[100px] font-medium text-gray-700 p-2 rounded-lg block mb-4">{message}</p>

      {/* 如果视频生成成功，则显示视频预览 */}
      {videoUrl && !isLoading && (
        <div >
          {/* <h3 className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4">生成的视频：</h3> */}
          <video width="600" className="ml-[80px]" controls style={{ marginTop: '10px' }}>
            <source src={videoUrl} type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
          {/* <p className="text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4"><strong>视频 URL:</strong> {videoUrl}</p> */}
        </div>
      )}
    </div>
  );
};

VideoChecker.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,  // 传递 API 调用状态，判断是否处于加载中
};

export default VideoChecker;
