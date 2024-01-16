function ticTacToe(data) {

    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayerPlay = true;

    for (let coordinates of data) {
        let [x, y] = coordinates.split(' ')
        x = Number(x)
        y = Number(y)

        if (initDashboard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        let marker = isFirstPlayerPlay ? 'X' : 'O';
        initDashboard[x][y] = marker;

        if (checkWin(initDashboard, marker)) {
            console.log(`Player ${marker} wins!`)
            return printDashboard(initDashboard)
        }

        if (!checkFreeSpace(initDashboard)) {
            console.log(`The game ended! Nobody wins :(`)
            return printDashboard(initDashboard)
        }

        isFirstPlayerPlay = !isFirstPlayerPlay
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] == marker
                && dashboard[i][1] == marker
                && dashboard[i][2] == marker) {
                return true;
            } else if (dashboard[0][i] == marker
                && dashboard[1][i] == marker
                && dashboard[2][i] == marker) {
                return true;
            } else if (dashboard[0][0] == marker
                && dashboard[1][1] == marker
                && dashboard[2][2] == marker) {
                return true;
            } else if (dashboard[0][2] == marker
                && dashboard[1][1] == marker
                && dashboard[2][0] == marker) {
                return true;
            }
        }
    }

    function checkFreeSpace(dashboard) {
        return !!dashboard.flat().filter(x => !x).length
    }

    function printDashboard(initDashboard) {
        initDashboard.forEach(row => console.log(row.join('\t')))
    }

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