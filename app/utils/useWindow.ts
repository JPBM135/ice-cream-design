import { useEffect, useState } from 'react';

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<
	{
		height?: number,
		width?: number
	}
	>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}