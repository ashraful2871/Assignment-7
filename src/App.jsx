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
    if (selectPlayer.length >= 6) {
      alert("you can only select up to 6 player");
      return;
    }
    const isExist = selectPlayer.find(
      (prevPlayer) => prevPlayer.playerId === info.playerId
    );
    if (isExist) {
      alert("player already added");
      return;
    }
    handleReducePrice(info.biddingPrice);
    addPlayerQueue(info);
  };

  const handleFreeCoin = (number) => {
    let increaseNumber = number + freeCoin;
    setFreeCoin(increaseNumber);
  };

  // reduce price when choose player
  const handleReducePrice = (price) => {
    if (freeCoin > 0) {
      setFreeCoin((previousFreeCoin) => previousFreeCoin - price);
    }
  };

  //one player only one time add the selection tab
  const addPlayerQueue = (player) => {
    if (freeCoin === 0) {
      alert("Not enough balance");
      return;
    }
    const isExist = selectPlayer.find(
      (prevPlayer) => prevPlayer.playerId === player.playerId
    );
    if (!isExist) {
      setSelectPlayer([...selectPlayer, player]);
    }
  };

  //handle remove player from selected player
  const handleRemovePlayer = (id) => {
    //remove from want to remove player
    const updatePlayer = selectPlayer.filter(
      (player) => player.playerId !== id
    );
    setSelectPlayer(updatePlayer);
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
          handleRemovePlayer={handleRemovePlayer}
        ></ButtonContainer>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
