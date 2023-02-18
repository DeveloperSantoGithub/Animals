import { useState } from 'react';
import ShowAnimals from './components/ShowAnimals';
import './Styles/Global.scss';

//=> Rendom Animals Genaretor:
function getRendomAnimals() {
	const animals = ['lion', 'bird', 'cat', 'goat', 'cow', 'alligator', 'horse'];

	return animals[Math.floor(Math.random() * animals.length)];
}

//=> APP :
function App() {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		setAnimals([...animals, getRendomAnimals()]);
	};
	const handleClear = () => {
		setAnimals([]);
	};

	//=> Rendered Animals:
	const renderedAnimals = animals.map((animal, index) => {
		return <ShowAnimals type={animal} key={index} />;
	});

	return (
		<div className="animalsApp">
			<h1 className="logo">Random Animals Show!</h1>
			<div className="Btns">
				<button className="addBtn" onClick={handleClick}>
					Add Animals
				</button>
				<button className="clearBtn" onClick={handleClear}>
					Clear All
				</button>
			</div>

			<div className="animalsList">{renderedAnimals}</div>
		</div>
	);
}

export default App;
