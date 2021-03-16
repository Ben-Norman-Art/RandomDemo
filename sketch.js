//random Egyptian God
let gods = ["Anubis", "Ra", "Bastet", "Thoth", "Osiris", "Set", "Horus", "Isis"]

function setup(){
  createCanvas(600, 600);
  background(200);

  console.log("Initial array is " + gods);
  console.log(gods);


  gods.shift();
  console.log("Array after shift");
  console.log(gods);

  gods.unshift("Thoth");
  console.log("Array after unshift");
  console.log(gods);

}

function draw() {

}
