var typed = new Typed('#multiText', {
  strings: ['Mahasiswa', 'Youtuber', 'FrontEnd Developer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});

//Toggle class active
const navbarList = document.querySelector('.navlist');
//ketika menu-icon menu diklik
document.querySelector('#menu-icon').onclick = () => {
  navbarList.classList.toggle('active');
};

//Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu-icon');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove('active');
  }
});
