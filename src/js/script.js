const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const form = document.querySelector('form'); // Captura o form



form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  // O método trim() remove os espaços em branco do início e fim da string
  if(inputBox.value.trim() === '') {
    alert('Por favor, insira um item na lista');
    return;
}
  
let newLi = document.createElement('li'); // Cria um novo <li>

// Se a lista estiver vazia, cria o item do zero.
newLi.innerHTML = `
  <div class="item-container"> 
    <input class="input-default-style" type="checkbox" onclick="checkItem(this)">
    <label>${inputBox.value}</label>
    <button class="btn-trash" onclick="removeItem(this)"></button>
  </div>
`;

listContainer.appendChild(newLi); // Adiciona o item na lista
inputBox.value = ''; // Limpa o campo de input

// Atualiza os botões de remoção (Quando adiciona o onClick no HTML já fica setado a função de remoção quando clica no botão)
});

function removeItem(button) {
  button.closest("li").remove();

  // Exibe o componente de item removido
  const displayItemRemoved = document.getElementById("item-removed-alert");

  // Esconde o componente de item removido
  displayItemRemoved.style.display = "flex";
  displayItemRemoved.classList.remove("hide");

  // Desaparece o componente de item removido
  setTimeout(() => {
    displayItemRemoved.classList.add("hide");
    setTimeout(() => {
      displayItemRemoved.style.display = "none";
      displayItemRemoved.classList.remove("hide");
    }, 500);
  }, 1000);
}

// Quando clica na checkbox, marca o item como feito
function checkItem(input) {
  if(input.checked) {
    input.closest("li").style.textDecoration = "line-through";
  } else {
    input.closest("li").style.textDecoration = "none";
  }
}