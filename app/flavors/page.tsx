'use client';

import { Header } from '@app/app/components/Header';
import rawFlavors from '@app/public/balls.json' assert { type: 'json' };
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { createStorageBucketUrl } from '../utils';

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

	const desselectAll = () => {
		setFlavors((flavors) => flavors.map((flavor) => ({ ...flavor, selected: false })));
	};

	const coneSize = useMemo(() => {
		if (!globalThis?.window) {
			return 200;
		}

		if (globalThis?.window.innerHeight <= 720) {
			return 150;
		}

		if (globalThis?.window.innerHeight <= 1_080) {
			return 200;
		}
		// Force re-render on window resize
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [globalThis?.window?.innerHeight]);

	const selectedIceCreamSize = useMemo(() => {
		if (!globalThis?.window) {
			return 300;
		}

		if (globalThis?.window.innerHeight <= 720) {
			return 200;
		}

		if (globalThis?.window.innerHeight <= 1_080) {
			return 300;
		}
		// Force re-render on window resize
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [globalThis?.window?.innerHeight]);

	const iceCreamBallsFormula = useMemo(() => {
		if (!globalThis?.window) {
			return (index: number) => (index + 1) * 100 + 340;
		}

		if (globalThis?.window.innerHeight <= 720) {
			return (index: number) => (index + 1) * 70 + 310;
		}

		if (globalThis?.window.innerHeight <= 1_080) {
			return (index: number) => (index + 1) * 100 + 340;
		}

		return (index: number) => (index + 1) * 100 + 340;
		// Force re-render on window resize
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [globalThis?.window?.innerHeight]);

	console.log('flavors', {
		window: globalThis?.window,
		innerHeight: globalThis?.window?.innerHeight,
		coneSize,
		selectedIceCreamSize,
		iceCreamBallsFormula: iceCreamBallsFormula?.toString(),
	});

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
								sizes="(max-width: 780px) 150px, (max-width: 1024px) 150px, 280px"
								src={createStorageBucketUrl(flavor.id)}
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
								className="absolute m-auto mb-0 center-ice-cream-ball xl:right-[6.5rem] 2xl:right-20"
								height={selectedIceCreamSize ?? 300}
								key={flavor.id}
								loading="lazy"
								src={createStorageBucketUrl(flavor.id)}
								style={{
									bottom: `${iceCreamBallsFormula?.(index)}px`,
								}}
								width={selectedIceCreamSize ?? 300}
							/>
						))}
					<Image
						alt="Ice Cream Cone"
						className="m-auto xl:mt-[16rem] 2xl:mt-[25rem]"
						height={coneSize ?? 200}
						loading="lazy"
						src="/ice-cream-cone.png"
						width={coneSize ?? 200}
					/>
					<div className="absolute bottom-20 w-full flex flex-row justify-center items-center gap-4">
						<div className="flex flex-row justify-center items-center px-3 py-2 mb-3 border border-dashed border-primary rounded-xl text-primary font-bold">
							<div
								className={`w-8 h-8 rounded-full border-2 border-primary mx-1 ${
									selectedCount() >= 1 ? 'bg-primary' : ''
								}`}
							/>
							<div
								className={`
								w-8 h-8 border-2 rounded-full border-primary mx-1
								${selectedCount() >= 2 ? 'bg-primary' : ''}
							`}
							/>
							<div
								className={`
								w-8 h-8 border-2 rounded-full border-primary mx-1
								${selectedCount() >= 3 ? 'bg-primary' : ''}
							`}
							/>
							<div
								className={`
								w-8 h-8 rounded-full border-2 border-primary mx-1
								${selectedCount() >= 4 ? 'bg-primary' : ''}
							`}
							/>
						</div>
						<button
							className="
							items-center px-3 py-2 mb-3 border border-primary rounded-xl text-primary font-bold font-nunito transition duration-300 ease-in-out hover:bg-primary hover:text-white
							"
							disabled={selectedCount() === 0}
							onClick={() => desselectAll()}
							type="button"
						>
							Deselecionar Todos
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
