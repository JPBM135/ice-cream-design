'use client';

import flavors from '@app/public/balls.json' assert { type: 'json' };
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '../components/Header';
import { createStorageBucketUrl } from '../utils/utils';

export default function Home() {
	return (
		<div className="w-full h-fit">
			<Header allowBiggerLogo={false} />
			<main className="w-full h-full bg-gradient-to-b from-bg_color to-bg_color_secondary">
				<div className="w-[inherit] flex flex-wrap h-auto justify-evenly">
					{flavors.map((flavor) => (
						<Link
							className="cursor-pointer shadow-2xl w-72 h-72 m-12 align-middle rounded-2xl hover:animate-pulse bg-bg_color_tertiary"
							href={`/flavors/${flavor.id.replace('.png', '')}`}
							key={flavor.id}
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
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
