import { useState } from "react";
import Home from "./Components/Home/home";
import Head from "./Components/Head/Head";
import Footer from "./Components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Head />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
