const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");
const puntosTexto = document.getElementById("puntos");

let puntos = 0;
let monstruos = [];
const imagenMonstruo = new Image();
imagenMonstruo.src = "assets/monstruo.png";

// Crear monstruos aleatorios
function crearMonstruo() {
  return {
    x: Math.random() * (canvas.width - 80),
    y: Math.random() * (canvas.height - 80),
    dx: (Math.random() - 0.5) * 6,
    dy: (Math.random() - 0.5) * 6,
    visible: true
  };
}

for (let i = 0; i < 6; i++) monstruos.push(crearMonstruo());

function moverMonstruos() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  monstruos.forEach(m => {
    if (!m.visible) return;

    m.x += m.dx;
    m.y += m.dy;

    // Rebotan en los bordes
    if (m.x < 0 || m.x > canvas.width - 80) m.dx *= -1;
    if (m.y < 0 || m.y > canvas.height - 80) m.dy *= -1;

    ctx.drawImage(imagenMonstruo, m.x, m.y, 80, 80);
  });
}

// Detectar clic sobre un monstruo
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  monstruos.forEach(m => {
    if (m.visible && x > m.x && x < m.x + 80 && y > m.y && y < m.y + 80) {
      m.visible = false;
      puntos++;
      puntosTexto.textContent = puntos;
      setTimeout(() => Object.assign(m, crearMonstruo()), 1000);
    }
  });
});

function loop() {
  moverMonstruos();
  requestAnimationFrame(loop);
}

loop();
