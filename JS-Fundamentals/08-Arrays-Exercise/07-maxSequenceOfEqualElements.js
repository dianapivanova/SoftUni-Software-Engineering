function maxSequence(arr) {
    let maxSeq = []

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        let currentSeq = []
        currentSeq.push(currentNum)

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j]

            if (nextNum == currentNum) {
                currentSeq.push(nextNum)
            } else {
                break;
            }


        }

        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq
        }

    }
    console.log(maxSeq.join(" "))
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])