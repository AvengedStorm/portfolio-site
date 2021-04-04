let aboutmebtn = document.getElementById('aboutmebtn');
let picbtn = document.getElementById('picbtn');
let projectbtn = document.getElementById('projectbtn');
let contactbtn = document.getElementById('contactbtn');

let about = document.getElementById('about');
let selfie = document.getElementById('Selfie');
let Projects = document.getElementById('Projects');
let contact = document.getElementById('Contact');

aboutmebtn.addEventListener("click", () => {
    Projects.style.display = "none";
    contact.style.display = "none";
    selfie.style.display = "none";
    about.style.display = "";
    }
)

picbtn.addEventListener("click", () => {
    Projects.style.display = "none";
    contact.style.display = "none";
    selfie.style.display = "";
    about.style.display = "none";
    }
)

projectbtn.addEventListener("click", () => {
    Projects.style.display = "";
    contact.style.display = "none";
    selfie.style.display = "none";
    about.style.display = "none";
    }
)

contactbtn.addEventListener("click", () => {
    Projects.style.display = "none";
    contact.style.display = "";
    selfie.style.display = "none";
    about.style.display = "none";
    }
)

console.log(Projects);
console.log(contact);
console.log(selfie);
console.log(about);