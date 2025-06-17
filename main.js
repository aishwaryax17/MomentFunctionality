

//. Intuitive Formatting – .format()
const moment = require('moment');
const momentTz = require('moment-timezone');

const now = moment();
console.log(now.format("YYYY-MM-DD"));       
console.log(now.format("dddd, MMMM Do YYYY")) 
console.log(now.format("hh:mm:ss A"))        
//parsing
const date = moment("2025-06-11");
console.log(date.format()); 
//date Manipulation
const nextYear = moment().add(1, 'year');
console.log(nextYear.format("YYYY-MM-DD"));
//. Relative Time
const pastDate = moment("2023-01-01");
console.log(pastDate.fromNow()); 

//date addition and subtraction

const today = moment("2025-06-11");
const nextWeek = today.clone().add(7, 'days');
console.log(nextWeek.format("YYYY-MM-DD")); 

const lastMonth = today.clone().subtract(1, 'months');
console.log(lastMonth.format("YYYY-MM-DD"));

//timezone support
const newYorkTime=momentTz.tz("2025-06-11 12:00", "America/New_York");
console.log(newYorkTime.format("YYYY-MM-DD HH:mm:ss Z"));



