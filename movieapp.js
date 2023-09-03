$('form').on('submit', function(e){
    e.preventDefault();
    formHandler();
})


function formHandler() {
    let movieTitle = $('.title').val();
    let movieRating = $('.rating').val();

    $('ul').append('<li>');
    $('li').html(`${movieTitle} Rating: ${movieRating} <button>Del</button>`);
}

$("ul").on("click", "button", function(){
    $(this).parent().remove();
});