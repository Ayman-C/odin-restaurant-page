import './style.css';
import './page_load.js';
import { loadDataContainer, loadHeader, loadFooter } from './page_load.js';
import {loadHomeTab} from './home.js'
import {loadAboutTab} from './about.js'
import {loadContactTab} from './contact.js'
import {loadMenuTab} from './menu.js'


loadDataContainer();
loadHomeTab()
loadHeader();
loadFooter();

const LoadSelector = {
    "home" : function(){loadHomeTab()},
    "about" : function(){loadAboutTab()},
    "contact" : function(){loadContactTab()},
    "menu" : function(){loadMenuTab()}
    };

const tabList=document.querySelectorAll("li");
const dataContainer=document.querySelector("#dataContainer")

tabList.forEach(tab => tab.addEventListener("click",function(){
    removeAllChildNodes(dataContainer);
    LoadSelector[this.textContent]();
        
}))









function removeAllChildNodes(parentNode){
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild)
    }
}