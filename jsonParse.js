const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./sampleEvent.json', 'utf8'))
console.log(data);
console.log(data.resultsPage.results.event);
