module.exports = function toReadable (number) {
    const oneNumbToWord = {
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
    };

    const twoNumbToWord = {
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
    };

    const tensToWord = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number < 10) {
        return oneNumbToWord[number];
    } else if (number < 20) {
        return twoNumbToWord[number];
    } else if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const ones = number % 10;
        return tensToWord[tens] + (ones !== 0 ? ' ' + oneNumbToWord[ones] : '');
    } else {
        const hundred = Math.floor(number / 100);
        const restNumb = number % 100;
        let result = oneNumbToWord[hundred] + ' hundred';
        if (restNumb !== 0) {
            if (restNumb < 10) {
                result += ' ' + oneNumbToWord[restNumb];
            } else if (restNumb < 20) {
                result += ' ' + twoNumbToWord[restNumb];
            } else {
                const tens = Math.floor(restNumb / 10) * 10;
                const ones = restNumb % 10;
                result += ' ' + tensToWord[tens] + (ones !== 0 ? ' ' + oneNumbToWord[ones] : '');
            }
        } 
        return result;
    }
  
}
