import ShowAnimals from './components/ShowAnimals';

function App() {
	const handleClick = () => {
		console.log('New animals added');
	};

	return (
		<>
			<h1>Animals Show</h1>
			<ShowAnimals />

			<button onClick={handleClick}>Add Animals</button>
		</>
	);
}

export default App;
