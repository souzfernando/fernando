const posts = [
  {
    title: "Site WordPress institucional",
    date: "23/04/2026",
    category: "wordpress",
    text: "Criação de site institucional com foco em conversão e SEO básico.",
    image: "img/site-vila.jpg"
  },
  {
    title: "Site WordPress institucional",
    date: "23/04/2026",
    category: "wordpress",
    text: "Criação de site institucional com foco em conversão e SEO básico."
  },
  {
    title: "Recuperação de site hackeado",
    category: "suporte",
    text: "Limpeza completa de malware e restauração do WordPress."
  },
  {
    title: "Landing page de alta conversão",
    category: "landing",
    text: "Página otimizada para campanha de tráfego pago."
  },
  {
    title: "Otimização de velocidade",
    category: "seo",
    text: "Redução de 5s para 1.2s no carregamento do site."
  },
  {
    title: "Suporte técnico remoto",
    category: "suporte",
    text: "Correção de erros e manutenção em ambiente Windows."
  },
  {
    title: "Site institucional moderno",
    category: "wordpress",
    text: "Layout responsivo com foco em mobile-first."
  },
  {
    title: "SEO básico aplicado",
    category: "seo",
    text: "Estruturação de headings e meta tags para Google."
  },
  {
    title: "Migração de hospedagem",
    category: "suporte",
    text: "Transferência segura de site sem downtime."
  },
  {
    title: "Correção de formulário",
    category: "suporte",
    text: "Integração de envio funcional via email."
  },
  {
    title: "Projeto landing ads",
    category: "landing",
    text: "Página otimizada para campanhas do Instagram Ads."
  }
];

const postsPerPage = 3;

let currentPage = 1;
let selectedCategory = "all";
let currentPost = null;

/* =========================
   RENDER POSTS
========================= */
function renderPosts() {
  const container = document.getElementById("posts");

  const filtered = selectedCategory === "all"
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const paginated = filtered.slice(start, end);

  container.innerHTML = "";

  paginated.forEach((post, index) => {
    const realIndex = posts.indexOf(post);

    container.innerHTML += `
      <div class="post">
        ${post.image ? `<img src="${post.image}" class="post-img">` : ""}

        <div class="post-content">
          ${post.date ? `<small>${post.date}</small>` : ""}
          <h2>${post.title}</h2>
          <p>${post.text}</p>

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
   PAGINATION << < 1 2 3 > >>
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
  currentPost = posts[index];

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    ${currentPost.image ? `<img src="${currentPost.image}" class="modal-img">` : ""}
    <h2>${currentPost.title}</h2>
    ${currentPost.date ? `<small>${currentPost.date}</small>` : ""}
    <p>${currentPost.text}</p>
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

  if (filter) {
    filter.addEventListener("change", (e) => {
      selectedCategory = e.target.value;
      currentPage = 1;
      renderPosts();
    });
  }

  renderPosts();
});