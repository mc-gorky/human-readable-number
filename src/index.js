module.exports = function toReadable (number) {
  const textNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}



if (number <= 20) {
    return textNumbers[number];
}


if (number > 20 && number < 100) {
    let dozens = Math.floor(number/10) * 10;
    let units = number%10;
    if (units === 0){
        return textNumbers[dozens];
    }
    return textNumbers[dozens] + " " + textNumbers[units];
}

if (number >= 100){
    let units = number%10;
    let dozens = Math.floor((number%100)/10) * 10;
    if (number%100 < 20){
        dozens =  number%100;
    }
    let hundreds = Math.floor(number/100);

    
    if (units === 0 && dozens === 0){
        return textNumbers[hundreds] + " hundred";
    }

    if (units === 0){
        return textNumbers[hundreds] + " hundred" + " " + textNumbers[dozens]; 
    }

    if (dozens === 0){
        return textNumbers[hundreds] + " hundred" + " " + textNumbers[units]; 
    }

    if (dozens < 20) {
        return textNumbers[hundreds] + " hundred" + " " + textNumbers[dozens];
    }

    return textNumbers[hundreds] + " hundred" + " " + textNumbers[dozens] + " " + textNumbers[units];
}


}
