function reverse(word) {
    let res = ''

    for (let i = word.length - 1; i >= 0; i--) {
        res += word[i]
    }

    console.log(res)
}
reverse('Hello')