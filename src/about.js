import { createImage ,appendElement ,createTextContent} from "./misc"
import myImage from "../src/img/about_maki.jpg"



export function loadAboutTab() {
    const aboutText="Our central London Japanese restaurants is tranquil, intimate and exciting spaces to enjoy some of the most beautifully authentic Japanese food London has to offer. We take our customers' love of Japanese cuisine very seriously, creating menus filled with exceptionally well presented and seasonally changing dishes. You are invited to explore the best of Japanese cooking. Whether it's a selection of super fresh sushi or sashimi served at the counter or a banquet of dishes accompanied by elegant sake and wine"
    const imgElement=createImage(myImage,"aboutImage","Japanese food display");
    appendElement(imgElement,"#dataContainer");
    const textElement=createTextContent(aboutText,"aboutText")
    appendElement(textElement,"#dataContainer");
}








