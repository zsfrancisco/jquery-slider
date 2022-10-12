$(document).ready(function () {
    const imgItems = $('.slider li').length;
    let imgIndex = 1;
    for (let i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>')
    }
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color': '#cd6e2e'});

    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(previousSlider);

    setInterval(function () {
        nextSlider();
    }, 7000)

    function pagination() {
        const paginationIndex = $(this).index()+1;
        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationIndex +')').fadeIn();
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#cd6e2e'});
        imgIndex = paginationIndex;
    }

    function nextSlider() {
        if (imgIndex >= imgItems) {
            imgIndex = 1;
        } else {
            imgIndex++;
        }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+ imgIndex +')').css({'color': '#cd6e2e'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgIndex +')').fadeIn();
    }

    function previousSlider() {
        if (imgIndex <= 1) {
            imgIndex = 3;
        } else {
            imgIndex--;
        }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+ imgIndex +')').css({'color': '#cd6e2e'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgIndex +')').fadeIn();
    }
});
