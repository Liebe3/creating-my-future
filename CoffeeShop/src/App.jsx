import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BackgroundIMG from "./components/BackgroundIMG";
import Maincomponents from "./components/Maincomponents";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
// import Cart from "./pages/Cart/Cart"
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/BackgroundIMG" element={<BackgroundIMG />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
