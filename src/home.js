import myImage from "../src/img/maki.jpg"
import { createImage ,appendElement} from "./misc"

export function loadHomeTab() {
    const imgElement=createImage(myImage,"mainImage","Japanese food display")
    appendElement(imgElement,"#dataContainer")
}
