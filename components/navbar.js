

class Navbar extends React.Component{
	constructor(props) {
	    super(props);
	}

	constructNav(item, index){
		var keyLabel = item+"-"+index;
		return <div key = {keyLabel}>{item}</div>;

	}

	render(){
		console.log("-->", this.props.navItems);
		return <nav className = "navMenu">
					{this.props.navItems.map(this.constructNav)}
				</nav>;
	}
}

module.exports = Navbar;

