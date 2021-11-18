shampoo_data = [['name', 'brand', 0, 0, 0, 0],
                ['name2', 'brand1', 0, 0, 0, 0],
                ['name3', 'brand3', 0, 0, 0, 0]];


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
        if (user_data == data.slice(2).toString()) {
            // 세션 스토리지에 저장
            sessionStorage.setItem("name"+i, data[0]);
            sessionStorage.setItem("brand"+i, data[1]);
        }
    }
    // 결과 화면 열기
    window.open("./recommand_result.html", "_self");
}


function display_shampoo() {
    // 웹페이지에 표시

    // 매칭 샴푸가 하나
    document.getElementById("shampoo_name").innerText = sessionStorage.getItem("name0");
    document.getElementById("shampoo_brand").innerText = sessionStorage.getItem("brand0");
    
    // 매칭 샴푸가 둘 이상
    // 테그 만들어서 데이터 넣기
    if (sessionStorage.length>2) {
        for (var i = 1; i < sessionStorage.length/2; i++) {
            // element 생성하고 데이터 넣기
            var new_shamoponame = document.createElement("p");
            new_shamoponame.innerText = sessionStorage.getItem("name"+i);
            var new_shampoobrand = document.createElement("p");
            new_shampoobrand.innerText = sessionStorage.getItem("brand"+i);

            // 상위 element에 연결
            var parent = document.getElementById("display_selected_shampoo");
            parent.appendChild(new_shamoponame);
            parent.appendChild(new_shampoobrand);
        }
    }
}
