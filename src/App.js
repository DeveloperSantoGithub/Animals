import { useState } from 'react';
import ShowAnimals from './components/ShowAnimals';

//=> Rendom Animals Genaretor:
function getRendomAnimals() {
	const animals = ['bird', 'cat', 'goat', 'cow', 'gator', 'horse'];

	return animals[Math.floor(Math.random() * animals.length)];
}

//=> APP :
function App() {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		setAnimals([...animals, getRendomAnimals()]);
	};

	//=> Rendered Animals:
	const renderedAnimals = animals.map((animal, index) => {
		return <ShowAnimals type={animal} key={index} />;
	});

	return (
		<>
			<h1>Animals Show</h1>

			<button onClick={handleClick}>Add Animals</button>
			<div>{renderedAnimals}</div>
		</>
	);
}

export default App;
