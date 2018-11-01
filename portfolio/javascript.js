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

       onPage();

       function onPage() {
           let currentPage = document.getElementById("logo");
           currentPage.style.backgroundColor = "#0C6B3B"
           currentPage.style.color = "white";
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