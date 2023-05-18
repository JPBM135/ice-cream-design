import Image from 'next/image';
import { Header } from './components/Header';

export default function NotFound(): JSX.Element {
	return (
		<div className="w-full h-fit">
			<Header />
			<div className="flex justify-center gap-6">
				<div className="my-auto p-10 border-4 border-dashed rounded-2xl border-primary">
					<h1 className="text-9xl xl:text-[10rem] font-extrabold text-center font-cookie text-primary">404 :(</h1>
					<h2 className="text-xl xl:text-3xl font-bold text-center text-secondary">Ops, algo deu errado!</h2>
				</div>
				<Image alt="Authentic Gourmet Logo" className="my-auto" height={700} src="/falled-ice-cream.svg" width={700} />
			</div>
		</div>
	);
}
