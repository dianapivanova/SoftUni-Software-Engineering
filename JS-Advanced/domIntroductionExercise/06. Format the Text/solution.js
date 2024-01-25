function solve() {
  let textToModify = document.getElementById("input").value;
  let sentenceArray = textToModify.split('.')
  sentenceArray = sentenceArray.filter(x => x.length > 0);

  let output = document.getElementById("output");

  let paragraph = []

  for (let sentence of sentenceArray) {
    if (paragraph.length < 3) {
      paragraph.push(sentence)
    } else {
      output.innerHTML += `<p> ${paragraph.join('.')}</p>`
      paragraph = []
      paragraph.push(sentence)
    }
  }

  if (output.innerHTML.length == 0 || paragraph.length > 0) {
    output.innerHTML += `<p>${paragraph.join('.') + "."}</p>`
    paragraph = []

  }


}