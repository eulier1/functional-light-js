let decreasingCollection = [5,6,7,8,9]

for (let i=decreasingCollection.length - 1; i >= 0; i--) { 
    setTimeout( () => { console.log( decreasingCollection[i] ) }, ((decreasingCollection.length - i) * 1000) )
}