
# Lucky Stars Slot Machine


## Background
My version of the classic slot machine with a space theme.

## Game Rules
Start the game by pressing the + or minus buttons to raise or lower your bet. Alternatively you can press the "Max Bet" star to bet all of your credits.
Next press the "Launch" button.
If you run out of credits it is game over.

## Winning Combos
 - 3x Astronauts = 4 x your bet size
 - 3x Rockets = 6 x your bet size
 - 3x Saturns = 10 x your bet size

## Wireframe
![image](planning/p1-wireframe.png)

## Screenshot
![image](planning/screenshot.png)

## Future Considerations
 - add animation to slot
 - add extra reels and more symbols for more win conditions
 - add more betting options
 - add audio

 ## Planning
 
spinWheel function () {
setTimeout between showing each individual symbol
chosen from randomize function
}

winConditions function() {
if symbols land on "X" "X" "X" then player will win a set multiplier times the amount bet
}
if player hits certain combo ex.(7,7,7,) display JACKPOT!

randomize function() {
on button clicked randomize symbol( math.floor math.random)
}

setBet function() {
when bet button clicked, set amount bet on slot machine_- and a +.
make max bet total available in credits remaining
}

creditsRemaining function() {
set player has "x" amount to start. When bet is set, 
deduct from player amount,
once player hits 0, game over.
}
