var React = require('../bower_components/react/react');

var IfeChartDisplay = React.createClass({

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
			margin: '5px',
			padding: '10px',
			WebkitUserSelect: 'none',
			userSelect: 'none'
		};

		return (
			<div style={this.props.style}>
				<div style={filterStyle}>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>City</label>
						<ul style={ulStyle}>
							<li style={liStyle}>Beijing</li>
							<li style={liStyle}>Shanghai</li>
							<li style={liStyle}>Guangzhou</li>
						</ul>
					</div>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Chart Type</label>
						<ul style={ulStyle}>
							<li style={liStyle}>Line</li>
							<li style={liStyle}>Block</li>
							<li style={liStyle}>Pie</li>
						</ul>
					</div>
				</div>
				<div style={filterStyle}>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Range</label>
						<ul style={ulStyle}>
							<li style={liStyle}>Week</li>
							<li style={liStyle}>Month</li>
							<li style={liStyle}>Quarter</li>
						</ul>
					</div>
					<div style={{display: 'inline-block', width: '50%'}}>
						<label style={labelStyle}>Y-axis Value</label>
						<ul style={ulStyle}>
							<li style={liStyle}>AQI Peak</li>
							<li style={liStyle}>AQI Ave</li>
							<li style={liStyle}>Days AQI &lt; 100</li>
						</ul>
					</div>
				</div>

				<div id="chart-display"></div>
			</div>
		);
	}
});

module.exports = IfeChartDisplay;