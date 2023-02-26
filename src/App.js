import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import About from "./pages/About";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
