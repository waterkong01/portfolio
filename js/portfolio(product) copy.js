$(document).ready(function(){
    let cate_no = get_url_info("cate_no");

    // 
    $('.sec_head').text(title_array[cate_no])
    // sec에 아이디 넣기
    let v_id = menu_array[cate_no];
    $('.sec').prop('id',v_id);

    load_items(cate_no, 8)

    // 무한스크롤링
    let tmp = 0;
    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + $(window).height();
        let f_o_top = $('.footer').offset().top;

        if(s_bot >= f_o_top) {
            load_items(cate_no, 8)
        }

    })
})
// product.js
const menuContainer = document.querySelector('.menu-container');

// 각 이미지를 메뉴 항목으로 추가
menuImages.forEach((imageUrl, index) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `<img src="${imageUrl}" alt="Menu ${index + 1}">`;
    menuContainer.appendChild(menuItem);
});

document.querySelectorAll('.navigation a').forEach(function(navItem) {
    navItem.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 방지
        var category = this.getAttribute('data-category'); // 클릭한 항목의 카테고리를 가져옴
        filterImagesByCategory(category); // 해당 카테고리의 이미지만 표시하는 함수 호출
    });
});

// 카테고리에 따라 이미지를 필터링하여 표시하는 함수를 정의합니다.
function filterImagesByCategory(category) {
    console.log('Selected Category:', category);
    // 모든 이미지 요소를 가져옵니다.
    var menuItems = document.querySelectorAll('.menu-item');

    // 각 이미지 요소를 순회하며 선택한 카테고리와 일치하는지 확인합니다.
    menuItems.forEach(function(menuItem, index) {
        if (category === 'all' || (category === 'coffee' && index < 11) || (category === 'ice_cream' && index >= 11 && index < 22)) {
            menuItem.style.display = 'block'; // 해당 카테고리에 포함되는 이미지 표시
        } else {
            menuItem.style.display = 'none'; // 해당 카테고리에 포함되지 않는 이미지 숨김
        }
    });
}

// 초기에 모든 이미지를 표시합니다.
filterImagesByCategory('all');


document.addEventListener('DOMContentLoaded', function () {
    // '메뉴안내' 링크 요소를 선택합니다.
    const menuLink = document.getElementById('menuLink');

    // '메뉴안내' 링크를 클릭했을 때 실행될 이벤트 핸들러를 추가합니다.
    menuLink.addEventListener('click', function (event) {
        event.preventDefault(); // 기본 링크 동작을 막습니다.

        // 메뉴 페이지로 이동하는 코드를 작성합니다.
        // 예: 메뉴 페이지 URL로 리다이렉트하거나, JavaScript로 메뉴 페이지 내용을 동적으로 로드합니다.
        // 여기서는 예시로 페이지 URL로 이동하는 방법을 보여드립니다.
        window.location.href = 'portfolio(product).html?cate_no=1';
    });
});









// 이미지 클릭 시 상세 정보 페이지로 이동
function handleImageClick(item_no) {
    // 여기서 item_no를 이용하여 선택한 상품의 정보를 가져오는 작업을 수행할 수 있습니다.
    // 이 예시에서는 단순히 item_no를 query parameter로 넘기는 방법을 사용합니다.
    
    // 페이지 이동
    window.location.href = `상세정보페이지URL?item_no=${item_no}`;
}

// 페이지 로드 시 이미지 클릭 이벤트 핸들러 등록
window.addEventListener("load", () => {
    const images = document.querySelectorAll(".menu-item img");
    images.forEach(image => {
        image.addEventListener("click", () => {
            const item_no = parseInt(image.getAttribute("data-item-no"));
            handleImageClick(item_no);
        });
    });
});