import React, {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import './style.css';
import WebContent from './app';
import Preloader from "./components/Preloader/Preloader";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader/>}>

            <WebContent/>

        </Suspense>
    </React.StrictMode>
);

const toggle = document.querySelector('.hover-show');

console.log("toggle", document.querySelector('.hover-show'))

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        changeActive();

    icon.classList.add('active-nav');
  });
});

function changeActive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}

