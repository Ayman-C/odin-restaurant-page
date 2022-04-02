//const contentElement=document.querySelector('#content');
import { createImage ,appendElement} from "./misc"

export function loadHomeTab() {
    const imgElement=createImage("../src/img/maki.jpg","mainImage","Japanese food display")
    appendElement(imgElement,"#dataContainer")
}
