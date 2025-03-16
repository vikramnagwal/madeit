import { useEffect, useState } from "react";

const MEDIA_BREAKPOINT = 786;

export const useMediaQuery = () => {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	const onChange = () => {
		setIsMobile(window.innerWidth < MEDIA_BREAKPOINT);
	};

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MEDIA_BREAKPOINT - 1}px)`);
		mql.addEventListener("change", onChange);
		onChange();
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return { isMobile };
};
