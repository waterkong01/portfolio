// 쿠키 읽고
let result_cookie = getCookie("layer_cookie"); // 내가 찾을 쿠키의 이름(abc)
console.log("result_cookie: "+ result_cookie)
if(result_cookie != null) {
    console.log("쿠키 있음")
    $('.layer_popup').css({
        display: 'none'
    })
    // $('.layer_popup').remove();
} 

// 쿠키 읽기
function getCookie(c_name) {
    let tmp_cookie = document.cookie.split(";"); 
    console.log(tmp_cookie)
    
    for(let i=0; i<tmp_cookie.length; i++) { 
        let tmp = tmp_cookie[i].split("=");      

        if(tmp[0].trim() == c_name) {
            console.log("같아유")
            return unescape(tmp[1]); 
        }
    }
    return null;
}
// 쿠키 생성
function setCookie( name, value, exp) {
    let dt = new Date();
    dt.setTime(dt.getTime() + (1000 * 10 * exp))
    // dt.setTime(dt.getTime() + (1000*60*60*24 * exp))

    console.log(`${name}=${value};expires=${dt.toUTCString()};path=/`)

    document.cookie = `${name}=${value};expires=${dt.toUTCString()};path=/`
}

/****** 헤더 메뉴 따라다니게 하기 *******/
let h_bot_o_top = $('.h_bot').offset().top - $('.tb_item').height();

$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if(h_bot_o_top <= s_top) {
        
        // h_bot fixed 로 띄울때 본문 튕김 방지
        if(!$('.h_bot').hasClass('h_bot_active')) {
            $('.wrap').css({
                paddingTop: '+=50px'
            })   
        }

        $('.h_bot').addClass('h_bot_active');

        
    }
    else if(h_bot_o_top > s_top) {
        
        // h_bot 땅에 붙일때 본문 튕김 방지
        if($('.h_bot').hasClass('h_bot_active')) {
            $('.wrap').css({
                paddingTop: '-=50px'
            })   
        }
        
        $('.h_bot').removeClass('h_bot_active')
        
    }
})