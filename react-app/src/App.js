import React from 'react';
import './App.css';
import * as d3 from 'd3';

class App extends React.Component {
	state = {
		race: []
	}

	handleChange = (e) => {
		console.log(e.target.id)
		if(e.target.id.checked == true) {
			console.log("YES")
		}

		this.setState({
			race: e.target.value
		});
	}

	render() {
		return (
			<div className="main">
				<div className="container">
					<h1>HOW BIG IS YOUR MOUNTAIN?</h1>
					<div className="selection">
						<form onChange={this.handleChange}>
							<input type="checkbox" id="white" name="white" value="white"></input>
							<label htmlFor="white">WHITE</label>
							<input type="checkbox" id="black" name="black" value="black"></input>
							<label htmlFor="black">BLACK</label>
							<input type="checkbox" id="hispanic" name="hispanic" value="hispanic"></input>
							<label htmlFor="hispanic">HISPANIC</label>
						</form>
					</div>
				</div>
				<div className="container" ref="canvas"></div>
			</div>
		);
	}
}

export default App;

//