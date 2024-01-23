function solve() {
  let textReference = document.getElementById('text')
  let conventionRef = document.getElementById('naming-convention')
  let result = ''

  let textArr = textReference.value.toLowerCase().split(' ')

  for (let word of textArr) {
    if (conventionRef.value == 'Camel Case') {
      if (result == '') {
        result += word
      } else {
        result += word[0].toUpperCase() + word.slice(1)
      }
    } else if (conventionRef.value == 'Pascal Case') {
      result += word[0].toUpperCase() + word.slice(1)
    } else {
      result = 'Error!'
    }
  }

  let resultArea = document.getElementById('result')
  resultArea.textContent = result

}