const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const btnAction = document.querySelector('#add-button');

btnAction.addEventListener('click', (e) => {
  e.preventDefault();
  
  const firstLi = document.querySelector('li>div'); // Captura o primeiro <li> existente
  
  if (inputBox.value === '') {
    alert('Por favor, insira um item na lista');
  } else {
    let newLi = document.createElement('li');

    if (firstLi) {
      // Se já houver um item na lista, clona o primeiro
      const clonedLi = firstLi.cloneNode(true);
      newLi.appendChild(clonedLi);
    } else {
      // Se a lista estiver vazia, cria o item do zero
      newLi.innerHTML = `
        <input type="checkbox">
        <label>${inputBox.value}</label>
        <button><img src="./assets/icons/trash.svg" alt=""></button>
      `;
    }

    // Atualiza o texto do <label>
    newLi.querySelector('label').textContent = inputBox.value;
    
    // Adiciona o novo item à lista
    listContainer.appendChild(newLi);
    
    // Limpa o input
    inputBox.value = '';

    // Atualiza os botões de remoção
    updateRemoveButtons();
  }
});

function updateRemoveButtons() {
  const btnRemove = document.querySelectorAll('li button');
  btnRemove.forEach((btn) => {
    btn.onclick = () => {
      btn.closest('li').remove();
    };
  });
}
