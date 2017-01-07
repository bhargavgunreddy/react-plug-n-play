 var ReactDOM = require('react-dom');
var Navbar = require('../components/navbar.js');

class App extends React.Component{
	render(){
		return <div className = "cover">
					<div className = "leftSection">
					</div>
					<div className = "rightSection">
					</div>
				</div>
	}
}

var navItems = ['button', 'textbox', 'textarea', 'grid', 'navbar'];
ReactDOM.render(<Navbar navItems = {navItems}/>, document.getElementById('navbar'));