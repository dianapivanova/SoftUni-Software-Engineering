function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let tableRows = Array.from(document.querySelectorAll('tbody tr'))
   let searchRef = document.getElementById('searchField')

   function onClick() {

      let searchedWord = searchRef.value

      for (let tableRow of tableRows) {
         let tableCols = Array.from(tableRow.querySelectorAll('td'))
         for (let col of tableCols) {
            if (col.textContent.includes(searchedWord)) {
               tableRow.classList.add('select'); break;
            } else {
               tableRow.classList.remove('select');
            }
         }
      }

      searchRef.value = "";
   }


}