import { NotFoundComponent } from '../components/404';
import { Header } from '../components/Header';

export default function Home() {
	return (
		<div className="w-full h-fit">
			<Header allowBiggerLogo={false} />
			<main className="w-full h-[91.6vh] bg-gradient-to-b from-bg_color to-bg_color_secondary">
				<NotFoundComponent />
			</main>
		</div>
	);
}
