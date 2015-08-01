var React = require('../bower_components/react/react');
var Chart = require('../services/Chart');

var IfeChartDisplay = React.createClass({
	getInitialState: function () {
		return {
			city: 'beijing',
			chartType: 'line',
			range: 'week',
			valueType: 'peak'
		};
	},

	handleLiClick: function (type, value) {
		var state = {};
		state[type] = value;
		if (type === 'chartType' && value === 'pie') {
			state.valueType = 'days';
		}
		this.setState(state);
	},

	componentDidMount: function () {
		this.drawChart();
	},

	componentDidUpdate: function (prevProps, prevState) {
		this.drawChart();
	},

	drawChart: function () {
		var data = this.props.aqiData;
		var state = this.state;
		var city = this.state.city;
		var graphData;

		switch (state.chartType) {
			case "line":
				Chart.drawLineChart(this.props.chartDisplayId, graphData);
				break;
			case "bar":
				Chart.drawBarChart(this.props.chartDisplayId, graphData);
				break;
			case "pie":
				var days = data.filter(function (aqi) {
					return (aqi[city] < 100);
				}).length;
				graphData = [
					{
						days: days,
					},
					{
						days: 365 - days
					}
				];
				Chart.drawPieChart(this.props.chartDisplayId, graphData);
				break;
			
		}
	},

	render: function () {
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

		return (
			<div style={this.props.style}>
				<div style={filterStyle}>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>City</label>
						<ul style={ulStyle}>
							<li style={liStyle} 
								className={this.state.city === 'beijing'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'city', 'beijing')}>
								Beijing
							</li>
							<li style={liStyle} 
								className={this.state.city === 'shanghai'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'city', 'shanghai')}>
								Shanghai
							</li>
							<li style={liStyle} 
								className={this.state.city === 'guangzhou'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'city', 'guangzhou')}>
								Guangzhou
							</li>
						</ul>
					</div>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Chart Type</label>
						<ul style={ulStyle}>
							<li style={liStyle}
								className={this.state.chartType === 'line'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'chartType', 'line')}>
								Line
							</li>
							<li style={liStyle}
								className={this.state.chartType === 'bar'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'chartType', 'bar')}>
								Bar
							</li>
							<li style={liStyle}
								className={this.state.chartType === 'pie'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'chartType', 'pie')}>
								Pie
							</li>
						</ul>
					</div>
				</div>
				<div style={filterStyle}>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Range</label>
						<ul style={ulStyle}>
							<li style={liStyle}
								className={this.state.range === 'week'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'range', 'week')}>
								Week
							</li>
							<li style={liStyle}
								className={this.state.range === 'month'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'range', 'month')}>
								Month
							</li>
							<li style={liStyle}
								className={this.state.range === 'quater'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'range', 'quater')}>
								Quarter
							</li>
						</ul>
					</div>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Y-axis Value</label>
						<ul style={ulStyle}>
							<li style={liStyle}
								className={this.state.valueType === 'peak'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'valueType', 'peak')}>
								AQI Peak
							</li>
							<li style={liStyle}
								className={this.state.valueType === 'average'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'valueType', 'average')}>
								AQI Ave
							</li>
							<li style={liStyle}
								className={this.state.valueType === 'days'? 'chart-filter-active': ''}
								onClick={this.handleLiClick.bind(this, 'valueType', 'days')}>
								Days AQI &lt; 100
							</li>
						</ul>
					</div>
				</div>

				<div id={this.props.chartDisplayId}
					style={chartDisplayStyle}>
				</div>
			</div>
		);
	}
});

module.exports = IfeChartDisplay;