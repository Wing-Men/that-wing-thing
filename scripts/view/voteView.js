'use strict';

(function(module) {
  var voteView = {};
  var ctx = $('#vote-chart');
  var dummyResturaunts = [];
  var dummyVotes = [];

  voteView.generateChartData = function() {
    for(var i = 0; i < Resturaunt.all.length; i++) {
      dummyResturaunts[i] = Resturaunt.all[i].name;
      dummyVotes[i] = Resturaunt.all[i].votes;
    }
  };

  voteView.compileOption = function(option) {
    var template = Handlebars.compile($('#vote-template').text());
    return template(option);
  };

  voteView.renderOptions = function() {
    Resturaunt.all.forEach(function(resturaunt) {
      $('#vote-select').append(voteView.compileOption(resturaunt));
    });
  };

  voteView.renderForm = function() {
    if(currUser.fav === '') {
      $('vote-form').fadeIn(500);
      voteView.handleVote();
      voteView.handleSubmit();
    }
  };

  voteView.handleVote = function() {
    $('#vote-select').on('change', function() {
      if($(this).val()){
        $('#submit-vote').fadeIn(500);
      } else {
        $('#submit-vote').fadeOut(500);
      }
    });
  };

  voteView.handleSubmit = function() {
    $('#submit-vote').on('click', function(e){
      e.preventDefault();
      var $vote = $('#vote-select').val();
      currUser.fav = $vote;
      Resturaunt.all[dummyResturaunts.indexOf($vote)].votes += 1;
      $('#vote-form').fadeOut(500);
      voteView.renderChart();
    });
  };

  voteView.renderChart = function() {
    voteView.generateChartData();
    var voteChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dummyResturaunts,
        datasets: [{
          label: '# of Votes',
          data: dummyVotes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  };

  voteView.renderOptions();
  voteView.renderChart();

  module.voteView = voteView;
})(window);
