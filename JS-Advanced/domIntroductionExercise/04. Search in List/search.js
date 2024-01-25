function search() {
   let tableData = Array.from(document.querySelectorAll('ul li'));
   let searchBoxResult = document.getElementById("searchText");
   let result = document.getElementById("result");
   let matches = 0;

   for (let row of tableData) {
      if (row.textContent.includes(searchBoxResult.value)) {
         matches++;
         row.style.fontWeight = "bold"
         row.style.textDecoration = "underline"
      } else {
         row.style.fontWeight = "none"
         row.style.textDecoration = "none"
      }
   }

   result.textContent = `${matches} matches found`
   searchBoxResult.value = ""
}
