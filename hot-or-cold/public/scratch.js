In the Hot or Cold guessing game, the computer randomly selects a number between 1 and 100, and the player then tries to guess the number.The player gets feedback for each guess – "hot" if their guess was close, and "cold" if their guess was far.When the user guesses the secret number, the app lets them know, and they'll have the option to start a new game.

You can see a version of the game running here.Note that this app is implemented using jQuery, not React.It also takes a more fine - grained approach to providing feedback on guesses("Hot", "Cold", "Kinda hot") that is not a requirement for your app.

  Requirements
Create a new local React project using Create React App.
Begin by breaking the UI into separate sections, and creating static, stateless components for each piece.
You should be able to see a complete static version of your user interface before working on the interactivity.


//Header contains WHAT? and NEW GAME
//WHAT? component that opens up modal with info on game
//+NEW GAME component that restarts game from scratch
//h1

//Section that contains the following vvvvvvvvvv
//Input that has form and button
//p tag with nested span that displays guess count
//ul that displays guesses
