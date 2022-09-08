// start game prompt


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

function attackEnemy(player, enemy){
    let enemyHull = enemy.hull;
    player.attack(enemy)
    if (enemyHull == enemy.hull){
        console.log('Miss!')
    } 
    else {
        console.log('Hit!')
    }
}

 function enemyAttack(player, enemy){
    let playerHull = player.hull;
    enemy.attack(player)
    if(playerHull === player.hull){
        console.log("they're shooting like stormtroopers!")
        } 
    else 
    {
        console.log('emotional damage!!')
    }
 }



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
        attackEnemy(player, enemy)

// if enemy is dead but enemy array is not depleted then 'continue' restarts the while loop
        if (enemy.hull <= 0 && alienArr.length > 0) {
            console.log('enemy destroyed')
// presents player with data and a retreat option
            let fightOn = window.confirm(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you want to stay in the fight? y/n`);
            // let retreat = prompt(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you wish to retreat? enter y/n`)
            if(fightOn === true){
                    continue
             } else {
                console.log('live to fight another day!')
                return false
             }
// checks to see if enemy and arrays are depleted
        } else if (enemy.hull <= 0 && alienArr.length == 0){
            console.log('enemy destroyed-- you win!')
            break;
        }
// if the enemy persists then this 'else' starts his attack sequence
        else {
            console.log('he is not destroyed yet')
// calling enemyAttack 
            enemyAttack(player, enemy)
                // console.log(alienArr.length)
                if(player.hull <= 0){
// if player hull is depleted then ends game and returns 'false'
                    console.log('Ack! you died.')
                    return false
                    }
        }
    }
// console.log(alienArr.length)
return true
}
setTimeout(() => {
    let startMessage = window.confirm("Enemy inbound! let's get it on!");
    if (startMessage) {
        let result = playGame(USSHW, enemyArray)
        console.log(result)
    }
}, '500');
// console.log(enemyArray.length)
// let result = playGame(USSHW, enemyArray)
// console.log(result)


// setTimeout(() => {
//     let fightOn = window.confirm(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you want to stay in the fight? y/n`);
//     if (fightOn) {
//          continue
//     } else {
//         console.log('live to fight another day.')
//         return false
//     }
// }, '500');


// let x = setTimeout(() => {
//     let fightOn = window.confirm(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you want to stay in the fight? y/n`);
//     if (fightOn) {
//         return true
//     } else {
//         console.log('live to fight another day.')
//         return false
//         }
//     }, '500');
//     if(x === true){
//         console.log(x)
//         continue
//     }