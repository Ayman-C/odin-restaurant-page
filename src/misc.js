export function createImage(myImage,myClass,myAlt) {
    const imgElement=document.createElement('img');
    imgElement.src=myImage;
    imgElement.classList.add(myClass);
    imgElement.alt=myAlt;
    //const divElement=document.createElement('div');
    //divElement.id=`#${myClass}`
    //divElement.appendChild(imgElement)
    return imgElement
}
export function createTextContent(myText,myClass) {
    const textElement=document.createElement('div');
    textElement.textContent=myText;
    textElement.classList.add(myClass);
    return textElement
}

export function appendElement(element,myContainerId) {
    const Element=document.querySelector(myContainerId);
    Element.append(element);
}
