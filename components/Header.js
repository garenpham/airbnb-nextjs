import Image from 'next/image'
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/24/solid'

import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

const style = {
	wrapper: `sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10`,
	left: `relative flex items-center h-10 cursor-pointer my-auto`,
	left__img: `object-contain object-left`,
	middle: `flex items-center md:border-2 rounded-full py-2 md:shadow-sm`,
	md__input: `flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400`,
	search__icon: `hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2`,
	right: `flex items-center space-x-4 justify-end text-gray-500`,
	right__title: `hidden md:inline cursor-pointer`,
	globe: `h-6 cursor-pointer`,
	menu__container: `flex items-center space-x-2 border-2 p-2 rounded-full`,
	menu: `h-6`,
	userCircle: `h-6`,
	calendar: `flex flex-col col-span-3 mx-auto`,
	numGuests__container: `flex items-center border-b mb-4`,
	numGuests: `text-2xl flex-grow font-semibold`,
	numGuests__icon: `h-5`,
	numGuests__input: `w-12 pl-2 text-lg outline-none text-red-400`,
	confirmation: `flex`,
	cancel__btn: `flex-grow text-gray-500`,
	search__btn: `flex-grow text-red-400`,
}

function Header({ placeholder }) {
	const [searchInput, setSearchInput] = useState('')
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [noOfGuests, setNoOfGuests] = useState(1)
	const router = useRouter()

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate)
		setEndDate(ranges.selection.endDate)
	}

	const resetInput = () => {
		setSearchInput('')
	}

	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuests,
			},
		})
	}

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}

	return (
		<header className={style.wrapper}>
			<div
				onClick={() => router.push('/')}
				className={style.left}
			>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
					fill
					className={style.left__img}
				/>
			</div>

			{/* Search bar */}
			<div className={style.middle}>
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
					placeholder={placeholder || 'Start your search'}
					className={style.md__input}
				/>
				<MagnifyingGlassIcon className={style.search__icon} />
			</div>

			<div className={style.right}>
				<p className={style.right__title}>Become a Host</p>
				<GlobeAltIcon className={style.globe} />

				<div className={style.menu__container}>
					<Bars3Icon className={style.menu} />
					<UserCircleIcon className={style.userCircle} />
				</div>
			</div>

			{searchInput && (
				<div className={style.calendar}>
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>

					<div className={style.numGuests__container}>
						<h2 className={style.numGuests}>Number of Guests</h2>

						<UsersIcon className={style.numGuests__icon} />
						<input
							value={noOfGuests}
							onChange={(e) => setNoOfGuests(e.target.value)}
							className={style.numGuests__input}
							type="number"
							min={1}
						/>
					</div>

					<div className={style.confirmation}>
						<button
							onClick={resetInput}
							className={style.cancel__btn}
						>
							Cancel
						</button>
						<button
							onClick={search}
							className={style.search__btn}
						>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
