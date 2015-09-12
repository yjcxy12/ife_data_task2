'use strict';

var React = require('./bower_components/react/react');
var IfeChart = require('./components/IfeChart.js');
var Data = require('./services/Data.js');

Data.getAqiData().then(function (data) {
  React.render(React.createElement(IfeChart, { data: data }), document.body);
})['catch'](function (e) {
  console.log(e);
});