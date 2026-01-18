// ========== SIDEBAR TOGGLE ==========
const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Abrir sidebar
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    });
}

// Fechar sidebar com botão X
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
}

// Fechar sidebar ao clicar em qualquer link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
});

// ========== SKILLS TABS ==========
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

// Ativar primeiro tab por padrão
if(tabs.length > 0 && tabContent.length > 0) {
    // Ativar primeiro
    tabs[0].classList.add('skills-active');
    const firstTarget = document.querySelector(tabs[0].dataset.target);
    if(firstTarget) firstTarget.classList.add('skills-active');
    
    // Adicionar eventos
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            
            if(!target) return;
            
            // Remove active de todos
            tabContent.forEach(content => {
                content.classList.remove('skills-active');
            });
            
            tabs.forEach(t => {
                t.classList.remove('skills-active');
            });
            
            // Adiciona active nos clicados
            target.classList.add('skills-active');
            tab.classList.add('skills-active');
        });
    });
}

// ========== SERVICES MODAL ==========
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(modalViews[index]) {
            modalViews[index].classList.add('active-modal');
        }
    });
});

modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        modalViews.forEach(modal => {
            modal.classList.remove('active-modal');
        });
    });
});

// Fechar modal clicando fora
modalViews.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('active-modal');
        }
    });
});

// ========== FORM ANIMATION ==========
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value === "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

// ========== FORM SUBMISSION ==========
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostra mensagem de sucesso
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        
        // Reseta o formulário
        this.reset();
        
        // Remove a classe focus
        inputs.forEach(input => {
            input.parentNode.classList.remove('focus');
        });
    });
}

// ========== SCROLL ACTIVE LINK ==========
const sections = document.querySelectorAll('section[id]');

function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active de todos
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            
            // Adiciona active no link correspondente
            const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            if(activeLink) activeLink.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', navHighlighter);

// ========== SCROLL REVEAL ANIMATIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa ScrollReveal se a biblioteca estiver carregada
    if(typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2000,
            delay: 400,
            reset: false
        });
        
        sr.reveal('.home-data, .home-img', { origin: 'bottom', interval: 100 });
        sr.reveal('.about-img, .about-data', { origin: 'left', interval: 100 });
        sr.reveal('.skills-container, .services-container', { origin: 'bottom' });
        sr.reveal('.qualification-container, .contact-container', { origin: 'right' });
    }
    
    console.log('Portfólio de Keven Carvalho carregado com sucesso! 🚀');
});

// ========== RESPONSIVE FIXES ==========
function handleResize() {
    if(window.innerWidth <= 1024) {
        document.querySelector('.main').style.marginLeft = '0';
    } else {
        document.querySelector('.main').style.marginLeft = '100px';
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Executa uma vez ao carregar