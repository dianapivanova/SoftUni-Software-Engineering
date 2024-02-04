
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21,
                car.tempSettings = 21,
                car.adjustTemp = function () {
                    if (car.temp < car.tempSettings) {
                        car.temp++
                    } else if (car.temp > car.tempSettings) {
                        car.temp--;
                    }
                }
        },
        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null
            },
                car.nowPlaying = function () {
                    if (car.currentTrack.name !== null && car.currentTrack.artist !== null) {
                        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`)
                    }
                }
        },
        hasParktronic(car) {
            car.checkDistance = function distance(number) {
                if (number < 0.1) {
                    console.log("Beep! Beep! Beep!")
                } else if (number >= 0.1 && number < 0.25) {
                    console.log("Beep! Beep!")
                } else if (number >= 0.25 && number < 0.5) {
                    console.log("Beep!")
                } else {
                    console.log('')
                }
            }

        }
    }
}

assemblyLine.hasClima(myCar);
assemblyLine.hasAudio(myCar);
assemblyLine.hasParktronic(myCar)
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar);

