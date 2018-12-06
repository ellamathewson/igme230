$(".mainmenu").click(function() {
    $(this).next(".submenu").slideToggle();
});


let file = ("article0.txt");
 $("article").load(file);

/* https://stackoverflow.com/questions/15262025/jquery-change-content-when-radio-button-selected 
*/
/* Grabs form, if it changes */
$('input[name="content"]').on('change', function(){
    /* if the value of the form changes to article1.txt, display that file */
    if ($(this).val()=='article1.txt') {
        $("article").load('article1.txt');
        
    } else  {
        /* otherwise display the second article */
        $("article").load('article2.txt');
    }
});


let numClick = 0;

document.getElementById('clickme').onclick = function() {
    numClick += 1;
    document.getElementById('count').innerHTML = numClick;
}