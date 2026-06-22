const posts = [
{
  title: "Site Institucional com Portal da Transparência e Upload de Documentos",
  date: "05/02/2025",
  category: ["landing", "wordpress"],
  text: `Criação de site institucional com foco em conversão, SEO básico e organização de conteúdo.<br><br>
O projeto foi desenvolvido para manter o portal da transparência da instituição de forma clara e estruturada.<br><br>
O sistema também permite que a própria equipe realize o upload de arquivos em PDF diretamente no site.<br><br>
Este projeto foi desenvolvido como trabalho voluntário.`,
  link: "https://vilavicentinabrotas.com.br/",
  image: "img/site-vila.jpg"
},
{
  title: "Desenvolvimento de Landing Page (PT/EN) – Projeto Ambiental",
  date: "20/04/2026",
  category: ["landing", "wordpress"],
  text: `<p class="note">⚠️ Execução técnica como serviço terceirizado</p><br>Desenvolvimento de duas landing pages institucionais (português e inglês) para o Projeto Produtores de Floresta, iniciativa voltada à restauração de áreas degradadas nos biomas da Mata Atlântica e Cerrado.<br><br>
As páginas foram desenvolvidas com versões em português e inglês, garantindo consistência de conteúdo e navegação para diferentes públicos. O projeto inclui formulários personalizados em ambas as versões, com campos estruturados e suporte para upload de arquivos.
<br><br>
Também foram aplicadas customizações em HTML e CSS para adaptação visual e melhor experiência do usuário, além de ajustes para responsividade em dispositivos móveis.
`,
  link: "https://produtoresdefloresta.com.br/",
  image: "img/site-floresta.jpg"
},

{
  title: "Landing Page para Empresa de Guincho com Atendimento Automatizado",
  date: "25/04/2026",
  category: ["landing", "wordpress"],
  text: `Desenvolvimento de landing page para empresa de guincho com foco em captação rápida de chamados e conversão de clientes. O projeto foi estruturado para facilitar o contato imediato, especialmente em situações de urgência.<br><br>
A página conta com formulário inteligente de atendimento, permitindo o preenchimento automático de endereço via CEP ou captura de localização em tempo real através do dispositivo do usuário.
<br><br>
Após o envio, os dados são direcionados diretamente para o WhatsApp da empresa, agilizando o atendimento e reduzindo o tempo de resposta.<br><br>
  O resultado é uma solução prática, otimizada para dispositivos móveis e voltada para geração de leads e atendimento imediato.
`,
  link: "https://evertonguincho.com.br/",
  image: "img/site-everton.jpg"
},

{
  title: "Customizações e Desenvolvimento de Plugin para Automação de Pacotes em Pousada",
  date: "02/09/2025",
  category: ["landing", "wordpress"],
  text: `<p class="note">⚠️ Participação no projeto como desenvolvedor, em parceria com a agência BWM</p>Atuação no desenvolvimento e aprimoramento de funcionalidades em site WordPress para uma pousada, com foco em usabilidade e automação de processos internos.<br><br>
Foram realizadas customizações no front-end, incluindo ajustes de layout e melhorias na exibição de conteúdos do blog, com implementação de funcionalidade “ver mais”, inexistente nativamente no sistema utilizado.
<br><br>
Além disso, foi desenvolvido um plugin personalizado para gerenciamento de pacotes de hospedagem, permitindo o cadastro rápido pela equipe e automatizando a exibição dos conteúdos no site. O sistema também realiza o controle de validade dos pacotes, removendo automaticamente aqueles expirados, reduzindo trabalho manual e evitando informações desatualizadas.<br><br>
  O resultado foi uma solução mais eficiente para a equipe, com ganho de produtividade e melhor organização das ofertas apresentadas aos usuários.
`,
  link: "https://pousadadaluasp.com.br/",
  image: "img/pousda-da-lua-sp.jpg"
},

  {
    title: "Recuperação de Site com Redirecionamento Hackeado",
    date: "16/08/2025",
    category: ["sites", "wordpress"],
    text: `Recuperação de site WordPress comprometido, que apresentava redirecionamentos automáticos para páginas suspeitas — comportamento típico de infecção por malware.<br><br>
Foi realizada uma análise completa nos arquivos e no banco de dados, identificando códigos maliciosos responsáveis pelos redirecionamentos. Todo o conteúdo comprometido foi removido, incluindo scripts injetados e possíveis brechas exploradas.<br><br>
Após a limpeza, o site foi restaurado ao funcionamento normal, eliminando completamente os redirecionamentos indevidos. Também foram aplicadas medidas de segurança para evitar novas infecções, garantindo maior proteção e estabilidade.<br><br>
O resultado foi a normalização total do site, com navegação segura e confiável para os usuários.`,
image: "img/system-haked.jpg"
  },
  {
    title: "Remoção de Backdoors e Restauração de Site",
    date: "23/04/2026",
    category: ["sites", "wordpress"],
    text: `Recuperação completa de site WordPress comprometido por invasão, apresentando arquivos maliciosos com backdoors, usuários administrativos não autorizados e alterações suspeitas no banco de dados.<br><br>
Foi realizada uma varredura detalhada no sistema, com identificação e remoção de todos os arquivos infectados, exclusão de usuários indevidos e limpeza de tabelas comprometidas no banco de dados. Após a higienização, o site foi restaurado e colocado novamente em produção com funcionamento normal.<br><br>
Para reforçar a segurança, foram aplicadas medidas preventivas e implementado o plugin de proteção Wordfence, garantindo monitoramento contínuo e maior resistência contra novas tentativas de invasão.<br><br>
O resultado foi a recuperação total do ambiente, com estabilidade, integridade dos dados e aumento significativo no nível de segurança do site.`,
image: "img/system-haked.jpg"
  },

  /*{
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
    title: "Landing page de alta conversão",
    date: "21/04/2026",
    category: ["landing"],
    text: "Página otimizada para campanha de tráfego pago."
  },
 {
    title: "Projeto landing ads",
    date: "14/04/2026",
    category: ["landing"],
    text: "Página otimizada para campanhas do Instagram Ads."
  }*/
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

  document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

  renderPosts();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal();
  }
});