function notify(message) {
  let divRef = document.getElementById('notification');
  divRef.textContent = message
  divRef.style.display = 'block';
  divRef.addEventListener('click', hideIt);


  function hideIt(e) {
    e.target.style.display = 'none'
  }

}