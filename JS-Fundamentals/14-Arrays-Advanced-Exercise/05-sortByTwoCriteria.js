function sorting(arr) {
    arr.sort((a, b) => (a.length - b.length) || a.localeCompare(b))

    console.log(arr)

}
sorting(['alpha', 'beta', 'gamma'])