function createPattern(to) {
    numbers = [];
    multiple = 1;
    base = 0;

    while (base <= to) {
        for(let i = 0; i < 6; i++) {
            numbers.push(base);
            if(i !== 5) {
                base = base + 1;
            }
        }

        base = base + 5 * multiple;
        multiple++;
    }

    return numbers;
}

function getNumbers(from, to) {
    numbers = createPattern(to);
    output = [];

    if(from >=0 && from < to) {
        numbers.forEach((number) => {
            if(number >= from && number <= to) {
                output.push(number);
            }
        })

        return output;
    }

    else {
        return 'invalid input';
    }
}

exports.createPattern = createPattern;
exports.getNumbers = getNumbers;
