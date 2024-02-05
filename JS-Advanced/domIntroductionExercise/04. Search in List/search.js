function search() {
   let matches = 0;
   let tableRef = document.querySelectorAll('#towns li')

   let searchText = document.getElementById('searchText')
   let matchResult = document.getElementById('result');

   for (let el of tableRef) {
      if (el.textContent.includes(searchText.value)) {
         matches++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline'
      } else {
         el.style.fontWeight = 'none'
         el.style.textDecoration = 'none'
      }
   }

   matchResult.textContent = `${matches} matches found`
   searchText.value = ''
}
