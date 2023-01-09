// React
import React from 'react';
// style
import './styles/stylesApp.css'
import './styles/_vars.css';
import './styles/typografy.css';
import './styles/stylesLayers.css';
import './styles/stylesComponets.css';
//MUI
//layers
import Dashboard from "./layers/Dashboard";
import Nav from "./layers/Nav";
import Info from "./layers/Info";


function App() {
    return (
        <>
            <div className="App">
                <div className="App_wrapper">
                    <Nav/>
                    <Dashboard/>
                    <Info/>
                </div>
            </div>
        </>
    );
}

export default App;
