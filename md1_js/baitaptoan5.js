function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = (Amount * 23000);
    }
    else if (FromC == "VND" && To =="USD"){
        Result = (Amount / 23000);
    }
    else if (FromC == "VND") {
        Result = Amount
    } else {
        Result = Amount
    }
    document.getElementById("Result").innerHTML = Result;
}
