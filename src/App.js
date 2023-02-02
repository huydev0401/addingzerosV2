import BackToTop from "./components/BackToTop";
import Benefit from "./components/Benefit";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeadCoach from "./components/HeadCoach";
import Header from "./components/Header";
import Hero from "./components/Hero";
import However from "./components/However";
import PopupCoach from "./components/PopupCoach";
import Real from "./components/Real";
import Register from "./components/Register";
import Who from "./components/Who";
import { PopupProvider } from "./contexts/popupContext";
import "aos/dist/aos.css";
import ButtonRegister from "./components/ButtonRegister";

function App() {
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <Real></Real>
        <However></However>
        <HeadCoach></HeadCoach>
        <Who></Who>
        {/* <Benefit></Benefit> */}
        <Content></Content>
        <Register></Register>
        <Gallery></Gallery>
        <Footer></Footer>
        <PopupCoach></PopupCoach>
        <BackToTop></BackToTop>
        <ButtonRegister></ButtonRegister>
      </PopupProvider>
    </>
  );
}

export default App;
