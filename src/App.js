import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const inputChangeHandler = () => {
		return e.target.value.length;
	};
	return (
		<div className="App">
			<input id="input" type="text" placeholder="input" onChange={inputChangeHandler} />
		</div>
	);
}

export default App;
