function arrayModifier(arr) {
    let resultArray = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (command) {
            case 'swap':
                let temp = resultArray[index1];
                resultArray[index1] = resultArray[index2];
                resultArray[index2] = temp;
                break;
            case 'multiply':
                resultArray[index1] = resultArray[index1] * resultArray[index2];
                break;
            case 'decrease':
                resultArray = resultArray.map(x => x - 1);
                break;
        }
    }

    console.log(resultArray.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)