
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Forme from "./components/Forme";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";

import Shope from "./components/Shop/Shope";
import AboutBage from "./components/About/AboutBage";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import CartBage from "./components/Cart/Caart";


const Layout1 = () => {
  return(
    <>
      <NavBar/>
      <Outlet /> 
      <Forme/>
      <Footer/>
    </>
  );
};
const Layout2 = () => {
  return(
    <>
      <NavBar/>
      <Outlet /> 
      <Footer/>
    </>
  );
};


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
<Route>
      <Route element={<Layout1  />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shope />} />
        <Route path="/about" element={<AboutBage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> 

      </Route>
  <Route element={<Layout2/>}>
    <Route path="/cart" element={<CartBage />} />
  </Route>
</Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
