module.exports = function toReadable(number) {
    const numberWords = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const numberTensWords = [
        "-",
        "-",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number <= 20) return numberWords[number];
    const numberArray = [...`${number}`];
    if (number > 20 && number < 100) {
        return `${numberTensWords[+numberArray[0]]} ${
            +numberArray[1] === 0 ? "" : numberWords[+numberArray[1]]
        }`.trim();
    }

    const hundredNumber = +numberArray.splice(0, 1).join("");
    const remainedNumbers = +numberArray.join("");

    if (remainedNumbers <= 20)
        return `${numberWords[hundredNumber]} hundred ${
            remainedNumbers === 0 ? "" : numberWords[remainedNumbers]
        }`.trim();

    const remainedNumbersArray = [...`${remainedNumbers}`];

    return `${numberWords[hundredNumber]} hundred ${
        numberTensWords[+remainedNumbersArray[0]]
    } ${
        +remainedNumbersArray[1] === 0
            ? ""
            : numberWords[+remainedNumbersArray[1]]
    }`.trim();
};
