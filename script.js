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
const USSHW = new Spaceship(20, 5, .7)
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



// function playGame(player, alienArr){
//     // for loop starts the battle sequence for the array
//     for(i = alienArr.length; i > 0; i--){
//         // assigns variable to alien ship
//         let enemy = alienArr.pop()
//         while(enemy.hull > 0){
//             let enemyHull = enemy.hull
//             player.attack(enemy)
//             if (enemyHull !== enemy.hull){
//                 console.log('direct hit!')
//             } else {
//                 console.log('you missed!')
//             }

//             if(enemy.hull > 0){
//                 let playerHull = player.hull;
//                 enemy.attack(player)
//                 if(playerHull !== player.hull){
//                     console.log('emotional damage!!')
//                 } else {
//                     console.log('they are shooting like stormtroopers!')
//                 }
//                 if(player.hull <= 0){
//                     break;
//                 } else {continue}
//             }
//         }
//         if(player.hull <= 0){
//             return false
//         }
//         let retreat = prompt(`your hull strength is: ${player.hull}, do you wish to retreat? enter y/n`)
//         if(retreat === 'y'){
//             return 'retreat'
//         } else {
//             continue
//         }
        
//     }
//     return true
// }

function playGame(player, alienArr){
    let enemy = alienArr.pop()
    console.log(alienArr.length)
    while( alienArr.length > 0 ){
        if( enemy.hull > 0){
            console.log('enemy inbound')
        } else {
            enemy = alienArr.pop()
        }
        let enemyHull = enemy.hull
        player.attack(enemy)
        if (enemyHull == enemy.hull){
            console.log('Miss!')
        } 
        else {
            console.log('Hit!')
        }

        if (enemy.hull <= 0 && alienArr.length != 0) {
            console.log('enemy destroyed')
            let retreat = prompt(`your hull strength is: ${player.hull} with ${alienArr.length} enemy remaining, do you wish to retreat? enter y/n`)
            if(retreat === 'y'){
                return false
                } else {
                    continue
                }
        } 
        else {
            console.log('he is not destroyed yet')
            let playerHull = player.hull;
            enemy.attack(player)
            if(playerHull === player.hull){
                console.log("they're shooting like stormtroopers!")
                } 
            else {
                console.log('emotional damage!!')
                if(player.hull <= 0){
                    return false
                    }
                }
        }
    }
console.log(alienArr.length)
return true
}

// console.log(enemyArray.length)
let result = playGame(USSHW, enemyArray)
console.log(result)



