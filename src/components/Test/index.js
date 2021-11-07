import React from 'react';
import Video from '../../videos/video.mp4';

const Test = () => {
  return (
    <video autoplay="autoplay" playsinline="" muted="muted" loop="loop" id="video-background">
        <source src={Video} type='video/mp4' />
    </video>
  );

}

export default Test
