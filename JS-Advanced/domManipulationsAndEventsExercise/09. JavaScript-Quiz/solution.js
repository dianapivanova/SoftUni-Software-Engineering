function solve() {
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswers = 0;
  let index = 0

  Array.from(document.querySelectorAll('.answer-text'))
    .map(x => x.addEventListener('click', nextSection))

  function nextSection(e) {
    if (correctAnswers.includes(e.target.textContent)) {
      rightAnswers++
    }

    let currentSection = document.querySelectorAll('section')[index]
    currentSection.style.display = 'none';

    let nextSection = document.querySelectorAll('section')[index + 1]
    if (nextSection !== undefined) {
      nextSection.style.display = 'block'
      index++
    } else {
      let finalSection = document.querySelector('#results h1')
      document.querySelector('#results').style.display = 'block'
      if (rightAnswers !== 3) {
        finalSection.textContent = `You have ${rightAnswers} right answers`
      } else {
        finalSection.textContent = 'You are recognized as top JavaScript fan!'
      }
    }
  }
}
