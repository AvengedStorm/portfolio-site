let aboutmedisplay = document.getElementById('About-Me');
let projectdisplay = document.getElementById('Projects');
let contactdisplay = document.getElementById('Contact');


let homeDisplay = () => {
    aboutmedisplay.style.display = 'initial';
    projectdisplay.style.display = 'initial';
    contactdisplay.style.display = 'initial';
}

Element.addEventListener.getElementById('home')("click", homeDisplay);

let aboutMeDisplay = () => {
    aboutmedisplay.style.display = 'initial';
    projectdisplay.style.display = 'none';
    contactdisplay.style.display = 'none';
}

Element.addEventListener.aboutmedisplay("click", aboutMeDisplay);

let projectsDisplay = () => {
    aboutmedisplay.style.display = 'none';
    projectdisplay.style.display = 'initial';
    contactdisplay.style.display = 'none';
}

Element.addEventListener.projectdisplay("click", projectsDisplay);

let contactDisplay = () => {
    aboutmedisplay.style.display = 'none';
    projectdisplay.style.display = 'none';
    contactdisplay.style.display = 'initial';
}

Element.addEventListener.contactdisplay("click", contactDisplay);