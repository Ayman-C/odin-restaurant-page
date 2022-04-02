import './style.css';
import './page_load.js';
import { loadDataContainer, loadHeader, loadFooter } from './page_load.js';
import {loadHomeTab} from './home.js'
import {loadAboutTab} from './about.js'
import {loadContactTab} from './contact.js'
import {loadMenuTab} from './menu.js'
import { removeTextColor, removeAllChildNodes } from './misc';
const LoadSelector = {
    "home" : function(){loadHomeTab()},
    "about" : function(){loadAboutTab()},
    "contact" : function(){loadContactTab()},
    "menu" : function(){loadMenuTab()}
    };

loadDataContainer();
loadHomeTab()
loadHeader();
document.querySelector("#home").style.color="red"
loadFooter();
tabsNavigation();

function tabsNavigation(){
    const tabList=document.querySelectorAll("li");
    const dataContainer=document.querySelector("#dataContainer")
    tabList.forEach(tab => tab.addEventListener("click",function(){
        removeAllChildNodes(dataContainer);
        removeTextColor(tabList);
        LoadSelector[this.textContent]();
        this.style.color="red";
    }));
}
