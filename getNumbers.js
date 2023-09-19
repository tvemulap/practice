function createPattern(to) {
    numbers = [];
    multiple = 1;
    numToAdd = 0;

    while (numToAdd <= to) {
        for(let i = 0; i < 6; i++) {
            numbers.push(numToAdd);
            
            if(i !== 5) {
                numToAdd++;
            }
        }

        numToAdd = numToAdd + 5 * multiple;
        multiple++;
    }

    return numbers;
}

function getNumbers(from, to) {
    numbers = createPattern(to);
    output = [];

    try {
        if(from < 0) throw "invalid input";
        if(to < 0) throw "invalid input";
        if(from >= to) throw "invalid input";

        numbers.forEach((number) => {
            if(number >= from && number <= to) {
                output.push(number);
            }
        })

        return output;
    }

    catch(err) {
        return err;
    }
}

exports.createPattern = createPattern;
exports.getNumbers = getNumbers;
