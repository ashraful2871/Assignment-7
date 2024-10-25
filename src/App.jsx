import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import PlayerSection from "./PlayerSection";
import "./App.css";

function App() {
  return (
    <>
      <main className="container mx-auto font-sora">
        <Navbar></Navbar>
        <Hero></Hero>
        <PlayerSection></PlayerSection>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
