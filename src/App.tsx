import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
// import './App.css'

function App() {
  return (
    <>
      <ScrollToTop>
        <>
          <Hero />
          <Guide />
          <Properties />
          <Details />
          <GetStarted />
          <Footer />
        </>
      </ScrollToTop>
    </>
  );
}

export default App;
