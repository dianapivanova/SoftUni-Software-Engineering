function calculator() {
    let obj = {
        n1: '',
        n2: '',
        res: ''
    }
    return {
        init: (selector1, selector2, resultSelector) => {
            obj.n1 = document.querySelector(selector1)
            obj.n2 = document.querySelector(selector2);
            obj.res = document.querySelector(resultSelector);
        },
        add: () => {
            obj.res.value = Number(obj.n1.value) + Number(obj.n2.value);
        },
        subtract: () => {
            obj.res.value = Number(obj.n1.value) - Number(obj.n2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





