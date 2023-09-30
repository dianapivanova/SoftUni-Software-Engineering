function trekking(input) {

    let groups = Number(input[0]);
    let musala = 0
    let monblan = 0
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0

    for (let index = 1; index < input.length; index++) {
        let currentRow = Number(input[index])

        if (currentRow <= 5) {
            musala += currentRow
        } else if (currentRow >= 6 && currentRow <= 12) {
            monblan += currentRow
        } else if (currentRow >= 13 && currentRow <= 25) {
            kilimanjaro += currentRow
        } else if (currentRow >= 26 && currentRow <= 40) {
            k2 += currentRow
        } else {
            everest += currentRow
        }

    }

    let totalPeople = musala + monblan + kilimanjaro + k2 + everest

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}
trekking()