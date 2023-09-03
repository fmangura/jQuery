$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!");
});

$('article img').addClass('image-center');
$('article').find('p').last().remove();

// let random = Math.floor(Math.random() * 100);
$('#title').css('font-size', Math.floor(Math.random() * 100));

// $('li').after(`<li>${random}</li>`);

$('aside')
.empty()
.append($("<p>", {text: "Sorry about that list :("}));

$('input').on('click', function(){
let r = $('input').eq(0).val();
let g = $('input').eq(1).val();
let b = $('input').eq(2).val();

$('body').css('background-color', `rgb(${r},${g},${b})`);

})

$('img').on('click', function(){
    $(this).remove();
})
// $('body').css('background-color', 'rgb(,0,255)');


