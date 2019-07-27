function onSubmit() {
    let khamsin = document.getElementById("50-input").value;
    let asharah= document.getElementById("10-input").value;
    let khamsah = document.getElementById("5-input").value;
    let ithnain = document.getElementById("2-input").value;

    let results = totalAmount(numberOfFifty,numberOfTen,numberOfFive,numberOfTwo);
    document.getElementById('total-output').innerHTML = 'The total amount is ' + results ;

}

let fifty = 50 ;

function numberOfFifty(ikhamsin,fifty) {
    return khamsin * fifty ;
}

let ten = 10 ;

function numberOfTen(asharah,ten) {
    return asharah * ten ;
}

let five = 5 ;

function numberOfFive(khamsah,five) {
    return khamsah * five ;
}

let two = 2 ;

function numberOfTwo(ithnain,two) {
    return ithnain * two ;
}

function totalAmount(numberOfFifty,numberOfTen,numberOfFive,numberOfTwo) {
    return numberOfFifty + numberOfTen + numberOfFive + numberOfTwo ;
}