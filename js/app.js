document.addEventListener("DOMContentLoaded", function () {

    var sliderLeft = document.querySelector(".sliderArrowLeft");
    var sliderRight = document.querySelector(".sliderArrowRight");
    var sliderLis = document.querySelectorAll(".sliderImgs ul li");
    var position = 0;

    sliderLeft.addEventListener("click", function () {
        sliderLis[position].classList.remove("visible");
        position--;
        checkPosition();
        sliderLis[position].classList.add("visible");
    });

    sliderRight.addEventListener("click", function () {
        sliderLis[position].classList.remove("visible");
        position++;
        checkPosition();
        sliderLis[position].classList.add("visible");
    });

    var checkPosition = function () {
        if (position < 0) {
            position = sliderLis.length - 1
        } else if (position >= sliderLis.length) {
            position = 0
        }
    };

    // ================================================

    var chair1 = $(".chair1");
    var chair1Background = chair1.find(".backgroundChair");
    var chair2 = $(".chair2");
    var chair2Background = chair2.find(".backgroundChair");

    $("#firm").click(function(){

        var target = $(".subMenu");
        target.slideToggle();
    });

    chair1.hover(function () {
        chair1Background.slideToggle();
    });

    chair2.hover(function () {
        chair2Background.slideToggle();
    });


    // chair1.addEventListener("mouseover", function () {
    //     chair1Background.style.display = "none";
    // });
    // chair1.addEventListener("mouseout", function () {
    //     chair1Background.style.display = "block";
    // });
    //
    // chair2.addEventListener("mouseover", function () {
    //     chair2Background.style.display = "none";
    // });
    // chair2.addEventListener("mouseout", function () {
    //     chair2Background.style.display = "block";
    // });
});