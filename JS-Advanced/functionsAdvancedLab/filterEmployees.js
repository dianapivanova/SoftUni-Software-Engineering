function filterEmployees(data, criteriaTuple) {
    let parsedData = JSON.parse(data);
    let [key, value] = criteriaTuple.split('-')
    let result = []

    for (let employee of parsedData) {
        if (employee[key] == value) {
            result.push(`${employee['first_name']} ${employee['last_name']} - ${employee['email']}`)
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i]}`)
    }

}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')