'use strict';

(function(module) {
  function Resturaunt(name,votes) {
    this.name = name;
    this.votes = votes;
  }

  Resturaunt.all = [];


  for(var i = 0; i < 11; i++) {
    var name = 'restaurant ' + i;
    var votes = 5;
    var resturaunt = new Resturaunt(name, votes);
    Resturaunt.all.push(resturaunt);
  }
  module.Resturaunt = Resturaunt;
})(window);
