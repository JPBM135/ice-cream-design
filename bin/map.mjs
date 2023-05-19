import balls from '../public/balls.json' assert { type: "json" };

const allergens = [];

for (const ball of balls) {
	for (const allergen of ball.allergens) {
		if (!allergens.includes(allergen)) {
		allergens.push(allergen);
		}
  	}
}

console.log(allergens);