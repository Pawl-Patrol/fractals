const canvas = document.getElementById('surface');
const ctx = canvas.getContext('2d');

// adjust canvas size to screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// make it a centered square
const wh = Math.min(window.innerWidth, window.innerHeight)
const offsetX = 0.5 * (window.innerWidth - wh);
const offsetY = 0.5 * (window.innerHeight - wh);

// number of iterations
const maxiterations = 100;

// helper constants to speed up math
const quickcol = 1 / maxiterations
const w1 = 4 / wh;
const h1 = 4 / wh;
const w2 = wh / 2;
const h2 = wh / 2;

// coloring for 0 <= n <= maxiterations
function color(n) {
    // rgb
    return `hsl(${n * quickcol * 360},100%,50%)`;
    // default
    return `hsl(${n * quickcol * 360},${20+n*quickcol*50}%,${n * quickcol * 100}%)`;
    // gray-scaled
    return `hsl(0, 0%, ${100 - n * quickcol * 100}%)`;
}

// fill background
ctx.fillStyle = color(maxiterations);
ctx.fillRect(0, 0, canvas.width, canvas.height);

// iterate over pixels
for (let i = 0; i < wh; i++) {
    for (let j = 0; j < wh; j++) {
        // make it complex
        let c = {
            real: (i - w2) * w1,
            imag: (h2 - j) * h1
        }

        // iterate until it explodes
        let n;
        for (n = 0; n < maxiterations; n++) if (f2(c)) break;
        
        // fill pixel
        ctx.fillStyle = color(n)
        ctx.fillRect(offsetX + i, offsetY + j, 1, 1);
    }
}