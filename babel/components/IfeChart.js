'use strict';

var React = require('../bower_components/react/react');
var IfeNav = require('./IfeNav');
var IfeChartDisplay = require('./IfeChartDisplay');

var IfeChart = React.createClass({
  displayName: 'IfeChart',

  getInitialState: function getInitialState() {
    return {
      displayMode: 0
    };
  },

  getChartByDisplayMode: function getChartByDisplayMode() {
    var displayMode = this.state.displayMode;
    var chartStyleOne = undefined;
    var chartStyleTwo = undefined;
    var chartStyleThree = undefined;

    switch (displayMode) {
      case 0:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'block',
          width: 'calc(100% - 10px)',
          height: 'calc(100% - 60px)',
          margin: '5px',
          verticalAlign: 'top'
        };

        return React.createElement(IfeChartDisplay, { aqiData: this.props.data,
          style: chartStyleOne,
          chartDisplayId: 'chart-display-1' });
      case 1:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 10px)',
          height: 'calc(100% - 10px)',
          margin: '5px',
          verticalAlign: 'top'
        };
        chartStyleTwo = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 10px)',
          height: 'calc(100% - 10px)',
          margin: '5px 5px 5px 0',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' }),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleTwo,
            chartDisplayId: 'chart-display-2' })
        );
      case 2:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(100% - 10px)',
          height: 'calc(50% - 8px)',
          margin: '5px',
          verticalAlign: 'top'
        };
        chartStyleTwo = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(100% - 10px)',
          height: 'calc(50% - 8px)',
          margin: '0 5px 5px 5px',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' }),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleTwo,
            chartDisplayId: 'chart-display-2' })
        );
      case 3:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          height: 'calc(100% - 10px)',
          margin: '5px',
          verticalAlign: 'top'
        };
        chartStyleTwo = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: '100%',
          height: 'calc(50% - 5px)',
          marginBottom: '5px',
          verticalAlign: 'top'
        };
        chartStyleThree = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: '100%',
          height: 'calc(50% - 5px)',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' }),
          React.createElement(
            'div',
            { style: {
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                height: 'calc(100% - 10px)',
                margin: '5px 5px 5px 0',
                position: 'relative'
              } },
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleTwo,
              chartDisplayId: 'chart-display-2' }),
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleThree,
              chartDisplayId: 'chart-display-3' })
          )
        );
      case 4:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(100% - 10px)',
          height: 'calc(50% - 10px)',
          margin: '5px',
          verticalAlign: 'top'
        };
        chartStyleTwo = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 3px)',
          height: '100%',
          marginRight: '5px',
          verticalAlign: 'top'
        };
        chartStyleThree = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 3px)',
          height: '100%',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' }),
          React.createElement(
            'div',
            { style: {
                display: 'inline-block',
                width: 'calc(100% - 10px)',
                height: 'calc(50% - 10px)',
                margin: '0 5px 5px 5px',
                position: 'relative'
              } },
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleTwo,
              chartDisplayId: 'chart-display-2' }),
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleThree,
              chartDisplayId: 'chart-display-3' })
          )
        );
      case 5:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          height: 'calc(100% - 10px)',
          margin: '5px 5px 5px 0',
          verticalAlign: 'top'
        };
        chartStyleTwo = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: '100%',
          height: 'calc(50% - 5px)',
          marginBottom: '5px'
        };
        chartStyleThree = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: '100%',
          height: 'calc(50% - 5px)',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(
            'div',
            { style: {
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                height: 'calc(100% - 10px)',
                margin: '5px',
                position: 'relative'
              } },
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleTwo,
              chartDisplayId: 'chart-display-2' }),
            React.createElement(IfeChartDisplay, { aqiData: this.props.data,
              style: chartStyleThree,
              chartDisplayId: 'chart-display-3' })
          ),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' })
        );
      case 6:
        chartStyleOne = {
          backgroundColor: 'hsl(192, 15%, 94%)',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          height: 'calc(50% - 10px)',
          margin: '3px',
          verticalAlign: 'top'
        };
        return React.createElement(
          'div',
          { style: { width: '100%', height: 'calc(100% - 50px)' } },
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-1' }),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-2' }),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-3' }),
          React.createElement(IfeChartDisplay, { aqiData: this.props.data,
            style: chartStyleOne,
            chartDisplayId: 'chart-display-4' })
        );
      default:
        break;
    }
  },

  handleNavClick: function handleNavClick(displayMode) {
    this.setState({
      displayMode: displayMode
    });
  },

  render: function render() {
    var topStyle = {
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      position: 'relative'
    };
    var charts = this.getChartByDisplayMode();

    return React.createElement(
      'div',
      { style: topStyle },
      React.createElement(IfeNav, { handleNavClick: this.handleNavClick.bind(this),
        displayMode: this.state.displayMode }),
      charts
    );
  }
});

module.exports = IfeChart;