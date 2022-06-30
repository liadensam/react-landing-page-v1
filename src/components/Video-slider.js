import React from "react";
import "./Video-slider.css";
import { useInView } from "react-intersection-observer";

const VideoSlider = ({ title, description, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
        <iframe className="slider__image" width="640" height="423" src="https://www.visir.is/player/03c2139f-1933-4e5f-bd80-a1e5e330d751-1641411717675" frameborder="0" scrolling="no" seamless="seamless" allowfullscreen></iframe>
          <div className="slider__content">
            <h2 className="slider__title" tabIndex={10} id="donate">{title}</h2>
            <p className="slider__description-video" tabIndex={11}>{description}</p>
            <ul className="video-slider__list" tabIndex={12}>
                <li tabIndex={13}>↝ Put clean, good food</li>
                <li tabIndex={14}>↝ Please no meat, fish, eggs, or dairy (health risk)</li>
                <li tabIndex={15}>↝ Label the food if homemade</li>
            </ul>
            <ul  className="video-slider__list" tabIndex={16}>
            <li className="slider__description-video" tabIndex={17}>👉 Please <span className="span">label</span> homemade food donations with:</li>
                <li tabIndex={18}>↝ <span className="span">donation date</span></li>
                <li tabIndex={19}>↝ <span className="span">name</span> and <span className="span">phone</span> of food donor</li>
                <li tabIndex={20}>↝ <span className="span">allergy</span> hints, if food is not in original package.</li>
                <li className="slider__description-video-note" tabIndex={21}>(tape and pen on the freedge)</li>
                <li><a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdJJJ2zmx1t3cUe1ysFxq-QuVv8mR4nUANEmS_hO24McufKCg/viewform" target="_blind" tabIndex={22}>Fridge status check form.</a></li>
            </ul>
            <p className="slider__description-video sm" tabIndex={23}>Takk. ♡</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h2 className="slider__title" tabIndex={10} id="donate">{title}</h2>
            <p className="slider__description-video" tabIndex={11}>{description}</p>
            <ul className="video-slider__list" tabIndex={12}>
                <li tabIndex={13}>↝ Put clean, good food</li>
                <li tabIndex={14}>↝ Please no meat, fish, eggs, or dairy (health risk)</li>
                <li tabIndex={15}>↝ Label the food if homemade</li>
            </ul>
            <ul  className="video-slider__list" tabIndex={16}>
            <li className="slider__description-video" tabIndex={17}>👉 Please <span className="span">label</span> homemade food donations with:</li>
                <li tabIndex={18}>↝ <span className="span">donation date</span></li>
                <li tabIndex={19}>↝ <span className="span">name</span> and <span className="span">phone</span> of food donor</li>
                <li tabIndex={20}>↝ <span className="span">allergy</span> hints, if food is not in original package.</li>
                <li className="slider__description-video-note" tabIndex={21}>(tape and pen on the freedge)</li>
                <li><a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdJJJ2zmx1t3cUe1ysFxq-QuVv8mR4nUANEmS_hO24McufKCg/viewform" target="_blind" tabIndex={22}>Fridge status check form.</a></li>
            </ul>

            

            <p className="slider__description-video sm" tabIndex={23}>Takk. ♡</p>
          </div>
          <iframe className="slider__image" width="640" height="423" src="https://www.visir.is/player/03c2139f-1933-4e5f-bd80-a1e5e330d751-1641411717675" frameborder="0" scrolling="no" seamless="seamless" allowfullscreen tabIndex={24}></iframe>
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default VideoSlider;
