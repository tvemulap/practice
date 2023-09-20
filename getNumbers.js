function createPattern(max) {
    pattern = [];
    numToAdd = 0;
    multiple = 1;

    while (numToAdd <= max) {
        for(let i = 0; i < 6; i++) {
            if(numToAdd <= max) {
                pattern.push(numToAdd);

                if(i !== 5) {
                    numToAdd++;
                }
            }
        }

        numToAdd = numToAdd + (5 * multiple);
        multiple++;
    }

    return pattern;
}

function getNumbers(from, to) {
    numbers = [];
    pattern = createPattern(to);

    try {
        if(from < 0) throw "invalid input";
        if(to < 0) throw "invalid input";
        if(from >= to) throw "invalid input";

        pattern.forEach((number) => {
            if(number >= from && number <= to) {
                numbers.push(number);
            }
        });

        return numbers;
    }

    catch(err) {
        return err;
    }
}

exports.createPattern = createPattern;
exports.getNumbers = getNumbers;