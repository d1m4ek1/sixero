import React from "react";

const TwoWidget = () => {
  return (
    <div className="iframe_music">
      <iframe
        className="soundCloud_iframe dd"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1159712011&color=%23141414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};

export default TwoWidget;
