function solve() {

    function fighter(name) {
        let state = {
            name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state, canFight(state))
    }

    function mage(name) {
        let state = {
            name,
            health: 100,
            mana: 100
        }

        return Object.assign(state, canCast(state))
    }

    function canCast(state) {
        return {
            cast: function (spell) {
                console.log(state.name + ' cast ' + spell);
                state.mana--;
            }
        }
    }

    function canFight(state) {
        return {
            fight: function () {
                console.log(state.name + ' slashes at the foe!');
                state.stamina--;
            }
        }
    }

    return { fighter, mage }

}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");


console.log(scorcher2.stamina);
console.log(scorcher.mana);