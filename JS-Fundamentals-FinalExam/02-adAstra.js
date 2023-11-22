function adAstra(array) {
    let pattern = /([#|\|])(?<item>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
    let totalCalories = 0;
    let foodArr = [];

    let match = pattern.exec(array)

    while (match !== null) {
        if (match.groups && match.groups.item && match.groups.date && match.groups.calories) {
            let { item, date, calories } = match.groups;
            let foodObj = { item: item, date: date, calories: calories };
            foodArr.push(foodObj);
            totalCalories += Number(calories);

            match = pattern.exec(array)
        }
    }

    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    for (let el of foodArr) {
        let [item, date, calories] = Object.entries(el)
        console.log(`Item: ${item[1]}, Best before: ${date[1]}, Nutrition: ${calories[1]}`)

    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])