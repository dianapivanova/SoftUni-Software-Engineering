function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableArr = Array.from(document.querySelectorAll('tbody tr'))
      let searchedWord = document.getElementById("searchField")


      for (let row of tableArr) {
         let isSelected = false;
         let tableData = row.getElementsByTagName('td')

         for (let data of tableData) {
            if (data.textContent.includes(searchedWord.value)) {
               row.classList.add('select'); isSelected = true; break;
            }
         }

         if (!isSelected) {
            row.classList.remove('select')
         }
      }
      searchedWord.value = ''
   }


}