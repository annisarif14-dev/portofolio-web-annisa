// DATA 7 SERTIFIKAT LENGKAP ANNISA RIFA AULIA
const annisaCertificates = [
  { title: "Dasar Manajemen Proyek", image: "Sertifikat Annisa/Dasar Manajemen Proyek.png", issuer: "Dicoding Indonesia", date: "08 September 2026" },
  { title: "Data Cleaning", image: "Sertifikat Annisa/Data Cleaning.jpeg", issuer: "Kaggle", date: "09 September 2026" },
  { title: "Intro to Programming", image: "Sertifikat Annisa/Intro to Programming.jpeg", issuer: "Kaggle", date: "08 September 2026" },
  { title: "Intro to Machine Learning", image: "Sertifikat Annisa/Intro to Machine Learning.jpeg", issuer: "Kaggle", date: "09 September 2026" },
  { title: "Memulai Pemrograman dengan Java", image: "Sertifikat Annisa/Memulai Pemrograman dengan Java.png", issuer: "Dicoding Indonesia", date: "08 September 2026" },
  { title: "Python Developer Certification", image: "Sertifikat Annisa/Python.jpeg", issuer: "freeCodeCamp", date: "07 September 2026" },
  { title: "Poster Infografis", image: "Sertifikat Annisa/Poster Infografis.png", issuer: "Universitas Negeri Malang", date: "25 - 26 September 2026" }
];

let currentCorrectAnswer = 0;

// ================= 1. QUIZ MATEMATIKA KEAMANAN AMPLOP =================
function startQuiz() {
  const wrapper = document.getElementById('envelopeWrapper');
  const quizBox = document.getElementById('quizBox');
  if (wrapper) wrapper.style.display = 'none';
  if (quizBox) quizBox.style.display = 'block';
  generateNewQuiz();
}

function generateNewQuiz() {
  const operators = ['+', '-', '*'];
  const op = operators[Math.floor(Math.random() * operators.length)];
  let num1, num2;

  if (op === '+') {
    num1 = Math.floor(Math.random() * 20) + 5;
    num2 = Math.floor(Math.random() * 20) + 5;
    currentCorrectAnswer = num1 + num2;
  } else if (op === '-') {
    num1 = Math.floor(Math.random() * 20) + 10;
    num2 = Math.floor(Math.random() * num1);
    currentCorrectAnswer = num1 - num2;
  } else {
    num1 = Math.floor(Math.random() * 8) + 2;
    num2 = Math.floor(Math.random() * 8) + 2;
    currentCorrectAnswer = num1 * num2;
  }

  const qEl = document.getElementById('quizQuestion');
  const ansEl = document.getElementById('quizAnswer');
  if (qEl) qEl.textContent = `Berapa hasil dari ${num1} ${op} ${num2} ?`;
  if (ansEl) ansEl.value = '';
}

function checkQuizAnswer() {
  const ansInput = document.getElementById('quizAnswer');
  const feedback = document.getElementById('quizFeedback');
  if (!ansInput || !feedback) return;

  const userAnswer = parseInt(ansInput.value);

  if (userAnswer === currentCorrectAnswer) {
    feedback.style.color = '#38bdf8';
    feedback.textContent = "Jawaban Benar! Membuka surat...";
    setTimeout(() => {
      document.getElementById('quizBox').style.display = 'none';
      document.getElementById('letter').style.display = 'block';
    }, 700);
  } else {
    feedback.style.color = '#ff6584';
    feedback.textContent = "Salah! Soal diganti otomatis, coba lagi 🔄";
    generateNewQuiz();
  }
}

function enterSite() {
  const overlay = document.getElementById('envelopeOverlay');
  const mainSite = document.getElementById('mainWebsite');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  }
  if (mainSite) {
    mainSite.classList.add('visible');
  }
}

// ================= 2. RENDER SERTIFIKAT =================
function renderCertificates() {
  const gridContainer = document.getElementById('annisaCertGrid');
  if (!gridContainer) return;
  
  let html = '';
  annisaCertificates.forEach((cert) => {
    html += `
      <div class="profile-card" onclick="openCertModal('${cert.title}', '${cert.image}', '${cert.issuer}', '${cert.date}')">
        <div class="card-avatar-container">
          <img src="${cert.image}" alt="${cert.title}" onerror="this.src='https://ui-avatars.com/api/?name=Certificate&background=ff6584&color=fff&size=300'">
        </div>
        <div class="card-body">
          <h3>${cert.title}</h3>
          <p class="card-caption"><i class="fas fa-building"></i> ${cert.issuer} &bull; <i class="far fa-calendar-alt"></i> ${cert.date}</p>
        </div>
      </div>
    `;
  });
  gridContainer.innerHTML = html;
}

function openCertModal(title, imgSrc, issuer, date) {
  const modal = document.getElementById('certModal');
  const mTitle = document.getElementById('modalTitle');
  const mRole = document.getElementById('modalRole');
  const mImg = document.getElementById('modalCertImg');

  if (mTitle) mTitle.textContent = title;
  if (mRole) mRole.textContent = `${issuer} • ${date}`;
  if (mImg) mImg.src = imgSrc;
  if (modal) modal.style.display = 'block';
}

