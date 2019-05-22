import React, { Component } from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
class App extends Component {
	render() {
		console.log(generatePalette(seedColors[5]));
		return <Pallete {...seedColors[5]} />;
	}
}

export default App;
