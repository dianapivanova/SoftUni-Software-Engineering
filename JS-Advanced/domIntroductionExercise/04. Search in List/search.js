function search() {
   let tableRef = document.querySelectorAll('ul li')
   let matches = 0
   let divRes = document.getElementById('result')

   let searchedWord = document.getElementById('searchText')

   for (let row of tableRef) {
      row.style.fontWeight = 'normal'
      row.style.textDecoration = 'none'
   }

   for (let row of tableRef) {
      if (row.textContent.includes(searchedWord.value)) {
         matches++
         row.style.fontWeight = 'bold'
         row.style.textDecoration = 'underline'

      }
   }
   searchedWord.value = ''

   divRes.textContent = `${matches} matches found`
}
