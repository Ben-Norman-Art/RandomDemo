let gods = [{
  name: "Anubis",
  weapon: "Flail"
}, {
  name: "Ra",
  weapon: "Spear of Ra"
}, {
  name: "Bastet",
  weapon: "Sistrum"
}, {
  name: "Thoth",
  weapon: "Book of Thoth"
}, {
  name: "Osiris",
  weapon: "Crook"
}, {
  name: "Horus",
  weapon: "Spear of Horus"
}, {
  name: "Set",
  weapon: "Sword"
}, {
  name: "Anhur",
  weapon: "Spear"
}, {
  name: "Geb",
  weapon: "The Earth"
}, {
  name: "Isis",
  weapon: "Her Wings"
}, {
  name: "Khepri",
  weapon: "Scepter"
}, {
  name: "Neith",
  weapon: "Bow and Arrows"
}, {
  name: "Serquet",
  weapon: "Her Tail"
}, {
  name: "Sobek",
  weapon: "Scepter"
}];

let randomIndex;
let animating = false;
let egyptian = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 9; i++) {
    egyptian[i] = loadImage(`assets/egyptian_${i}.PNG`)
  }
}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  button = createButton('Press Me!!!');
  button.parent('button-holder');
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  background(247, 210, 158);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  textFont("Optima");
  text("Learn About the Egyptian Gods", 50, 50);


}

function draw() {



  if (animating == true) {
    background(255, 230, 194);

    let r = random(0, 255);
    let r2 = random(0, 255);
    let r3 = random(0, 255);
    let c = color(r, 0, r3);
    fill(c);
    rect(random(width), random(height), random(50, 200));

    image(egyptian[imageCounter], width / 2, height / 2);
    if (imageCounter < egyptian.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;


  if (gods[0]) {
    background(255, 230, 194);
    randomIndex = int(random(gods.length));
    textFont("Optima");
    text(`${gods[randomIndex].name}'s God Weapon is the
      ${gods[randomIndex].weapon}`, width/2 - 150, height/2 + 150);
      image(random(egyptian), width/2, height / 2);
    // text(gods[randomIndex].name + "'s God Weapon is the " + gods[randomIndex].weapon, 50, 50);
    gods.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("Nothing left!", 50, 50);
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
