function guineaPig(arr) {
    let food = Number(arr[0])
    let hay = Number(arr[1])
    let cover = Number(arr[2])
    let puppyWeight = Number(arr[3])


    for (let day = 1; day <= 30; day++) {
        food -= 0.3
        if (food <= 0) {
            console.log(`Merry must go to the pet store!`); break;
        }

        if (day % 2 == 0) {
            hay -= food * 0.05
            if (hay <= 0) {
                console.log(`Merry must go to the pet store!`); break;
            }
        }
        if (day % 3 == 0) {
            cover -= puppyWeight / 3
            if (cover <= 0) {
                console.log(`Merry must go to the pet store!`); break;
            }
        }
    }

    if (food >= 0 && hay >= 0 && cover >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
}
guineaPig(["10",
    "5",
    "5.2",
    "1"])

