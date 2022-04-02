// const menuText="Miam miam"

import { createImage ,appendElement ,createTextContent} from "./misc"

export function loadMenuTab() {
    const imgElement=createImage("../src/img/menu_side_alley.jpg","menuImage","Japanese food display");
    appendElement(imgElement,"#dataContainer");
    const imgMenuElement=createImage("../src/img/menu.jpg","menuImage","Restaurant food menu");
    appendElement(imgMenuElement,"#dataContainer");
    // const textElement=createTextContent(menuText,"menuText")
    // appendElement(textElement,"#dataContainer");
}








