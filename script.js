// Lista de imóveis fictícios só para exibir cards
const imoveis = [
  {
    tipo: "Apartamento",
    operacao: "Alugar",
    titulo: "Apê compacto perto da universidade",
    bairro: "Centro",
    preco: "R$ 1.200,00 / mês",
    detalhes: ["1 dormitório", "Sem vaga", "Ideal para estudante"],
  },
  {
    tipo: "Casa",
    operacao: "Comprar",
    titulo: "Casa ampla com pátio",
    bairro: "Vera Cruz",
    preco: "R$ 650.000,00",
    detalhes: ["3 dormitórios", "2 vagas", "Pátio grande"],
  },
  {
    tipo: "Comercial",
    operacao: "Alugar",
    titulo: "Sala comercial para consultório",
    bairro: "Boqueirão",
    preco: "R$ 2.300,00 / mês",
    detalhes: ["40m²", "Prédio com elevador", "Estacionamento rotativo"],
  },
  {
    tipo: "Apartamento",
    operacao: "Comprar",
    titulo: "Apê garden com área externa",
    bairro: "Cidade Nova",
    preco: "R$ 480.000,00",
    detalhes: ["2 dormitórios", "1 vaga", "Sacada com churrasqueira"],
  },
];

function renderCards(lista) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  lista.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <span class="card-tag">${item.operacao}</span>
      <div class="card-title">${item.tipo} – ${item.bairro}</div>
      <div>${item.titulo}</div>
      <div class="card-price">${item.preco}</div>
      <div class="card-meta">
        ${item.detalhes.map((d) => `<span>${d}</span>`).join("")}
      </div>
      <div class="card-footer">
        <span>Cód. 000${Math.floor(Math.random() * 90 + 10)}</span>
        <span>Saiba mais (mock)</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Filtro simples baseado no formulário
const form = document.getElementById("search-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const operacao = document.getElementById("operacao").value;
  const bairro = document.getElementById("bairro").value.toLowerCase();

  const filtrados = imoveis.filter((item) => {
    const matchTipo = tipo ? item.tipo === tipo : true;
    const matchOperacao = operacao ? item.operacao === operacao : true;
    const matchBairro = bairro
      ? item.bairro.toLowerCase().includes(bairro)
      : true;
    return matchTipo && matchOperacao && matchBairro;
  });

  renderCards(filtrados.length ? filtrados : imoveis);
});

// Menu mobile básico
const btnMobile = document.getElementById("btn-mobile");
const nav = document.querySelector(".nav");

btnMobile.addEventListener("click", () => {
  const visible = nav.style.display === "flex";
  nav.style.display = visible ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "56px";
  nav.style.right = "1rem";
  nav.style.background = "#ffffff";
  nav.style.padding = "0.6rem 0.9rem";
  nav.style.borderRadius = "0.8rem";
  nav.style.border = "1px solid #dde3ec";
  nav.style.boxShadow = "0 12px 30px rgba(15, 23, 42, 0.16)";
});

// Carrossel simples de feedbacks (prints)

const testimonialImg = document.getElementById("testimonial-image");

// Caminhos das imagens (já devem estar na pasta img/)
const feedbackImages = [
  "img/feedback1.jpg",
  "img/feedback2.jpg",
  "img/feedback3.jpg",
];

let currentFeedback = 0;

function trocarFeedback() {
  if (!testimonialImg) return;

  // efeito de fade simples
  testimonialImg.style.opacity = 0;

  setTimeout(() => {
    currentFeedback = (currentFeedback + 1) % feedbackImages.length;
    testimonialImg.src = feedbackImages[currentFeedback];
    testimonialImg.style.opacity = 1;
  }, 400);
}

// Troca a cada 5 segundos
setInterval(trocarFeedback, 5000);

// Renderiza cards iniciais
renderCards(imoveis);
