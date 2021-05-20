import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div className="wrap">
        <h1>Hi!</h1>
        <ul>
          <li>Clean your hands often</li>
          <li>Cough or sneeze in your bent elbow - not your hands!</li>
          <li>Limit social gatherings and time spent in crowded places</li>
          <li>Clean and disinfect frequently touched objects and surfaces</li>
        </ul>
        <div className="video">
          <iframe width="350" height="300" src="https://www.youtube.com/embed/xVu_I6WCsto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}
