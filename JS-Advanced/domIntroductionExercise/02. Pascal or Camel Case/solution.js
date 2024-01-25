function solve() {
  const CAMEL_CASE = "Camel Case"
  const PASCAL_CASE = "Pascal Case"

  let textAreaValue = document.getElementById("text").value;
  let conventionAreaValue = document.getElementById("naming-convention").value;
  let resultArea = document.getElementById("result");

  let textToAdjust = textAreaValue.toLowerCase().split(' ')

  let result = ""

  if (conventionAreaValue !== CAMEL_CASE && conventionAreaValue !== PASCAL_CASE) {
    resultArea.textContent = "Error!"; return;
  }

  if (conventionAreaValue == CAMEL_CASE) {
    for (let word of textToAdjust) {
      if (result == "") {
        result += word
      } else {
        result += word[0].toUpperCase() + word.slice(1)
      }
    }

  } else if (conventionAreaValue == PASCAL_CASE) {
    for (let word of textToAdjust) {
      result += word[0].toUpperCase() + word.slice(1)
    }
  }

  resultArea.textContent = result;

}