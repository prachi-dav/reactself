import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Slider from "./Component/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Form from "./Component/Form";
import Clothing from "./Component/Clothing";
import Dress from "./Component/Dress";
import Knitwear from "./Component/Knitwear";
import Denim from "./Component/Denim";
import Sports from "./Component/Sports";
import Swimwear from "./Component/Swimwear";
import Specialprices from "./Component/Specialprices";
import Membership from "./Component/Membership";


function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout component={<Home />} />} />
        <Route path="/form" element={<Layout component={<Form />} />} />
         <Route path="/clothing" element={<Layout component={<Clothing/>}/>}/>
         <Route path="/dress" element={<Layout component={<Dress/>}/>}/>
         <Route path="/knitwear" element={<Layout component={<Knitwear/>}/>}/>
         <Route path="/denim" element={<Layout component={<Denim/>}/>}/>
         <Route path="/sports" element={<Layout component={<Sports/>}/>}/>
         <Route path="/swimwear" element={<Layout component={<Swimwear/>}/>}/>
         <Route path="/special" element={<Layout component={<Specialprices/>}/>}/>
         <Route path="/membership" element={<Layout component={<Membership/>}/>}/>
        </Routes>
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;
