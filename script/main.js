
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



const vistorsName = document.getElementById("wad");
const hidePText = document.getElementById("visitor-name");
vistorsName.addEventListener("click", changeToVisitorName);


const plantInfo = document.getElementById("info-p");
const allPlants = document.getElementById("planter");

/*
const plantNamewA = document.getElementById("plantA");
const plantNameB = document.getElementById("plantB");
const plantNameC = document.getElementById("plantC");
const plantNameD = document.getElementById("plantD");
const plantNameE = document.getElementById("plantE");
const plantNameF = document.getElementById("plantF");
const plantNameG = document.getElementById("plantG");
const plantNameH = document.getElementById("plantH");
const plantNameI = document.getElementById("plantI");
const plantNameJ = document.getElementById("plantJ");
*/

allPlants.addEventListener("click", fullList);

let storyText = {
    plantNameA: ["Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris", "img/pic5.jpg"],
    plantNameB: ["enim ad minim veniam, quis nostrud exercitation ullamco laboris", "img/pic4.jpg"],
    plantNameC: ["ad minim veniam, quis nostrud exercitation ullamco laboris", "img/pic3.jpg"],
    plantNameD: ["minim veniam, quis nostrud exercitation ullamco laboris", "img/pic2.jpg"],
    plantNameE: ["veniam, quis nostrud exercitation ullamco laboris", "img/pic1.jpg"],
    plantNameF: ["quis nostrud exercitation ullamco laboris", "img/pic5.jpg"],
    plantNameG: ["nostrud exercitation ullamco laboris", "img/pic4.jpg"],
    plantNameH: ["exercitation ullamco laboris", "img/pic3.jpg"],
    plantNameI: ["ullamco laboris", "img/pic2.jpg"],
    plantNameJ: ["Ulaboris", "img/pic1.jpg"]
};

const plantInfoVisible = () => { plantInfo.style.visibility = "visible";
}

function fullList(e){
    let newStory = "";
    let newImg = undefined;
    if (e.target && e.target.matches("#plantA")) {
        newStory = storyText.plantNameA[0];
        newImg = storyText.plantNameA[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log(newImg)

    } else if (e.target && e.target.matches("#plantB")) {
        newStory = storyText.plantNameB[0];
        newImg = storyText.plantNameB[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("b")
    } else if (e.target && e.target.matches("#plantC")) {
        newStory = storyText.plantNameC[0];
        newImg = storyText.plantNameC[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("c")
    } else if (e.target && e.target.matches("#plantD")) {
        newStory = storyText.plantNameD[0];
        newImg = storyText.plantNameD[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("d")
    } else if (e.target && e.target.matches("#plantE")) {
        newStory = storyText.plantNameE[0];
        newImg = storyText.plantNameE[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("e")
    } else if (e.target && e.target.matches("#plantF")) {
        newStory = storyText.plantNameF[0];
        newImg = storyText.plantNameF[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("f")
    } else if (e.target && e.target.matches("#plantG")) {
        newStory = storyText.plantNameG[0];
        newImg = storyText.plantNameG[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("g")
    } else if (e.target && e.target.matches("#plantH")) {
        newStory = storyText.plantNameH[0];
        newImg = storyText.plantNameH[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("h")
    } else if (e.target && e.target.matches("#plantI")) {
        newStory = storyText.plantNameI[0];
        newImg = storyText.plantNameI[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("i")
    } else if (e.target && e.target.matches("#plantJ")) {
        newStory = storyText.plantNameJ[0];
        newImg = storyText.plantNameJ[1];
        displayedImage.src = newImg;
        plantInfo.textContent = newStory;
        plantInfoVisible();
        console.log("j")
    }
}

function plantA() {
    let newStory = storyText.plantNameA;

    plantInfo.textContent = newStory
    plantInfo.style.visibility = 'visible';
    console.log("sup")
}

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