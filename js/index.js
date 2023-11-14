function domId(id) {
    return document.getElementById(id);
}



//?  Start lesson 1
domId('btn-1').onclick = function () {
    var num1 = +domId('nhapSo1_B1').value;
    var num2 = +domId('nhapSo2_B1').value;
    var num3 = +domId('nhapSo3_B1').value;
    var flag;

    if (num1 == "" || isNaN(num1) || num2 =="" || isNaN(num2) || num3 ==""|| isNaN(num3)) {
        domId('result1').style.display = 'none'
        return;
    }


    if(num1>num2){
        flag = num2;
        num2 = num1;
        num1 = flag;
    }
    if(num2<num3){
        flag = num2;
        num2 = num3;
        num3 = flag
    }
    if(num1>num3){
        flag = num3;
        num3 = num1;
        num1 = flag;
    }
    domId('result1').style.display = 'block'
    domId('result1').innerHTML = `Thứ tự các số là: ${num1}, ${num3}, ${num2}`;
}

// ? End lesson 1