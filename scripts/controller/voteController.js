'use strict';

(function(module){
  var voteController = {};

  voteController.updateVotes = function(score, id) {
    id += 1;
    webDB.execute('UPDATE votes SET votes = ' + score + ' WHERE id = ' + id + ';');
  };
  module.voteController = voteController;
})(window);
