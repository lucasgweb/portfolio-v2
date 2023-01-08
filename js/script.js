function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 70 * i);
    });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.querySelector('#text-animated');
typeWriter(titulo);

const skills = $(".skills");
const projetos = $(".projetos");

$("#skills").on('click', (event) => {
    skills.show().addClass();
    $("#skills").addClass("bg-1");
    $("#projetos").removeClass("bg-1");
    projetos.hide();

})

$("#projetos").on('click', (event) => {
    skills.hide();
    $("#skills").removeClass("bg-1");
    $("#projetos").addClass("bg-1");
    projetos.show();
})

const sections = document.querySelectorAll('.scroll-js');
const windowMetade = window.innerHeight * 0.90;

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0 ;
        if (isSectionVisible) {
            section.classList.add('ativo');
        } else {
            section.classList.remove('ativo');
        }
    })
}

window.addEventListener('scroll', animaScroll);
animaScroll();