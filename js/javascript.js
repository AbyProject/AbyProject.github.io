/**Funcion para cambiar de testimonio mediante las felchas en sus laterales */
(function(){
    const sliders  = [...document.querySelectorAll('.testimony_body')];
    const buttonNext  = document.querySelector('#next');
    const buttonBefore  = document.querySelector('#before');
    let value;

    console.log(sliders);

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
       const currentTestimony = document.querySelector('.testimony_body--show').dataset.id; 
       value = Number(currentTestimony);
       value+= add;
        console.log(value);
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony_body--show');
    }

})();
/** Funcion que nos permite ocultar el texto en el apartado de preguntas frecuentes  */
(function() {
const titleQuestion = [...document.querySelectorAll('.questions_title')];
titleQuestion.forEach(question =>{
    question.addEventListener('click', () => {
       let  height = 0;
       let answer = question.nextElementSibling;
       let addPadding = question.parentElement.parentElement;
        
        addPadding.classList.toggle('questions_padding--add')
        question.children[0].classList.toggle('questions_arrow--rotate');
       if(answer.clientHeight === 0 ){
        height = answer.scrollHeight;
       }
       answer.style.height = `${height}px`;
    })
})
}());
/**Funcion  que nos muestra y oculta el menú cuando la pantalla se hace más pequeña */
(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

    menu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
    


})();

/** Forma de enviar un correo de forma local  */
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#tru')
const msm  = "Hola soy un mensaje de prueba "
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}

/** Botón que aparece cuando se baja */
$(document).ready(function(){

 $('.ir-arriba').click(function(){
     $('body, html').animate({
         scrollTop: '0px'
     }, 300);
 });

 $(window).scroll(function(){
     if( $(this).scrollTop() > 0 ){
         $('.ir-arriba').slideDown(300);
     } else {
         $('.ir-arriba').slideUp(300);
     }
 });

});