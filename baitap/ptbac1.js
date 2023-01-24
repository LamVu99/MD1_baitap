function ptbac1() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let result;
    if (a != 0) {
        result = 'phuong trinh co nghiem x =' + -b / a;
    } else if (a == 0 && b == 0) {
result = 'pt vo so nghiem';
    } else {
        result = ' pt vo nghiem';
    }
document.getElementById('result').innerHTML = result;
}