var List = require('prompt-list');
var list = new List({
  type: 'list',
  name: 'order',
  message: 'What would you like to order?',
  choices: [
    'Coke',
    'Diet Coke',
    'Cherry Coke',
    {
      name: 'Sprite',
      disabled: 'Temporarily unavailable'
    },
    'Water'
  ]
});

// promise
list.run()
  .then(function(answer) {
    console.log(answer);
  });

// or async
list.ask(function(answer) {
  console.log(answer);
});