console.log("Welcome to the game of WAR");

const suits = ["Hearts", "Spades","Clubs","Diamonds"];
const ranks = {1: "Ace", 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 10 : 10, 11 : "Jack" , 12 : "Queen" , 13 : "King"};

let table = [];

class Player {
    constructor (hand, name){ 
        this.hand = hand;
        this.name = name;
        this.empty = false;
    }
    
    addCards(cards){
        this.hand.concat(cards); 
    }

     flip(){
         return this.hand.shift();
     }
}

class Card {
    constructor (suit, rank, score) {
            
        this.suit = suit;
        this.rank = rank;
        this.score = score;
        this.name = `${this.rank} of ${this.suit}`; 
    }
}

class Deck {
    constructor(){ 
     this.cards = [];
     for(let j=0; j < suits.length; j++){
        for(let k=1; k <= 13 ; k++){
           this.cards.push( new Card(suits[j], ranks[k], k));
        }
     }
         this.length = this.cards.length;
    }
    
    draw() {return this.cards.shift();}

    shuffle(){
        let pos = this.cards.length;
        let randpos; 

        while(pos != 0){
            randpos = Math.floor(Math.random()*pos);
            pos--;
           [this.cards[pos], this.cards[randpos]] = [this.cards[randpos], this.cards[pos]];
        }
    }

    split() {return this.cards.splice(1, 26); }  
    
}

    let gameLoop = (player1, player2, /*gameOn=true*/) => {

// infinite loop while gameon logic is in play so reverting back to single round until debugged.
//    while(gameOn){
        
        table.push(player1.flip(), player2.flip());

        //console.log(table);

        if(table[0].score > table[1].score){
            
            player1.hand.concat(table);
           // table = [];
            console.log(`${player1.name} wins the round!`);
                
        }
            console.log(table);
        if(!!table[1]){
             if(table[1].score > table[0].score){
            player2.hand.concat(table);
           // table = [];
            console.log(`${player2.name} wins the round!`);         
             }
        }
        else { console.log(`time for war: table contents are such: ${table}`);
        // else{
        //    /*declare war*/ gameOn = false;
            //    for(let i=0; i < 3; i++){
            //      gameLoop(player1, player2)
            //    }
        //    }
        }
  //  }
}

let pickup = new Deck();
let half = pickup.split();



pickup.shuffle();
//.log(pickup.cards, half);
//.log(pickup.draw().name);
//.log("systems check complete");
let player1 = new Player(pickup.cards, "Winston");
let player2 = new Player(half, "Geoff");

gameLoop(player1, player2); 
