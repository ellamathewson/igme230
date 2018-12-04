/* Don't use <script> tags in a linked js file! */

$(".menuitem").click(function() {
    $(".submenu").slideToggle();
});

let name = ("content1.txt");
$("#content-menu").val(name);
$("#content").load(name);

$("#content-menu").change(function() {
    name = $(this).val();
    $("#content").load(name);
})