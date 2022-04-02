export function createImage(myImage,myClass,myAlt) {
    const imgElement=document.createElement('img');
    imgElement.src=myImage;
    imgElement.classList.add(myClass);
    imgElement.alt=myAlt;
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

export function removeTextColor(tabList){
    tabList.forEach(tab => tab.style.color="black")
}


export function removeAllChildNodes(parentNode){
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild)
    }
}