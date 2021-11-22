const t = parseFloat(document.querySelector('.temp').textContent);
const s = parseFloat(document.querySelector('.speed').textContent);
let f;
if (t <= 50 && s >= 3) {
  f = `${(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(0)}°F`;
}
else {
  f = "N/A";
}
document.querySelector('.wind').textContent = f;
