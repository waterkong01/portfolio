// load_list.js
const menuContainer = document.querySelector('.menu-container');

// 이미지 파일 경로 배열
const menuImages = [

    // 커피
    { item_no: 1, path: '../백미당/메뉴안내/커피/에스프레소1-2.jpg', 
        category: 'coffee', name: '에스프레소', size_s: 'Small: 3,600', size_r: 'Regular: - ', size_l: 'Large: - ',
        detail: '감귤의 기분좋은 산미와 단맛의 조화로 감칠맛을 극대화한 커피입니다.'
    },
    { item_no: 2, path: '../백미당/메뉴안내/커피/아메리카노1-2.jpg', 
        category: 'coffee', name: '아메리카노', size_s: 'Small: 4,400', size_r: 'Regular: 4,900', size_l: 'Large: 5,400',
        detail: '감귤향의 단맛이 잘 표현된 커피입니다.'
    },
    { item_no: 3, path: '../백미당/메뉴안내/커피/1964 드립커피1-2.jpg', 
        category: 'coffee', name: '1964 드립커피', size_s: 'Small: 4,500', size_r: 'Regular: - ', size_l: 'Large: - ',
        detail: '유기농 원두만이 가진 자연스러운 산미와 단맛의 풍부한 조화를 마지막 커피 한 모금의 여운에 담았습니다.'
    },
    { item_no: 4, path: '../백미당/메뉴안내/커피/백미당 라떼1-2.jpg', 
        category: 'coffee', name: '백미당 라떼', size_s: 'Small: 5,300', size_r: 'Regular: 5,800', size_l: 'Large: 6,300',
        detail: '부드러운 유기농 우유를 극대화하여 고소하고 부드럽게 마실 수 있는 커피입니다.'
    },
    { item_no: 5, path: '../백미당/메뉴안내/커피/1964 진한 라떼1-2.jpg', 
        category: 'coffee', name: '1964 진한 라떼', size_s: 'Small: 5,700', size_r: 'Regular: 6,300', size_l: 'Large: - ',
        detail: '진한 에스프레소의 맛을 최대한 끌어낸 커피입니다.'
    },
    { item_no: 6, path: '../백미당/메뉴안내/커피/백미당 카푸치노1-2.jpg', 
        category: 'coffee', name: '백미당 카푸치노', size_s: 'Small: 5,300', size_r: 'Regular: 5,800', size_l: 'Large: 6,300',
        detail: '풍성한 벨벳 밀크폼의 표현으로 솜사탕같은 우유 거품과 진한 에스프레소를 마시는 커피입니다.'
    },
    { item_no: 7, path: '../백미당/메뉴안내/커피/삼청 밀크 커피1-2.jpg', 
        category: 'coffee', name: '삼청 밀크 커피 (삼청한정)', size_s: 'Small: - ', size_r: 'Regular: 5,500', size_l: 'Large: - ',
        detail: ''
    },
    { item_no: 8, path: '../백미당/메뉴안내/커피/아이스크림 라떼1-2.jpg', 
        category: 'coffee', name: '아이스크림 라떼', size_s: 'Small: - ', size_r: 'Regular: 6,300', size_l: 'Large: - ',
        detail: '우유 아이스크림과 에스프레소, 유기농 우유와의 조화를 느끼실 수 있습니다.'
    },
    { item_no: 9, path: '../백미당/메뉴안내/커피/제주말차 라떼1-2.jpg', 
        category: 'coffee', name: '제주말차 라떼', size_s: 'Small: - ', size_r: 'Regular: 6,300', size_l: 'Large: - ',
        detail: '쌉싸름한 제주 말차와 백미당 에스프레소의 만남'
    },
    { item_no: 10, path: '../백미당/메뉴안내/커피/수제 캬라멜 마끼아또1-2.jpg', 
        category: 'coffee', name: '수제 캬라멜 마끼아또', size_s: 'Small: 5,300', size_r: 'Regular: 5,800', size_l: 'Large: 6,300',
        detail: '수제 카라멜과 고소한 유기농 우유 그리고 오가닉 원두로 추출한 에스프레소로 만들어 깊고 풍부한 카라멜 여운과 달콤 쌉싸름한 커피의 풍미를 함께 느끼 실 수 있는 오리지날 카라멜 마끼아또 입니다.'
    },
    { item_no: 11, path: '../백미당/메뉴안내/커피/1964 아포가토1-2.jpg', 
        category: 'coffee', name: '1964 아포가토', size_s: 'Small: - ', size_r: 'Regular: 6,300', size_l: 'Large: - ',
        detail: '아이스크림의 달콤함과 에스프레소의 쓴맛의 조화를 느끼실 수 있습니다.'
    },

    // 백미당아이스크림
    { item_no: 12, path: '../백미당/메뉴안내/백미당아이스크림/우유소프트아이스크림1-2.jpg', 
        category: 'ice_cream', name: '우유 소프트 아이스크림', size_o: 'One-size: 4,500',
        detail: '100프로 유기농 우유를 사용하여 우유 본연의 담백한 맛과 달콤함을 느낄 수 있는 백미당만의 대표 디저트입니다.'
    },
    { item_no: 13, path: '../백미당/메뉴안내/백미당아이스크림/두유소프트아이스크림1-2.jpg', 
        category: 'ice_cream', name: '두유 소프트 아이스크림', size_o: 'One-size: 4,500',
        detail: '직접 짠 두유를 사용하여 고소한 맛을 느낄 수 있는 백미당만의 대표 아이스크림 디저트입니다.'
    },
    { item_no: 14, path: '../백미당/메뉴안내/백미당아이스크림/밀크초코아이스크림1-2.jpg', 
        category: 'ice_cream', name: '밀크 초코 아이스크림', size_o: 'One-size: 4,800',
        detail: ''
    },
    { item_no: 15, path: '../백미당/메뉴안내/백미당아이스크림/초코아이스크림1-2.jpg', 
        category: 'ice_cream', name: '초코 아이스크림', size_o: 'One-size: 5,100',
        detail: '초콜릿의 명가 벨기에 칼리바우트에서 만든 다크 카카오 80%와 백미당의 유기농 우유가 만나 초콜릿의 달콤함과 우유의 부드러움을 함께 경험할 수 있는 백미당 시그니처 아이스크림입니다.'
    },
    { item_no: 16, path: '../백미당/메뉴안내/백미당아이스크림/요거트와우유아이스크림1-2.jpg', 
        category: 'ice_cream', name: '요거트와 우유 아이스크림', size_o: 'One-size: 5,500',
        detail: '유기농 우유 아이스크림에 무첨가 무가당 유기농 요거트를 곁들인 산뜻한 맛의 디저트 입니다.'
    },
    { item_no: 17, path: '../백미당/메뉴안내/백미당아이스크림/생초콜릿아이스크림1-2.jpg', 
        category: 'ice_cream', name: '生 초콜릿 아이스크림', size_o: 'One-size: 5,700',
        detail: '탄자니아 싱글오리진 카카오 75% 초콜릿을 사용하여 만든 깊은 풍미의 초콜릿 아이스크림입니다.'
    },
    { item_no: 18, path: '../백미당/메뉴안내/백미당아이스크림/어린쑥아이스크림1-2.jpg', 
        category: 'ice_cream', name: '어린쑥 아이스크림', size_o: 'One-size: 5,800',
        detail: ''
    },
    { item_no: 19, path: '../백미당/메뉴안내/백미당아이스크림/삼청초코딸기아이스크림1-2.jpg', 
        category: 'ice_cream', name: '삼청 초코딸기 아이스크림 (삼청한정)', size_o: 'One-size: 6,800',
        detail: '75% 다크 카카오 초콜릿에 제철 딸기를 딥하고 슈퍼푸드 그라놀라와 동결건조딸기가 뿌려진 초코칩이 수북이 얹어진 삼청 시그니처 아이스크림'
    },
    { item_no: 20, path: '../백미당/메뉴안내/백미당아이스크림/우유아이스크림빙수1-2.jpg', 
        category: 'ice_cream', name: '우유 아이스크림 빙수', size_o: 'One-size: 9,500',
        detail: ''
    },
    { item_no: 21, path: '../백미당/메뉴안내/백미당아이스크림/베리우유빙수1-2.jpg', 
        category: 'ice_cream', name: '베리 우유 빙수', size_o: 'One-size: 12,000',
        detail: ''
    },
    { item_no: 22, path: '../백미당/메뉴안내/백미당아이스크림/애플망고딸기빙수1-2.jpg', 
        category: 'ice_cream', name: '애플 망고딸기 빙수', size_o: 'One-size: 15,000',
        detail: ''
    },

    // Fresh토핑디저트
    { item_no: 23, path: '../백미당/메뉴안내/Fresh토핑디저트/말차초코아이스크림1-2.jpg', 
        category: 'topping_dessert', name: '말차초코 아이스크림', size_o: 'One-size: 6,800',
        name: ''
    },
    { item_no: 24, path: '../백미당/메뉴안내/Fresh토핑디저트/생바나나아이스크림1-2.jpg', 
        category: 'topping_dessert', name: '生 바나나아이스크림', size_o: 'One-size: 6,000',
        name: '신선한 바나나와 백미당 우유 아이스크림의 조화로운 풍미'
    },
    { item_no: 25, path: '../백미당/메뉴안내/Fresh토핑디저트/제주말차아이스크림1-2.png', 
        category: 'topping_dessert', name: '제주말차 아이스크림', size_o: 'One-size: 6,000',
        name: '백미당 우유 또는 두유 아이스크림에 제주산 말차가 더해져 말차의 풍미가 가득'
    },
    { item_no: 26, path: '../백미당/메뉴안내/Fresh토핑디저트/그래놀라요거트1-2.png', 
        category: 'topping_dessert', name: '그래놀라 요거트', size_o: 'One-size: 3,900',
        name: '국내산 통곡물과 명인이 만든 조청, 유기농 설탕과 콩가루로 맛을 낸 고소한 그라놀라가 얹어진 요거트'
    },
    { item_no: 27, path: '../백미당/메뉴안내/Fresh토핑디저트/바나나요거트1-2.png', 
        category: 'topping_dessert', name: '바나나 요거트', size_o: 'One-size: 3,900',
        name: '신선한 바나나가 올려진 백미당만의 바나나 요거트'
    },
    { item_no: 28, path: '../백미당/메뉴안내/Fresh토핑디저트/초코요거트1-2.png', 
        category: 'topping_dessert', name: '초코 요거트', size_o: 'One-size: 3,900',
        name: '탄자니아 싱글오리진 카카오 75% 초콜릿의 깊은 풍미를 담은 초코 요거트'
    },
    { item_no: 29, path: '../백미당/메뉴안내/Fresh토핑디저트/유기농우유1-2.jpg', 
        category: 'topping_dessert', name: '유기농 우유', size_o: '180ml: 2,000 / 450ml: 4,000',
        name: ''
    },
    { item_no: 30, path: '../백미당/메뉴안내/Fresh토핑디저트/곡물우유1-2.jpg', 
        category: 'topping_dessert', name: '곡물 우유', size_o: '180ml: 4,200 / 450ml: 6,800',
        name: '백미당 유기농 우유에 볶아낸 흑미와 흑임자를 그대로 갈아 넣어 진한 고소함이 가득'
    },
    { item_no: 31, path: '../백미당/메뉴안내/Fresh토핑디저트/생바나나우유1-2.jpg', 
        category: 'topping_dessert', name: '生 바나나 우유', size_o: '180ml: 4,200 / 450ml: 6,800',
        name: '백미당 유기농 우유에 100% 생 바나나를 그대로 갈아 넣어 신선함이 가득 들어있는 바나나 우유'
    },
    { item_no: 32, path: '../백미당/메뉴안내/Fresh토핑디저트/생초코우유1-2.jpg', 
        category: 'topping_dessert', name: '生 초코 우유', size_o: '180ml: 4,200 / 450ml: 6,800',
        name: '탄자니아 싱글오리진 카카오 75% 초콜릿의 진한 달콤함과 백미당 유기농 우유의 고소함의 조화'
    },
    { item_no: 33, path: '../백미당/메뉴안내/Fresh토핑디저트/제주말차우유1-2.jpg', 
        category: 'topping_dessert', name: '제주말차 우유', size_o: '180ml: 4,500 / 450ml: 7,200',
        name: '쌉싸름한 제주 말차와 고소한 백미당 우유가 절묘하게 어우러져, 백미당 제주말차 라떼와는 또다른 매력'
    },
    { item_no: 34, path: '../백미당/메뉴안내/Fresh토핑디저트/견과류우유1-2.jpg', 
        category: 'topping_dessert', name: '견과류 우유', size_o: '180ml: 4,500 / 450ml: 7,200',
        name: '아몬드, 호두, 땅콩 등 다양한 견과류를 갈아 넣어 견과류의 고소함과 부드러운 백미당 유기농 우유의 맛이 조화롭게 어우러지는 견과류 우유'
    },
    { item_no: 35, path: '../백미당/메뉴안내/Fresh토핑디저트/생딸기우유1-2.jpg', 
        category: 'topping_dessert', name: '生 딸기 우유', size_o: '180ml: 4,800 / 450ml: 7,500',
        name: ''
    },
    { item_no: 36, path: '../백미당/메뉴안내/Fresh토핑디저트/커피우유1-2.jpg', 
        category: 'topping_dessert', name: '커피 우유', size_o: '180ml: 5,200 / 450ml: 7,800',
        name: '유기농 원두로 추출한 에스프레소와 백미당 유기농 우유가 만나 진한 풍미가 가득. 얼음을 넣지 않아 시간이 지나도 변하지 않는 “라떼” 본연의 맛.'
    },

    // 베이커리
    { item_no: 37, path: '../백미당/메뉴안내/베이커리/무스케익1-2.jpg', 
        category: 'bakery', name: '무스케익 (본점, 삼청 한정)', size_s: 'Small: - ', size_m: 'Medium: 3,000',
        name: '계절 과일을 곁들인 레어치즈와 생 다크 초콜릿으로 만든 미니 무스 케익'
    },
    { item_no: 38, path: '../백미당/메뉴안내/베이커리/샌드위치1-2.jpg', 
        category: 'bakery', name: '샌드위치 (본점, 한남 한정)', size_s: 'Small: - ', size_m: 'Medium: 5,000',
        name: '맑고 깨끗한 농장에서 직송된 신선란으로 만들어 더 건강한 에그 샌드위치와 담백한 맛이 일품인 튜나 샌드위치'
    },
    { item_no: 39, path: '../백미당/메뉴안내/베이커리/크루아상샌드위치1-2.jpg', 
        category: 'bakery', name: '크루아상 샌드위치 (본점 한정)', size: '하단참조',
        name: '겉은 바삭, 속은 촉촉한 크루아상 빵 사이에 신선한 재료로 만든 속이 듬뿍 들어간 샌드위치',
        egg_price: '5,000', tuna_price: '5,500', capre_price: '7,500'
    },
    { item_no: 40, path: '../백미당/메뉴안내/베이커리/우유생크림케익1-2.jpg', 
        category: 'bakery', name: '우유 생크림 케익', size_s: 'Small: 3,500', size_m: 'Medium: 5,500',
        name: '생크림(유지방량 35%)을 사용하여 담백하고 부드러운 생크림케익입니다.'
    },
    { item_no: 41, path: '../백미당/메뉴안내/베이커리/초코생크림케익1-2.jpg', 
        category: 'bakery', name: '초코 생크림 케익', size_s: 'Small: 3,500', size_m: 'Medium: 5,500',
        name: '밀가루 없이 순수 카카오 매스와 계란, 카카오파우더로만 구운 진한 초콜릿 케익시트와 생크림으로 만든 부드러운 케익입니다.'
    },
    { item_no: 42, path: '../백미당/메뉴안내/베이커리/네모난우유식빵1-2.jpg', 
        category: 'bakery', name: '네모난 우유식빵', size_s: 'Small: - ', size_m: 'Medium: 3,000',
        name: '유기농 우유를 사용한 부드러운 백미당만의 식빵입니다.'
    },
    { item_no: 43, path: '../백미당/메뉴안내/베이커리/그래놀라바1-2.jpg', 
        category: 'bakery', name: '그래놀라 바', size_s: 'Small: - ', size_m: 'Medium: 2,000',
        name: '국내산 통곡물(현미, 수수, 흑임자, 건대추)과 명인이 만든 조청, 유기농설탕과 콩가루로 맛을 낸 고소한 한국스타일의 그래놀라입니다.'
    },
    { item_no: 44, path: '../백미당/메뉴안내/베이커리/통통크런치1-2.jpg', 
        category: 'bakery', name: '통통 크런치', size_s: 'Small: - ', size_m: 'Medium: 3,000',
        name: '국내산 통곡물(현미, 수수, 흑임자, 건대추)과 명인이 만든 조청으로 맛을 낸 고소하고 달콤한 강정'
    },
    { item_no: 45, path: '../백미당/메뉴안내/베이커리/아몬드머랭쿠키1-2.jpg', 
        category: 'bakery', name: '아몬드 머랭 쿠키', size_s: 'Small: - ', size_m: 'Medium: 4,500',
        name: '가볍고 폭신한 식감에 콩가루와 유기농설탕으로 구운 머랭쿠키와 국내산 통곡물을 믹스한 쿠키입니다.'
    },
    { item_no: 46, path: '../백미당/메뉴안내/베이커리/검은콩현미그래놀라1-2.jpg', 
        category: 'bakery', name: '검은콩 현미 그래놀라', size_s: 'Small: - ', size_m: 'Medium: 10,000',
        name: '통곡물과 다양한 견과류에 콩가루로 맛을 낸 조청을 넣어 만든 고소한 한국 스타일의 그래놀라'
    },
    { item_no: 47, path: '../백미당/메뉴안내/베이커리/미니우유파운드1-2.jpg', 
        category: 'bakery', name: '미니 우유파운드 (삼청 한정)', size_s: 'Small: - ', size_m: 'Medium: 3,500',
        name: '진한 유기농 우유가 듬뿍 든 올드패션 백미당 파운드케익'
    },
    { item_no: 48, path: '../백미당/메뉴안내/베이커리/팥밀크빵1-2.jpg', 
        category: 'bakery', name: '팥밀크빵 (삼청 한정)', size_s: 'Small: - ', size_m: 'Medium: 5,500',
        name: '예천 팥을 가마솥에 끓여 따끈하게 얹어내는 우유빵'
    },
    { item_no: 49, path: '../백미당/메뉴안내/베이커리/콩가루밀크빵1-2.jpg', 
        category: 'bakery', name: '콩가루 밀크빵 (삼청 한정)', size_s: 'Small: - ', size_m: 'Medium: 5,200',
        name: '쫄깃한 백미당의 유기농 우유 크림빵에 방유당 방앗간에서 갓 빻은 100% 우리 콩고물을 듬뿍 버무리는 콩가루 우유빵'
    },

    // SoftShake
    { item_no: 50, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '生 초코 쉐이크', size_o: 'One-size: 7,000'},
    // { item_no: 51, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '生 애플&민트 쉐이크', size_o: 'One-size: 5,900'},
    // { item_no: 52, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '生 커피 쉐이크', size_o: 'One-size: 6,400'},
    // { item_no: 53, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '生 딸기 쉐이크', size_o: 'One-size: 5,900'},
    // { item_no: 54, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '生 바나나 쉐이크', size_o: 'One-size: 6,000'},
    // { item_no: 55, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '제주말차 쉐이크', size_o: 'One-size: 6,400'},
    // { item_no: 56, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '밀크 쉐이크', size_o: 'One-size: 6,000'},
    // { item_no: 57, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '요거트 쉐이크', size_o: 'One-size: 6,000'},
    // { item_no: 58, path: '../백미당/메뉴안내/SoftShake/쉐이크1-2.jpg', category: 'soft_shake', name: '어린쑥 쉐이크', size_o: 'One-size: 5,200'},

    // 유기농우유
    { item_no: 59, path: '../백미당/메뉴안내/유기농우유/네모우유1-2.jpg', category: 'organic_milk', name: '네모우유', size_o: '하단참조', price: '4개입 4,800', price2: '12개입 18,000'},
    
    // 필요한 만큼 이미지 파일 경로를 추가
];

