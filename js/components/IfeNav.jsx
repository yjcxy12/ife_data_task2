var React = require('../bower_components/react/react');

var IfeNav = React.createClass({
	render: function () {
		var navStyle = {
			backgroundColor: 'hsl(210, 29%, 23%)',
			width: '100%',
			height: '50px',
			position: 'relative'
		};

		var navBtnStyle = {
			backgroundColor: 'hsl(210, 29%, 39%)',
			boxSizing: 'border-box',
			border: '1px solid hsl(210, 29%, 34%)',
			borderRadius: '2px',
			cursor: 'pointer',
			padding: '15px',
			width: '50px',
			height: '100%',
			float: 'right',
			WebkitUserSelect: 'none',
			MozUserSelect: 'none',
			userSelect: 'none'
		};

		var navBtnActiveStyle = JSON.parse(JSON.stringify(navBtnStyle));
		navBtnActiveStyle.backgroundColor = 'hsl(210, 29%, 50%)';

		var navBtns = [
			{
				displayMode: 0,
				components: (
					<div key='0' 
						style={{backgroundColor: 'hsl(168, 76%, 55%)', width: '100%', height: '100%'}}>
					</div>
				)
			},
			{
				displayMode: 1,
				components: (
					<div key='1' style={{width: '100%', height: '100%'}}>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)', 
							display: 'inline-block',
							width: '50%', 
							height: '100%'
						}}>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 42%)', 
							display: 'inline-block',
							width: '50%', 
							height: '100%'
						}}>
						</div>
					</div>
				)
			},
			{
				displayMode: 2,
				components: (
					<div key='2' style={{width: '100%', height: '100%'}}>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)',
							width: '100%', 
							height: '50%'
						}}>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 42%)',
							width: '100%', 
							height: '50%'
						}}>
						</div>
					</div>
				)
			},
			{
				displayMode: 3,
				components: (
					<div key='3' style={{width: '100%', height: '100%'}}>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)',
							display: 'inline-block',
							width: '50%', 
							height: '100%'
						}}>
						</div>
						<div style={{width: '50%', height: '100%', display: 'inline-block'}}>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 42%)',
								width: '100%', 
								height: '50%'
							}}>
							</div>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 32%)',
								width: '100%', 
								height: '50%'
							}}>
							</div>
						</div>
					</div>
				)
			},
			{
				displayMode: 4,
				components: (
					<div key='4' style={{width: '100%', height: '100%'}}>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)',
							width: '100%', 
							height: '50%'
						}}>
						</div>
						<div style={{width: '100%', height: '50%'}}>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 42%)',
								display: 'inline-block',
								width: '50%', 
								height: '100%',
								verticalAlign: 'top'
							}}>
							</div>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 32%)',
								display: 'inline-block',
								width: '50%', 
								height: '100%',
								verticalAlign: 'top'
							}}>
							</div>
						</div>
					</div>
				)
			},
			{
				displayMode: 5,
				components: (
					<div key='5' style={{width: '100%', height: '100%'}}>
						<div style={{width: '50%', height: '100%', display: 'inline-block'}}>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 42%)',
								width: '100%', 
								height: '50%'
							}}>
							</div>
							<div style={{
								backgroundColor: 'hsl(168, 76%, 32%)',
								width: '100%', 
								height: '50%'
							}}>
							</div>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)',
							display: 'inline-block',
							width: '50%', 
							height: '100%'
						}}>
						</div>
					</div>
				)
			},
			{
				displayMode: 6,
				components: (
					<div key='6' style={{width: '100%', height: '100%'}}>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 55%)',
							display: 'inline-block',
							width: '50%', 
							height: '50%',
							verticalAlign: 'top'
						}}>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 42%)',
							display: 'inline-block',
							width: '50%', 
							height: '50%',
							verticalAlign: 'top'
						}}>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 32%)',
							display: 'inline-block',
							width: '50%', 
							height: '50%',
							marginTop: '-50%',
							verticalAlign: 'top'
						}}>
						</div>
						<div style={{
							backgroundColor: 'hsl(168, 76%, 26%)',
							display: 'inline-block',
							width: '50%', 
							height: '50%',
							marginTop: '-50%',
							verticalAlign: 'top'
						}}>
						</div>
					</div>
				)
			}
		];

		return (
			<div style={navStyle}>
				<div style={{marginRight: '30px', height: '100%'}}>
					{navBtns.reverse().map(function (val) {
						return (
							<div style={this.props.displayMode === val.displayMode? 
								navBtnActiveStyle :
								navBtnStyle} 
								onClick={this.props.handleNavClick.bind(this, val.displayMode)}>
								{val.components}
							</div>
						);
					}, this)}
				</div>
			</div>
		);
	}
});

module.exports = IfeNav;