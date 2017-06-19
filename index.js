const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
    output = loremIpsum({
    count: 3
  , units: 'paragraphs'
  , sentenceLowerBound: 3
  , sentenceUpperBound: 5
  , paragraphLowerBound: 4
  , paragraphUpperBound: 6
  , format: 'plain'
  , suffix: "###########"
});

app.get('/lorem', function(req, res) {
  res.send(output);
});

app.listen(3000, function() {
  console.log("Watch out, you're running!")
});
