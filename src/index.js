import { mainPage } from './page-loading';
import './style.css';

const container = document.getElementById('content');

//Create header container
let headerContainer = document.createElement("div");

//Create tab container
let tabContainer = document.createElement("div");

//Create content container
let contentContainer = document.createElement("div");

//Create and append header
let header = document.createElement("h1");
header.textContent = "Michael's Ristorante Italiano";
headerContainer.appendChild(header);

//Create tabs
let homeTab = document.createElement("button");
homeTab.textContent = "HOME";
homeTab.addEventListener("click", homePage);
tabContainer.appendChild(homeTab).className = "home";

//Create menu tab
let menuTab = document.createElement("button");
menuTab.textContent = "MENU";
menuTab.addEventListener("click", menuPage);
tabContainer.appendChild(menuTab).className = "menu";

//Create about tab
let aboutTab = document.createElement("button");
aboutTab.textContent = "ABOUT";
aboutTab.addEventListener("click", aboutPage);
tabContainer.appendChild(aboutTab).className = "about";

//Append header
headerContainer.appendChild(tabContainer).className = "tabContainer";
container.appendChild(headerContainer).className = "headerContainer";
 
//Append main content
container.appendChild(contentContainer).className = "contentContainer";

//Load homepage
mainPage();

//Function to load home page
function homePage() {
    removeAllChildNodes(contentContainer);
    mainPage();
}

//Function to load home page
function menuPage () {
    removeAllChildNodes(contentContainer);
}

//Function to load home page
function aboutPage(){
    removeAllChildNodes(contentContainer);
}

//Function to remove all child nodes
function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}