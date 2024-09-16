const app = document.getElementById('app');

let header = document.createElement('h1');
const text = "I've created this new H1 element using DOM"
header.textContent = text;

app.appendChild(header);