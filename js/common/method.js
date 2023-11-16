function domId(id) {
    return document.getElementById(id);
}

function isValidInteger(value) {
    return value !== "" && !isNaN(value) && Number.isInteger(Number(value));
}

function isValidNumber(num) {
    return !isNaN(num) && num > 0
}

function uncheckRadio(str) {
    // Lựa chọn radio button cần bỏ chọn bằng cách sử dụng CSS selector
    var radio = document.querySelector(`input[name=${str}]:checked`);

    // Nếu có radio được chọn, bỏ chọn nó
    if (radio) {
        radio.checked = false;
    }
}

function uncheckCheckBox(str) {
    var checkboxs = document.querySelectorAll(`input[name=${str}]`);

    // Duyệt qua từng checkbox và bỏ chọn nó
    checkboxs.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}



function checkCheckBox(idCheckBox, idInput) {
    // Lấy đối tượng checkbox
    var myCheckbox = domId(idCheckBox);
    result = ''
    // Kiểm tra xem checkbox có được chọn hay không
    if (myCheckbox.checked) {
        domId(idInput).value = '√' + domId(idInput).value
    } else {
        domId(idInput).value = domId(idInput).value.replace('√', '');
    }
}

function checkRightTriangle(canhGocVuong1, canhGocVuong2, canhHuyen) {
    var epsilon = 1e-10;
    var result = Math.abs(canhHuyen * canhHuyen - (canhGocVuong1 * canhGocVuong1 + canhGocVuong2 * canhGocVuong2))
    if (result < epsilon) {
        return true;
    }
    return false;
}
