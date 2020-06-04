"use strict";

(function () {
    let programsContainer = document.querySelector("#programs-container"); //look for programs-container ID
    let sections = programsContainer.children; //access the HTML collection that contains the sections
    //console.log(sections);
    for (let i = 0; i < sections.length; i++) {
        let currentString = sections[i].children[0].innerText; //access each section h3 heading text
        let currentStringUnderscores = currentString.replace(" ", "_"); //replace spaces with underscores
        console.log(`<a href="#${currentStringUnderscores}">${currentString}</a>`); //output HTML links
    }
})();