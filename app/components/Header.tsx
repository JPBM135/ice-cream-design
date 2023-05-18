'use client';

import {
	IceCream,
	Info,
	Storefront,
	MagnifyingGlass,
	GitBranch,
	UsersThree,
	IdentificationCard,
	Basket,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NextRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { VerticalDivider } from './VerticalDivider';

function isSelected(path: string, pathname: string | null): boolean {
	return pathname === path;
}

export function Header({ allowBiggerLogo = true }: { allowBiggerLogo?: boolean }): JSX.Element {
	const [studentsOpen, setStudentsOpen] = useState(false);
	const [logoType, setLogoType] = useState<'big' | 'small'>(allowBiggerLogo ? 'big' : 'small');

	const path = usePathname();

	const glowTailwindClass = 'text-secondary glow';

	useEffect(() => {
		if (allowBiggerLogo) {
			const onScroll = (): void => {
				if (window.scrollY > 100) {
					setLogoType('small');
				} else {
					setLogoType('big');
				}
			};

			window.addEventListener('scroll', onScroll);

			return () => window.removeEventListener('scroll', onScroll);
		}
	}, [allowBiggerLogo]);

	const student = [
		'João Pedro Borges Martins',
		'Matheus Ricardo S. Viela',
		'Gabriela Carolini Paliuco',
		'Brenda Ferreira dos Santos',
		'Yohanna A. Lellis',
		'Ana Lívia Ribeiro',
	].sort((a, b) => a.localeCompare(b));

	return (
		<div className="px-10 py-5 w-full flex items-center justify-between bg-bg_color_tertiary sticky top-0 z-50">
			<div className="flex items-center space-x-4 w-[40rem]">
				<nav className="flex space-x-4 gap-5">
					<Link
						className={`text-white hover:border-b-primary flex pb-2 border-b-white border-b ${
							isSelected('/store', path) ? glowTailwindClass : ''
						}`}
						href="/store"
					>
						<Storefront size={24} weight="bold" />
						<VerticalDivider />
						Nossa Loja
					</Link>
					<Link
						className={`text-white hover:border-b-primary flex pb-2 border-b-white border-b ${
							isSelected('/about', path) ? glowTailwindClass : ''
						}`}
						href="/about"
					>
						<Info size={24} weight="bold" />
						<VerticalDivider />
						Sobre Nós
					</Link>
					<Link
						className={`text-white hover:border-b-primary flex pb-2 border-b-white border-b ${
							isSelected('/flavors', path) ? glowTailwindClass : ''
						}`}
						href="/flavors"
					>
						<Basket size={24} weight="bold" />
						<VerticalDivider />
						Sabores
					</Link>
					<Link
						className={`text-white hover:border-b-primary flex pb-2 border-b-white border-b ${
							isSelected('/make-your', path) ? glowTailwindClass : ''
						}`}
						href="/make-your"
					>
						<IceCream size={24} weight="bold" />
						<VerticalDivider />
						Monte o seu
					</Link>
				</nav>
			</div>
			{useMemo(
				() =>
					logoType === 'small' && (
						<Link href="/">
							<Image
								alt="Authentic Gourmet Logo"
								className="transition-opacity duration-1000"
								height={220}
								src="/logo-tape.png"
								width={220}
							/>
						</Link>
					),
				[logoType],
			)}
			<div className="flex items-center space-x-4 justify-end w-[30rem]">
				<nav className="flex space-x-4 gap-5">
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
