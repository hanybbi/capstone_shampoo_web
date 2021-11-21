shampoo_data = [['name1', 'brand1', "./asset/2.png", 0, 0, 0, 0],
                ['name2', 'brand2', "./asset/3.png", 0, 1, 0, 0],
                ['name3', 'brand3', "./asset/4.png", 0, 1, 0, 0]];
                // 이름, 브랜드, 이미지, 타입, 구조, 건지성, 탈모


function get_input() {
    // 사용자가 선택한 값 가져오기
    var hair_type = document.getElementsByName("hair_type");
    for (var i=0; i<hair_type.length; i++) {
        if (hair_type[i].checked) {
            hair_type = hair_type[i].value;
        }
    }
    var hair_structure = document.getElementsByName("hair_structure");
    for (var i=0; i<hair_structure.length; i++) {
        if (hair_structure[i].checked) {
            hair_structure = hair_structure[i].value;
        }
    }
    var hair_moisture = document.getElementsByName("hair_moisture");
    for (var i=0; i<hair_moisture.length; i++) {
        if (hair_moisture[i].checked) {
            hair_moisture = hair_moisture[i].value;
        }
    }
    var hair_alopecia = document.getElementsByName("hair_alopecia");
    for (var i=0; i<hair_alopecia.length; i++) {
        if (hair_alopecia[i].checked) {
            hair_alopecia = hair_alopecia[i].value;
        }
    }

    const user_data =
    [hair_type, hair_structure, hair_moisture, hair_alopecia];

    return user_data;
}


function find_shampoo() {
    var user_data = get_input();
    // 저장소 비우기
    sessionStorage.clear();

    // 매칭되는 샴푸 찾기
    for (var i = 0; i < shampoo_data.length; i++) {
        var data = shampoo_data[i];
        if (user_data == data.slice(3).toString()) {
            // 세션 스토리지에 저장
            sessionStorage.setItem("selected_index"+i, i);
        }
    }
    // 결과 화면 열기
    window.open("./recommand_result.html", "_self");
}


function display_shampoo() {
    // 웹페이지에 표시
    // 테그 만들어서 데이터 넣기
    for (var i = 0; i < sessionStorage.length; i++) {
        // 표시될 값
        var key = sessionStorage.key(i);
        var val = sessionStorage.getItem(key);
        var selected_shampoo = shampoo_data[val];

        // element 생성하고 데이터 넣기
        var new_div = document.createElement("div");
        new_div.setAttribute("class", "recommend_card");
        var new_shampooName = document.createElement("p");
        new_shampooName.innerText = selected_shampoo[0];
        var new_shampooBrand = document.createElement("p");
        new_shampooBrand.innerText = selected_shampoo[1];
        var new_shampooImg = document.createElement("img");
        new_shampooImg.src = selected_shampoo[2];

        // 상위 element에 연결
        var parent = document.getElementById("display_selected_shampoo");
        parent.appendChild(new_div);
        new_div.appendChild(new_shampooImg);
        new_div.appendChild(new_shampooName);
        new_div.appendChild(new_shampooBrand);
    }
}