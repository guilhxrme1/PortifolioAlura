const projetos = [
  {
    titulo: "Calculadora de Horas de Estudo",
    descricao: "Aplicativo que calcula automaticamente o tempo investido em estudos por semana.",
    link: "https://github.com/joaoguilherme/calculadora-estudos"
  },
  {
    titulo: "Página de Portfólio Pessoal",
    descricao: "Primeiro portfólio desenvolvido por João com HTML e CSS puros.",
    link: "https://github.com/joaoguilherme/portfolio-pessoal"
  },
  {
    titulo: "Conversor de Moedas",
    descricao: "Projeto criado para converter moedas em tempo real utilizando APIs.",
    link: "https://github.com/joaoguilherme/conversor-moedas"
  }
];

const container = document.querySelector(".projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("projeto");

  card.innerHTML = `
    <h2>${projeto.titulo}</h2>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(card);
});
