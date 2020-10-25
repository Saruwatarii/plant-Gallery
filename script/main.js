const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const vistorsName = document.getElementById("wad");
const hidePText = document.getElementById("visitor-name");
vistorsName.addEventListener("click", changeToVisitorName);

function changeToVisitorName() {

    const name = prompt("Enter your name");
    if (name !== "") {
        vistorsName.textContent = `${name}'s Plant Gallery`;
        hidePText.style.visibility = "hidden";
    } else {
        hidePText.style.visibility = "visibility";
    }

}


/* Looping through images */

for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'img/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}