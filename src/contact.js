const contactText="blablab lbalblabl ablbalbla blablbalbl abla blbalb  lablablbalbla blablbal blablablb lbla blablb albl abl abl bal blablab lbalblabl ablbalbla blablbalbl abla blbalb  lablablbalbla blablbal blablablb lbla blablb albl abl abl bal"

import { createImage ,appendElement ,createTextContent} from "./misc"

export function loadContactTab() {
    const imgElement=createImage("../src/img/lanterns.jpg","contactImage","Japanese restaurant lanterns");
    appendElement(imgElement,"#dataContainer");
    const textElement=createTextContent(contactText,"contactText")
    const divElement=document.createElement("div");
    divElement.id="contactContainer";
    appendElement(divElement,"#dataContainer");
    appendElement(textElement,"#contactContainer");
    let iframeElement=addGoogleMap();
    divElement.appendChild(iframeElement)
}

function addGoogleMap() {
    let iframeElement=document.createElement("iframe");
    iframeElement.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19852.66047014305!2d-0.041025585525833616!3d51.539215928088375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d18d943431d%3A0xe0bcb0765fbb76a!2sVictoria%20Park!5e0!3m2!1sen!2suk!4v1648892569799!5m2!1sen!2suk";
    iframeElement.allowfullscreen=""; 
    console.log(iframeElement)
    //iframeElement.loading="lazy"; 
    return iframeElement;
}







