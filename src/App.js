import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Deck from "./Routes/Deck/Deck";
import LeaderBoards from "./Routes/LeaderBoards/LeaderBoards";
import Profile from "./Routes/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ScrollTop from "./ScrollToTop";
import TopButton from "./Components/Button/TopButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollTop />
      <TopButton />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/deck" exact={true} element={<Deck />} />
        <Route path="/leaderboards" exact={true} element={<LeaderBoards />} />
        <Route path="/profile" exact={true} element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
