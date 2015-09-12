const React = require('./bower_components/react/react');
const IfeChart = require('./components/IfeChart.js');
const Data = require('./services/Data.js');

Data.getAqiData()
  .then((data) => {
    React.render(<IfeChart data={data}/>, document.body);
  })
  .catch((e) => {
    console.log(e);
  });
