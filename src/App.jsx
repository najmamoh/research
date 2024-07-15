import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Quill from "./components/quill";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footre";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} /> */}

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Header/>} />
      <Route path="/services" element={<Services  />} />
      </Routes>   
         {/* <About data={landingPageData.About} /> */}
<Footer/>
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
      {/* <Quill data={landingPageData.Quill} /> */}

    </div>
  );
};

export default App;
