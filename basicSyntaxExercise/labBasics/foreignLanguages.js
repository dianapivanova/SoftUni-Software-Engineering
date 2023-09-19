function solve(country) {
    if (country == 'England' || country == 'USA') {
        console.log('English')
    } else if (country === 'Mexico' || country == 'Spain' || country == 'Argentina') {
        console.log('Spanish')
    } else {
        console.log('unknown')
    }

}
solve('Germany')