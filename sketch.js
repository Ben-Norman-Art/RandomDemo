//random Egyptian God
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
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("Click to Randomize", 50, 50);
}

function draw() {

}

function mousePressed() {

if (gods[0]){
  background(random(200, 255));
  randomIndex = int(random(gods.length));
  text(gods[randomIndex].name, 50, 50);
  gods.splice(randomIndex, 1);
} else {
  background(random(200, 255));
  text("Nothing left!", 50, 50);
}
}
