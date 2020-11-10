import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="content_home__main">
      <div className="content_home__title">
        <p className="title_item">INFORMATION</p>
      </div>
      <div className="price">
        <p className="price_title">PRICES:</p>
        <p className="price_text">
          ARTWORK - <span className="money">30$</span>
        </p>
        <p className="price_text">
          BANNER - <span className="money">35$</span>
        </p>
        <p className="price_text">
          LOGO - <span className="money">30$</span> (temporarily unavailable)
        </p>
        <p className="price_text">
          EXCLUSIVE BEAT - <span className="money">50$</span>
        </p>
        <p className="price_text">
          EXCLUSIVE RENDER - <span className="money">50$</span>
        </p>
        <p className="price_text">
          RENDER + COVER ART - <span className="money">70$</span>
        </p>
        <p className="price_text">
          COLLABORATION + COVER ART - <span className="money">70$</span>
        </p>
        <br />
        <p className="price_title">MESSAGE ME:</p>
        <p className="price_text"><span className="yahoo_l">YahooMail</span> sixeromusic@yahoo.com</p>
        <p className="price_text"><span className="sc_l">SoundCloud</span> <a href="https://soundcloud.com/sixerox">https://soundcloud.com/sixerox</a></p>
        <p className="price_text"><span className="ds_l">Discord SIXÉRO#0001</span></p>
        <p className="price_text"><span className="inst_l">Instagram</span> <a href="https://www.instagram.com/sixeromusic/">https://www.instagram.com/sixeromusic/</a></p>
      </div>
    </div>
  );
};

export default Information;
