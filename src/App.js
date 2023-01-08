import { useEffect } from "react"
import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Classes from "./components/Pages/Classes";
import './App.css'
import Trainers from "./components/Pages/Trainers/Trainers";
import Testimonial from "./components/Pages/Testimonial/Testimonial";
import Blog from "./components/Pages/Blog/Blog";
import Footer from "./components/Pages/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Home />
          <About />
          <Classes />
          <Trainers />
          <Testimonial />
          <Blog />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
