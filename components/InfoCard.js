import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

const style = {
	wrapper: `flex py-7 px-2 pr-4 border-b rounded-2xl cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t`,
	img__container: `relative h-24 w-48 md:h-52 md:w-80 flex-shrink-0`,
	img: `object-cover rounded-2xl`,
	location: `flex justify-between`,
	content: `flex flex-col flex-grow pl-5`,
	heartIcon: `h-7 cursor-pointer`,
	title: `text-xl`,
	line: `border-b w-10 pt-2`,
	description: `pt-2 text-sm text-gray-500 flex-grow`,
	content__bottom: `flex justify-between items-end pt-5`,
	star: `flex items-center`,
	starIcon: `h-5 text-red-400`,
	price: `text-lg lg:text-2xl font-semibold pb-2`,
	total: `text-right font-extralight`,
}

function InfoCard({ img, location, title, description, star, price, total }) {
	return (
		<div className={style.wrapper}>
			<div className={style.img__container}>
				<Image
					className={style.img}
					src={img}
					alt="infoCard"
					fill
				/>
			</div>

			<div className={style.content}>
				<div className={style.location}>
					<p>{location}</p>
					<HeartIcon className={style.heartIcon} />
				</div>

				<h4 className={style.title}>{title}</h4>

				<div className={style.line} />

				<p className={style.description}>{description}</p>

				<div className={style.content__bottom}>
					<p className={style.star}>
						<StarIcon className={style.starIcon} />
						{star}
					</p>

					<div>
						<p className={style.price}>{price}</p>
						<p className={style.total}>{total}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoCard
