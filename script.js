const projetos = [
  {
    titulo: "Projeto Alura Books",
    descricao: "Desenvolvido a fins de testar indexador de mídias.",
    link: "https://github.com/guilhxrme1/alura-bookss"
  },
  {
    titulo: "Primeiro Projeto Alura",
    descricao: "Primeiro projeto Alura proposto.",
    link: "https://github.com/guilhxrme1/JoaoFlix"
  },
  {
    titulo: "Projeto Criando sua Aventura",
    descricao: "Projeto criado desenvolvido para alavancar ideias.",
    link: "https://github.com/guilhxrme1/criando-sua-aventura"
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
