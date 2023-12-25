function login(array) {
    let pass = array.shift()
    let numAttempts = 0

    for (let attempt of array) {
        numAttempts++
        let reversedPass = attempt.split('').reverse().join('')
        if (reversedPass == pass) {
            console.log(`User ${pass} logged in.`)
        } else {
            if (numAttempts == 4) {
                console.log(`User ${pass} blocked!`); break;
            }
            console.log(`Incorrect password. Try again.`)

        }

    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])