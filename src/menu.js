const menuText="Miam miam"

import { createImage ,appendElement ,createTextContent} from "./misc"

export function loadMenuTab() {
    const imgElement=createImage("../src/img/sushi_display.jpg","aboutImage","Japanese food display");
    appendElement(imgElement,"#dataContainer");
    const textElement=createTextContent(menuText,"menyText")
    appendElement(textElement,"#dataContainer");
}








