shampoo_data = [['name', 'brand', 0, 0, 2, 2, 0],
                ['name2', 'brand1', 0, 0, 0, 2, 1]]

// 적절한 샴푸 찾아서 출력
// id는 나중에 html 수정할게요

function find_shampoo() {
    // 사용자가 선택한 값 가져오기
    var hair_type = document.querySelector("#hair_type").value;
    var hair_structure = document.querySelector("#hair_structure").value;
    var hair_moisture = document.querySelector("#hair_moisture").value;
    var hair_alopecia = document.querySelector("#hair_alopecia").value;

    const user_data =
    [hair_type, hair_structure, hair_moisture, hair_alopecia];

    // 매칭되는 샴푸 찾기
    var result = new Array();
    for (var i = 0; i < shampoo_data.length; i++) {
        var data = shampoo_data[i];
        if (user_data == data.slice(3,)) {
            result.unshift(data[0], data[1]);
        }
    }
    
    // 웹페이지에 표시
    var card_div = document.createElement("div");
    document.getElementById("middle").appendChild(card_div);
    card_div.className = "card";

    var cardImg_div = document.createElement("div");

    var img = document.createElement("scr");
}
