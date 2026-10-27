/* =====================================================
   Michael Angelo Acera — Personal CV Website
   Vanilla JavaScript. Sections are numbered for easy explaining.
   ===================================================== */

/* ---------- 1. CONFIG: EDIT YOUR DETAILS HERE ---------- */
const CONFIG = {
  email: "michaelangeloacera13@gmail.com",
  phone: "09938533470",
  links: {
    github: "https://github.com/aceramichaelangelo",
    linkedin: "https://www.linkedin.com/in/michaelangelo-acera-5314bb401/",
    facebook: "YOUR_FACEBOOK_URL" // TODO: replace with your Facebook profile URL
  },
  cv: "Michael-Angelo-Acera-CV.pdf"
};
const isPlaceholder = v => !v || /^YOUR_|^PROJECT_|^FIGMA_|^CERTIFICATE_/.test(v);

/* ---------- 2. DATA: skills, projects, certificates ---------- */
const SKILLS = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP", "SQL"],
  "Frameworks & Technologies": ["Next.js", "React", "Laravel", "Django", "Flutter", "JavaFX"],
  "Database & Backend": ["MySQL", "Firebase", "Supabase", "REST API", "Authentication", "Database Integration"],
  "AI & Computer Vision": ["Artificial Intelligence", "Computer Vision", "YOLO", "Machine Learning Fundamentals", "Roboflow", "Google Colab"],
  "UI/UX": ["Figma", "UI Design", "UX Design", "Wireframing", "Prototyping"],
  "Development Tools": ["Git", "GitHub", "Visual Studio Code"]
};
const SOFT = ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Continuous Learning", "Organization"];

// cats: web | mobile | ai | uiux.  image: put screenshot in assets/images/projects/ (optional).
// repo/demo/figma: replace PROJECT_GITHUB_URL / PROJECT_DEMO_URL / FIGMA_URL when you have real links.
const PROJECTS = [
  { name: "Native Flora Detection and Management System Using Computer Vision and Geoanalytics in Talaingod, Davao del Norte", featured: true, cats: ["ai", "mobile"], status: "Ongoing Capstone Project", label: "Capstone • AI",
    desc: "A computer vision and geoanalytics system for real-time detection, GPS geo-tagging, photo tagging, mapping, and management of selected native flora (Anahaw, Narra, Molave, Bangkal, Talisay) in Talaingod. Includes an Android field app, offline capture/sync, web-based monitoring, map visualization, and an expert validation workflow.",
    tech: ["Python", "YOLO", "Computer Vision", "Flutter", "Firebase", "GPS / Geolocation", "Geoanalytics"], image: "assets/images/projects/capstone.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "AI-Powered Sales Analytics Dashboard", cats: ["web", "ai"], status: "", label: "AI • Dashboard", desc: "Web-based dashboard for monitoring sales, revenue, customers, and products with interactive visualizations and AI-style insights.", tech: ["Web Development", "Data Visualization"], image: "assets/images/projects/sales-dashboard.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "Michael Acera Portfolio", cats: ["web"], status: "", label: "Web App", desc: "A personal developer portfolio built with Next.js to showcase projects, skills, certificates, and UI/UX work.", tech: ["Next.js"], image: "assets/images/projects/portfolio.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "Brew Bloom Cafe", cats: ["web"], status: "", label: "Web App", desc: "A cafe-themed web project built to practice front-end and full-stack development concepts.", tech: ["Web Development"], image: "assets/images/projects/brew-bloom.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "Real Estate Portal", cats: ["web"], status: "", label: "Web Platform", desc: "Real estate platform for discovering houses, condos, apartments, lots, and commercial properties for sale or rent, with user roles and listing/application management.", tech: ["Web Development", "Database"], image: "assets/images/projects/real-estate.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "Job Listing Portal", cats: ["web"], status: "", label: "Web Platform", desc: "Job listing platform with Admin, Employer, and Applicant roles supporting job posting, applications, and user/profile management.", tech: ["PHP", "Database", "Web Development"], image: "assets/images/projects/job-portal.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "ShoeWise", cats: ["web"], status: "", label: "Web App", desc: "A technology-focused project exploring a digital solution for shoe-related services and user interaction.", tech: ["Web Development"], image: "assets/images/projects/shoewise.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "Django Project", cats: ["web"], status: "In Progress", label: "Django • Python", desc: "A Python and Django-based project currently being developed. Details will be added once finalized.", tech: ["Python", "Django"], image: "assets/images/projects/django.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "API Development Project", cats: ["web"], status: "In Progress", label: "API Development", desc: "A backend API development project. Stack and full description will be added once finalized.", tech: ["API"], image: "assets/images/projects/api.png", repo: "PROJECT_GITHUB_URL", demo: "" },
  { name: "ShoeWise Website", cats: ["uiux"], status: "", label: "UI Design", desc: "Website UI/UX design created in Figma focusing on visual design, navigation, and usability.", tech: ["Figma", "UI Design"], image: "assets/images/projects/shoewise-web-ui.png", figma: "FIGMA_URL" },
  { name: "ShoeWise Mobile App", cats: ["uiux", "mobile"], status: "", label: "Mobile UI", desc: "Mobile app UI/UX design created in Figma with a focus on mobile usability and clean navigation.", tech: ["Figma", "Mobile UI"], image: "assets/images/projects/shoewise-mobile-ui.png", figma: "FIGMA_URL" },
  { name: "Midterm Design — PhilHealth", cats: ["uiux"], status: "", label: "UI Design", desc: "UI/UX design made for a midterm activity focusing on interface layout, usability, and user-centered design.", tech: ["Figma", "UI Design"], image: "assets/images/projects/philhealth-ui.png", figma: "FIGMA_URL" },
  { name: "HCI Assignment 2", cats: ["uiux"], status: "", label: "HCI Design", desc: "Human-Computer Interaction design work focused on interface design, usability, and user experience principles.", tech: ["Figma", "HCI"], image: "assets/images/projects/hci.png", figma: "FIGMA_URL" }
];

