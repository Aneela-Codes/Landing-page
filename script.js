
// -----------Sticky navbar on scroll------------
window.addEventListener('scroll',function(){
      let topBar =  document.querySelector('.top-bar');
    topBar.classList.toggle('sticky', window.scrollY>0);

})
window.addEventListener('scroll',function(){
    
    let logo =  document.getElementById('logo-part');
    logo.classList.toggle('hide', window.scrollY>0);

    let cart = document.querySelector('.cart');
    cart.classList.toggle('col-lg-12', window.scrollY>0);
    cart.classList.toggle('col-md-12', window.scrollY>0);

})


//------------Sidebar--------------

const openMenu=()=>{
    let navbar = document.querySelector('nav').style.width='20rem';
}

const closeMenu=()=>{
    let navbar = document.querySelector('nav').style.width='0rem';
}
// / -------------------------------FORM-----STARTS-------------------

const openForm = ()=>{
    let popup = document.querySelector('.form-bg');
    popup.style.display='flex';
}
const closeForm =()=>{
    let popup = document.querySelector('.form-bg');
    popup.style.display='none';
}

let loginBtn = document.getElementById('login');
let signUpBtn = document.getElementById('sign-up');
let button = document.getElementById('btn');

const signUp = () =>{
    signUpBtn.style.left='50px'
    loginBtn.style.left='-450px'
    button.style.left='110px'
}
const login = () =>{
    signUpBtn.style.left='500px'
    loginBtn.style.left='100px'
    button.style.left='0'
}
// -------------------------------FORM-----ENDS-------------------


// ----------------CAROUSEL------------------

let product0 = document.getElementById('pro');
let product1 = document.getElementById('pro1');
let product2 = document.getElementById('pro2');
let product3 = document.getElementById('pro3');
let product4 = document.getElementById('pro4');
let product5 = document.getElementById('pro5');

let image0 = 'images/watch.PNG'
let image1 = 'images/watch2.PNG'
let image2 = 'images/nokia.PNG'
let image3 = 'images/nokia2.PNG'
let image4 = 'images/camera.PNG'
let image5 = 'images/camera2.PNG'


product0.addEventListener('click', ()=>{
    document.getElementById('slider-img').src = image0;
})
product1.addEventListener('click', ()=>{
    document.getElementById('slider-img').src = image1;
})
product2.addEventListener('click', ()=>{
    document.getElementById('slider-img1').src = image2;
})
product3.addEventListener('click', ()=>{
    document.getElementById('slider-img1').src = image3;
})
product4.addEventListener('click', ()=>{
    document.getElementById('slider-img').src = image4;
})
product5.addEventListener('click', ()=>{
    document.getElementById('slider-img').src = image5;
})

