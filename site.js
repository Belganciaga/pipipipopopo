const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

function startCarousel() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000); // Muda de slide a cada 3 segundos (3000 milissegundos)
}

showSlide(currentSlide);
startCarousel();

function updateSliderValue(value) {
    document.documentElement.style.setProperty('--val', value + '%');
    document.getElementById('amor-valor').textContent = value + '%';
  }

// ... Seu código JavaScript existente ...

const amorSlider = document.getElementById("amor-slider");
const amorValor = document.getElementById("amor-valor");
const enviarAmorBtn = document.getElementById("enviar-amor");

amorSlider.addEventListener("input", () => {
  const valor = amorSlider.value;
  amorValor.textContent = valor;
});

function updateBattery(value) {
    const batteryLevel = document.querySelector('.battery-level');
    const batteryPercentage = document.querySelector('.battery-percentage');
    batteryLevel.style.setProperty('--battery-level', `${value}%`);
    batteryPercentage.textContent = `${value}%`;
  }
  
  updateBattery(50); // Define o nível inicial da bateria como 50%
  
  

enviarAmorBtn.addEventListener("click", () => {
  const nivelAmor = parseInt(amorSlider.value);

  let mensagem;
  if (nivelAmor < 50) {
    mensagem = "Meu nível de amor está baixo, precisamos conversar.";
  } else {
    mensagem = "Você tem sido uma namorada incrível, obrigado por tudo.";
  }

  const link = `https://wa.me/5531986604077?text=${encodeURIComponent(mensagem)}`;
  window.location.href = link;
});



// Data e horário de referência (ano, mês (0 a 11), dia, horas, minutos, segundos)
const referenceDateTime = new Date(2023, 3, 19, 13, 18, 0); // 1 de janeiro de 2023, 12:00:00

// Função para calcular o tempo decorrido
function calculateElapsedTime() {
    const currentDateTime = new Date();
    const timeDiff = currentDateTime - referenceDateTime;

    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // Média de dias por mês
    const months = Math.floor(timeDiff / millisecondsPerMonth);
    const days = Math.floor((timeDiff % millisecondsPerMonth) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores
    document.getElementById("months").textContent = String(months).padStart(2, "0");
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Chama a função inicialmente e a cada segundo
calculateElapsedTime();
setInterval(calculateElapsedTime, 1000);


//CAIXINHA

// Seleção de elementos da caixinha financeira
const monthlySavingInput = document.getElementById("monthly-saving");
const updateButton = document.getElementById("update-button");
const economizedSpan = document.getElementById("economized");
const progressSpan = document.getElementById("progress");
const metaElement = document.getElementById("meta");

// Definição da meta inicial e valor total economizado
let targetAmount = 250;
let totalSaved = parseFloat(localStorage.getItem("totalSaved")) || 0;

// Atualização da caixinha financeira
function updateUI() {
    economizedSpan.textContent = `R$ ${totalSaved.toFixed(2)}`;
    const progressPercentage = (totalSaved / targetAmount) * 100;
    progressSpan.textContent = `${progressPercentage.toFixed(2)}%`;
    metaElement.textContent = `R$ ${targetAmount.toFixed(2)}`;
}

updateUI();

// Atualização da economia mensal
updateButton.addEventListener("click", () => {
    const monthlySaving = parseFloat(monthlySavingInput.value);

    if (!isNaN(monthlySaving)) {
        totalSaved += monthlySaving;
        localStorage.setItem("totalSaved", totalSaved);
        updateUI();
    }
});

// Seleção de elementos do pop-up
const icon = document.getElementById("icon");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("close-popup");
const adicionarMetaBtn = document.getElementById("adicionar-meta");
const novaMetaInput = document.getElementById("nova-meta");
const novoValorInput = document.getElementById("novo-valor");

// Abertura do pop-up ao clicar no ícone
icon.addEventListener("click", function() {
    popup.style.display = "block";
});

// Fechamento do pop-up ao clicar no botão de fechar
closePopupBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// Adição de nova meta ao clicar no botão "Adicionar"
adicionarMetaBtn.addEventListener("click", function() {
  const novaMeta = novaMetaInput.value;
  const novoValor = parseFloat(novoValorInput.value);

  if (novaMeta && !isNaN(novoValor)) {
      targetAmount += novoValor;
      localStorage.setItem("targetAmount", targetAmount); // Armazenar a nova meta no Local Storage
      addMetaToList(novaMeta, novoValor); // Adicionar a nova meta à lista
      updateUI();
      popup.style.display = "none";
      novaMetaInput.value = "";
      novoValorInput.value = "";
  }
});

// Função para adicionar uma meta à lista
// Função para inicializar a lista de metas

// Função para inicializar a lista de metas


function addMetaToList(nomeMeta, valorMeta) {

  
  const metaList = document.getElementById("meta-list");
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");

  listItem.textContent = `${nomeMeta}: R$ ${valorMeta.toFixed(2)}`;
  removeButton.textContent = "Remover";
  removeButton.classList.add("remove-button");

  listItem.appendChild(removeButton);
  metaList.appendChild(listItem);

  // Adicionar evento de remoção ao botão "Remover"
  removeButton.addEventListener("click", function() {
      removeMetaFromList(listItem, valorMeta);
  });
}
// Função para remover uma meta da lista
function removeMetaFromList(listItem, valorMeta) {
  const metaList = document.getElementById("meta-list");
  metaList.removeChild(listItem);

  targetAmount -= valorMeta;
  localStorage.setItem("targetAmount", targetAmount); // Atualizar a meta no Local Storage
  updateUI();
}


//https://wa.me/5531986604077?text=sua+namorada+prescisa+de+1+2+3+4+5+6+7+....
//document.getElementById("send-button").addEventListener("click", function () {
  //const checkboxes = document.querySelectorAll("input[name='needs[]']:checked");
  //const selectedNeeds = Array.from(checkboxes).map(checkbox => checkbox.value);

 // if (selectedNeeds.length > 0) {
      //const message = "Sua namorada precisa de: " + selectedNeeds.join(",");
      //const encodedMessage = encodeURIComponent(message);
      //const whatsappLink = "https://wa.me/5531986604077?text=" + encodedMessage;

     // window.location.href = whatsappLink;
  //} else {
     // alert("Selecione pelo menos uma opção!");
 // }
//})

document.addEventListener("DOMContentLoaded", function () {
  const thaisCard = document.getElementById("thais-card");
  const emilyCard = document.getElementById("emily-card");

  thaisCard.addEventListener("click", function () {
    redirectToWhatsApp("5531989213118");
  });

  emilyCard.addEventListener("click", function () {
    // Coloque o número correto para Emily no próximo linha
    redirectToWhatsApp("5531986604077");
  });

  document.getElementById("send-button").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("input[name='needs[]']:checked");
    const selectedNeeds = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (selectedNeeds.length > 0) {
      openPersonSelectionPopup();
    } else {
      alert("Selecione pelo menos uma opção!");
    }
  });
});

