/*


    HOME PAGE


*/

/* Code based off of tutorial on w3 Schools:
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
*/
var myIndex = 0;
slideshow();

function slideshow() {
    //grabs the slideshow 
    var images = document.getElementsByClassName("slideShow");
    //loop to remove the images from the HTML
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    //increases variable
    myIndex++;
    //if variable is greater than number of images, resets slideshow to beginning
    if (myIndex > images.length) {
        myIndex = 1
    }
    //sets the display of the current image to block, shows image on screen
    images[myIndex - 1].style.display = 'block';
    //Changes image every 3 seconds
    setTimeout(slideshow, 3000);
}

function dropdown() {
    document.getElementById("projDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.navLink')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
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
