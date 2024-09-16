const menu = document.querySelector('.menu');
const mainMenu = document.querySelector('.main-menu');
const goBack = menu.querySelector('.go-back');
const trigger = document.querySelector('.mobile-nav-trigger');
const closeMenu = document.querySelector('.mobile-menu-close');
const prevents = document.querySelectorAll('#prevent');
let subMenu;
mainMenu.addEventListener('click', (e) => {
    if(e.target.closest('.menu-item-has-children')){
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren)
    }
})
prevents.forEach(prevent => {
    prevent.onclick = function() {
        event.preventDefault();
      };
});
goBack.addEventListener('click', function(){
    hideSubMenu()
})


trigger.addEventListener('click',function(){
    toggleMenu();
})
closeMenu.addEventListener('click',function(){
    toggleMenu();
})

document.querySelector('.overlay').addEventListener('click', function(){
    toggleMenu();
})

function toggleMenu(){
    menu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active')
}

function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector('.sub-menu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft .5s ease forwards'
    const menuTitle = hasChildren.querySelector(".list-title").textContent
    menu.querySelector('.current-menu-title').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active')
}

function hideSubMenu(){
    subMenu.style.animation = 'slideRight .5s ease forwards'
    setTimeout(()=>{
        subMenu.classList.remove('active');
    },300)
    menu.querySelector('.current-menu-title').innerHTML = "";
    menu.querySelector('.mobile-menu-head').classList.remove('active')
}

//--------------------------- header end


//----------------------------- Slider Start
const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const indicator = document.querySelector('.indicator')
let index = 0;

prev.addEventListener('click', function(){
    prevslide();
    updareCircleIndicator();
    resetTimer();
})
next.addEventListener('click', function(){
    nextSlide();
    updareCircleIndicator();
    resetTimer();
})


function changeSlide (){
    for(let i = 0 ; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}
function nextSlide(){
    if(index == slides.length-1){
        index = 0;
    }else{
        index++;
    }
    changeSlide();
    resetTimer();
}
function prevslide(){
    if(index == 0){
        index = slides.length-1;
    }else{
        index--;
    }
    changeSlide();
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
}

function autoPlay(){
    nextSlide();
}

let timer = setInterval(autoPlay, 4000);

//----------------------------- Slider Start

// -----------------------------------Counter Start
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 1000;
        if(c < target ){
            counter.innerText = "+" + Math.ceil(c + increment);
            setTimeout(updateCounter, 50);
        }else{
            counter.innerText = "+" + target;
        }
    }
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 400) {
            updateCounter()
        }else{
            counter.innerText = 0
        }
      });
    
})

// -----------------------------------Counter End


//---------------------------------WhatsApp Btn

const BTN = document.querySelector('.wapp');
window.addEventListener('scroll', function(){
    if(window.scrollY >= 500){
        BTN.classList.add('active')
    }else{
        BTN.classList.remove('active');
    }
})

//---------------------------------WhatsApp Btn End
