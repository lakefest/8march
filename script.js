let slides = document.querySelectorAll(".slide");
let current = 0;
let autoSlide = null;
let music = document.getElementById("music");
let autoBtn = document.getElementById("autoBtn");

function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
}

function next() { showSlide(current + 1); }
function prev() { showSlide(current - 1); }

function toggleAuto() {
    if (autoSlide) {
        clearInterval(autoSlide);
        autoSlide = null;
        autoBtn.classList.remove("auto-active");
    } else {
        autoSlide = setInterval(next, 5000);
        autoBtn.classList.add("auto-active");
    }
}

function start() {
    let screen = document.getElementById("startScreen");
    screen.style.opacity = "0";
    setTimeout(() => { screen.style.display = "none"; }, 1000);
    document.getElementById("content").style.display = "block";
    // Если музыка не нужна или файла нет, закомментируйте следующую строку
    if (music) music.play();
    heartExplosion();
    startEffects();
}

function heartExplosion() {
    for (let i = 0; i < 60; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = "50%";
        heart.style.top = "50%";
        let x = (Math.random() - 0.5) * 800;
        let y = (Math.random() - 0.5) * 800;
        heart.animate([
            { transform: "translate(0,0) rotate(45deg)" },
            { transform: `translate(${x}px,${y}px) rotate(45deg)` }
        ], { duration: 1000 });
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

function startEffects() {
    setInterval(() => {
        let rose = document.createElement("div");
        rose.className = "rose";
        rose.innerHTML = "🌹";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = (5 + Math.random() * 5) + "s";
        document.body.appendChild(rose);
        setTimeout(() => rose.remove(), 10000);
    }, 800);

    setInterval(() => {
        let s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = Math.random() * 100 + "vw";
        s.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1000);
    }, 200);
}