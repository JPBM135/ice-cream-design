'use client';

import { Header } from '@app/app/components/Header';
import rawFlavors from '@app/public/balls.json' assert { type: 'json' };
import Image from 'next/image';
import { useState } from 'react';

const MAX_SELECTED = 4;

interface Flavor {
	calories: number | null;
	description: string | null;
	id: string;
	name: string;
	namePtBr: string;
	selected: boolean;
}

export default function FlavorsPage() {
	const [flavors, setFlavors] = useState<Flavor[]>(
		rawFlavors.map<Flavor>((flavor) => ({ ...flavor, selected: false })),
	);

	const selectedCount = () => flavors.filter((flavor) => flavor.selected).length;

	const toggleFlavor = (flavorId: string, isSelected: boolean) => {
		if (!isSelected && selectedCount() >= MAX_SELECTED) {
			return;
		}

		setFlavors((flavors) =>
			flavors.map((flavor) => {
				if (flavor.id === flavorId) {
					return { ...flavor, selected: !flavor.selected };
				}

				return flavor;
			}),
		);
	};

	return (
		<div className="w-full h-fit">
			<Header allowBiggerLogo={false} />
			<main className="w-full h-full flex flex-row bg-gradient-to-b from-bg_color to-bg_color_secondary">
				<div className="w-[inherit] flex flex-wrap h-auto justify-evenly">
					{flavors.map((flavor) => (
						<div
							className={`cursor-pointer w-72 h-72 m-12 align-middle rounded-2xl ${
								flavor.selected ? 'bg-primary' : 'bg-bg_color_tertiary'
							}`}
							key={flavor.id}
							onClick={() => toggleFlavor(flavor.id, flavor.selected)}
						>
							<Image
								alt={flavor.name}
								className="m-auto"
								height={280}
								loading="lazy"
								src={`/balls/${flavor.id}`}
								width={280}
							/>
							<span className="text-white font-semibold text-center block">{flavor.namePtBr}</span>
						</div>
					))}
				</div>
				<div className="w-[600px] h-[100vh] bg-secondary sticky right-0 top-[5rem]">
					{flavors
						.filter((flavor) => flavor.selected)
						.map((flavor, index) => (
							<Image
								alt={flavor.name}
								className="absolute m-auto mb-0 center-ice-cream-ball"
								height={300}
								key={flavor.id}
								loading="lazy"
								src={`/balls/${flavor.id}`}
								style={{
									bottom: `${(index + 1) * 100 + 340}px`,
								}}
								width={300}
							/>
						))}
					<Image
						alt="Ice Cream Cone"
						className="m-auto mt-[25rem]"
						height={200}
						loading="lazy"
						src="/ice-cream-cone.png"
						width={200}
					/>
					<div className="absolute bottom-20 w-full flex flex-row justify-center items-center">
						<div className="flex flex-row justify-center items-center px-3 py-2 mb-3 border border-primary rounded-xl text-primary font-bold text-xl font-nunito">
							<div
								className={`w-8 h-8 rounded-l-full border-2 border-primary mx-1 ${
									selectedCount() >= 1 ? 'bg-primary' : ''
								}`}
							/>
							<div
								className={`
								w-8 h-8 border-2 border-primary mx-1
								${selectedCount() >= 2 ? 'bg-primary' : ''}
							`}
							/>
							<div
								className={`
								w-8 h-8 border-2 border-primary mx-1
								${selectedCount() >= 3 ? 'bg-primary' : ''}
							`}
							/>
							<div
								className={`
								w-8 h-8  rounded-r-full border-2 border-primary mx-1
								${selectedCount() >= 4 ? 'bg-primary' : ''}
							`}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
