import ShowAnimals from './components/ShowAnimals';

function useState(defaultValue) {
	return {
		yourValue: defaultValue,
		yourSetter: () => {},
	};
}

function App() {
	// const [count, setCount] = useState(0);
	const { yourValue: count, yourSetter: setCount } = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<h1>Animals Show</h1>
			<ShowAnimals />

			<button onClick={handleClick}>Add Animals</button>
			<h2>Number of Animals: {count}</h2>
		</>
	);
}

export default App;
