import GetData from "./Components/GetData";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

const App = () =>{
    return(
        <div>
            <Navbar />
           <Routes>
              <Route path="/" element=<GetData/> />
              <Route path="/cart" element=<Cart/> />

           </Routes>
        </div>
    )
}

export default App;