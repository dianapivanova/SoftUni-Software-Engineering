function create(words) {
   let field = document.getElementById('content');



   for (let word of words) {
      let elDiv = document.createElement('div');
      let par = document.createElement('p')
      par.textContent = word;
      elDiv.appendChild(par);
      par.style.display = 'none'
      elDiv.addEventListener('click', onShow);
      field.appendChild(elDiv);
   }

   function onShow(e) {
      let par = e.target.querySelector('p')
      par.style.display = 'block'
   }

}