/* Abriri e fechar menu ao clicar no icone: hamburger e X*/
const nav = document.querySelector('.menu-mobile')
const navdois = document.querySelector('.menu-x')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
    navdois.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    navdois.classList.remove('show')
  })
}

/* Mudar header da pagina quando der socroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight - 20;
const navHeightDesktop = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menor que a aultura do header
  };
  if (window.scrollY >= navHeightDesktop) {
    // scroll maior que a altura do header
    header.classList.add('scroll-desktop')
  } else {
    header.classList.remove('scroll-desktop')
    //menor que a aultura do header
  }
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visivel na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})