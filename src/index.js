import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import "./style.css";

function component(){

    document.getElementById('btnHome').addEventListener('click', loadHome);
    document.getElementById('btnMenu').addEventListener('click', loadMenu);
    document.getElementById('btnAbout').addEventListener('click', loadContact);
}

document.addEventListener("DOMContentLoaded", loadHome);

document.body.appendChild(component());