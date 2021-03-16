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

randomIndex = int(random(gods.length));

console.log(gods[randomIndex].name);
text(gods[randomIndex].name, 50, 50);

gods.splice(randomIndex, 1);
console.log(gods);

}

function draw() {

}
