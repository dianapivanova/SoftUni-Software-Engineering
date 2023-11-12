function arenaTier(arr) {
    let arena = {}
    let command = arr.shift()

    while (command !== "Ave Cesar" && command !== undefined) {

        if (command.includes(' -> ')) {
            let tokens = command.split(' -> ')
            let name = tokens[0]
            let technique = tokens[1]
            let skill = Number(tokens[2])

            if (!arena.hasOwnProperty(name)) {
                arena[name] = {}
                arena[name][technique] = skill
            } else {
                if (!arena[name].hasOwnProperty(technique) || arena[name][technique] < skill) {
                    arena[name][technique] = skill
                }
            }
        } else {
            let [nameA, nameB] = command.split(' vs ')
            if (arena.hasOwnProperty(nameA) && arena.hasOwnProperty(nameB)) {
                let entriesA = Object.entries(arena[nameA])
                let entriesB = Object.entries(arena[nameB])
                for (let [technique, skill] of entriesA) {
                    for (let [technique1, skill1] of entriesB) {
                        if (technique == technique1) {
                            if (skill > skill1) {
                                delete arena[nameB]
                            } else {
                                delete arena[nameA]
                            }
                        } else {
                            continue;
                        }
                    }
                }
            } else {
                command = arr.shift()
                continue;
            }
        }

        command = arr.shift()

    }


    // Calculate total skill for each gladiator
    let gladiatorsWithTotalSkill = Object.keys(arena).map((gladiator) => {
        let totalSkill = Object.values(arena[gladiator]).reduce((acc, skill) => acc + skill, 0);
        return { name: gladiator, totalSkill: totalSkill, techniques: arena[gladiator] };
    });

    // Sort gladiators by total skill (descending) and then by name (ascending)
    gladiatorsWithTotalSkill.sort((a, b) => {
        if (b.totalSkill !== a.totalSkill) {
            return b.totalSkill - a.totalSkill;
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    // Print the sorted gladiators and their techniques
    for (let gladiator of gladiatorsWithTotalSkill) {
        console.log(`${gladiator.name}: ${gladiator.totalSkill} skill`);
        let sortedTechniques = Object.entries(gladiator.techniques)
            .filter(([key]) => key !== 'totalSkill')
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Gladius vs Julius',
    'Peter vs Gladius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]

)