import React from 'react';
import './App.css';
import Checkbox from './Components/Checkbox';
import Linechart from './Components/Linechart';
import * as d3 from 'd3';

class App extends React.Component {
	//In the state below we can import the data that we collected and depending on if the checkbox state is "checked" is true we can display the data
	state = [
		{
			race: "WHITE",
		},		
		{
			race: "BLACK",
		},
		{
			race: "HISPANIC",
		}
	]	

	render() {
		const people = this.state;
	
		return (
			<div className="main">
				<div className="container">
					<h1>HOW BIG IS YOUR MOUNTAIN?</h1>
					<div className="selection">
						{people.map((item, index) =>
							<Checkbox name={item.race} key={index}></Checkbox>
						)}							
					</div>
				</div>
				<div className="container" id="mountain">
					<Linechart></Linechart>
				</div>
			</div>
		);
	}
}

export default App;

//