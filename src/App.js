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


function App() {
    return (
        <>
            <div className="App">
                <div className="App_wrapper">
                    <Dashboard/>
                </div>
            </div>
        </>
    );
}

export default App;
