import "./App.css";
import community6 from "./assets/community6.jpg";
import frisskapur from "./assets/frisskapur1.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Map from "./components/Map";
import VideoSlider from "./components/Video-slider";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  const navbarLinks = [
    {url:"#", title: "Home" },
    {url:"#about",title: "About" },
    {url:"#donate",title: "Donate" },
    {url:"#map",title: "Map" },
  ];

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={community6} />
      <Slider
        imageSrc={frisskapur}
        title={"About the project"}
      />
       <VideoSlider
        flipped={true}
        title={"How to donate"}
      />
      <Map/>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
