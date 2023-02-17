import alligator from '../Assets/animals/alligator.svg';
import bird from '../Assets/animals/bird.svg';
import cat from '../Assets/animals/cat.svg';
import cow from '../Assets/animals/cow.svg';
import dog from '../Assets/animals/dog.svg';
import goat from '../Assets/animals/goat.svg';
import horse from '../Assets/animals/horse.svg';
import lion from '../Assets/animals/lion.svg';

const animalsSvgMap = { lion, bird, cat, dog, goat, horse, alligator, cow };

function ShowAnimals({ type }) {
	return (
		<div>
			<img alt="Animals" src={animalsSvgMap[type]} />
		</div>
	);
}

export default ShowAnimals;
