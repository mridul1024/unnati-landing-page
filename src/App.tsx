import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import EventsPage from "./Components/EventsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Guide />
        <Properties />
        <Details />
        <GetStarted />
        <Footer />
      </>
    ),
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
]);

function App() {
  return (
    <>
      <ScrollToTop>
        <RouterProvider router={router} />
      </ScrollToTop>
    </>
  );
}

export default App;
