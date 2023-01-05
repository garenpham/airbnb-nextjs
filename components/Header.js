import Image from 'next/image'
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/24/solid'

import { GlobeAltIcon } from '@heroicons/react/24/outline'

const style = {
	wrapper: `sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10`,
	left: `relative flex items-center h-10 cursor-pointer my-auto`,
	leftImg: `object-contain object-left`,
	middle: `flex items-center md:border-2 rounded-full py-2 md:shadow-sm`,
	mdInput: `flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400`,
	searchIcon: `hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2`,
	right: `flex items-center space-x-4 justify-end text-gray-500`,
	title: `hidden md:inline cursor-pointer`,
	globe: `h-6 cursor-pointer`,
	menuContainer: `flex items-center space-x-2 border-2 p-2 rounded-full`,
	menu: `h-6`,
	userCircle: `h-6`,
}

function Header() {
	return (
		<header className={style.wrapper}>
			<div className={style.left}>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
					fill
					className={style.leftImg}
				/>
			</div>

			<div className={style.middle}>
				<input
					type="text"
					placeholder="Start your search"
					className={style.mdInput}
				/>
				<MagnifyingGlassIcon className={style.searchIcon} />
			</div>

			<div className={style.right}>
				<p className={style.title}>Become a Host</p>
				<GlobeAltIcon className={style.globe} />

				<div className={style.menuContainer}>
					<Bars3Icon className={style.menu} />
					<UserCircleIcon className={style.userCircle} />
				</div>
			</div>
		</header>
	)
}

export default Header
