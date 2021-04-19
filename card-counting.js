var count = 0;
function cardCounting(card) {
    switch(card) {
        
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count ++;
        break;
        
        case 10 :
        case "J":
        case "Q":
        case "K":
        case "A":
        count --;
        break;
    }
    
    var holdOrBet; 
    if (count > 0) {
        holdOrBet = "Bet"
    } else holdOrBet = "hold";
    
    return count + " " + holdOrBet ;
}
cardCounting(2); cardCounting("Q"); cardCounting("K"); cardCounting("J"); 
console.log(cardCounting(2))
