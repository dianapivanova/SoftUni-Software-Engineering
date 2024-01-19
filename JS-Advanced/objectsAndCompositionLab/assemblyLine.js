
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine() {
    function hasClima(car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
            if (car.temp < car.tempSettings) {
                car.temp += 1
            } else if (car.temp > car.tempSettings) {
                car.temp -= 1
            }
        }
    }

    function hasAudio(car) {
        car.currentTrack = { name: null, artist: null };
        car.nowPlaying = function () {
            if (currentTrack.name !== null && currentTrack.artist !== null) {
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
            }
        }
    }

    function hasParktronic(car) {
        car.checkDistance = function (number) {
            if (number < 0.1) {
                console.log('Beep! Beep! Beep!')
            } else if (number >= 0.1 && number < 0.25) {
                console.log('Beep! Beep!')
            } else if (number >= 0.25 && number < 0.5) {
                console.log('Beep')
            } else {
                console.log('')
            }
        }
    }

    return { hasClima, hasAudio, hasParktronic }
}

assemblyLine.hasClima(myCar);
assemblyLine.hasAudio(myCar);


console.log(myCar);
