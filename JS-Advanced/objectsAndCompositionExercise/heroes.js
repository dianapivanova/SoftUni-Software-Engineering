function solve() {

    function fighter(name) {
        let state = {
            name: name,
            health: 100,
            stamina: 100,
        }
        return Object.assign(state, canFight(state))
    }

    function mage(name) {
        let state = {
            name: name,
            health: 100,
            mana: 100,
        }
        return Object.assign(state, canCast(state))
    }

    function canFight(state) {
        return {
            fight() {
                state.stamina -= 1
                console.log(`${state.name} slashes at the foe!`)
            }
        }
    }

    function canCast(state) {
        return {
            cast(spell) {
                state.mana -= 1;
                console.log(`${state.name} cast ${spell}`)
            }
        }
    }

    return { fighter, mage }

}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
