import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/homeComponents/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BackgroundIMG from "./components/homeComponents/BackgroundIMG";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ShopContextProvider from "./context/ShopContextProvider";
import Shop from "./pages/Products/Shop";
import Ordernumber from "./pages/OrderNumber/Ordernumber";
function App() {
  return (
    <>
      <div>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/BackgroundIMG" element={<BackgroundIMG />} />
              <Route path="/Products" element={<Shop />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/OrderNumber" element={<Ordernumber />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
