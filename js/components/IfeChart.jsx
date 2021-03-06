const React = require('../bower_components/react/react');
const IfeNav = require('./IfeNav');
const IfeChartDisplay = require('./IfeChartDisplay');

const IfeChart = React.createClass({
  getInitialState() {
    return {
      displayMode: 0
    };
  },

  getChartByDisplayMode() {
    const displayMode = this.state.displayMode;
    let chartStyleOne;
    let chartStyleTwo;
    let chartStyleThree;

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

        return (<IfeChartDisplay aqiData={this.props.data}
          style={chartStyleOne}
          chartDisplayId="chart-display-1" />);
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleTwo}
              chartDisplayId="chart-display-2" />
          </div>
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleTwo}
              chartDisplayId="chart-display-2" />
          </div>
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
            <div style={{
              display: 'inline-block', 
              width: 'calc(50% - 8px)', 
              height: 'calc(100% - 10px)',
              margin: '5px 5px 5px 0',
              position: 'relative'
            }}>
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleTwo}
                chartDisplayId="chart-display-2" />
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleThree}
                chartDisplayId="chart-display-3" />
            </div>
          </div>
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
            <div style={{
              display: 'inline-block', 
              width: 'calc(100% - 10px)', 
              height: 'calc(50% - 10px)',
              margin: '0 5px 5px 5px',
              position: 'relative'
            }}>
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleTwo}
                chartDisplayId="chart-display-2" />
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleThree}
                chartDisplayId="chart-display-3" />
            </div>
          </div>
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <div style={{
              display: 'inline-block', 
              width: 'calc(50% - 8px)', 
              height: 'calc(100% - 10px)',
              margin: '5px',
              position: 'relative'
            }}>
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleTwo}
                chartDisplayId="chart-display-2" />
              <IfeChartDisplay aqiData={this.props.data}
                style={chartStyleThree}
                chartDisplayId="chart-display-3" />
            </div>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
          </div>
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
        return (
          <div style={{width: '100%', height: 'calc(100% - 50px)'}}>
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-1" />
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-2" />
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-3" />
            <IfeChartDisplay aqiData={this.props.data}
              style={chartStyleOne}
              chartDisplayId="chart-display-4" />
          </div>
        );
      default:
        break;
    }
  },

  handleNavClick(displayMode) {
    this.setState({
      displayMode: displayMode
    });
  },

  render() {
    const topStyle = {
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      position: 'relative'
    };
    const charts = this.getChartByDisplayMode();

    return (
      <div style={topStyle}>
        <IfeNav handleNavClick={this.handleNavClick.bind(this)}
          displayMode={this.state.displayMode}/>

        {charts}
      </div>
    );
  }
});

module.exports = IfeChart;
