// Matrix Rain Effect
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fontSize = 16;
    let columns;
    let drops = [];

    // Adjust canvas size to the window size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1; // Start position of each drop
        }
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Function to draw the Matrix rain effect
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect for the background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF00'; // Neon green color for the text
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset the drop when it reaches the bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increase the drop's Y position for the next frame
            drops[i]++;
        }
    }

    // Start the animation
    setInterval(draw, 33); // 30 FPS
});
