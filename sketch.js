//random Egyptian God
let gods = ["Anubis", "Ra", "Bastet", "Thoth", "Osiris", "Set", "Horus", "Isis"]

function setup(){
  createCanvas(600, 600);
  background(200);

  console.log("Initial array is " + gods);
  console.log(gods);


  gods.spliced(4, 4);
  console.log("Array after spliced");
  console.log(gods);

}

function draw() {

}
