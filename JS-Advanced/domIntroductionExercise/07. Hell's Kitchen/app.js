function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   //["PizzaHut - Peter 500, George 300, Mark 800",
   //"TheLake - Bob 1300, Joe 780, Jane 660"]

   function onClick() {
      let arr = document.querySelector('textarea').value;
      let modifiedArr = JSON.parse(arr)
      let restOutput = document.querySelector('#bestRestaurant p');
      let workersOutput = document.querySelector('#workers p');
      let restaurants = []

      for (let restaurantInfo of modifiedArr) {
         let [name, workersInfo] = restaurantInfo.split(' - ')
         let findName = restaurants.find(x => x.name == name)
         let workersObj = findWorkersAndSalary(workersInfo);

         if (!findName) {
            let restaurantObj = {
               name: name,
               avgSalary: avgSalary(workersObj),
               bestSalary: bestSalary(workersObj),
               workers: workersObj
            }
            restaurants.push(restaurantObj);
         } else {
            let newWorkers = findWorkersAndSalary(workersInfo);
            let newWorkersObj = { ...findName.workers, ...newWorkers };
            let newAvgSalary = avgSalary(newWorkersObj)
            let newBestSalary = bestSalary(newWorkersObj)
            findName.avgSalary = newAvgSalary
            findName.bestSalary = newBestSalary
            findName.workers = newWorkersObj;
         }

      }

      function findWorkersAndSalary(workersInfo) {
         let workersInfoArr = workersInfo.split(', ')
         let workersObj = {}
         for (let tokens of workersInfoArr) {
            let [employee, salary] = tokens.split(' ')
            salary = Number(salary);
            workersObj[employee] = salary
         }

         return workersObj;
      }

      function avgSalary(workersObj) {
         let sum = 0
         for (let entries of Object.entries(workersObj)) {
            sum += entries[1]
         }
         let avgSalary = sum / Object.entries(workersObj).length;
         return avgSalary
      }

      function bestSalary(workersObj) {
         let bestSalary = 0;
         let sortedSalaries = Object.entries(workersObj).sort((a, b) => b[1] - a[1])
         bestSalary = sortedSalaries[0][1]

         return bestSalary;
      }

      let bestRestaurant = ''

      function bestRestaurantOutput(restaurants) {
         let highestAvgSalary = 0;
         let bestSalary = 0
         let restEntries = restaurants.map(x => Object.entries(x))

         for (let entries of Object.entries(restEntries)) {
            let currentAvgSalary = entries[1][1][1]
            if (highestAvgSalary < currentAvgSalary) {
               highestAvgSalary = currentAvgSalary
               bestRestaurant = entries[1][0][1]
               bestSalary = entries[1][2][1]
            }
         }
         return `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
      }

      restOutput.textContent = bestRestaurantOutput(restaurants)

      function bestWorkers(bestRestaurant) {
         let findRestaurant = restaurants.find(x => x.name == bestRestaurant)
         let workers = findRestaurant.workers
         let sortedWorkersArr = Object.entries(workers).sort((a, b) => b[1] - a[1]);
         let result = []

         for (let worker of sortedWorkersArr) {
            result.push(`Name: ${worker[0]} With Salary: ${worker[1]}`)
         }

         return result.join(' ')
      }

      workersOutput.textContent = bestWorkers(bestRestaurant)
   }
}