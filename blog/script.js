const posts = [
  { title: "Site WordPress institucional", text: "Criação de site institucional com foco em conversão e SEO básico." },
  { title: "Recuperação de site hackeado", text: "Limpeza completa de malware e restauração do WordPress." },
  { title: "Landing page de alta conversão", text: "Página otimizada para campanha de tráfego pago." },
  { title: "Otimização de velocidade", text: "Redução de 5s para 1.2s no carregamento do site." },
  { title: "Suporte técnico remoto", text: "Correção de erros e manutenção em ambiente Windows." },
  { title: "Site institucional moderno", text: "Layout responsivo com foco em mobile-first." },
  { title: "SEO básico aplicado", text: "Estruturação de headings e meta tags para Google." },
  { title: "Migração de hospedagem", text: "Transferência segura de site sem downtime." },
  { title: "Correção de formulário", text: "Integração de envio funcional via email." },
  { title: "Projeto landing ads", text: "Página otimizada para campanhas do Instagram Ads." }
];

const postsPerPage = 3;
let currentPage = 1;

function renderPosts() {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const paginatedPosts = posts.slice(start, end);

  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  paginatedPosts.forEach(post => {
    postsContainer.innerHTML += `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.text}</p>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">
        ${i}
      </button>
    `;
  }
}

function changePage(page) {
  currentPage = page;
  renderPosts();
}

window.onload = function() {
  document.body.classList.add('loaded');
};

renderPosts();