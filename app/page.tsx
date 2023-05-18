import { BigImageHeader } from './components/BigHeader';
import { Header } from './components/Header';

export default function Home() {
	return (
		<div className="w-full h-full bg-gradient-to-b from-bg_color to-bg_color_secondary">
			<BigImageHeader />
			<main className="w-full h-[96vh] flex flex-col items-center gap-10">
				<div className="mt-10 p-5 border-4 border-dashed border-primary rounded-2xl">
					<h1 className="text-5xl font-bold text-center text-white px-4 py-2 mx-36 mb-5 font-cookie">
						Authentic Gourmet
					</h1>
					<h3 className="text-2xl font-bold text-center text-white">
						Sorvetes irresistíveis que fazem seu paladar dançar de alegria!
					</h3>
				</div>

				<article className="w-3/6 flex flex-col justify-center gap-5 px-5 py-5 bg-secondary rounded-xl">
					<p>
						Bem-vindos à Sorveteria <span className="text-primary">Authentic!</span>
					</p>

					<p>
						Na Sorveteria Authentic, a doçura se torna realidade. Somos mais do que apenas uma sorveteria; somos um
						refúgio de sabores autênticos, momentos felizes e lembranças doces. Aqui, mergulhe em um mundo de delícias
						geladas que vão encantar seus sentidos e alegrar seu coração.
					</p>

					<p>
						Sinta o sabor autêntico em cada colherada. Nossos sorvetes são cuidadosamente preparados com ingredientes da
						mais alta qualidade, proporcionando uma explosão de sabores deliciosos. Desde os clássicos como baunilha e
						chocolate até as criações mais ousadas, como pistache com framboesa, nossa variedade de opções atende a
						todos os paladares.
					</p>

					<p>
						Acreditamos que a sorveteria é um lugar para todas as idades. Das crianças aos mais velhos, todos são
						bem-vindos em nossa atmosfera calorosa e acolhedora. Crie momentos doces com sua família e amigos,
						compartilhando sorvetes gigantes, casquinhas coloridas e taças cheias de felicidade.
					</p>
				</article>
			</main>
		</div>
	);
}
