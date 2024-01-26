function create(words) {


   for (let word of words) {

      let divEl = document.createElement('div');
      let pEl = document.createElement('p');
      pEl.style.display = 'none';
      pEl.textContent = word;
      divEl.appendChild(pEl);
      let appendToEl = document.getElementById('content');
      appendToEl.appendChild(divEl);
      divEl.addEventListener("click", onClick);
   }

   function onClick(e) {

      e.target.children[0].style.display = "block"
   }
}