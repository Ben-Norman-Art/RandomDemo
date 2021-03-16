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

function setup() {
  createCanvas(600, 600);
  background(200);

console.log(random(5));
console.log(gods[random(5)]);
}

function draw() {

}
