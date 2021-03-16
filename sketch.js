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


}

function draw() {

}

function mousePressed() {
  background(random(255));
  randomIndex = int(random(gods.length));
  text(gods[randomIndex].name, 50, 50);
  gods.splice(randomIndex, 1);
}
