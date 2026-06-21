import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";
import BlogsPage from "./screens/BlogsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;