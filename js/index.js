function domId(id) {
    return document.getElementById(id);
}

function isValidInteger(value) {
    return value !== "" && !isNaN(value) && Number.isInteger(Number(value));
}
//?  Start lesson 1
domId('btn-1').onclick = function () {

    
    var num1 = domId('nhapSo1_B1').value;
    var num2 = domId('nhapSo2_B1').value;
    var num3 = domId('nhapSo3_B1').value;
    var flag;

    if (!isValidInteger(num1) || !isValidInteger(num2) || !isValidInteger(num3) ){
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

    if (isFather)
        result = 'BỐ';
    if (isMother)
        result = 'MẸ'
    if (isBrother)
        result = 'ANH TRAI'
    if (isSister)
        result = 'EM GÁI'
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
    if (!isValidInteger(num1) || !isValidInteger(num2) || !isValidInteger(num3) ){
        domId('result3').style.display = 'none'
        return;
    }

    num1 = +num1
    num2 = +num2
    num3 = +num3

    if (num1 % 2 == 0){
        even++;
    }else{
        odd++;
    }
    
    if (num2 % 2 == 0){
        even++;
    }else{
        odd++;
    }
    
    if (num3 % 2 == 0){
        even++;
    }else{
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