const categories = [

    // 커피
    'coffee',

    // 백미당아이스크림 카테고리
    'ice_cream',

    // Fresh토핑디저트 카테고리
    'topping_dessert',

    // 베이커리 카테고리
    'bakery',

    // SoftShake 카테고리
    'soft_shake',

    // 유기농우유 카테고리
    'organic_milk',
];




// 페이지 로드
window.addEventListener("load", () => {
    // 메뉴 이미지 컨테이너를 선택
    const menuContainer = document.querySelector('.menu-container');

    // 각 이미지를 메뉴 항목으로 추가
    menuImages.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<img src="${item.path}" alt="${item.name}" data-item-no="${item.item_no}">`;
        menuItem.dataset.category = item.category;
        menuContainer.appendChild(menuItem);

        // 각 이미지에 클릭 이벤트 핸들러 등록
        menuItem.addEventListener("click", () => {
            const item_no = parseInt(menuItem.querySelector('img').getAttribute("data-item-no"));
            handleImageClick(item_no);
        });
    });

    // 네비게이션 바 항목 클릭 시 필터링
    document.querySelectorAll('.navigation a').forEach((navItem) => {
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            const category = navItem.getAttribute('data-category');
            filterImagesByCategory(category);

            document.querySelectorAll('.navigation a').forEach((item) => {
                item.classList.remove('active');
            });

            navItem.classList.add('active');
        });
    });

    // 초기에 모든 이미지 표시
    filterImagesByCategory('all');
});

// 이미지 클릭 => 상세 정보 페이지 이동
function handleImageClick(item_no) {
    console.log('handleImageClick called with item_no:', item_no);
    // 여기에서 선택한 상품의 정보를 가져와 페이지에 표시
    const selectedItem = menuImages.find(item => item.item_no === item_no);
    if (selectedItem) {
        // 선택한 item 정보를 사용gotj 페이지 표시
        displayItemDetail(selectedItem);

        window.location.href = `portfolio(item) copy.html?item_no=${item_no}`;
    } else {
        console.log('Item not found');
    }
}

// 상세 정보 화면에 표시
function displayItemDetail(selectedItem) {
    const detailContainer = document.querySelector('.item-detail-container');
    
    if (detailContainer) {
        detailContainer.innerHTML = `
            <h2>${selectedItem.name}</h2>
            <p>${selectedItem.detail}</p>
            <p>가격: ${selectedItem.size_s}</p>
        `;
    } else {
        console.log('Item detail container not found');
    }
}

// 카테고리에 따라 이미지 필터링
function filterImagesByCategory(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((menuItem) => {
        const imageCategory = menuItem.dataset.category;

        if (category === 'all' || category === imageCategory) {
            menuItem.style.display = 'block';
        } else {
            menuItem.style.display = 'none';
        }
    });
}

// 초기에 모든 이미지를 표시하기 위해 호출
// filterImagesByCategory('all');


document.addEventListener('DOMContentLoaded', function () {
    // 상품 정보를 가져와서 표시하는 코드를 작성
    const productInfo = getProductInfo(); // getProductInfo는 정보를 가져오는 함수로 가정

    // 정보를 화면에 표시
    const productNameElement = document.getElementById('item-name');
    const productDetailElement = document.getElementById('item-detail');

    productNameElement.textContent = productInfo.name;
    productDetailElement.textContent = productInfo.detail;
});




// // url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

// const menu_array = ['brand','menu','store','gb'];
// const title_array = ['백미당','메뉴안내','매장안내','백미당 공방'];
// const img_addr = "백미당/메뉴안내/"; 

// // let cate_no=get_cate_no();
// function get_cate_no() {
//     let url = location.href;
//     url = url.split("?");

//     if(url.length > 1) {
//         url = url[1].split("&")
//         for(let i=0; i<url.length; i++) {
//             let tmp_url = url[i].split("=");

//             if(tmp_url[0] == "cate_no") {
//                 return tmp_url[1]
//                 // load_items(tmp_url[1]) //cate_no, start_index, qty
//             }
//         }
//     }
//     else {
//         console.log("없음")
//     }
// }
// function get_url_info(key) {
//     let url = location.href;
//     url = url.split("?");

//     if(url.length > 1) {
//         url = url[1].split("&")
//         for(let i=0; i<url.length; i++) {
//             let tmp_url = url[i].split("=");

//             if(tmp_url[0] == key) {
//                 return tmp_url[1] 
//             }
//         }
//     }
//     else {
//         console.log("없음")
//     }
// }


// // load_items(cate_no);
// function load_items(cate_no, qty) { 
//     let item_length = $('#'+menu_array[cate_no]+'.item_container > li').length;
//     let cate_no_length = ITEM_LIST[cate_no].length;

//     // .main > .sec에 아이디를 해당 페이지꺼로 바꿈
//     // 메인페이지에서도 이 함수 사용시 각 타이틀 부분 안바뀌게 해야해서 if문으로 cate_no 있을때만 동작하게 함.
//     if(get_cate_no() != null) {
//         $('.main > .sec').attr('id', menu_array[cate_no])
//         $('.main .sec_title').text(title_array[cate_no])
//     }

//     let list = ''; 
//     let it = ITEM_LIST[cate_no];
//     for(let i=item_length; i<item_length+qty; i++) {      
//         if(i < cate_no_length) {
//             list+= '<li class="'+menu_array[cate_no]+' item_init">';
//             list+= '    <div class="item_img">';
//             if(cate_no == 1) {
//                 list+= '        <a href="portfolio(item).html?cate_no='+cate_no+'&item_no='+it[i].item_no+'">';
//                 list+= '            <img src="'+img_addr+menu_array[cate_no]+'/'+it[i].covered_src+'" alt="">';
//                 list+= '        </a>';
//             }
//             list+= '        <a href="portfolio(item).html?cate_no='+cate_no+'&item_no='+it[i].item_no+'">';
//             list+= '            <img src="'+img_addr+menu_array[cate_no]+'/'+it[i].src+'" alt="">';
//             list+= '        </a>';
//             list+= '    </div>';
//             list+= '    <div class="item_info">';
//             list+= '        <div class="item_info_title txt_over">'+it[i].title+'</div>';
//             list+= '        <div class="origin_price">'+comma(it[i].o_price)+'원</div>';
//             list+= '        <div class="sale_price">'+comma(it[i].s_price)+'원</div>';
//             list+= '        <div class="item_desc">'+it[i].desc+'</div>';
//             list+= '    </div>';
//             list+= '</li>';  
//         }   
//     }
//     $('#'+menu_array[cate_no]+'.sec .item_container').append(list);
// }

function comma(num){
    /*  
        / - 정규식의 맨 앞과 끝에 넣음
        \B - 시작과 끝을 말함. EX) 1234 에서 1의 앞 4의 뒤를 의미
             우리는 1234
        (\d{3}) - 숫자 3자리
        +(?!\d) - +는 앞의 표현식이 1회 이상 연속으로 반복
                  x(?!y) - x 뒤에 y가 없는 경우에만 x에 일치
                  여기서 (?!\d) 는 뒤에 더이상 숫자가 없는 경우 라는 뜻
                  (\d{3})+(?!\d) 는 숫자가 3번 나타난다 라는 뜻
        (?=   ) - 앞 뒤 조건 모두 만족 이라는 뜻
                    (\d{3}) 부터 +(?!\d)) 까지 만족할때 라는 뜻
        g - 전역 검색
    */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}