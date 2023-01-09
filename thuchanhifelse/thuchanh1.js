function tinhnamnhuan() {
    let year = +document.getElementById('year').value;
    let result;
    if (year % 100 == 0 && year % 400 == 0) {
        result = 'năm nhuận';
    } else if(year % 4 == 0 && year % 100 != 0) {
        result = 'năm nhuận';
    } else {
            result = 'Năm ko nhuận';
        }

    document.getElementById('result').innerHTML = result
}