// image: put the file in assets/certificates/ . issuer for COVID-19 cert is not in your CV, so it is a placeholder.
const CERTS = [
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy / Davao del Norte State College", date: "13 June 2025", image: "assets/certificates/ccna-introduction-to-networks.png" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy / Davao del Norte State College", date: "30 December 2025", image: "assets/certificates/ccna-switching-routing-wireless.png" },
  { title: "320-Hour JDVP Training / Computer Systems Servicing NC II", issuer: "Holy Child College of Davao del Norte / TESDA", date: "6 July 2023", image: "assets/certificates/jdvp-css-nc-ii.png" },
  { title: "Practicing COVID-19 Preventive Measures in the Workplace", issuer: "TESDA Online Program", date: "19 May 2023", image: "assets/certificates/covid-19-workplace.png" }
];

/* ---------- 3. SMALL HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const chips = arr => `<div class="chips">${arr.map(t => `<span>${t}</span>`).join("")}</div>`;
const mailto = () => `mailto:${CONFIG.email}`;

/* ---------- 4. FILL LINKS, EMAIL, PHONE, SOCIALS ---------- */
function setupLinks() {
  $$("[data-link]").forEach(a => { a.href = CONFIG.links[a.dataset.link]; });
  $$("[data-email]").forEach(el => { el.textContent = CONFIG.email; });
  $$("[data-phone]").forEach(el => { el.textContent = CONFIG.phone; });
  const icons = [["github", "GH", "GitHub"], ["linkedin", "in", "LinkedIn"], ["facebook", "f", "Facebook"]];
  $$("[data-socials]").forEach(box => {
    box.innerHTML = icons.map(([k, t, n]) => `<a href="${CONFIG.links[k]}" target="_blank" rel="noopener noreferrer" aria-label="${n}">${t}</a>`).join("") +
      `<a href="${mailto()}" aria-label="Email">@</a>`;
  });
}

/* ---------- 5. RENDER SKILLS / PROJECTS / CERTIFICATES ---------- */
function renderSkills() {
  $("#skillsGrid").innerHTML = Object.entries(SKILLS).map(([cat, items]) =>
    `<article class="card skill-card reveal scale-in"><h3>${cat}</h3>${chips(items)}</article>`).join("");
  $("#softGrid").innerHTML = SOFT.map(s => `<div class="card soft reveal scale-in">${s}</div>`).join("");
}

