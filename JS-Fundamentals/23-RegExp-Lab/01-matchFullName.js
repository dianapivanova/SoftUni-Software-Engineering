function matchName(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm


    let result = names.match(pattern)

    console.log(result.join(' '))

}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan     Ivanov")