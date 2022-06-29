import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="slider__image"/>
          <div className="slider__content">
            <h2 className="slider__title-about" tabIndex={4} id="about">{title}</h2>
            <p className="slider__description-about" tabIndex={5}>Freedge is a sharing mechanism aiming to reduce food waste and build a stronger community through food sharing. <span className="span">save</span> some delicious food and <span className="span">donate</span> when you have too much of it. It's all <span className="span">free</span>! <br/><br/>Check out the international <em><a className="link" href="https://freedge.org" target="_blank">FREEdge</a></em> movement! We are not alone! ♡</p>
            <p className="slider__description" tabIndex={5}>Also, if you feel like setting your own FREEdge in your surroundings (office, university, library, restaurant, etc.) let us know! We can help you to make it happen! Spread the word. ♡ <br/><br/><a className="link" href="https://www.facebook.com/groups/473406413883265/" target="_blank">More on our Facebook page</a> or contact us by <a className="link" href="mailto:frisskaupur@protonmail.com" target="_blank">📩</a></p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h2 className="slider__title-about" tabIndex={4} id="about">{title}</h2>
            <p className="slider__description-about" tabIndex={5}>Freedge is a sharing mechanism aiming to reduce food waste and build a stronger community through food sharing. <span className="span">save</span> some delicious food and <span className="span">donate</span> when you have too much of it. It's all <span className="span">free</span>! <br/><br/>Check out the international <em><a className="link" href="https://freedge.org" target="_blank">FREEdge</a></em> movement! We are not alone! ♡</p>
            <p className="slider__description" tabIndex={5}>Also, if you feel like setting your own FREEdge in your surroundings (office, university, library, restaurant, etc.) let us know! We can help you to make it happen! Spread the word. ♡<br/><br/><a className="link" href="https://www.facebook.com/groups/473406413883265/" target="_blank">More on our Facebook page</a> or contact us by <a className="link" href="mailto:frisskaupur@protonmail.com" target="_blank">📩</a></p>
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image"/>
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

export default Slider;
