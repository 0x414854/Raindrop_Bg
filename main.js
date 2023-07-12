const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const drops = [];

class Drop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -5; 
    this.speed = Math.random() * 5 + 5;
    this.length = Math.random() * 10 + 5; 
  }
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = '#87CEEB';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.stroke();
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      const index = drops.indexOf(this);
      if (index !== -1) {
        drops.splice(index, 1);
      }
    }
  }
}

function createDrops() {
  setInterval(() => {
    for (let i = 0; i < 120; i++) {
      const drop = new Drop();
      drops.push(drop);
    }
  }, 400);
}

function drawDrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drops.forEach((drop) => {
    drop.draw();
    drop.update();
  });
  requestAnimationFrame(drawDrops);
}

createDrops();
drawDrops();
