function CtoF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + ' C is ' + cToFahr + ' F.';
    console.log(message);
}
CtoF(60);
