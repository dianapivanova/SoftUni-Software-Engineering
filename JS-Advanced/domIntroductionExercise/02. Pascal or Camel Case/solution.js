function solve() {
  const CAMEL_CASE = "Camel Case"
  const PASCAL_CASE = "Pascal Case"

  const textRef = document.getElementById('text');
  let textToModify = textRef.value.split(' ')
  const namingConvention = document.getElementById('naming-convention')
  const resultArea = document.getElementById('result')

  let result = ''

  for (let word of textToModify) {

    if (namingConvention.value == CAMEL_CASE) {
      if (result == '') {
        result += word.toLowerCase()
      } else {
        result += word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    } else if (namingConvention.value == PASCAL_CASE) {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase()
    } else {
      result = 'Error!'; break;
    }
  }

  resultArea.textContent = result

}