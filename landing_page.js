"use strict";

(function () {
    let programsContainer = document.querySelector("#visit-container"); //look for programs-container ID
    let navBar = document.querySelector("#nav-bar");
    let sections = programsContainer.children; //access the HTML collection that contains the sections
    for (let i = 0; i < sections.length; i++) {
        let currentString = sections[i].children[0].innerText; //access each section h3 heading text
        let currentStringUnderscores = currentString.replace(" ", "_"); //replace spaces with underscores
        let linkTag = document.createElement("a"); //create link tag
        linkTag.innerHTML = '<a href="#' + currentStringUnderscores + '" class="nav-link">' + currentString + '</a>'; //create HTML for link
        navBar.appendChild(linkTag); //append link tag to the navigation bar
    }
})();