import React from "react";
import "./Map.css";
import { useInView } from "react-intersection-observer";

const Map = ({ flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
  
      return (
        <>
          <div className="divider--container" id="map"><span className="divider" tabIndex={25}>Freedges locations 🇮🇸</span></div>
          <iframe className="slider__map" src="https://www.google.com/maps/d/embed?mid=1qXdtLJj7KMNMWCSDpKUxLLUc5jBNiBE&ehbc=2E312F" width="640" height="480" aria-hidden="false" tabIndex={26}></iframe>
        </>
      );
    
  };

  return (
    <div className={inView ? "map-slider map-slider--zoom" : "map-slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Map;
