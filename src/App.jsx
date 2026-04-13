import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Home from "./component/Home";



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about" element={<About/>}/>
         <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;