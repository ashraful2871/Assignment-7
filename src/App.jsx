import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import "./App.css";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    status: "available",
  });

  const handleIsActive = (status) => {
    if (status == "available") {
      setIsActive({
        active: true,
        status: "available",
      });
    } else {
      setIsActive({ active: false, status: "selected" });
    }
  };

  return (
    <>
      <main className="container mx-auto font-sora">
        <Navbar></Navbar>
        <Hero></Hero>
        <ButtonContainer
          isActive={isActive}
          handleIsActive={handleIsActive}
        ></ButtonContainer>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
