/* Don't use <script> tags in a linked js file! */

/* when clicking on menu item*/
$(".menuitem").click(function() {
    /* grabs next submenu element (not every submenu elemet) 
    and slides toggle. Without the (this).next(), both submenus
    will slide down at the same time */
    $(this).next(".submenu").slideToggle();
});

/* sets local variable equal to the display that appears on load */
let name = ("content1.txt");
/* Changes the selector box to said content */
$("#choose-content").val(name);
/* Loads the content that is in the local variable*/
$("#content").load(name);

/* grabs the id of the select */
$("#choose-content").change(function() {
    /* changes local variable to the value that the dropdown menu is changed to*/
    name = $(this).val();
    /* loads wahtever content is changed*/
    $("#content").load(name);
});