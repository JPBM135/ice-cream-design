import { writeFileSync } from 'fs';

const urlAnalyzerResult = [
	// 'https://url-analyzer.jpbm.dev:2053/api/v1/scan/2568161994481879097',
	'https://url-analyzer.jpbm.dev:2053/api/v1/scan/2568166117809867556',
	'https://url-analyzer.jpbm.dev:2053/api/v1/scan/2568166409402076252',
];

const requests = [];

for (const url of urlAnalyzerResult) {
	const res = await fetch(url);
	const json = await res.json();

	const { requests: reqReqs } = json.data;

	requests.push(...reqReqs);
}

console.log(`Found ${requests.length} requests`);

for (const req of requests) {
	if (!req.url.startsWith('https://www.hersheyicecream.com/products/images') || !req.url.endsWith('.png')) {
		continue;
	}

	const preparedUrl = req.url.replace('.png', '-scoop2.png');
	const res = await fetch(preparedUrl);

	if (!res.ok) {
		console.log(`Failed to download ${preparedUrl}`);
		continue;
	}

	const buffer = await res.arrayBuffer();

	const filename = req.url.split('/').pop();

	writeFileSync(`./public/balls/${filename}`, Buffer.from(buffer));
	console.log(`Downloaded ${filename}`);
}
