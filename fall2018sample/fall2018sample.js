/* Don't use <script> tags in a linked js file! */

$(".menuitem").click(function() {
    $(".submenu").slideToggle();
});

let name = ("content1.txt");
//$("#content").val(name);
$("#content").load(name);