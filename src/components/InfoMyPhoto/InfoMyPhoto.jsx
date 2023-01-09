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
    boxShadow: "3px 3px 31.5px 11.5px #6b6b6b",


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
