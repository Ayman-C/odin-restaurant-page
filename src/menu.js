import myImage from "../src/img/menu_side_alley.jpg"
import myImageTwo from "../src/img/menu.jpg"
import { createImage ,appendElement ,createTextContent} from "./misc"

export function loadMenuTab() {
    //const imgElement=createImage("../src/img/menu_side_alley.jpg","menuImage","Japanese food display");
    const imgElement=createImage(myImage,"menuImage","Japanese food display");
    appendElement(imgElement,"#dataContainer");
    const imgMenuElement=createImage(myImageTwo,"menuImage","Restaurant food menu");
    appendElement(imgMenuElement,"#dataContainer");
}








