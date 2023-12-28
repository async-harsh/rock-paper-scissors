// This is where the computer choice func will pick either rock, paper or scissors.
const choices = ["Rock", "Paper", "Scissor"];
// To create a random index between 0 - 2 to output diff options.
const randIndex = Math.floor(Math.random() * 3);
// Stores the final random output
let FinalChoice = choices[randIndex];
// This is the function which gnerates random output for computer.
function getComputerChoice(FinalChoice) {
  //Outputs computer's coice/pick.
  console.log(FinalChoice);
}