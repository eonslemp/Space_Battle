class Spaceship {
    constructor(hullParam, firepowerParam, accuracyParam){
        this.hull = hullParam;
        this.firepower = firepowerParam;
        this.accuracy = accuracyParam;
    }
    attack(enemy){
        if(Math.random() <= this.accuracy){
            enemy.hull -= this.firepower
        }
    }

}
const USSHW = new Spaceship(7, 5, .7)
// console.log(USSHW.accuracy)

function alienArray(n){
    let enemyArray = new Array
    for(i=0;i<n;i++){
    const alienHull = Math.floor(Math.random()*(7 -3)+3)
    const alienFirepower = Math.floor(Math.random()*(5 - 2)+2)
    const alienAccuracy = Math.floor(Math.random()*(9 - 6)+6)/10
    const alienship = new Spaceship(alienHull, alienFirepower, alienAccuracy)
    enemyArray.push(alienship)
}
return enemyArray
}

// alienArray(2)
let enemyArray = alienArray(6)

// start game prompt
// setTimeout(() => {
//     let startMessage = window.confirm('The fate of Earth is in your hands. Are you ready?');
//     if (startMessage) {
//         startGame()
//     }
// }, '3000');

// function for starting the game
// function startGame () {    
//     // start battle function
//     if (confirm('Prepare for battle')) {
//         playGame()
//     }
//     // else when player cancels
//     else {
//         confirm('Mission Failed')
//     }

// }



function playGame(player, alienArr){
// selects first enemy
//   console.log(alienArr.length)
    let enemy = alienArr.pop()
// bug here!
    while( alienArr.length >= 0 ){
// checking if enemy is new or from previous round
        if( enemy.hull > 0){
            console.log('enemy inbound')
        } else {
// if enemy hull is depleted then selects new enemy from array
            enemy = alienArr.pop()
        }
// this sequence checks for effects of players attack 
        let enemyHull = enemy.hull
        player.attack(enemy)
        if (enemyHull == enemy.hull){
            console.log('Miss!')
        } 
        else {
            console.log('Hit!')
        }
// checking to see if enemy is destroyed and if there are more enemies in array
// if enemy is dead but enemy array is not depleted then 'continue' restarts the while loop
        if (enemy.hull <= 0 && alienArr.length > 0) {
            console.log('enemy destroyed')
// presents player with data and a retreat option
            let retreat = prompt(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you wish to retreat? enter y/n`)
            if(retreat === 'y'){
                console.log('live to fight another day!')
                return false
                } else {
// if player choooses to continue the fight the loop conintues
                    continue
                }
// checks to see if enemy and arrays are depleted
        } else if (enemy.hull <= 0 && alienArr.length == 0){
            console.log('enemy destroyed-- you win!')
            break;
        }
// if the enemy persists then this 'else' starts his attack sequence
        else {
            console.log('he is not destroyed yet')
// checking player hull strength to compare after attack
            let playerHull = player.hull;
            enemy.attack(player)
// these conditionals check for effects of the enemies attacks
            if(playerHull === player.hull){
                console.log("they're shooting like stormtroopers!")
                } 
            else {
                console.log('emotional damage!!')
                // console.log(alienArr.length)
                if(player.hull <= 0){
// if player hull is depleted then ends game and returns 'false'
                    console.log('Ack! you died.')
                    return false
                    }
                }
        }
    }
// console.log(alienArr.length)
return true
}

// console.log(enemyArray.length)
let result = playGame(USSHW, enemyArray)
console.log(result)



