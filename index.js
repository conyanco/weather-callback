'use strict';
const YQL = require('yql');

const query = new YQL('select * from weather.forecast where (location = 94089)');

query.exec(function(err, data) {
	let location = data.query.results.channel.location;
	let condition = data.query.results.channel.item.condition;
	
	console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
});
