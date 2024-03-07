import { Outlet } from "react-router-dom";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js"

import './style/App.css'
import './style/header.css'


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
