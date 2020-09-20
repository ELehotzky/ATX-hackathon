import React from 'react';
import './App.css';
import Checkbox from './Components/Checkbox';
//import Linechart from './Components/Linechart';
import * as d3 from 'd3';

class App extends React.Component {
	//In the state below we can import the data that we collected and depending on if the checkbox state is "checked" is true we can display the data
	state = [
		{
			race: "WHITE",
			size: 0
		},		
		{
			race: "BLACK",
			size: 0
		},
		{
			race: "HISPANIC",
			size: 0
		}
	]	

	/*
	componentDidMount() {
		fetch(`https://data.austintexas.gov/resource/7guv-wkre.json?race_origin_code=A&reason_for_stop=1`)
			.then(response => response.json())
			.then(data => console.log(data))
	}
	*/

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
				</div>
			</div>
		);
	}
}

export default App;

//