function demo() {
    const person = {
        sayHello: function () {
            return ('Hello!')
        }
    }

    const { sayHello: myFn } = person

    console.log(myFn())
}
demo()