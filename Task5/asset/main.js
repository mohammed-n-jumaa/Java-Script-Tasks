var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

function $(id) {
    return document.getElementById(id);
}

window.onload = function() {
    $('addButton').onclick = addScore;
    $('resultsButton').onclick = displayResults;
    $('scoresButton').onclick = displayScores;
    $('name').focus();  
};


function addScore() {
    var name = $('name').value.trim();
    var score = parseInt($('score').value);
    if (name && !names.includes(name) && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        $('name').value = '';
        $('score').value = '';
        $('name').focus();  
    } else {
        alert('You must enter a unique name and a valid score');
    }
}


function displayResults() {
    if (scores.length === 0) {
        $('results').innerHTML = '<h2>No results to display</h2>';
        return;
    }
    var total = scores.reduce((acc, score) => acc + score, 0);
    var average = total / scores.length;
    var highestScore = Math.max(...scores);
    var highestIndex = scores.indexOf(highestScore);
    var highestScorer = names[highestIndex];

    var resultHTML = `<h2>Results</h2>
                      <p>Average score = ${average.toFixed(2)}</p>
                      <p>High score = ${highestScorer} with a score of ${highestScore}</p>`;
    $('results').innerHTML = resultHTML;
}


function displayScores() {
    var tableContent = '<tr><th>Name</th><th>Score</th></tr>';
    for (var i = 0; i < names.length; i++) {
        tableContent += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
    }
    $('scores_table').innerHTML = tableContent;
}
