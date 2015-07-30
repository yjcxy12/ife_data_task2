var React = require('./bower_components/react/react');
var q = require('./bower_components/q/q');
var IfeChart = require('./components/IfeChart.js');
var Data = require('./services/Data.js');

Data.getAqiData()
	.then(function (data) {
		React.render(<IfeChart data={data}/>, document.body);
	})
	.catch(function (e) {
		console.log(e);
	})
