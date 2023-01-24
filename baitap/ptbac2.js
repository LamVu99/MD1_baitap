function ptbac2() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = b * b - 4 * a * c;
    let result;
    if (delta < 0) {
        result = 'pt vo nghiem';
    } else if (delta == 0) {
        result = 'pt co nghiem kep x1 = x2 =' + -b / 2 * a;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = 'pt co 2 nghiem phan biet x1 = ' + x1 + ' va x2 = ' + x2;
    }
    document.getElementById('result').innerHTML = result;
}