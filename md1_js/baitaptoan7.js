function phepnhan() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}
function phepchia() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = number1 / number2;
    document.getElementById('result').innerHTML = result;
}