let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('open');
  menu.textContent = navbar.classList.contains('open') ? '✖' : '☰';
}

