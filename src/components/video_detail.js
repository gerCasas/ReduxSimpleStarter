import React from 'react';

const VideoDetail = ({video}) => {

  //si el video viene vacio entonces lo validamos y regresamos loading
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // ES5 sintax
  // const url = 'https://www.youtube.com/embed/' + videoId;
  // ES6 sintax
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
