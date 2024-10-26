import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./App.css";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.warn("you can only select up to 6 player!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: bounce,
      });
      return;
    }
    const isExist = selectPlayer.find(
      (prevPlayer) => prevPlayer.playerId === info.playerId
    );
    if (isExist) {
      toast.error("player already added", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: bounce,
      });
      return;
    }
    handleReducePrice(info.biddingPrice);
    addPlayerQueue(info);
  };

  const handleFreeCoin = (number) => {
    toast.success("reword claim successful", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
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
      toast.error("Not enough balance !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
      return;
    }
    const isExist = selectPlayer.find(
      (prevPlayer) => prevPlayer.playerId === player.playerId
    );
    if (!isExist) {
      toast.success(`${player.name} selected successfully`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
      setSelectPlayer([...selectPlayer, player]);
    }
  };

  //handle remove player from selected player
  const handleRemovePlayer = (id) => {
    //remove from want to remove player
    toast.warn("player removed", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
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
      </main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
