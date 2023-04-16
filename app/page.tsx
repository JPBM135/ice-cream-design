import { Header } from './components/Header';

export default function Home() {
	return (
		<div className="w-full h-fit">
			<Header />
			<main className="w-full h-[10000px] bg-gradient-to-b from-bg_color to-bg_color_secondary" />
		</div>
	);
}
