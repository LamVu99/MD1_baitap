function BMI() {
    let weight = document.getElementById('kg').value;
    let height = document.getElementById('height').value;
    let bmi = weight / (height ^ 2);
    let result;
    if (bmi < 18) {
        result = "Underweight";
    } else if (bmi < 25.0) {
         result = "Normal";
    } else if (bmi < 30.0) {
         result = "Overweight";
    } else {
         result = "Obese";
    }
document.getElementById('result').innerHTML = result;
}



