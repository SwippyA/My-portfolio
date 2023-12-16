import { useState } from "react";
import Home from "./Components/Home/home";
import Head from "./Components/Head/Head";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
function App() {
  

  return (
    <>
      <div>
        <Head />
        <Home />
        <Menu></Menu>
        <Footer />
      </div>
    </>
  );
}

export default App;
