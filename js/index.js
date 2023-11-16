function domId(id) {
    return document.getElementById(id);
}

function isValidInteger(value) {
    return value !== "" && !isNaN(value) && Number.isInteger(Number(value));
}

function isValidNumber(num) {
    return !isNaN(num) && num > 0
}
//?  Start lesson 1
domId('btn-1').onclick = function () {


    var num1 = domId('nhapSo1_B1').value;
    var num2 = domId('nhapSo2_B1').value;
    var num3 = domId('nhapSo3_B1').value;
    var flag;

    if (!isValidInteger(num1) || !isValidInteger(num2) || !isValidInteger(num3)) {
        domId('result1').style.display = 'none'
        return;
    }

    num1 = +num1
    num2 = +num2
    num3 = +num3

    if (num1 > num2) {
        flag = num2;
        num2 = num1;
        num1 = flag;
    }
    if (num2 < num3) {
        flag = num2;
        num2 = num3;
        num3 = flag
    }
    if (num1 > num3) {
        flag = num3;
        num3 = num1;
        num1 = flag;
    }
    domId('result1').style.display = 'block'
    domId('result1').innerHTML = `Thứ tự các số là: ${num1}, ${num3}, ${num2}`;
}

domId('close1').onclick = function () {
    domId('nhapSo1_B1').value = '';
    domId('nhapSo2_B1').value = '';
    domId('nhapSo3_B1').value = '';
    domId('result1').style.display = 'none'
}

// ? End lesson 1


//?  Start lesson 2
domId('btn-2').onclick = function () {
    var result = ''
    var isFather = domId('father').checked;
    var isMother = domId('mother').checked;
    var isBrother = domId('brother').checked;
    var isSister = domId('sister').checked;

    if (!isFather && !isMother && !isBrother && !isSister) {
        domId('result2').style.display = 'none';
        return;
    }

    if (isFather)
        result = 'BỐ';
    if (isMother)
        result = 'MẸ';
    if (isBrother)
        result = 'ANH TRAI';
    if (isSister)
        result = 'EM GÁI';
    domId('result2').innerHTML = `Xin chào! ${result}`;
    domId('result2').style.display = 'block'
}



function uncheckRadio() {
    // Lựa chọn radio button cần bỏ chọn bằng cách sử dụng CSS selector
    var radio = document.querySelector('input[name="selector"]:checked');

    // Nếu có radio được chọn, bỏ chọn nó
    if (radio) {
        radio.checked = false;
    }
}


domId('close2').onclick = function () {
    domId('result2').style.display = 'none'
    uncheckRadio()

}
// ? End lesson 2


//?  Start lesson 3
domId('btn-3').onclick = function () {
    var num1 = domId('nhapSo1_B3').value;
    var num2 = domId('nhapSo2_B3').value;
    var num3 = domId('nhapSo3_B3').value;
    var odd = 0;
    var even = 0;
    if (!isValidInteger(num1) || !isValidInteger(num2) || !isValidInteger(num3)) {
        domId('result3').style.display = 'none'
        return;
    }

    num1 = +num1
    num2 = +num2
    num3 = +num3

    if (num1 % 2 == 0) {
        even++;
    } else {
        odd++;
    }

    if (num2 % 2 == 0) {
        even++;
    } else {
        odd++;
    }

    if (num3 % 2 == 0) {
        even++;
    } else {
        odd++;
    }

    domId('result3').style.display = 'block'
    domId('result3').innerHTML = `Có ${even} chẵn & ${odd} lẻ`

}

domId('close3').onclick = function () {
    domId('nhapSo1_B3').value = '';
    domId('nhapSo2_B3').value = '';
    domId('nhapSo3_B3').value = '';
    domId('result3').style.display = 'none'
}

// ? End lesson 3


//?  Start lesson 4
domId('btn-4').onclick = function () {
    var a = +domId('nhapSo1_B4').value;
    var b = +domId('nhapSo2_B4').value;
    var c = +domId('nhapSo3_B4').value;


    if (!isValidNumber(a) || !isValidNumber(b) || !isValidNumber(c)) {
        domId('result4').style.display = 'none';
        return;
    }
    else if (a === b && b === c) {
        domId('result4').innerHTML = `<span>Tam giác đều: </span><img src="https://globalsymbols.com/uploads/production/image/imagefile/6032/13_6032_8d433852-9a22-4d52-81de-5ddc1d8ffa45.svg" alt="" style="width: 25px; margin-bottom: 3px">`
    } else if (a === b || b === c || a === c) {
        domId('result4').innerHTML = `<span>Tam giác cân: </span><img src="https://globalsymbols.com/uploads/production/image/imagefile/6033/13_6033_970f5f12-9af7-4030-9ae0-754f63ede513.svg" alt="" style="width: 25px; margin-bottom: 3px">`
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        domId('result4').innerHTML = `<span>Tam giác vuông: </span><img src="https://globalsymbols.com/uploads/production/image/imagefile/6035/13_6035_68e31729-061a-4fa2-80e2-b3dc0a20730b.svg" alt="" style="width: 25px; margin-bottom: 5px">`
    } else {
        domId('result4').innerHTML = `<span>Tam giác nhọn: </span><img src="https://globalsymbols.com/uploads/production/image/imagefile/6034/13_6034_406dfaa3-fb3b-409b-be3e-5b800084e8ae.svg" alt="" style="width: 25px; margin-bottom: 3px">`
    }

    domId('result4').style.display = 'block'
}

domId('close4').onclick = function () {
    domId('nhapSo1_B4').value = '';
    domId('nhapSo2_B4').value = '';
    domId('nhapSo3_B4').value = '';
    domId('result4').style.display = 'none'
}
// ? End lesson 4
