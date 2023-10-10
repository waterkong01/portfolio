$(document).ready(function() {
    $('.sec').on('mousewheel DOMMouseScroll', function() {

        console.log($(this), event.wheelDelta)
        event.preventDefault();

        if(event.wheelDelta<0 && $(this).next().length > 0 ) {
            $('html, body').stop().animate({
                scrollTop: $(this).next().offset().top - 145
            }, 1000)
        }
        
        else if(event.wheelDelta>0 && $(this).prev().length > 0 ) {
            $('html, body').stop().animate({
                scrollTop: $(this).prev().offset().top - 145
            }, 1000)
        }
    });
    

    let item_size = $('.item').eq(0).outerWidth();
    let item_length = $('.item').length;

    // for(let i=0; i<item_length; i++) {
    //     $('.item').eq(i).css({ left: item_size * i })
    // }

    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bang_bn_count = $('.item').length;
    for(let i=0; i<bang_bn_count; i++) { 
        $('.bang_indi').append(`<div class="bang_circle"></div>`)
    }
    $('.bang_circle').eq(0).addClass('bang_circle_active')


    let bang_timer = 1000;
    let bang_no = 0

    let inteval = setInterval(function(){
        // 전체 item 들 item_size만큼씩 왼쪽으로 이동
        $('.item').animate({
            left: `-=${item_size}px`
        }, bang_timer, 'linear')

        // 특정 번째꺼만 반대쪽 끝으로 이동
        $('.item').eq(bang_no % item_length).animate({
            left: item_size * (item_length - 1)
        },0)

        bang_no+=1;
        
        indi_color_chk((bang_no)%item_length);
    }, 1000);
    stop_interval();

    function stop_interval(){
        clearInterval(inteval);
    }

    $(document).on('click','.btn_item_R',function(){
        prevent_btn_slide()
        stop_interval()

        // 전체 item 들 item_size만큼씩 왼쪽으로 이동
        $('.item').animate({
            left: `-=${item_size}px`
        }, bang_timer, 'linear')

        // 특정 번째꺼만 반대쪽 끝으로 이동
        $('.item').eq(bang_no % item_length).animate({
            left: item_size * (item_length - 1)
        },0)

        bang_no+=1;
        
        indi_color_chk((bang_no)%item_length);
    })
    $(document).on('click','.btn_item_L',function(){
        prevent_btn_slide()
        stop_interval()

        bang_no-=1;

        // 특정 번째꺼만 반대쪽 끝으로 이동
        $('.item').eq((bang_no) % item_length).animate({
            left: item_size * -1
        },0)

        // 전체 item 들 item_size만큼씩 오른쪽으로 이동
        $('.item').animate({
            left: `+=${item_size}px`
        }, bang_timer, 'linear')
        
        indi_color_chk((bang_no)%item_length);
    })

    // 인디케이터 색 변경 함수
    function indi_color_chk(bang_indi_idx) {
        $('.bang_circle').removeClass('bang_circle_active')
        $('.bang_circle').eq(bang_indi_idx).addClass('bang_circle_active')
    }

    // 인디케이터 클릭시 방 이동
    $(document).on('click', '.bang_circle', function(){
        let colored = $('.bang_circle_active').index();
        let clicked = $(this).index();

        let cal = colored - clicked;

        // 색칠된거보다 오른쪽꺼(큰거) 누르면 음수
        if(cal < 0) { 
            // for(let i=0; i<(cal)*-1; i++) {
            for(let i=0; i<Math.abs(cal); i++) {
                $('.btn_item_R').trigger('click')
            }
        }
        // 색칠된거보다 왼쪽꺼(작은거) 누르면 양수
        else if(cal > 0) {
            for(let i=0; i<(cal); i++) {
                $('.btn_item_L').trigger('click')
            }
        }
    });

    let bang_interval;
    function bang_slide() {
        bang_interval = setInterval(function(){
            $('.btn_item_R').trigger('click')
        }, bang_timer + 1000);
    }
    bang_slide()

    $('.slide_banner').hover(function(){
        clearInterval(bang_interval);
    }, function(){
        bang_slide()
    });

    // 버튼막기 
    function prevent_btn_slide() {
        // 버튼 막기
        $('.btn_item').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn_item').css({pointerEvents:'auto'})
        }, bang_timer)
    }
})