function renderProjects() {
  $("#projectGrid").innerHTML = PROJECTS.map(p => {
    const btns = [];
    if (p.repo) btns.push(isPlaceholder(p.repo) ? `<span class="btn btn-sm off" title="Add link: PROJECT_GITHUB_URL">GitHub (soon)</span>` : `<a class="btn btn-sm" href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub Repository</a>`);
    if (p.figma) btns.push(isPlaceholder(p.figma) ? `<span class="btn btn-sm off" title="Add link: FIGMA_URL">Figma (soon)</span>` : `<a class="btn btn-sm" href="${p.figma}" target="_blank" rel="noopener noreferrer">View Figma Design</a>`);
    if (p.repo) btns.push(p.demo && !isPlaceholder(p.demo) ? `<a class="btn btn-sm btn-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : `<span class="btn btn-sm off">Demo Not Available</span>`);
    return `<article class="card project reveal scale-in ${p.featured ? "featured" : ""}" data-cats="${p.cats.join(" ")}">
      <div class="thumb">${p.status ? `<span class="status">${p.status}</span>` : ""}${p.label}
        <img src="${p.image}" alt="${p.name} preview" loading="lazy" onerror="this.remove()"></div>
      <div class="p-body"><h3>${p.name}</h3><p class="muted">${p.desc}</p>${chips(p.tech)}<div class="p-actions">${btns.join("")}</div></div></article>`;
  }).join("");
}

function renderCerts() {
  $("#certGrid").innerHTML = CERTS.map((c, i) => `<article class="card cert reveal scale-in">
    <div class="thumb"><img src="${c.image}" alt="${c.title} certificate" loading="lazy" onerror="this.remove()"></div><h3>${c.title}</h3>
    <p class="muted">${isPlaceholder(c.issuer) ? "Issuer to be added" : c.issuer}</p>${c.date ? `<p class="accent mono">${c.date}</p>` : ""}
    <button class="btn btn-sm" data-cert="${i}">View Certificate</button></article>`).join("");
}

/* ---------- 6. NAVIGATION: hamburger, active link, header, theme ---------- */
function setupNav() {
  const menu = $("#navLinks"), btn = $("#menuBtn");
  const toggle = open => { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  btn.addEventListener("click", () => toggle(!menu.classList.contains("open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => toggle(false)));   // close after choosing
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });

  // Highlight the nav link of the section currently on screen
  const links = $$(".nav-links a[href^='#']");
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  // Theme toggle (remembered in localStorage)
  const root = document.documentElement;
  try { root.dataset.theme = localStorage.getItem("theme") || "dark"; } catch (e) {}
  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // Back-to-top button appears after scrolling
  const top = $("#toTop");
  window.addEventListener("scroll", () => top.classList.toggle("show", window.scrollY > 600), { passive: true });
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- 7. SCROLL REVEAL (IntersectionObserver) ---------- */
function setupReveal() {
  const io = new IntersectionObserver((entries, obs) => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ---------- 8. PROJECT FILTER ---------- */
function setupFilters() {
  $$(".filters .chip").forEach(btn => btn.addEventListener("click", () => {
    $$(".filters .chip").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".project").forEach(card => {
      card.classList.toggle("hide", f !== "all" && !card.dataset.cats.split(" ").includes(f));
      card.classList.add("visible");
    });
  }));
}

/* ---------- 9. CERTIFICATE MODAL (keyboard accessible) ---------- */
function setupModal() {
  const modal = $("#modal"), img = $("#modalImg"), miss = $("#modalMissing");
  let lastFocus;
  const close = () => { modal.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-cert]");
    if (!b) return;
    const c = CERTS[b.dataset.cert];
    lastFocus = b; $("#modalTitle").textContent = c.title;
    img.hidden = false; miss.hidden = true; img.alt = c.title + " certificate"; img.src = c.image;
    img.onerror = () => { img.hidden = true; miss.hidden = false; };
    modal.hidden = false; document.body.style.overflow = "hidden"; $("#modalClose").focus();
  });
  $("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });
}

/* ---------- 10. CONTACT FORM VALIDATION + mailto ---------- */
function setupForm() {
  const form = $("#contactForm"), note = $("#formNote");
  const rules = {
    name: v => v.trim() ? "" : "Please enter your name.",
    email: v => !v.trim() ? "Please enter your email." : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address.",
    subject: v => v.trim() ? "" : "Please enter a subject.",
    message: v => v.trim() ? "" : "Please write a message."
  };
  const check = k => {
    const f = form.elements[k], msg = rules[k](f.value);
    $("#" + k + "Err").textContent = msg; f.closest(".field").classList.toggle("invalid", !!msg);
    return !msg;
  };
  Object.keys(rules).forEach(k => form.elements[k].addEventListener("blur", () => check(k)));
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!Object.keys(rules).map(check).every(Boolean)) return;
    if (isPlaceholder(CONFIG.email)) { note.textContent = "Email is not configured yet."; return; }
    const body = `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`;
    window.location.href = `${mailto()}?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Your email app should open with the message ready. Press send there to deliver it.";
  });
}

/* ---------- 11. CV ASSISTANT CHATBOT (keyword matching, no AI API) ---------- */
function setupChat() {
  const fab = $("#chatFab"), box = $("#chat"), body = $("#chatBody"), quick = $("#chatQuick");
  const cvLink = `<a href="${CONFIG.cv}" download>Download CV (PDF)</a>`;
  const projectNames = PROJECTS.filter(p => !p.cats.includes("uiux")).map(p => "• " + p.name.split(" Using")[0]).join("\n");
  // Each reply is HTML. "keys" are the words we look for in the visitor's question.
  const REPLIES = [
    { id: "Download CV", keys: ["cv", "resume", "download"], html: `You can get Michael's CV here: ${cvLink}` },
    { id: "Capstone", keys: ["capstone", "flora", "thesis", "yolo"], html: "Capstone (ongoing): Native Flora Detection and Management System Using Computer Vision and Geoanalytics in Talaingod, Davao del Norte. It covers real-time detection, GPS geo-tagging, photo tagging, mapping, and management of Anahaw, Narra, Molave, Bangkal, and Talisay. Tech: Python, YOLO, Flutter, Firebase, GPS/Geoanalytics." },
    { id: "Skills", keys: ["skill", "technolog", "language", "stack", "tools"], html: "Programming: HTML, CSS, JavaScript, Python, Java, PHP, SQL\nFrameworks: Next.js, React, Laravel, Django, Flutter, JavaFX\nDatabase/Backend: MySQL, Firebase, Supabase, REST API\nAI/CV: YOLO, Roboflow, Google Colab\nUI/UX: Figma\nTools: Git, GitHub, VS Code" },
    { id: "Education", keys: ["educat", "study", "school", "college", "degree", "course", "university"], html: "Michael is currently studying Bachelor of Science in Information Technology at Davao del Norte State College." },
    { id: "Projects", keys: ["project", "built", "made", "portfolio", "github"], html: `Projects include:\n${projectNames}\nGitHub: <a href="${CONFIG.links.github}" target="_blank" rel="noopener noreferrer">aceramichaelangelo</a>` },
    { id: "Experience", keys: ["experience", "work", "job", "peso", "cash"], html: "• Cash for Work, DNSC (500 hours, 2025)\n• PESO / SPES Assistant, Public Employment Service Office\n• PC Work, Panabo (Work Immersion)" },
    { id: "Certificates", keys: ["certif", "training", "ccna", "cisco", "jdvp"], html: "• CCNA: Introduction to Networks (Cisco)\n• CCNA: Switching, Routing, and Wireless Essentials (Cisco)\n• 320-Hour JDVP Training / CSS NC II (Holy Child College of Davao del Norte)" },
    { id: "Contact", keys: ["contact", "email", "phone", "reach", "hire", "location"], html: `Email: ${CONFIG.email}\nPhone: ${CONFIG.phone}\nLocation: Nanyo, Panabo City, Davao del Norte, Philippines\n<a href="#contact">Go to contact form</a>` },
    { id: "About Michael", keys: ["about", "who", "michael", "hello", "hi"], html: "Michael Angelo Acera is a BSIT student and aspiring full-stack developer interested in mobile apps, AI, computer vision, and UI/UX. He is seeking internship, entry-level, freelance, and collaborative opportunities." }
  ];
  const add = (html, who) => { const m = document.createElement("div"); m.className = "msg " + who; m.innerHTML = html; body.append(m); body.scrollTop = body.scrollHeight; };
  const answer = text => {
    const t = text.toLowerCase();
    const hit = REPLIES.find(r => r.keys.some(k => t.includes(k)));
    setTimeout(() => add(hit ? hit.html : "I can answer questions about skills, education, projects, the capstone, experience, certificates, or contact info. Try a button below.", "bot"), 350);
  };
  const ask = text => { add(text.replace(/</g, "&lt;"), "user"); answer(text); };

  quick.innerHTML = REPLIES.map(r => `<button type="button">${r.id}</button>`).join("");
  quick.addEventListener("click", e => { if (e.target.tagName === "BUTTON") ask(e.target.textContent); });
  $("#chatForm").addEventListener("submit", e => { e.preventDefault(); const i = $("#chatInput"); if (i.value.trim()) { ask(i.value.trim()); i.value = ""; } });
  add("Hi! I'm Michael's CV Assistant. Ask me about his skills, education, projects, experience, certificates, or contact information.", "bot");

  const toggle = open => { box.hidden = !open; fab.setAttribute("aria-expanded", open); if (open) $("#chatInput").focus(); };
  fab.addEventListener("click", () => toggle(box.hidden));
  $("#chatClose").addEventListener("click", () => { toggle(false); fab.focus(); });
}

/* ---------- 12. START EVERYTHING ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills(); renderProjects(); renderCerts();
  setupLinks(); setupNav(); setupFilters(); setupModal(); setupForm(); setupChat(); setupReveal();
  setTimeout(() => $("#loader").classList.add("done"), 700);   // short loading screen (~0.7s)
});
