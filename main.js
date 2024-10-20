/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


// Initialize carousels
const initCarousel = (carouselId) => {
    const images = document.querySelectorAll(`#${carouselId} .carousel-img`);
    let currentIndex = 0;

    const changeImage = () => {
        images[currentIndex].style.display = 'none'; // Hide current image
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        images[currentIndex].style.display = 'block'; // Show next image
    };

    setInterval(changeImage, 3000); // Change image every 3 seconds

    // Initialize first image visibility
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none'; // Hide all but the first image
        }
    });
};

// Initialize both carousels
initCarousel('carousel1');
initCarousel('carousel2');
