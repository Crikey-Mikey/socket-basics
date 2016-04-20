var moment = require('moment');
var now = moment();

// console.log(now.format());

var timestamp = 1429533514256;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format('X'));
// console.log(now.valueOf());

// console.log(now.format('MMM Mo YYYY, h:mma')); 