function redirectToWhatsApp(phoneNumber) {
  const selectedNeeds = getSelectedNeeds(); // Substitua esta linha pela chamada correta à função que obtém as necessidades selecionadas.
  
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  
  const message = `Central Luiza Mel informa:

Prezada namorada,

Assunto: Notificação de Acusação e Solicitação de Cooperação

Por meio deste comunicado, informamos que a Central Luiza Mel está conduzindo uma investigação em relação a alegações graves. Você está sendo alvo de acusações relacionadas aos seguintes delitos: abandono de incapaz, tortura (mediante privação alimentar) e negação de assistência emocional.

Solicitamos, de maneira veemente, que coopere com as autoridades e ofereça à sua namorada as seguintes necessidades:${selectedNeeds}. Não cumprir essas diretrizes pode resultar em consequências legais, incluindo multas substanciais e possivelmente prisão.

Diretrizes a serem seguidas:
${formatSelectedNeedsList(selectedNeeds)}

Reiteramos a seriedade deste assunto e a necessidade de sua total colaboração. Caso tenha dúvidas ou precise de mais informações, entre em contato com a Central Luiza Mel.

Atenciosamente,
Central Luiza Mel
Data: ${formattedDate}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
  function formatSelectedNeedsList(selectedNeeds) {
    const needsList = selectedNeeds.split(',').map(need => `- ${need.trim()}`).join('\n');
    return needsList;
  }
  
  // Abre o link em uma nova aba
  window.open(whatsappLink, "_blank");
}


function getSelectedNeeds() {
  const checkboxes = document.querySelectorAll("input[name='needs[]']:checked");
  const selectedNeeds = Array.from(checkboxes).map(checkbox => checkbox.value);
  return selectedNeeds.join(",");
}

function openPersonSelectionPopup() {
  const personSelectionPopup = document.getElementById("person-selection-popup");
  personSelectionPopup.style.display = "block"; // Exibe o pop-up de seleção
}


const complaintForm = document.getElementById("complaint-form");

complaintForm.addEventListener("submit", function(event) {
  event.preventDefault();

  

  const complaintFrom = document.getElementById("complaint-from").value;
  const complaintText = document.getElementById("complaint-text").value;

  let whatsappLink = "";
  if (complaintFrom === "emily") {
    whatsappLink = `https://wa.me/553189213118?text=Central+Luizaz+mel+informa+!+!+!+Recebemos+uma+reclamação+de+Thais+sobre+voce+dizendo:${encodeURIComponent(complaintText)}`;
  } else if (complaintFrom === "thais") {
    whatsappLink = `https://wa.me/5531986604077?text=Central+Luizaz+mel+informa+!+!+!+Recebemos+uma+reclamação+de+Emily+sobre+voce+dizendo:${encodeURIComponent(complaintText)}`;
  }

  if (whatsappLink) {
    window.location.href = whatsappLink;
  } else {
    alert("Selecione uma opção válida.");
  }
});
