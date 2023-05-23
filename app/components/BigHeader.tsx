'use client';

import { GitBranch, IceCream, IdentificationCard, Info, Storefront, UsersThree } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { VerticalDivider } from './VerticalDivider';

interface BigImageHeaderProps {
	image: string;
	subtitle: string;
	title: string;
}

export function BigImageHeader(): JSX.Element {
	const [studentsOpen, setStudentsOpen] = useState(false);

	const glowTailwindClass = 'text-secondary glow';

	const student = [
		'João Pedro Borges Martins',
		'Matheus Ricardo S. Viela',
		'Gabriela Carolini Paliuco',
		'Brenda Ferreira dos Santos',
		'Yohanna A. Lellis',
		'Ana Lívia Ribeiro',
	].sort((a, b) => a.localeCompare(b));

	return (
		<div className="relative">
			<div className="flex justify-between items-center pr-16 w-full h-[10vh] bg-bg_color_tertiary">
				<div className="bg-bg_color_tertiary p-5 rounded-r-lg">
					<Image alt="Authentic Gourmet Logo" className="mt-52" height={250} src="/logo.png" width={250} />
				</div>
				<nav className="flex space-x-4 gap-5">
					<Link className={`text-white hover:border-b-primary flex pb-2 border-b-white border-b `} href="/about">
						<Info size={24} weight="bold" />
						<VerticalDivider />
						Sobre Nós
					</Link>
					<Link className="text-white hover:border-b-primary flex pb-2 border-b-white border-b" href="/flavors">
						<IceCream size={24} weight="bold" />
						<VerticalDivider />
						Sabores
					</Link>
					<Link className="text-white hover:border-b-primary flex pb-2 border-b-white border-b" href="/make-your">
						<IceCream size={24} weight="bold" />
						<VerticalDivider />
						Monte o seu
					</Link>
					<Link
						className="text-white hover:border-b-primary flex pb-2 border-b-white border-b"
						href="https://github.com/JPBM135/ice-cream-design"
						rel="noopener noreferrer"
						target="_blank"
					>
						<GitBranch size={24} weight="bold" />
						<VerticalDivider />
						GitHub
					</Link>
					<div
						className={`cursor-pointer text-white hover:border-b-primary flex pb-2 border-b-white border-b ${
							studentsOpen ? glowTailwindClass : ''
						}`}
						onClick={() => setStudentsOpen(!studentsOpen)}
					>
						<UsersThree size={24} weight="bold" />
						<VerticalDivider />
						Participantes
					</div>
					{studentsOpen && (
						<div className="absolute top-20 right-2 bg-bg_color rounded-md shadow-md p-4 border-gray-900 border-2">
							<div className="flex items-center space-x-2 text-gray-800 border-b border-gray-300" />
							{student.map((student) => (
								<div
									className="flex gap-1 items-center font-medium space-x-1 border-b border-gray-300 py-2"
									key={student}
								>
									<IdentificationCard size={24} />
									<span className="font-nunito font-semibold">{student}</span>
								</div>
							))}
						</div>
					)}
				</nav>
			</div>
		</div>
	);
}
