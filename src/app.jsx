import React from "react";
//components
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Footer from "./components/footer/footer";
import Experience from "./components/experience/experience";


function WebContent() {
    return (
        <>
            <div className="bg-circle1"/>
            <div className="bg-circle2"/>
            <Header/>
            <Navbar/>
            <Home/>
            <About/>
            <Members/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default WebContent;

