let homeDisplay = () => {
    document.getElementById('About-Me').style.display = 'initial';
    document.getElementById('Projects').style.display = 'initial';
    document.getElementById('Contact').style.display = 'initial';
}

Element.addEventListener.getElementById('home')("click", homeDisplay);

let aboutMeDisplay = () => {
    document.getElementById('About-Me').style.display = 'initial';
    document.getElementById('Projects').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
}

Element.addEventListener.getElementById('About-Me')("click", aboutMeDisplay);

let projectsDisplay = () => {
    document.getElementById('About-Me').style.display = 'none';
    document.getElementById('Projects').style.display = 'initial';
    document.getElementById('Contact').style.display = 'none';
}

Element.addEventListener.getElementById('Projects')("click", projectsDisplay);

let contactDisplay = () => {
    document.getElementById('About-Me').style.display = 'none';
    document.getElementById('Projects').style.display = 'none';
    document.getElementById('Contact').style.display = 'initial';
}

Element.addEventListener.getElementById('Contact')("click", contactDisplay);