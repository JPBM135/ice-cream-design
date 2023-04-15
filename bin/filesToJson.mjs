import fs from 'fs';

const files = fs.readdirSync('./public/balls', {
	withFileTypes: false
});

const namesPt = fs.readFileSync('./bin/name-pt-br.txt').toString().split('\r\n');

function snakeCaseToReadable(text) {
	return text
		.replace(/-/g, ' ')
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

const json = files.map((file, index) => {
	return {
		id: file,
		name: snakeCaseToReadable(file.replace('.png', '')),
		namePtBr: namesPt[index],
		description: null,
		calories: null,
	};
});

fs.writeFileSync('./public/balls.json', JSON.stringify(json, null, 4));

console.log(`Wrote ${json.length} balls to balls.json`);
console.log(json.map((ball) => ball.name).join('\n'));