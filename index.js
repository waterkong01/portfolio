$(document).ready(function(){

    // 탑버튼
    var topbutton = $("#scrollToTopBtn");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            topbutton.fadeIn();
        } else {
            topbutton.fadeOut();
        }
    });
    topbutton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });













    // mockup_inner_img를 클릭하면 모달을 표시
    $('.mockup_inner_img').click(function(){

        
        // 모달 표시
        $('.modal_box').css('display', 'block');
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('.close').click(function(event){
        event.stopPropagation(); // 이벤트 전파 막기
        $('.modal_box').css('display', 'none');
    });

    // 모달 외부를 클릭하면 모달 닫기
    $('.modal_box').click(function(event) {
        // .modal을 클릭한 경우에만 모달 닫기
        if ($(event.target).hasClass('modal_box')) {
            $('.modal_box').css('display', 'none');
        }
    });



    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".slogan_icon img").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) {
                $('.icon1').animate({ opacity: 1, bottom: -7 + "vw" }, 1000);
                $('.icon2').animate({ opacity: 1, top: 20 + "vw" }, 1300);
                $('.icon3').animate({ opacity: 1, left: -5 + "vw" }, 900);
                $('.icon4').animate({ opacity: 1, left: -4.5 + "vw", top: 13 + "vw" }, 1300);
                $('.icon5').animate({ opacity: 1, left: -35 + "vw" }, 800);
                $('.icon6').animate({ opacity: 1, top: 15 + "vw" }, 1300);
            }
        });
    });
});