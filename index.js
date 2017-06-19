// console.log('hello from Node.js')
const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
    output = loremIpsum({
    count: 3                      // Number of words, sentences, or paragraphs to generate.
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 3         // Minimum words per sentence.
  , sentenceUpperBound: 5        // Maximum words per sentence.
  , paragraphLowerBound: 4        // Minimum sentences per paragraph.
  , paragraphUpperBound: 6        // Maximum sentences per paragraph.
  , format: 'plain'               // Plain text or html
  , suffix: "###########"
});

app.get('/lorem', function(req, res) {
  res.send(output);
});

// app.get('/goodbye', function(req, res) {
//   res.send('See You Later!');
// });

app.listen(3000, function() {
  console.log("Successfully started express application!")
});
