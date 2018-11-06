/*


    NAV BAR DROPDOWN


*/
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.hamButton')) {
        let dropdowns = document.getElementById("myDropdown");
            if (dropdowns.classList.contains('show')) {
                dropdowns.classList.remove('show');
            }
        }
    }

/*


    NAV BAR FOR PORJECTS PAGE


*/

/*
https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
*/

function filterProjects(buttonID) {
    let buttonClicked = buttonID;

    console.log(buttonClicked);

    if (buttonClicked == "allLink") {
        loopDisplay("countJS", "js");
        loopDisplay("countDesign", "design");
        loopDisplay("countHTML", "html");
    }
    else if (buttonClicked == "cSharpLink") {
        loopHide("countJS", "js");
        loopHide("countDesign", "design");
        loopHide("countHTML", "html");
    }
    else if (buttonClicked == "designLink") {
        loopHide("countJS", "js");
        loopDisplay("countDesign", "design");
        loopHide("countHTML", "html");
    }
    else if (buttonClicked == "htmlLink") {
        loopHide("countJS", "js");
        loopHide("countDesign", "design");
        loopDisplay("countHTML", "html");
    }
    else if (buttonClicked == "jsLink") {
        loopDisplay("countJS", "js");
        loopHide("countDesign", "design");
        loopHide("countHTML", "html");
    }
}

function loopDisplay(className, projName) {
    //gets all the elements with the same class
    let sameClass = document.getElementsByClassName(className);
    //takes the value of how many elements there are of the class
    for (let i = 1; i <= sameClass.length; i++) {
        //sets a local variable equal to the name plus a value
        //all ids of the projects have a numbered value to them
        let idName = projName + i;
        //sends it to displayProjects
        displayProjects(idName);
    }
}

function loopHide(className, projName) {
    let sameClass = document.getElementsByClassName(className);
    for (let i = 1; i <= sameClass.length; i++) {
        let idName = projName + i;
        hideProjects(idName);
    }
}

function displayProjects(projID) {
    //changes the display of the div 
    document.getElementById(projID).style.display = 'block';
}

function hideProjects(projID) {
    document.getElementById(projID).style.display = 'none';
}
