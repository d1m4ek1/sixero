import React from "react";
import "./Music.css";
import OneWidget from "./MusicWidget/OneWidget/OneWidget";
import TwoWidget from "./MusicWidget/TwoWidget/TwoWidget";

const Music = (props) => {
  return (
    <div className="content_music">
      <div className="content_music__title">
        <p>MUSIC</p>
      </div>
      <div className="content_music__block">
      <div className="MiniLoading">
        <hr className="MiniLoading_Line MiniLoading_lighting" />
      </div>
        <div className="content_music__playlists">
          <OneWidget />
          <TwoWidget />
        </div>
      </div>
    </div>
  );
};

export default Music;
