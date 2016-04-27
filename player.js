
var previous_bet = null;
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate) {

    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki#gamestate for further info about the data structure.

    //
    // you just have to return the amount that you want to bet.



    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    console.log(`Currently playing tournament ${gamestate.tournamentId}`);
    var big_blind = 2*gamestate.sb;

    var our_bet = 3*big_blind;

    var our_index = gamestate.me;
    var our_chips = gamestate.players[our_index].chips;
    // 
    // Se fanno call al nostro bet (no rilancio)
    // puntiamo i 2/4 del pot
    //Se rilanciano controrilancio all in
    //
    //se preflop rilanciano maggiore di noi punta tutto in allin
    //se flop puntano più dei nostri 2/pot punta tutte le nostre chips 
    var doesSomeoneBet = function(players) {
      return players.some(function(x){
        return x.chipsBet >= our_bet;
      })
    };

    var siamoInFlop = function() {
      return gamestate.commonCards.length >= 3;
    }


    var siamoInPreFlop = function() {
      return gamestate.commonCards.length === 0;
    }

    var hannoPuntatoPiuDiNoi = function() {
      return our_bet < gamestate.callAmount;
    }

   /* if (siamoInPreFlop() && hannoPuntatoPiuDiNoi())
      return our_chips;*/


    if (doesSomeoneBet(gamestate.players) && siamoInFlop()){
      console.log("hanno bettato e siamo in flop")
      return (2*the_pot)/4;    
    }


    previous_bet = our_bet;
    return our_bet;



  }

};
