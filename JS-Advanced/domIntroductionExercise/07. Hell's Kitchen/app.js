function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   //["PizzaHut - Peter 500, George 300, Mark 800",
   //"TheLake - Bob 1300, Joe 780, Jane 660"]

   function onClick() {
      let arr = document.querySelector('textarea').value;
      let restOutput = document.querySelector('#bestRestaurant span');
      let workersOutput = document.querySelector('#workers span');
      let restaurants = []

      for (let restaurantInfo of arr) {
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
         let workersInfoArr = workersInfo.split(' ')
         let workersObj = {}
         for (let i = 0; i < workersInfoArr; i += 2) {
            workersObj[workersInfoArr[i]] = Number(workersInfo[i + 1])
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

         for (let entries of restaurants) {
            let currentAvgSalary = entries[1][1]
            if (highestAvgSalary < currentAvgSalary) {
               highestAvgSalary = currentAvgSalary
               bestRestaurant = entries[0][1]
               bestSalary = entries[2][1]
            }
         }
         return `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
      }

      restOutput.textContent = bestRestaurantOutput(restaurants)

      function bestWorkers(bestRestaurant) {
         let findRestaurant = restaurants.find(x => x.name == bestRestaurant)
         let workers = findRestaurant.workers
         let sortedWorkersArr = Object.entries(workers).sort((a, b) => b[0] - a[0]);
         let result = []

         for (let worker of sortedWorkersArr) {
            result.push(`Name: ${worker[0]} With Salary: ${worker[1].toFixed(2)}`)
         }

         return result.join(' ')
      }

      workersOutput.textContent = bestWorkers(bestRestaurant)
   }
}