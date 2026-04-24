const posts = [
{
  title: "Site Vila Vicentina em Brotas",
  date: "05/02/2025",
  category: ["sites", "wordpress"],
  text: `Criação de site institucional com foco em conversão, SEO básico e organização de conteúdo.<br><br>
O projeto foi desenvolvido para manter o portal da transparência da instituição de forma clara e estruturada.<br><br>
O sistema também permite que a própria equipe realize o upload de arquivos em PDF diretamente no site.<br><br>
Este projeto foi desenvolvido como trabalho voluntário.`,
  link: "https://vilavicentinabrotas.com.br/",
  image: "img/site-vila.jpg"
},
  {
    title: "Site WordPress institucional",
    date: "20/06/2022",
    category: ["manutencao"],
    text: `Montagem completa de computador voltado para edição de vídeos, tratamento de imagens e transmissões ao vivo. O cliente Júlio forneceu todas as peças, e o projeto foi executado com foco em organização interna, airflow eficiente e estabilidade para uso profissional contínuo.<br><br>
A configuração conta com processador Intel i7-12700F, aliado a um water cooler PCYes Sangue Frio 2 para controle térmico adequado. O sistema possui 32GB de memória XPG, armazenamento rápido em SSD M.2 de 512GB XPG e fonte Gigabyte 750W modular, garantindo energia estável e montagem limpa com melhor gerenciamento de cabos.<br><br>
A placa-mãe TUF Gaming oferece robustez e durabilidade, enquanto a placa de vídeo Gigabyte GTX 1050 atende às demandas de edição e uso gráfico. Tudo isso foi montado no gabinete Cooler Master Q300L, priorizando ventilação e praticidade.<br><br>
O resultado final é uma máquina equilibrada, preparada para fluxo de trabalho intenso, com bom desempenho em multitarefas e confiabilidade para uso diário.`,
image: "img/pc-julio.jpg"
  },
  {
    title: "Recuperação de site hackeado",
    date: "23/04/2026",
    category: ["suporte"],
    text: "Limpeza completa de malware e restauração do WordPress."
  },
  {
    title: "Landing page de alta conversão",
    date: "21/04/2026",
    category: ["landing"],
    text: "Página otimizada para campanha de tráfego pago."
  },
  {
    title: "Otimização de velocidade",
    date: "20/04/2026",
    category: ["wordpress"],
    text: "Redução de 5s para 1.2s no carregamento do site."
  },
  {
    title: "Suporte técnico remoto",
    date: "19/04/2026",
    category: ["suporte"],
    text: "Correção de erros e manutenção em ambiente Windows."
  },
  {
    title: "Site institucional moderno",
    date: "18/04/2026",
    category: ["wordpress"],
    text: "Layout responsivo com foco em mobile-first."
  },
  {
    title: "SEO básico aplicado",
    date: "17/04/2026",
    category: ["wordpress"],
    text: "Estruturação de headings e meta tags para Google."
  },
  {
    title: "Migração de hospedagem",
    date: "16/04/2026",
    category: ["suporte"],
    text: "Transferência segura de site sem downtime."
  },
  {
    title: "Correção de formulário",
    date: "15/04/2026",
    category: ["suporte"],
    text: "Integração de envio funcional via email."
  },
  {
    title: "Projeto landing ads",
    date: "14/04/2026",
    category: ["landing"],
    text: "Página otimizada para campanhas do Instagram Ads."
  }
];

const postsPerPage = 3;

let currentPage = 1;
let selectedCategory = "all";
let sortOrder = "new";
let currentPostIndex = null;

/* =========================
   DATA HELP
========================= */
function parseDateBR(dateStr) {
  if (!dateStr) return null;

  const [day, month, year] = dateStr.split("/");
  return new Date(`${year}-${month}-${day}`);
}

/* =========================
   SORT POSTS
========================= */
function getSortedPosts() {
  return [...posts].sort((a, b) => {
    const dateA = parseDateBR(a.date);
    const dateB = parseDateBR(b.date);

    if (!dateA) return 1;
    if (!dateB) return -1;

    return sortOrder === "new"
      ? dateB - dateA
      : dateA - dateB;
  });
}

/* =========================
   RENDER POSTS
========================= */
function renderPosts() {
  const container = document.getElementById("posts");

  const sorted = getSortedPosts();

  const filtered = selectedCategory === "all"
    ? sorted
    : sorted.filter(p => p.category.includes(selectedCategory));

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const paginated = filtered.slice(start, end);

  container.innerHTML = "";

  paginated.forEach((post) => {
    const realIndex = posts.findIndex(p =>
      p.title === post.title && p.date === post.date
    );

    container.innerHTML += `
      <div class="post">
        ${post.image ? `<img src="${post.image}" class="post-img">` : ""}

        <div class="post-content">
          ${post.date ? `<small>${post.date}</small>` : ""}
          <h2>${post.title}</h2>
          <div class="post-text">${post.text}</div>

          <button class="see-more" onclick="openModal(${realIndex})">
            Veja mais
          </button>
        </div>
      </div>
    `;
  });

  renderPagination(filtered.length);
}

/* =========================
   PAGINATION
========================= */
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / postsPerPage);
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  const btn = (label, page, disabled = false, active = false) => `
    <button onclick="changePage(${page})"
      ${disabled ? "disabled" : ""}
      class="${active ? "active" : ""}">
      ${label}
    </button>
  `;

  pagination.innerHTML += btn("<<", 1, currentPage === 1);
  pagination.innerHTML += btn("<", currentPage - 1, currentPage === 1);

  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pagination.innerHTML += btn(i, i, false, i === currentPage);
  }

  pagination.innerHTML += btn(">", currentPage + 1, currentPage === totalPages);
  pagination.innerHTML += btn(">>", totalPages, currentPage === totalPages);
}

function changePage(page) {
  currentPage = page;
  renderPosts();
}

/* =========================
   MODAL
========================= */
function openModal(index) {
  const post = posts[index];

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    ${post.image ? `<img src="${post.image}" class="modal-img">` : ""}
    <h2>${post.title}</h2>
    ${post.date ? `<small>${post.date}</small>` : ""}
    <p>${post.text}</p>

    ${post.link ? `
      <a href="${post.link}" target="_blank" class="btn-link">
        Ver projeto
      </a>
    ` : ""}
  `;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("categoryFilter");
  const sortBtn = document.getElementById("sortBtn");

  if (filter) {
    filter.addEventListener("change", (e) => {
      selectedCategory = e.target.value;
      currentPage = 1;
      renderPosts();
    });
  }

  if (sortBtn) {
    sortBtn.addEventListener("click", () => {
      sortOrder = sortOrder === "new" ? "old" : "new";

      sortBtn.textContent =
        sortOrder === "new" ? "Mais novos ↓" : "Mais antigos ↑";

      currentPage = 1;
      renderPosts();
    });
  }

  renderPosts();
});