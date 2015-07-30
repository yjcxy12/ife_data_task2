var d3 = require('../bower_components/d3/d3');
var q = require('../bower_components/q/q');

module.exports = (function () {
	return {
		getAqiData: function () {
			var defer = q.defer();

			d3.csv("../../data/aqidata.csv", function(error, data) {
				if (error) {
					defer.reject(error);
				}
				else {
					defer.resolve(data);
				}
			});

			return defer.promise;
		}
	};
})();