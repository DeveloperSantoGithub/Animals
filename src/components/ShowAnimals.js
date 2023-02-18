import { useState } from 'react';

import alligator from '../Assets/animals/alligator.svg';
import bird from '../Assets/animals/bird.svg';
import cat from '../Assets/animals/cat.svg';
import cow from '../Assets/animals/cow.svg';
import dog from '../Assets/animals/dog.svg';
import goat from '../Assets/animals/goat.svg';
import horse from '../Assets/animals/horse.svg';
import lion from '../Assets/animals/lion.svg';

import heart from '../Assets/emoji/heart.svg';

const animalSvgMap = { lion, bird, cat, dog, cow, goat, horse, alligator };

function ShowAnimals({ type }) {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
		setClicks(clicks + 1);
	};

	return (
		<div className="animalCard" onClick={handleClick}>
			<img className="animalImg" alt="animal" src={animalSvgMap[type]} />
			<img
				className="heartImg"
				alt="heart"
				src={heart}
				style={{
					width: 10 + 10 * clicks + 'px',
				}}
			/>
		</div>
	);
}

export default ShowAnimals;
