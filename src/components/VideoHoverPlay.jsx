// import React, { useState } from "react";

// const VideoHoverPlay = ({ videoUrl }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ position: "relative", width: "300px", height: "200px" }}
//     >
//       <video
//         src={videoUrl}
//         width="100%"
//         height="100%"
//         autoPlay={isHovered}
//         loop
//         muted
//       />
//     </div>
//   );
// };

// export default VideoHoverPlay;

import React, { useEffect, useRef, useState } from "react";

const VideoHoverPlay = ({ videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
      console.log(videoRef.current);
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "480px",
        height: "280px",
        borderRadius: "15px",
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        style={{ borderRadius: "15px" }}
      />
    </div>
  );
};

export default VideoHoverPlay;
