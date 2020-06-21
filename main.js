$(document).ready(function () {
    $('.jumbotron__title').fadeIn(1000);
    AnimateRotate(359);
});
$(window).scroll(function () {
    if ($(window).scrollTop() > ($(window).height()*1.25)) {
        $('.lines__top').slideDown( "slow", () => {
            $('.lines__middle').slideDown("slow", () => {
                $('.lines__bottom').slideDown("slow")
            })
        });
    }
});
function AnimateRotate(angle) {
    var $elem = $('.overlay');
    setInterval(function () {
        $({
            deg: 0
        }).animate({
            deg: angle
        }, {
            duration: 3000,
            step: function (now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg) scale(1.1)'
                });
            }
        });
    }, 3000);
}

