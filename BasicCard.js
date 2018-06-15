

var request = require("./cardapp");
var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = BasicCard;


var frontOne = new request("Which color can you color the sky with?", "the blue crayon.");
var frontTwo  = new request("Which color can you color the grass with?", "the green crayon.");
var frontThree  = new request("Which color can you color the banana with?", "the yellow crayon.");
var frontFour  = new request("Which color can you color the pumkin with?", "the orange crayon.");
var frontFive  = new request("Which color can you color the apple with?", "the red crayon.");
var frontSix  = new request("Which color can you color the hay with?", "the brown crayon.");
var frontSeven  = new request("Which color can you color the snow with?", "the white crayon.");
var frontEight  = new request("Which color can you color the dolphin with?", "the gray crayon.");
var frontNine  = new request("Which color can you color the tire with?", "the black crayon.");
var frontTen  = new request("Which color can you color the grass with?", "the green crayon.");


function start() {

  inquirer.prompt([
    {
      type: "list",
      name: "nodeReviewQ1",
      message: frontOne.front,
      choices: [
        // "Which color can you color the sky with?",
        // "Which color can you color the grass with?",
        // "Which color can you color the banana with?",
        // "Which color can you color the pumkin with?",
        // "Which color can you color the apple with?",
        // "Which color can you color the hay with?",
        // "Which color can you color the snow with?",
        // "Which color can you color the dolphin with?",
        // "Which color can you color the tire with?"
        frontOne,
        frontTwo   
      
      
      ]
    }
  ]).then(function(response) {
    console.log(frontOne.back)
    switch (response.nodeReviewQ1) {
      case frontOne.front:
      console.log(frontOne.back);
      start();
      break;

    }
  })
}
// start();
//       inquirer.prompt([
//         {
//           type: "list",
//           name: frontTwo.front,
//           message: frontTwo.front,
//           choices: ["front", "back",]
//         }]).then(function(response) {
//           console.log(frontTwo.back)
//           switch (response.nodeReviewQ1) {
//             case "back":
//             console.log(frontTwo.back);
//             start();
//             break;
//           }
//         })
      // }
                // }
        // })
      // }             
      // // case "Let's do Node!":
      // request("https://randomuser.me/api/?results=5", function(err, response, body){
      //   // console.log("error", err)
      //   // console.log("res", response)
      //   var bodyObj = JSON.parse(body);

      //   var albert = "";

      //   for (var i = 0; i < bodyObj.results.length; i++) {
      //     if (i === (bodyObj.results.length - 1)){
    //         albert += "and " + bodyObj.results[i].name.first;
    //       }
    //       else {
    //         albert += bodyObj.results[i].name.first + ", ";
    //       }

    //       //same as above --> albert = albert + bodyObj.results[i].name.first + ", ";
    //     }

    //     fs.appendFile('clarks_real_friendslist.txt', albert + " are definitely real and Clark's friends.\r\n", function (err) {
    //       if (err) throw err;
    //       console.log('Saved!');
    //       start();
    //     });
    //   })
    //   break;

    //   case "Let's go home!":
    //   console.log("Kay byeeeee~~!! xoxo")
    //   break;


start();

module.exports = BasicCard;



//     inquirer.prompt([
//       {
//         type: "list",
//         name: "BasicCard",
//         message: "Which color can you color the sky with?",
//         choices: ["Front", "Back"]  
//       }
    
//     ]).then(function(response) {
//       console.log(response.BasicCard)
//       switch (response.BasicCard) {
//         case "Front":
//         console.log("Which color can you color the sky with?");
//         start();
//         break;
//         case "BasicCard:
//         console.log("the blue crayon.");  
//       }
//         break;
//     })  
//     inquirer.prompt([
//       {
//         type: "list",
//         name: "BasicCard",
//         message: "Which color can you color the grass with?",
//         choices: ["Front", "Back"]  
//       }
    
//     ]).then(function(response) {
//       console.log(response.BasicCard)
//       switch (response.BasicCard) {
//         case "Front":
//         console.log("Which color can you color the grass with?");
//         start();
//         break;
//         case "Back":
//         console.log("the green crayon.");  
//       }
//     }) 

//     inquirer.prompt([
//       {
//         type: "list",
//         name: "BasicCard",
//         message: "Which color can you color the banana with?",
//         choices: ["Front", "Back"]  
//       }
    
//     ]).then(function(response) {
//       console.log(response.BasicCard)
//       switch (response.BasicCard) {
//         case "Front":
//         console.log("Which color can you color the banana with?");
//         start();
//         break;
//         case "Back":
//         console.log("the yellow crayon.");  
//       }
//     }) 

//   }
//   start();


// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// var frontOne = new request("Which color can you color the sky with?", "the blue crayon.");
// var frontTwo  = new request("Which color can you color the grass with?", "the green crayon.");
// console.log (frontOne);
// calling dogs and cats makeNoise methods
// frontOne.makeNoise();
// frontTwo.makeNoise();

// if we want, we can change an objects properties after they're created
// cats.raining = true;
// cats.makeNoise();

// var massHysteria = function(dogs, cats) {
//   if (dogs.raining === true && cats.raining === true) {
//     console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//   }
// };

// massHysteria(dogs, cats);































