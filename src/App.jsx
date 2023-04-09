import React from "react";
import Navbar from "./components/Navbar";
import "./components/All.css"
import Main from "./components/Main";
import Footer from "./components/Footer";



function App(){
    
    return(
        <>
        
        <Navbar title={"Navbar"} />
        <Main />
        <Main />
        <Main />
        <Footer title={"Footer"} />
        </> 
    )
}
export default App;