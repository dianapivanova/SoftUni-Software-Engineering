function kathmandu(input) {

    let line = input.shift();

    while (line !== 'Last note') {
        let pattern = /^([A-Za-z0-1!@#$?]+)=(\d+)<<(.+)$/gm;

        let result = pattern.exec(line);


        if (result === null) {
            console.log('Nothing found!')
        } else {
            let len = Number(result[2]);
            let lenCode = Number(result[3].length);
            if (len === lenCode) {
                let patternName = /[A-Za-z]+/gm;

                let validNames = [];
                let validName = null;
                while ((validName = patternName.exec(result[1])) !== null) {
                    validNames.push(validName[0]);
                }

                console.log(`Coordinates found! ${validNames.join('')} -> ${result[3]}`)

            } else {
                console.log('Nothing found!')
            }
        }


        line = input.shift();
    }
}
kathmandu(["!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"])
