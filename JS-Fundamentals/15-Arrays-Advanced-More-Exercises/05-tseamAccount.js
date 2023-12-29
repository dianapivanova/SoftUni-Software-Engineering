function tseamAccount(array) {
    let games = []
    let account = array.shift().split(' ')

    account.forEach(x => games.push(x))

    let command = array.shift()

    while (command !== 'Play!') {

        let [action, game] = command.split(' ')

        if (action == 'Install') {
            if (!games.includes(game)) {
                games.push(game)
            }
        } else if (action == 'Uninstall') {
            if (games.includes(game)) {
                let idx = games.indexOf(game)
                games.splice(idx, 1)
            }
        } else if (action == 'Update') {
            if (games.includes(game)) {
                let idx = games.indexOf(game)
                let movedGame = games[idx]
                games.splice(idx, 1)
                games.push(movedGame)
            }
        } else if (action == 'Expansion') {
            let [expGame, expansion] = game.split('-')
            if (games.includes(expGame)) {
                let idx = games.indexOf(expGame)
                games.splice(idx + 1, 0, `${expGame}:${expansion}`)
            }
        }

        command = array.shift()
    }

    console.log(games.join(' '))
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)