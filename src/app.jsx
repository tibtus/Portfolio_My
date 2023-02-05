import React from "react";
//components
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Footer from "./components/footer/footer";
//MyContext
import MyContext, {MyProvider} from "./context/context";

const ChildComponent = ({children}) => (
    <MyContext.Consumer>
        {context => (
            <div>
                {children(context)}
            </div>
        )}
    </MyContext.Consumer>
);

function WebContent() {
    return (

        <MyProvider>
            <ChildComponent>
                {context => (
                    <React.Fragment>
                        <div className="bg-circle1"/>
                        <div className="bg-circle2"/>
                        <Header/>
                        <Navbar/>
                        <Home/>
                        <About/>
                        <Members/>
                        <Contact/>
                        <Footer/>
                    </React.Fragment>
                )}
            </ChildComponent>
        </MyProvider>

        /*    <MyProvider>
                <ChildComponent>
                    {context => (
                        <React.Fragment>
                            <div className="bg-circle1"/>
                            <div className="bg-circle2"/>
                            <Header/>
                            <Navbar/>
                            <Home/>

                            <About/>
                            <Members/>
                            <Contact/>
                            <Footer/>
                        </React.Fragment>
                    )}
                </ChildComponent>
            </MyProvider>*/

    );
}

export default WebContent;

