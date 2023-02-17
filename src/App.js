import { useState } from 'react';
import ShowAnimals from './components/ShowAnimals';

//=> Rendom Animals Genaretor:
function getRendomAnimals() {
	const animals = ['bird', 'cow', 'cat', 'dog', 'horse', 'gator'];

	return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		setAnimals([...animals, getRendomAnimals()]);
	};

	return (
		<>
			<h1>Animals Show</h1>
			<ShowAnimals />

			<button onClick={handleClick}>Add Animals</button>
			<div>{animals}</div>
		</>
	);
}

export default App;
