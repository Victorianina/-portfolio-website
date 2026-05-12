const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav--link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

    navLink.forEach(n => n.addEventListener('click',linkAction))

}
const typedHome = new Typed ('#home--typed',{
    strings:['Web Developer' , 'full stack developer'],
    typedSpeed:80,
    backspeed:40,
    backDelay:2000,
    loop:true,
    cursorChar:'-',
}

);


const scrollHeader = ()=>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}

window.addEventListener('scroll',shadowHeader)

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail= (e)=>{
    e.preventDefault()



    emailjs.sendForm('service_b29c6gj','template_gz36q1g','#contact-form','zNPUNW-ApW1KfEa8H')
    .then( ()=>{
        contactMessage.textContent = 'Message sent successfully'

        setTimeout( () =>{
            contactMessage.textContent= ''
        },5000)

        contactForm.reset ()
    }, ()=>{
        contactMessage.textContent = 'Message not sent ( service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)