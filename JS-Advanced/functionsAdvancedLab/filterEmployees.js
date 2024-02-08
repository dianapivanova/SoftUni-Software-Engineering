function filterEmployees(data, criteriaTuple) {
  let parsedData = JSON.parse(data)


  let employees = [];

  for (let i = 0; i < parsedData.length; i++) {
    let obj = parsedData[i]
    if (criteriaTuple == 'all') {
      employees.push(`${obj['first_name']} ${obj['last_name']} - ${obj['email']}`)
    } else {
      let [criteria, criteriaValue] = criteriaTuple.split('-')
      if (obj[criteria] == criteriaValue) {
        employees.push(`${obj['first_name']} ${obj['last_name']} - ${obj['email']}`)
      }
    }
  }


  for (let i = 0; i < employees.length; i++) {
    console.log(`${i}. ${employees[i]}`)
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
  'all')