const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const myVideo = document.getElementById("myVideo");
let clicked = false;



const playMusicBtn = document.getElementById('playMusicBtn');
const myAudio = document.getElementById('myAudio');

// Set initial volume (0.5 for 50%)
myAudio.volume = 0.7;

function toggleMusic() {
    if (myAudio.paused) {
        myAudio.play();
        playMusicBtn.innerHTML = 'Pause Music';
    } else {
        myAudio.pause();
        playMusicBtn.innerHTML = 'Play Music';
    }
}


menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hamburger-toggle')
    myVideo.classList.toggle('hamburger-toggle')

    if (clicked) {
        menuHamburger.classList.remove('fa-xmark');
        menuHamburger.classList.add('fa-bars');
        clicked = false;
    } else {
        menuHamburger.classList.remove('fa-bars');
        menuHamburger.classList.add('fa-xmark');
        clicked = true;
    }
})

const scrlToSection = (sectionId, upGap) => {
    const section = document.getElementById(sectionId);
    if (section) {
        let offset = section.getBoundingClientRect().top - upGap;
        window.scrollBy({ top: offset, behavior: 'smooth' });
    }
}
