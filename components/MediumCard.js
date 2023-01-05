import Image from 'next/image'

const style = {
	wrapper: `cursor-pointer hover:scale-105 transition transform duration-300 ease-out`,
	imgWrapper: `relative h-80 w-80`,
	img: `rounded-xl`,
	title: `text-2xl mt-4`,
}

function MediumCard({ img, title }) {
	return (
		<div className={style.wrapper}>
			<div className={style.imgWrapper}>
				<Image
					src={img}
					fill
					className={style.img}
				/>
			</div>
			<h3>{title}</h3>
		</div>
	)
}

export default MediumCard
