import { useState } from "react";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
