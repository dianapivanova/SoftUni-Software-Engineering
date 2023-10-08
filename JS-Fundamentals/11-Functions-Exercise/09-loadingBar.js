function loadingBar(num) {

    if (num == 100) {
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    } else {
        console.log(`${num}% [${percentageLoaded(num)}]`)
        console.log('Still loading...')
    }

    function percentageLoaded(number) {
        let result = ''
        for (let i = 10; i <= 100; i += 10) {
            if (i <= num) {
                result += '%'
            } else {
                result += '.'
            }
        }
        return result;
    }

}
loadingBar(10)