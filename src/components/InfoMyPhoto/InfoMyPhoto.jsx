// React
import React from 'react';
// image
import logo from '../../image/firstpage/main_bg_my_photo.jpg'

//MUI

const styleComponents = {
    background: "red",
    /*width: "100%",*/
    height: "40%",
    borderRadius: "20px",
    margin: "5%",
    /*backgroundColor:"#99D4D2",*/
    boxShadow: "0 0 32px 7px #4bada8",

}

const styleComponentsLogo = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "20px",

}

function InfoMyPhoto() {
    return (
        <div style={styleComponents}>
            <img src={logo} style={styleComponentsLogo} alt="MyPhoto" />

        </div>
    );
}

export default InfoMyPhoto;
