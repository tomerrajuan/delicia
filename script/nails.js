(function() {

    $(document).ready(function() {
        console.log("we are here");
        $('.slick').slick({
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [{
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },


            ]
        });
    });



})();