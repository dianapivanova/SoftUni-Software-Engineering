function dictionary(array) {
    let dict = {};
    for (let element of array) {
        let obj = JSON.parse(element);
        let [term, description] = Object.entries(obj)[0]
        dict[term] = description
    }

    let sortedArr = Object.entries(dict).sort((a, b) => (a[0].localeCompare(b[0])))

    for (let entries of sortedArr) {
        console.log(`Term: ${entries[0]} => Definition: ${entries[1]}`)
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])