import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div className="wrap">
        <h1>Hi!</h1>
        <div className="video">
          <video class="video-js">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
            <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </>
  );
}
