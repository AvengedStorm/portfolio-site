let aboutmedisplay = document.getElementById('About-Me');
let projectdisplay = document.getElementById('Projects');
let contactdisplay = document.getElementById('Contact');
let selfiedisplay = document.getElementById('Selfie');
let homedisplay = document.getElementById('home');

let homeDisplay = () => {
    aboutmedisplay.style.display = 'initial';
    projectdisplay.style.display = 'initial';
    contactdisplay.style.display = 'initial';
    selfiedisplay.style.display = 'initial';
}

homedisplay.addEventListener("click", homeDisplay);

let aboutMeDisplay = () => {
    aboutmedisplay.style.display = 'initial';
    projectdisplay.style.display = 'none';
    contactdisplay.style.display = 'none';
    selfiedisplay.style.display = 'none';
}

aboutmedisplay.addEventListener("click", aboutMeDisplay);

let projectsDisplay = () => {
    aboutmedisplay.style.display = 'none';
    projectdisplay.style.display = 'initial';
    contactdisplay.style.display = 'none';
    selfiedisplay.style.display = 'none';
}

projectdisplay.addEventListener("click", projectsDisplay);

let contactDisplay = () => {
    aboutmedisplay.style.display = 'none';
    projectdisplay.style.display = 'none';
    contactdisplay.style.display = 'initial';
    selfiedisplay.style.display = 'none';
}

contactdisplay.addEventListener("click", contactDisplay);

let selfieDisplay = () => {
    aboutmedisplay.style.display = 'none';
    projectdisplay.style.display = 'none';
    contactdisplay.style.display = 'none';
    selfiedisplay.style.display = 'initial';
}

selfiedisplay.addEventListener("click", selfieDisplay);