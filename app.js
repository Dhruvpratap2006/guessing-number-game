const max = prompt("Enter the max number : ");


const random = Math.floor(Math.random() * max) + 1;
console.log("Random number generated:", random);


let guess = prompt("Guess the number (or type 'quit' to exit):");

while(true) {
    if(guess == "quit") {
    console.log("Game exited by the user.");
    break;
    }

    if(guess == random) {
        console.log("🎉 Congratulations! You guessed the correct number: " , random);
        break;
    } 
    
    else if(guess > random) {
         guess = prompt("Your guess is too high. Try a smaller number:");
    }

    else if(guess < random) {
         guess = prompt("Your guess is too low. Try a larger number:");
    }
    else {
        guess = prompt("your guess was wrong. Please try again"); 
    }
}
