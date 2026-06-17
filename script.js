const container = document.getElementById("container");

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

let points = [];

for (let t = 0; t < Math.PI * 2; t += 0.05) {

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    points.push({
        x: centerX + x * 22,
        y: centerY - y * 22
    });
}

points.forEach((point, index) => {

    setTimeout(() => {

        const text = document.createElement("div");

        text.className = "word";
        text.textContent = "I love you";

        text.style.left = point.x + "px";
        text.style.top = point.y + "px";

        container.appendChild(text);

    }, index * 25);

});