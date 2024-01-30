function solution() {
    let internalStr = ''
    return {
        append: (string) => internalStr += string,
        removeStart: (n) => internalStr = internalStr.slice(n),
        removeEnd: (n) => internalStr = internalStr.slice(0, internalStr.length - n),
        print: () => console.log(internalStr)
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();



