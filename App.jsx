import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cartdetails from "./components/Cartdetails";
import { Routes, Route } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartdetails />} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
