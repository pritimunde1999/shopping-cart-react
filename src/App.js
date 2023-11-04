import React,{useState} from "react";
import GetData from "./Components/GetData";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () =>{

   
    
    return(
        <div>
            <Navbar />
            <ToastContainer></ToastContainer>
           <Routes>
              <Route path="/" element=<GetData /> />
              <Route path="/cart" element=<Cart />  />
           </Routes>
          
           
        </div>
    )
}

export default App;