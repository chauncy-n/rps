# rps (Rock Paper Scissors)

# #User Stories
* User sees gameboard
    * User sees printed instructions 
    so that they know how to play.
    * User sees controls for 
    choosing weapon and starting
    * user can turn off sound
    * User can see current score standings 
* User can click a button to 
choose weapon and simultaniously 
start the contest
* User caan start the contest

## UI Notes
main screen will have instructions 
and images of weapons to choose from. 
Clicking on one starts the contest.

## Pseudocode
* When user clicks on image the it 
stores it for comparison
* Randomly select for the AI
* Determine winner
    * Keep track of what each weapon will beat
* Modify score values
* Reset for another round

## Nice things - icing on the cake
* Add a timer before winner is announced
* Best of three scoring
* Audio- countdown, winner/loser(optional can turn off)
* Animations

## State of the App
* playerWeapon = holds the players weapon
* computerWeapon = AI's choice
* variables to hold round scoring, match scoring
* What weapons can I choose? array or object
    * What weapons do those weapons beat
 
## Cache Elements
* Weapon images (container)
* Score text elements (includes round and match 
scoring)
* Button to toggle sound
* Reset button
* Text element for countdown

## Events
* DomContentLoaded: 
    * Grab Dom refs
    * Attach event listeners
    * (OPTIONAL start audio)
* weapon.click: 
    * Store user's weapon choice
    * Rndomly generate AI weapon choice
    * Also store that in a variable
    * compare weapon variables to determine winner
    * start the countdown setIterval()
    
    * display winner
    * update the scores
    * display or enable reset button - or
    automatically reset?

    