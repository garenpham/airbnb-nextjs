import Image from 'next/image'

const style = {
	wrapper: `flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out`,
	left: `relative h-16 w-16`,
	img: `rounded-lg`,
	right: ``,
	distance: `text-gray-500`,
}

function SmallCard({ img, location, distance }) {
	return (
		<div className={style.wrapper}>
			<div className={style.left}>
				<Image
					src={img}
					fill
					className={style.img}
				/>
			</div>

			<div className={style.right}>
				<h2>{location}</h2>
				<h3 className={style.distance}>{distance}</h3>
			</div>
		</div>
	)
}

export default SmallCard
