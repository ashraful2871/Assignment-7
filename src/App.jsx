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
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [freeCoin, setFreeCoin] = useState(0);

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

  const handleSelectPlayer = (info) => {
    const newSelectPlayer = [...selectPlayer, info];
    setSelectPlayer(newSelectPlayer);
  };

  const handleFreeCoin = (number) => {
    let increaseNumber = number + freeCoin;
    setFreeCoin(increaseNumber);
  };

  return (
    <>
      <main className="container mx-auto font-sora">
        <Navbar freeCoin={freeCoin}></Navbar>
        <Hero handleFreeCoin={handleFreeCoin}></Hero>
        <ButtonContainer
          isActive={isActive}
          handleIsActive={handleIsActive}
          handleSelectPlayer={handleSelectPlayer}
          selectPlayer={selectPlayer}
        ></ButtonContainer>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
