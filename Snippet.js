var Cloze = require("./ClozeCard.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects
  this.cloze = [];
  this.profName = profName;
  this.roomNum = roomNum;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addCloze = function(GeorgeWashington, Thomas, Abraham) {
    this.cloze.push(new Cloze(GeorgeWashington, Thomas, Abraham));
  };

// exporting our ClozeCard constructor. We will require it in main.js
module.exports = ClozeCard;



Which color can you color the sky with? the blue crayon.
Which color can you color the grass with? the green crayon.
Which color can you color the banana with? the yellow crayon.
Which color can you color the pumkin with? the orange crayon.
Which color can you color the apple with? the red crayon.
Which color can you color the hay with? the brown crayon.
Which color can you color the snow with? the white crayon.
Which color can you color the dolphin with? the gray crayon.
Which color can you color the tire with? the black crayon.
