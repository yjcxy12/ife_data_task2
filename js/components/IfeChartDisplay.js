'use strict';

var React = require('../bower_components/react/react');

var IfeChartDisplay = React.createClass({
	displayName: 'IfeChartDisplay',

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
			margin: '5px',
			padding: '10px',
			WebkitUserSelect: 'none',
			userSelect: 'none'
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
							{ style: liStyle },
							'Beijing'
						),
						React.createElement(
							'li',
							{ style: liStyle },
							'Shanghai'
						),
						React.createElement(
							'li',
							{ style: liStyle },
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
							{ style: liStyle },
							'Line'
						),
						React.createElement(
							'li',
							{ style: liStyle },
							'Block'
						),
						React.createElement(
							'li',
							{ style: liStyle },
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
							{ style: liStyle },
							'Week'
						),
						React.createElement(
							'li',
							{ style: liStyle },
							'Month'
						),
						React.createElement(
							'li',
							{ style: liStyle },
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
							{ style: liStyle },
							'AQI Peak'
						),
						React.createElement(
							'li',
							{ style: liStyle },
							'AQI Ave'
						),
						React.createElement(
							'li',
							{ style: liStyle },
							'Days AQI < 100'
						)
					)
				)
			),
			React.createElement('div', { id: "chart-display" })
		);
	}
});

module.exports = IfeChartDisplay;