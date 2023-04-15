'use client';

import { IceCream, Info, Storefront, MagnifyingGlass, GitBranch, UsersThree } from '@phosphor-icons/react';
import Link from 'next/link';
import { VerticalDivider } from './VerticalDivider';

export function Header() {
	return (
		<header className="flex items-center justify-between px-10 pt-4 pb-8 w-full bg-gradient-to-b from-bg_color_tertiary to-90% to-bg_color">
			<div className="flex items-center space-x-4 w-96">
				<nav className="flex space-x-4">
					<Link className="text-white font-semibold hover:text-primary flex" href="/store">
						<Storefront size={24} weight="bold" />
						<VerticalDivider />
						Nossa Loja
					</Link>
					<Link className="text-white font-semibold hover:text-primary flex" href="/about">
						<Info size={24} weight="bold" />
						<VerticalDivider />
						Sobre Nós
					</Link>
					<Link className="text-white font-semibold hover:text-primary flex" href="/flavors">
						<IceCream size={24} weight="bold" />
						<VerticalDivider />
						Sabores
					</Link>
				</nav>
			</div>
			<Link className="text-2xl font-bold" href="/">
				<span className="text-secondary">Authentic Gurmet</span>
			</Link>
			<div className="flex items-center space-x-4 w-96 justify-end">
				<nav className="flex space-x-4">
					<Link
						className="text-white font-semibold hover:text-primary flex"
						href="https://github.com/JPBM135/ice-cream-design"
						rel="noopener noreferrer"
						target="_blank"
					>
						<GitBranch size={24} weight="bold" />
						<VerticalDivider />
						GitHub
					</Link>
					<Link className="text-white font-semibold hover:text-primary flex gap-2" href="/">
						<UsersThree size={24} weight="bold" />
						<VerticalDivider />
						Participantes
					</Link>
				</nav>
			</div>
		</header>
	);
}
