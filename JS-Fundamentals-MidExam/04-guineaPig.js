function guineaPig(arr) {

    let food = Number(arr[0])
    let hay = Number(arr[1])
    let cover = Number(arr[2])
    let puppyWeight = Number(arr[3])
    let isRanOf = false

    for (let i = 1; i <= 30; i++) {
        food -= 0.3

        if (i % 2 == 0) {
            hay -= food * 0.05
        }

        if (i % 3 == 0) {
            cover -= puppyWeight / 3
        }

        if (food < 0 || hay < 0 || cover < 0) {
            console.log('Merry must go to the pet store!');
            isRanOf = true; break
        }
    }

    if (!isRanOf) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
}
guineaPig(["1",
    "1.5",
    "3",
    "1.5"])
