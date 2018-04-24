// entry file

const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../nodeSolutions/game.js'); // require appropriate file

$( () => {
  // Your code here
  console.log("Beginning load.");



  const view = new View();
  const game = new Game();
  const $viewContainer = $('.ttt');



  console.log("Load complete.");
});
