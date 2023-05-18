import Image from 'next/image';
import Link from 'next/link';

export function NotFoundComponent(): JSX.Element {
	return (
		<div className="flex justify-center gap-6">
			<div className="my-auto flex flex-col items-center gap-4 p-10 border-4 border-dashed rounded-2xl border-primary">
				<h1 className="text-9xl xl:text-[10rem] font-extrabold text-center font-cookie text-primary">404 :(</h1>
				<h2 className="text-xl xl:text-3xl font-bold text-center text-secondary">Ops, algo deu errado!</h2>
				<Link
					className="mx-[40%] w-full text-xl xl:text-2xl font-bold text-center text-white bg-secondary px-4 py-2 rounded"
					href="/"
				>
					Voltar
				</Link>
			</div>
			<Image alt="Authentic Gourmet Logo" className="my-auto" height={700} src="/falled-ice-cream.svg" width={700} />
		</div>
	);
}
