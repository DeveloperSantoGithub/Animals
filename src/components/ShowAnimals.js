import { useState } from 'react';

import alligator from '../assets/animals/alligator.svg';
import bird from '../assets/animals/bird.svg';
import cat from '../assets/animals/cat.svg';
import cow from '../assets/animals/cow.svg';
import dog from '../assets/animals/dog.svg';
import goat from '../assets/animals/goat.svg';
import horse from '../assets/animals/horse.svg';
import lion from '../assets/animals/lion.svg';

import heart from '../assets/emoji/heart.svg';

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
