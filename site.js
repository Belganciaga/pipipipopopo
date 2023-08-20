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



