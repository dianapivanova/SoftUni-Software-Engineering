window.addEventListener("load", solve);

function solve() {
  const titleRef = document.getElementById("post-title");
  const categoryRef = document.getElementById("post-category");
  const contentRef = document.getElementById("post-content");
  const publishBtn = document.getElementById("publish-btn");
  const reviewSec = document.getElementById("review-list");
  const uploadSec = document.getElementById("published-list");
  publishBtn.addEventListener("click", onDefault);

  const clearBtn = document.getElementById('clear-btn');

  function onDefault(e) {
    e.preventDefault();
    if (
      titleRef.value == "" ||
      categoryRef.value == "" ||
      contentRef.value == ""
    ) {
      return;
    }

    let title = titleRef.value;
    let category = categoryRef.value;
    let content = contentRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let article = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = title;
    let par1 = document.createElement('p');
    par1.textContent = `Category: ${category}`;
    let par2 = document.createElement('p');
    par2.textContent = `Content: ${content}`; 

    article.appendChild(h4El);
    article.appendChild(par1);
    article.appendChild(par2);
    liElement.appendChild(article);
    
    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';

    liElement.appendChild(approveBtn);
    liElement.appendChild(editBtn);

    reviewSec.appendChild(liElement);

    editBtn.addEventListener('click', onEdit);
    approveBtn.addEventListener('click', onApprove);

    titleRef.value = "";
    categoryRef.value = "";
    contentRef.value = "";

    function onEdit(e) {
      liElement.remove();
      titleRef.value = title;
      categoryRef.value = category;
      contentRef.value = content;
    }

    function onApprove(e) {
      liElement.remove();
      Array.from(liElement.querySelectorAll('button')).forEach(x => x.remove());
      uploadSec.appendChild(liElement);

      clearBtn.addEventListener('click', onClear);

      function onClear(e) {
        console.log('works');
        uploadSec.innerHTML = '';
      }
    }
  }
}
