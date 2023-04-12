'use client';

import Image from "next/image";
import {useRouter} from "next/navigation"

const Logo = () => {
	const ruter = useRouter();
	return (
		<Image
			alt='Logo'
			className='hidden md:block cursor-pointer pointer-events-none'
			height="100"
			width="100"
			src='/images/logo.png'
				/>
		)
}

export default Logo