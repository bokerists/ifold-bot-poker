
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
    // 
    // Se fanno call al nostro bet (no rilancio)
    // puntiamo i 3/4 del pot
    //Se rilanciano controrilancio all in
    //
    var doesSomeoneBet = function(players) {
      return players.some(function(x){
        return x.chipsBet >= our_bet;
      })
    };

    var siamoInFlop = function() {
      return gamestate.commonCards.length >= 3;
    }


    if (doesSomeoneBet() && siamoInFlop())
    return (3*the_pot)/4;    


    return our_bet;

  }

};
