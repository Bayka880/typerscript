import { JSXElementConstructor, ReactElement } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Adduser from "./components/Adduser";
import { Route, Routes } from "react-router-dom";
function App(): ReactElement<any, string | JSXElementConstructor<any>> {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/User" element={<Customer />}></Route>
        <Route path="/Adduser" element={<Adduser />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
