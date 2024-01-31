function calculator() {

    debugger
    const html = {
        n1: '',
        n2: '',
        res: ''
    }

    return {
        init: (selector1, selector2, resultSelector) => {
            html.n1 = document.querySelector(selector1);
            html.n2 = document.querySelector(selector2);
            html.res = document.querySelector(resultSelector)
        },
        add: () => html.res.value = Number(html.n1.value) + Number(html.n2.value),
        subtract: () => html.res.value = Number(html.n1.value) - Number(html.n2.value)
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





