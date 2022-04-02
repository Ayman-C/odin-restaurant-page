const contentElement=document.querySelector('#content');
const tabsList=["home","menu","about","contact"];

export function loadDataContainer(){
    const divElement=document.createElement('div');
    divElement.id="dataContainer";
    contentElement.appendChild(divElement);
}
export function loadHeader(){
    const headerElement=document.createElement('header');
    
    const divElement=document.createElement('div');
    divElement.id="title";
    divElement.textContent="Ponyo Sushi";
    headerElement.append(divElement);
    
    const ulElement=document.createElement('ul');
    ulElement.id="tabs";
    createList(ulElement,tabsList)
    headerElement.append(ulElement);

    contentElement.append(headerElement);
}
export function loadFooter() {
    const footerElement=document.createElement('footer');
    footerElement.textContent="  created by Ayman 2022  ";
    contentElement.append(footerElement);
    
    footerElement.append(createLink('https://noahtype.com/onsen-japan-font/'," Font name Onsen"));
    footerElement.append(createLink('https://www.pexels.com/'," & Pictures from Pexels"));
}

function createLink(link,textContent) {
    const linkElement=document.createElement('a');
    linkElement.href=link;
    linkElement.textContent=textContent;
    linkElement.style.textDecoration="none"
    linkElement.style.color="black"
    return linkElement;
}

function createList(ulItem,list){
    list.forEach(item => {
        var liItem=document.createElement("li");
        liItem.id=item;
        liItem.textContent=item;
        ulItem.append(liItem);})

    return ulItem;
}



