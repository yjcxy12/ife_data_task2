'use strict';

var React = require('../bower_components/react/react');
var Chart = require('../services/Chart');

var IfeChartDisplay = React.createClass({
  displayName: 'IfeChartDisplay',

  getInitialState: function getInitialState() {
    return {
      city: 'beijing',
      chartType: 'line',
      range: 'week',
      valueType: 'peak'
    };
  },

  componentDidMount: function componentDidMount() {
    this.drawChart();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this.drawChart();
  },

  handleLiClick: function handleLiClick(type, value) {
    var state = {};
    state[type] = value;
    if (type === 'chartType' && value === 'pie') {
      state.valueType = 'days';
    }
    this.setState(state);
  },

  drawChart: function drawChart() {
    var data = this.props.aqiData;
    var state = this.state;
    var city = this.state.city;
    var graphData = undefined;

    switch (state.chartType) {
      case 'line':
        Chart.drawLineChart(this.props.chartDisplayId, graphData);
        break;
      case 'bar':
        Chart.drawBarChart(this.props.chartDisplayId, graphData);
        break;
      case 'pie':
        var days = data.filter(function (aqi) {
          return aqi[city] < 100;
        }).length;
        graphData = [{
          days: days
        }, {
          days: 365 - days
        }];
        Chart.drawPieChart(this.props.chartDisplayId, graphData);
        break;
      default:
        break;
    }
  },

  render: function render() {
    var filterStyle = {
      backgroundColor: 'hsl(192, 15%, 80%)',
      fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
      fontSize: '12px',
      position: 'relative',
      width: '100%'
    };
    var labelStyle = {
      display: 'inline-block',
      width: '10%'
    };
    var ulStyle = {
      paddingLeft: '20px',
      display: 'inline-block',
      width: '80%'
    };
    var liStyle = {
      backgroundColor: 'hsl(192, 15%, 90%)',
      borderRadius: '2px',
      cursor: 'pointer',
      listStyle: 'none',
      display: 'inline',
      padding: '10px',
      WebkitUserSelect: 'none',
      userSelect: 'none'
    };
    var chartDisplayStyle = {
      height: 'calc(100% - 100px)',
      position: 'relative',
      width: '100%;'
    };

    return React.createElement(
      'div',
      { style: this.props.style },
      React.createElement(
        'div',
        { style: filterStyle },
        React.createElement(
          'div',
          { style: { display: 'inline-block', width: '50%' } },
          React.createElement(
            'label',
            { style: labelStyle },
            'City'
          ),
          React.createElement(
            'ul',
            { style: ulStyle },
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.city === 'beijing' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'city', 'beijing') },
              'Beijing'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.city === 'shanghai' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'city', 'shanghai') },
              'Shanghai'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.city === 'guangzhou' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'city', 'guangzhou') },
              'Guangzhou'
            )
          )
        ),
        React.createElement(
          'div',
          { style: { display: 'inline-block', width: '50%' } },
          React.createElement(
            'label',
            { style: labelStyle },
            'Chart Type'
          ),
          React.createElement(
            'ul',
            { style: ulStyle },
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.chartType === 'line' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'chartType', 'line') },
              'Line'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.chartType === 'bar' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'chartType', 'bar') },
              'Bar'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.chartType === 'pie' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'chartType', 'pie') },
              'Pie'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { style: filterStyle },
        React.createElement(
          'div',
          { style: { display: 'inline-block', width: '50%' } },
          React.createElement(
            'label',
            { style: labelStyle },
            'Range'
          ),
          React.createElement(
            'ul',
            { style: ulStyle },
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.range === 'week' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'range', 'week') },
              'Week'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.range === 'month' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'range', 'month') },
              'Month'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.range === 'quater' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'range', 'quater') },
              'Quarter'
            )
          )
        ),
        React.createElement(
          'div',
          { style: { display: 'inline-block', width: '50%' } },
          React.createElement(
            'label',
            { style: labelStyle },
            'Y-axis Value'
          ),
          React.createElement(
            'ul',
            { style: ulStyle },
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.valueType === 'peak' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'valueType', 'peak') },
              'AQI Peak'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.valueType === 'average' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'valueType', 'average') },
              'AQI Ave'
            ),
            React.createElement(
              'li',
              { style: liStyle,
                className: this.state.valueType === 'days' ? 'chart-filter-active' : '',
                onClick: this.handleLiClick.bind(this, 'valueType', 'days') },
              'Days AQI < 100'
            )
          )
        )
      ),
      React.createElement('div', { id: this.props.chartDisplayId,
        style: chartDisplayStyle })
    );
  }
});

module.exports = IfeChartDisplay;