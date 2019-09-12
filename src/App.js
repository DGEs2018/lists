import React, { useState } from 'react';
import CharacterComponent from './components/CharacterComponent';
import ValidationComponent from './components/ValidationComponent';
import './App.css';

function App() {
	const [ userInput, setUserInput ] = useState('');
	const charList = userInput.split('').map((ch, index) => {
		return <CharacterComponent character={ch} key={index} />;
	});

	// const [ userInput, setUserInput ] = useState('');
	const inputChangeHandler = (e) => {
		setUserInput(e.target.value);
	};
	return (
		<div className="App">
			<input id="input" type="text" placeholder="input" onChange={inputChangeHandler} value={userInput} />
			<p>{userInput}</p>
			<CharacterComponent />
			<ValidationComponent inputLength={userInput.length} />
			{charList}
		</div>
	);
}

export default App;
