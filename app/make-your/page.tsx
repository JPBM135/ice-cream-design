'use client';

import { Header } from '@app/app/components/Header';
import rawFlavors from '@app/public/balls.json' assert { type: 'json' };
import { Button } from '@mui/material';
import { CaretCircleDoubleLeft, CaretCircleDoubleRight, PaperPlaneTilt } from '@phosphor-icons/react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useWindowSize } from '../utils/useWindow';
import { createStorageBucketUrl } from '../utils/utils';

const MAX_SELECTED = 4;

const allowedIceCreamCones = ['ice-cream-cone.png', 'ice-cream-cone-choco.png', 'ice-cream-cone-berry.png'];

interface Flavor {
	allergens?: string[] | null;
	calories: number | null;
	description: string | null;
	id: string;
	name: string;
	namePtBr: string;
	selected: boolean;
}

export default function FlavorsPage() {
	const [flavors, setFlavors] = useState<Flavor[]>(
		rawFlavors.map<Flavor>((flavor) => ({ ...flavor, selected: false } as Flavor)),
	);

	const [iceCreamConeIndex, setIceCreamConeIndex] = useState<number>(0);
	const iceCreamCone = useMemo(() => {
		console.log(iceCreamConeIndex);
		return allowedIceCreamCones[iceCreamConeIndex] ?? allowedIceCreamCones[0];
	}, [iceCreamConeIndex]);

	const handleNextIceCreamCone = () => {
		setIceCreamConeIndex((index) => (index + 1) % allowedIceCreamCones.length);
	};

	const handlePreviousIceCreamCone = () => {
		setIceCreamConeIndex((index) => (index - 1 + allowedIceCreamCones.length) % allowedIceCreamCones.length);
	};

	const size = useWindowSize();

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
		if (!size.height) {
			return 200;
		}

		if (size.height <= 720) {
			return 150;
		}

		if (size.height <= 1_080) {
			return 200;
		}
	}, [size]);

	const selectedIceCreamSize = useMemo(() => {
		if (!size.height) {
			return 200;
		}

		if (size.height! <= 720) {
			return 200;
		}

		if (size.height! <= 1_080) {
			return 300;
		}
	}, [size]);

	const iceCreamBallsFormula = useMemo(() => {
		if (!size.height) {
			return (index: number) => (index + 1) * 100 + 340;
		}

		if (size.height <= 720) {
			return (index: number) => (index + 1) * 70 + 310;
		}

		if (size.height <= 1_080) {
			return (index: number) => (index + 1) * 100 + 300;
		}

		return (index: number) => (index + 1) * 50;
	}, [size]);

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
							className={`cursor-pointer w-72 h-72 m-12 align-middle rounded-2xl hover:animate-pulse ${
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
							<span className="text-white font-medium text-center block">{flavor.namePtBr}</span>
						</div>
					))}
				</div>
				<div className="w-[600px] h-[91.5vh] bg-secondary sticky right-0 top-[5rem] flex flex-col">
					<div className="h-5">
						{flavors
							.filter((flavor) => flavor.selected)
							.map((flavor, index) => (
								<Image
									alt={flavor.name}
									className={`m-auto -mb-80 relative top-40 z-${index} select-none`}
									height={selectedIceCreamSize ?? 300}
									key={flavor.id}
									loading="lazy"
									sizes="(max-width: 780px) 150px, (max-width: 1024px) 150px, 280px"
									src={createStorageBucketUrl(flavor.id)}
									style={{
										MozUserSelect: 'none',
										WebkitUserSelect: 'none',
									}}
									width={selectedIceCreamSize ?? 300}
								/>
							))}
					</div>
					<div className="flex justify-between items-center my-auto">
						<CaretCircleDoubleLeft
							aria-label="button"
							className="cursor-pointer"
							color="#858585"
							onClick={handlePreviousIceCreamCone}
							size={48}
						/>
						<Image
							alt="Ice Cream Cone"
							className="m-auto select-none"
							height={coneSize ?? 200}
							loading="lazy"
							src={`/${iceCreamCone}`}
							width={coneSize ?? 200}
						/>
						<CaretCircleDoubleRight
							aria-label="button"
							className="cursor-pointer"
							color="#858585"
							onClick={handleNextIceCreamCone}
							size={48}
						/>
					</div>
					<div className="w-full absolute justify-center bottom-5 flex flex-col gap-3">
						<div className="flex flex-row justify-center items-center gap-4">
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
						<button
							className="
							flex justify-between items-center px-3 py-2 mb-3 mx-2 border border-primary rounded-xl font-bold font-nunito transition duration-300 ease-in-out bg-primary text-white hover:animate-pulse
							"
							disabled={selectedCount() === 0}
							onClick={() => desselectAll()}
							type="button"
						>
							Enviar Pedido <PaperPlaneTilt className="fill-white" size={24} />
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
