/* Don't use <script> tags in a linked js file! */

$(".menuitem").click(function() {
    $(".submenu").slideToggle();
});

let name = ("content1.txt");
$("#choose-content").val(name);
$("#content").load(name);

$("#choose-content").change(function() {
    name = $(this).val();
    $("#content").load(name);
})