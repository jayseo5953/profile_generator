const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let QnA = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  QnA.push(answer)

  rl.question('What\'s an activity you like doing? ', (answer) => {
    QnA.push(answer)

    rl.question('What do you listen to while doing that? ', (answer) => {
      QnA.push(answer)

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        QnA.push(answer)
      
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          QnA.push(answer)
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            QnA.push(answer)

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              QnA.push(answer)
              
              
              
              console.log(
                `${QnA[0]} loves listening to ${QnA[2]} while ${QnA[1]}, devouring ${QnA[4]} for ${QnA[3]}, prefers ${QnA[5]} over any other sports, and is amazing at ${QnA[6]}.`
              )



             rl.close();

            });
          
          });
         
        });
      });
     
    });
   
  });
 
});

