import Image from 'next/image';
import { NotFoundComponent } from '../components/404';
import { Header } from '../components/Header';

export default function HistoryPage() {
	return (
		<div className="w-full h-fit">
			<Header allowBiggerLogo={false} />
			<main className="w-full h-[91.6vh] bg-gradient-to-b from-bg_color to-bg_color_secondary">
				<div className="max-w-4xl mx-auto px-4 py-8">
					<h1 className="text-4xl font-bold mb-4 bg-bg_color_tertiary p-5 rounded-lg">Nossa História</h1>
					<p className="text-lg mb-4">
						A Sorveteria Autentic Gurmet foi fundada em 1995 por João e Maria. O casal sempre teve uma paixão por
						sorvetes e decidiu compartilhar seu amor pela sobremesa com a comunidade local.
					</p>
					<p className="text-lg mb-4">
						No início, eles tinham apenas uma pequena loja com alguns sabores básicos de sorvete. No entanto, com o
						tempo, a sorveteria ganhou popularidade e se expandiu para oferecer uma ampla variedade de sabores
						exclusivos e artesanais.
					</p>
					<p className="text-lg mb-4">
						Ao longo dos anos, a Sorveteria Autentic Gurmet se tornou uma parada obrigatória para os amantes de sorvete.
						Nossos sorvetes são feitos com ingredientes frescos e de alta qualidade, sem conservantes ou corantes
						artificiais.
					</p>
					<p className="text-lg mb-4">
						Hoje, orgulhosamente servimos a comunidade local e estamos comprometidos em proporcionar momentos de
						felicidade e satisfação através de nossos deliciosos sorvetes. Agradecemos a todos os nossos clientes pelo
						apoio contínuo ao longo dos anos!
					</p>
					<p className="text-lg">Venha nos visitar e descubra por que somos a sorveteria número um da cidade!</p>
					<Image
						alt="Imagem de sorvete"
						className="absolute right-0 top-[300px]"
						height={400}
						quality={100}
						src="/balls/birthday-cake.png"
						width={400}
					/>
					<Image
						alt="Imagem de sorvete"
						className="absolute right-0 top-[600px]"
						height={400}
						quality={100}
						src="/balls/banana-cake.png"
						width={400}
					/>
					<Image
						alt="Imagem de sorvete"
						className="absolute left-0 top-[400px] t"
						height={400}
						quality={100}
						src="/balls/black-cherry.png"
						width={400}
					/>
					<Image
						alt="Imagem de sorvete"
						className="absolute left-0 top-[100px]"
						height={400}
						quality={100}
						src="/balls/chocolate-chip.png"
						width={400}
					/>
					<Image
						alt="Imagem de sorvete"
						className="absolute m-auto top-[600px]"
						height={400}
						quality={100}
						src="/balls/cappuccino-crunch.png"
						width={400}
					/>
				</div>
			</main>
		</div>
	);
}
