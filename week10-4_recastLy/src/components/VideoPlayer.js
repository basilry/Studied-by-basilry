import React from 'react';

const VideoPlayer = ({video}) => {
  // 위 파라미터 prop으로 놓고 아래로 해도 통과 됌
  // const {id:{videoId}, snippet:{title}, snippet:{description}} = props.video;
  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
  );
}

export default VideoPlayer;
