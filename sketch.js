
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
let button;

function setup() {
  var canvas = createCanvas(550, 550);
  canvas.parent('sketch-holder');
  button = createButton('Press Me!!!');
  button.parent('button-holder');
  button.mousePressed(buttonPressed);
  background(200);
  textSize(32);

  text("Learn About the Egyptian Gods", 50, 50);

}

function draw() {


  if(animating == true){
    let r = random(0, 255);
    let r2 = random(0);
    let r3 = random(0, 255);
    let c = color(r, 0, r3);
    fill(c);
    rect(random(width), random(height), random(50, 200));


  }
}

function randomizer(){
  animating = false;

  if (gods[0]){
    background(random(200, 255));
    randomIndex = int(random(gods.length));
    text(`${gods[randomIndex].name}'s God Weapon is the
      ${gods[randomIndex].weapon}`, 50, 50);
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
