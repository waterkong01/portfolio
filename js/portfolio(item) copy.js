$(document).ready(function() {
    $('.menu-item img').click(function() {
        let itemNo = $(this).find('img').data('item-no'); // 클릭한 이미지의 data-item-no 값을 가져옴
        // itemNo를 사용하여 상세 정보 페이지로 이동하는 URL을 생성
        let detailPageUrl = `portfolio(item) copy.html?item_no=${itemNo}`;
        window.location.href = detailPageUrl; // 페이지 이동
    });

// 이미지 클릭 시 호출되는 함수
function handleImageClick(item_no) {
    // 여기에서 선택한 상품의 정보를 가져와 화면에 표시할 수 있습니다.
    // product(load_list).js에 상품 정보가 어떻게 구성되어 있는지에 따라 코드를 작성하세요.

    // 예를 들어, product(load_list).js에서 상품 정보를 가져오는 함수 getProductInfo(item_no)을 호출하는 방법:
    const selectedItem = getProductInfo(item_no);

    if (selectedItem) {
        // 선택한 상품의 정보를 사용하여 화면에 표시
        displayProductInfo(selectedItem);
    } else {
        console.log('Product not found');
    }
}

// 상품 정보를 화면에 표시하는 함수
function displayProductInfo(product) {
    // 상품 이미지 표시
    const productImage = document.getElementById('productImage');
    productImage.src = product.imageURL;

    // 상품 이름, 설명, 가격 표시
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');

    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = `Price: ${product.price}`;
}

// product(load_list).js에서 상품 정보를 가져오는 함수 (예시)
function getProductInfo(item_no) {
    // 여기에서 item_no를 사용하여 product(load_list).js에서 상품 정보를 가져오는 코드를 작성
    // 예를 들어, 상품 정보를 배열로 관리하고 item_no에 해당하는 상품을 찾아 반환하는 방식 등을 사용할 수 있습니다.
    
    // 아래는 가상의 예시입니다. 실제로는 데이터 구조에 맞게 코드를 작성해야 합니다.
    const products = [
        { item_no: 1, name: '상품 1', description: '상품 1 설명', price: 1000, imageURL: '상품 1 이미지 경로' },
        { item_no: 2, name: '상품 2', description: '상품 2 설명', price: 2000, imageURL: '상품 2 이미지 경로' },
        // 기타 상품 정보
    ];

    return products.find(product => product.item_no === item_no);
}

// 페이지 로드 시 실행
window.addEventListener("load", () => {
    // 이미지 클릭 이벤트 핸들러 등록
    const images = document.querySelectorAll(".menu-item img");
    images.forEach(image => {
        image.addEventListener("click", () => {
            const item_no = parseInt(image.getAttribute("data-item-no"));
            handleImageClick(item_no);
        });
    });
});
})