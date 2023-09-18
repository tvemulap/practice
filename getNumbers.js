function getNumbers(from, to) {
    numbers = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
        25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50];
    
    output = [];

    numbers.forEach((number) => {
        if(number >= from && number <= to) {
            output.push(number);
        }
    })

    return output;
}

exports.getNumbers = getNumbers;
