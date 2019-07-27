function onSubmit() {
    let khamsin = parseInt(document.getElementById("50-input").value);
    let asharah= parseInt(document.getElementById("10-input").value);
    let khamsah = parseInt(document.getElementById("5-input").value);
    let ithnain = parseInt(document.getElementById("2-input").value);

    let results = totalAmount(khamsin,asharah,khamsah,ithnain);
    document.getElementById('total-output').innerHTML = 'The total amount is ' + results ;
    return false;

}

let fifty = 50 ;

function numberOfFifty(khamsin,fifty) {
    return parseInt(khamsin) * parseInt(fifty) ;
}

let ten = 10 ;

function numberOfTen(asharah,ten) {
    return parseInt(asharah) * parseInt(ten) ;
}

let five = 5 ;

function numberOfFive(khamsah,five) {
    return parseInt(khamsah) * parseInt(five) ;
}

let two = 2 ;

function numberOfTwo(ithnain,two) {
    return parseInt(ithnain) * parseInt(two) ;
}

function totalAmount(numberOfFifty,numberOfTen,numberOfFive,numberOfTwo) {
    return numberOfFifty * 50 + numberOfTen * 10 + numberOfFive * 5 + numberOfTwo * 2 ;
}