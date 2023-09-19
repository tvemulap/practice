function aroundTwenty() {
    numbers = [];
    for(let i = 0; i <= 50; i++) {
        if(i < 31 || i > 40) {
            if(i <= 19) {
                for(let j = 0; j < 6; j++) {
                    numbers.push(i);
                    i = i+1;
                }

                i = i + 3;
            }
            if(i > 20 && i < 51) {
                i = i + 4;

                for(let j = 0; j < 6; j++) {
                    numbers.push(i);
                    i = i+1;
                }
            }
        }

    }
    console.log(numbers);
    return numbers;
}

function getNumbers(from, to) {
    numbers = aroundTwenty();
    output = [];

    numbers.forEach((number) => {
        if(number >= from && number <= to) {
            output.push(number);
        }
    })

    return output;
}

exports.aroundTwenty = aroundTwenty;
exports.getNumbers = getNumbers;
