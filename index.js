const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
    output = loremIpsum({
    count: 2
  , units: 'paragraphs'
  , sentenceLowerBound: 3
  , sentenceUpperBound: 5
  , paragraphLowerBound: 4
  , paragraphUpperBound: 6
  , format: 'html'
  , suffix: "\n"
});

app.get('/lorem/:count', function(req, res) {
  let num = parseInt(req.params.count);
  output = loremIpsum({
  count: num
, units: 'paragraphs'
, sentenceLowerBound: 3
, sentenceUpperBound: 5
, paragraphLowerBound: 4
, paragraphUpperBound: 6
, format: 'html'
, suffix: "\n"
});
res.send(output);
});


app.listen(3000, function() {
  console.log("Watch out, you're running!")
});
