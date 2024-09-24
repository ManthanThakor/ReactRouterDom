import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Address from "./components/contactComponents/Address";
import Contact from "./components/contactComponents/Contact";
import Products from "./components/DynamicRoute/Products";
import ProductDetails from "./components/DynamicRoute/ProductDetails";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="details" element={<Details />} />
        <Route path="Contact us" element={<ContactUs />}>
          <Route path="address" element={<Address />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* The nested route's element will render here */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
