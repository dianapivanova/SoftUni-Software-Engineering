function solve() {

  let textToModify = document.getElementById('input').value;
  let resultArea = document.getElementById('output');

  let sentences = textToModify.split('.').filter(x => x.trim() !== '')

  let result = []
  let paragraph = []

  for (let sentence of sentences) {
    if (paragraph.length < 3) {
      paragraph.push(`${sentence}`)
    } else {
      result.push(`<p>${paragraph.join('.')}.</p>`);
      paragraph = []
      paragraph.push(sentence)
    }
  }

  if (paragraph.length > 0) {
    result.push(`<p>${paragraph.join('.')}.</p>`);
    paragraph = []
  }

  resultArea.innerHTML = result.join('\n')

}