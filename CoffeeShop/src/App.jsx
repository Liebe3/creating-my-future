import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Cart from "./pages/Cart/Cart"
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
