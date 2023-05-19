'use client';

import flavors from '@app/public/balls.json' assert { type: 'json' };
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import {
	GiAlmond,
	GiBigEgg,
	GiCoconuts,
	GiEvilBat,
	GiFlour,
	GiGrainBundle,
	GiMilkCarton,
	GiPeanut,
	GiWheat,
} from 'react-icons/gi';
import { ImSad2 } from 'react-icons/im';
import type { IconType } from 'react-icons/lib';
import NotFound from '../../[...not_found]/page';
import { Header } from '../../components/Header';
import { createStorageBucketUrl } from '../../utils/utils';

type Allergens = 'almonds' | 'egg' | 'gluten' | 'milk' | 'nuts' | 'oats' | 'peanuts' | 'sadness' | 'soy' | 'villains';

const AllergenMapper: Record<
	Allergens,
	{
		icon: IconType;
		name: string;
	}
> = {
	almonds: {
		name: 'Amêndoas',
		icon: GiAlmond,
	},
	egg: {
		name: 'Ovos',
		icon: GiBigEgg,
	},
	nuts: {
		name: 'Nozes',
		icon: GiCoconuts,
	},
	gluten: {
		name: 'Glúten',
		icon: GiFlour,
	},
	milk: {
		name: 'Leite',
		icon: GiMilkCarton,
	},
	oats: {
		name: 'Aveia',
		icon: GiWheat,
	},
	peanuts: {
		name: 'Amendoim',
		icon: GiPeanut,
	},
	sadness: {
		name: 'Tristeza',
		icon: ImSad2,
	},
	soy: {
		name: 'Soja',
		icon: GiGrainBundle,
	},
	villains: {
		name: 'Vilões',
		icon: GiEvilBat,
	},
};

export default function Home({ params }: { params: { id: string } }) {
	const flavor = useMemo(() => flavors.find((flavor) => flavor.id === `${params.id}.png`), [params.id]);

	if (!flavor) {
		return NotFound();
	}

	return (
		<div className="w-full h-fit bg-gradient-to-b from-bg_color to-bg_color_secondary">
			<Header allowBiggerLogo={false} />
			<main className="w-full h-[92vh] flex">
				<div className="h-fit w-fit m-10 flex flex-col justify-around">
					<div>
						<Image
							alt={flavor.name}
							className="m-auto bg-bg_color_tertiary px-5 py-7 rounded-xl shadow-2xl"
							height={500}
							loading="lazy"
							src={createStorageBucketUrl(flavor.id)}
							width={500}
						/>
					</div>
					<div className="flex flex-col items-center shadow-2xl font-cookie my-10 px-5 py-7 rounded-xl bg-bg_color_tertiary">
						<h1 className="text-secondary text-center font-bold text-3xl">Alérgenos</h1>
						<div className="flex flex-wrap justify-center">
							{flavor.allergens.map((allergen) => {
								const { icon: Icon, name } = AllergenMapper[allergen as Allergens];
								return (
									<div
										className="flex flex-col items-center m-5 border-2 border-dashed rounded-xl border-bg_color p-2"
										key={allergen}
									>
										<Icon className="text-4xl text-bg_color" />
										<p className="text-center text-white font-medium text-xl">{name}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="h-fit w-fit flex flex-col m-10 justify-center">
					<h1 className="text-secondary border-4 shadow-2xl font-cookie border-secondary border-dashed text-center bg-bg_color_tertiary font-bold text-7xl mb-10 px-5 py-7 rounded-3xl">
						{flavor.namePtBr}
					</h1>
					<p className="mx-7 bg-bg_color_tertiary p-7 shadow-2xl rounded-lg text-white font-medium text-2xl">
						{flavor.description}
					</p>
				</div>
			</main>
		</div>
	);
}
