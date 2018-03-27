const divSettings = document.querySelector('.settings');
let size, posX, posY;

function makeLabel(name) {
    let newLabel = createSpan();
    newLabel.parent(divSettings);
    newLabel.html(name + "<br>" );
    return;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    size = createSlider(5, 300, 10, 1);
    posX = createSlider(0, width, width/2, 1);
    posY = createSlider(0, height, height/2, 1);
    size.parent(divSettings);
    makeLabel("size");
    posX.parent(divSettings);
    makeLabel("posX");
    posY.parent(divSettings);
    makeLabel("posY");
    textSize(15);

}

function draw() {
    let s = size.value();
    let pX = posX.value();
    let pY = posY.value();
    background(0);
    stroke(255);
    fill('#07C');
    ellipse(pX, pY, s);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

const settingsBtn = document.querySelector(".settings-btn");
const settings = document.querySelector('.settings');
settingsBtn.addEventListener('click', ()=>settings.classList.toggle('open-settings'));
