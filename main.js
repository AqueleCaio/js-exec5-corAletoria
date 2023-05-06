const button = document.querySelector('button');
const h1 = document.querySelector('h1');

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

button.addEventListener('click', function () {
  const randomColor = randomRGB();
  document.body.style.backgroundColor = randomColor;
  h1.innerText = `Cor de Fundo: ${randomColor}`;
});
