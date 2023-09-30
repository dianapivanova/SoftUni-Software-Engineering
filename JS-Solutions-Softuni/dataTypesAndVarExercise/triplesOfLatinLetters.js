function triples(num) {


    for (let i = 0; i < num; i++) {
        let letter1 = String.fromCharCode(97 + i)
        for (let y = 0; y < num; y++) {
            let letter2 = String.fromCharCode(97 + y)
            for (let z = 0; z < num; z++) {
                let letter3 = String.fromCharCode(97 + z)
                console.log(letter1 + letter2 + letter3);
            }
        }
    }

}
triples(3)