// ================= 3. TERMINAL VS CODE INTERAKTIF =================
function executeTerminalCommand() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  if (!input || !output) return;

  const rawCmd = input.value.trim();
  const cmd = rawCmd.toLowerCase();
  if (!rawCmd) return;

  if (cmd === 'clear') {
    output.innerHTML = `
      <p class="term-welcome">Selamat datang di Annisa OS Terminal v2.0 ✨</p>
      <p class="term-hint">Ketik <span class="term-cmd">help</span> untuk melihat daftar perintah, atau pilih tombol preset di kanan atas.</p>
    `;
    input.value = '';
    return;
  }

  const userCmdLine = document.createElement('div');
  userCmdLine.style.marginTop = '8px';
  userCmdLine.innerHTML = `<span style="color:#27c93f; font-weight:bold;">annisa@pnm-dev:~$</span> <span style="color:#fff;">${escapeHtml(rawCmd)}</span>`;
  output.appendChild(userCmdLine);

  const responseLine = document.createElement('div');
  responseLine.className = 'term-output';

  if (cmd === 'help') {
    responseLine.innerHTML = `
      <div style="color:#38bdf8; margin-top:4px;"><strong>📋 Perintah yang Tersedia:</strong></div>
      <div style="color:#94a3b8; padding-left:10px;">
        • <strong style="color:#ff6584;">about</strong> : Profil singkat Annisa<br>
        • <strong style="color:#ff6584;">python</strong> : Eksekusi contoh skrip Python<br>
        • <strong style="color:#ff6584;">hello</strong> : Sapa Annisa<br>
        • <strong style="color:#ff6584;">skills</strong> : Daftar keahlian & tech stack<br>
        • <strong style="color:#ff6584;">clear</strong> : Bersihkan layar terminal<br>
        • Atau ketik ekspresi matematika seperti: <code style="color:#38bdf8;">2 + 5 * 10</code>
      </div>
    `;
  } else if (cmd === 'about') {
    responseLine.innerHTML = `<span style="color:#ff6584;">✨ Annisa Rifa Aulia</span> — Mahasiswi TI PNM, Project Manager, dan Tech Explorer!`;
  } else if (cmd === 'python') {
    responseLine.innerHTML = `
      <span style="color:#38bdf8;">>>> print("Hello World! Selamat Datang di Portofolio Annisa ✨")</span><br>
      <span style="color:#27c93f;">Output: Hello World! Selamat Datang di Portofolio Annisa ✨</span>
    `;
  } else if (cmd === 'hello') {
    responseLine.innerHTML = `Halo! Terima kasih sudah mencoba terminal interaktif di web portofolioku 👋😊`;
  } else if (cmd === 'skills') {
    responseLine.innerHTML = `<span style="color:#38bdf8;">Tech Stack:</span> Python 🐍, HTML5/CSS3 🎨, JavaScript ⚡, SQL 𝄠, Git/GitHub 🐙`;
  } else {
    try {
      const sanitized = rawCmd.replace(/[^0-9+\-*/().]/g, '');
      if (sanitized && sanitized.length === rawCmd.length) {
        const result = Function(`'use strict'; return (${sanitized})`)();
        responseLine.innerHTML = `<span style="color:#27c93f;">Output: ${result}</span>`;
      } else {
        responseLine.innerHTML = `<span style="color:#ff6584;">Perintah '${escapeHtml(rawCmd)}' tidak ditemukan. Ketik <strong>help</strong> untuk bantuan.</span>`;
      }
    } catch (err) {
      responseLine.innerHTML = `<span style="color:#ff6584;">Perintah '${escapeHtml(rawCmd)}' tidak ditemukan. Ketik <strong>help</strong> untuk bantuan.</span>`;
    }
  }

  output.appendChild(responseLine);
  output.scrollTop = output.scrollHeight;
  input.value = '';
}

function handleTerminalKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    executeTerminalCommand();
  }
}

function runPreset(cmd) {
  const input = document.getElementById('terminalInput');
  if (input) {
    input.value = cmd;
    executeTerminalCommand();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ================= 4. EFEK PARTIKEL KURSOR =================
const canvas = document.createElement('canvas');
canvas.id = 'particleCanvas';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let particlesArray = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 2; i++) {
    particlesArray.push(new Particle(e.clientX, e.clientY));
  }
});

class Particle {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = Math.random() > 0.5 ? '#ff6584' : '#38bdf8';
    this.life = 50;
  }
  update() {
    this.x += this.speedX; this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.05;
    this.life--;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].life <= 0) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(handleParticles);
}

// INISIALISASI SAAT HALAMAN DIMUAT
document.addEventListener('DOMContentLoaded', () => {
  renderCertificates();
  handleParticles();

  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
  }
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});