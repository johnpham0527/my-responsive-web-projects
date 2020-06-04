"use strict";

(function () {
    console.log("Hello world")
    let programsContainer = document.querySelector("#programs-container");
    //console.log(programsContainer.children[0].children[0].innerText);
    let sectionHeadings = programsContainer.children;
    //console.log(sectionHeadings);
    for (let i = 0; i < sectionHeadings.length; i++) {
        console.log(sectionHeadings[i].children[0].innerText);
    }
})();