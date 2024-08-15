(function() {
    const container = document.getElementById('galaga-game-container');
    const gameCanvas = document.createElement('canvas');
    gameCanvas.width = 800;
    gameCanvas.height = 600;
    container.appendChild(gameCanvas);

    const ctx = gameCanvas.getContext('2d');
    let shipX = gameCanvas.width / 2;
    let bullets = [];
    let enemies = [];
    let score = 0;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            shipX -= 20;
        }
        if (event.key === 'ArrowRight') {
            shipX += 20;
        }
        if (event.key === ' ') {
            bullets.push({ x: shipX, y: gameCanvas.height - 30 });
        }
    });

    function drawShip() {
        ctx.fillStyle = 'white';
        ctx.fillRect(shipX - 20, gameCanvas.height - 20, 40, 20);
    }

    function drawBullets() {
        bullets.forEach((bullet, index) => {
            bullet.y -= 5;
            if (bullet.y < 0) {
                bullets.splice(index, 1);
            } else {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(bullet.x - 2, bullet.y, 4, 10);
            }
        });
    }

    function drawEnemies() {
        if (Math.random() < 0.02) {
            enemies.push({ x: Math.random() * gameCanvas.width, y: 0 });
        }

        enemies.forEach((enemy, index) => {
            enemy.y += 2;
            if (enemy.y > gameCanvas.height) {
                enemies.splice(index, 1);
            } else {
                ctx.fillStyle = 'red';
                ctx.fillRect(enemy.x - 20, enemy.y, 40, 20);
            }

            // Check for collision with bullets
            bullets.forEach((bullet, bulletIndex) => {
                if (
                    bullet.x > enemy.x - 20 &&
                    bullet.x < enemy.x + 20 &&
                    bullet.y > enemy.y &&
                    bullet.y < enemy.y + 20
                ) {
                    enemies.splice(index, 1);
                    bullets.splice(bulletIndex, 1);
                    score += 10;
                }
            });
        });
    }

    function drawScore() {
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, 10, 20);
    }

    function gameLoop() {
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        drawShip();
        drawBullets();
        drawEnemies();
        drawScore();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
})();
