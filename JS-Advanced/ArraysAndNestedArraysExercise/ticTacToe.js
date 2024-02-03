function ticTacToe(data) {

    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayerMove = true;
    for (let turn of data) {
        let [row, column] = turn.split(' ')
        let marker = ''

        if (initDashboard[row][column] == false) {
            if (isFirstPlayerMove) {
                initDashboard[row][column] = 'X'
                marker = 'X'
            } else {
                initDashboard[row][column] = 'O'
                marker = 'O'
            }
        } else {
            console.log('This place is already taken. Please choose another!'); continue;
        }

        if (victory(marker)) {
            if (isFirstPlayerMove) {
                console.log(`Player ${"X"} wins!`)
            } else {
                console.log(`Player ${"O"} wins!`)
            }; break;
        }

        if (freeBoardSpace(initDashboard) == false) {
            console.log('The game ended! Nobody wins :('); break;
        }


        isFirstPlayerMove = !isFirstPlayerMove
    }

    function victory(marker) {
        for (let i = 0; i < initDashboard.length; i++) {
            if (initDashboard[i][0] == marker
                && initDashboard[i][1] == marker
                && initDashboard[i][2] == marker) {
                return true;
            } else if (initDashboard[0][i] == marker
                && initDashboard[1][i] == marker
                && initDashboard[2][i] == marker) {
                return true;
            } else if (initDashboard[0][0] == marker
                && initDashboard[1][1] == marker
                && initDashboard[2][2] == marker) {
                return true;
            } else if (initDashboard[0][2] == marker
                && initDashboard[1][1] == marker
                && initDashboard[2][0] == marker) {
                return true;
            }
        }
    }

    function freeBoardSpace(initDashboard) {
        for (let row = 0; row < initDashboard.length; row++) {
            if (initDashboard[row].includes(false)) {
                return true
            }
        }

        return false;
    }

    initDashboard.forEach(x => console.log(x.join('\t')))

}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)