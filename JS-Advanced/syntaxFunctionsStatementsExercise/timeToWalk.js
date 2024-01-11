function timeToWalk(steps, footLength, speed) {
    let distance = steps * footLength
    let speedMInS = speed / 3.6
    let time = distance / speedMInS
    let rest = Math.floor(distance / 500)
    time += rest * 60




    let sec = Math.round(time % 60)
    let min = Math.floor(time / 60)
    let hours = Math.floor(min / 60)

    min -= hours * 60

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(hoursToPrint + ':' + minToPrint + ':' + secToPrint)

}
timeToWalk(4000, 0.60, 5)