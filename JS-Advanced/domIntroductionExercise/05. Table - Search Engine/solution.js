function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let tableRef = document.querySelectorAll('tbody tr')
      let searchInputRef = document.getElementById('searchField')

      for (let tableRow of tableRef) {
         let isMatch = false;
         let tableData = tableRow.querySelectorAll('td')
         for (let col of tableData) {
            if (col.textContent.includes(searchInputRef.value)) {
               isMatch = true; break;
            }
         }

         if (isMatch) {
            tableRow.classList.add('select')
         } else {
            tableRow.classList.remove('select')
         }
      }
      searchInputRef.value = ''
   }
}