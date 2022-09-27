import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<SingleProducts />} />
          <Route path="*" element={<Error />} />
          <Route path="checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
