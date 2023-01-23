import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Deck from "./Routes/Deck/Deck";
import LeaderBoards from "./Routes/LeaderBoards/LeaderBoards";
import Profile from "./Routes/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ScrollTop from "./ScrollToTop";
import TopButton from "./Components/Button/TopButton";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";

function App() {
  const [openModal, setOpenModal] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });

    setOpenModal(false);
  };

  useEffect(() => {
    if (appCookies["MODAL_EXPIRES"]) return;
    console.log(appCookies["MODAL_EXPIRES"]);
    setHasCookie(false);
  }, []);

  return (
    <CookiesProvider>
      <BrowserRouter>
        {openModal && !hasCookie && (
          <Modal
            closeModal={() => setOpenModal(false)}
            closeModalUntilExpires={closeModalUntilExpires}
          />
        )}
        <Navbar />
        <ScrollTop />
        <TopButton />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="deck" exact={true} element={<Deck />} />
          <Route path="leaderboards" exact={true} element={<LeaderBoards />} />
          <Route path="profile" exact={true} element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
