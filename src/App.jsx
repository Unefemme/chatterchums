import React from "react";
import Portfolio2 from "./Landingpage_B/Portfolio2";
import Feedback_list from "./Landingpage_B/Feedback_list";
import Stepguide from "./Landingpage_B/Stepguide";
import Features from "./Landingpage_B/Features";

import Hero from "./Landingpage_B/Hero";
import LearningAct from "./Landingpage_B/Learningact";
import ProgressTrack from "./Landingpage_B/Progresstrack";
import SecondHero from "./Landingpage_B/Secondhero";
import Subplans from "./Landingpage_B/Subplans";
import FAQ from "./Landingpage_B/FAQ";
import Contact from "./Landingpage_B/Contact";
import Navbar from "./Landingpage_B/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Features />
      <Hero />
      <LearningAct />
      <ProgressTrack />
      <Portfolio2 />
      <Feedback_list />
      <Stepguide />
      <SecondHero />
      <Subplans />
      <FAQ />

      <Contact />
    </>
  );
}

export default App;
