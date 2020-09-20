import React from 'react';

class Checkbox extends React.Component {
	state = {
        checked: false
    }

	handleChange = () => {
        this.setState({
            checked: !this.state.checked
        })
	}

	render() {
		return (
            <React.Fragment>
                <input type="checkbox" id={this.props.name} name={this.props.name} value={this.props.name} defaultChecked={this.state.checked} onChange={this.handleChange}></input>
                <label htmlFor={this.props.name}>{this.props.name}</label>
            </React.Fragment>
		);
	}
}

export default Checkbox;