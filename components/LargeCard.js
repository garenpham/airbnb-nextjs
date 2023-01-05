import Image from 'next/image'

const style = {
	wrapper: `relative py-16 cursor-pointer`,
	container: `relative h-96 min-w-[300px]`,
	img: `object-cover rounded-2xl`,
	content: `absolute top-32 left-12`,
	title: `text-4xl mb-3 w-64`,
	description: ``,
	btn: `text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-xl active:scale-90 transform transition duration-150`,
}

function LargeCard({ img, title, description, buttonText }) {
	return (
		<section className={style.wrapper}>
			<div className={style.container}>
				<Image
					className={style.img}
					src={img}
					fill
				/>
			</div>

			<div className={style.content}>
				<h3 className={style.title}>{title}</h3>
				<p className={style.description}>{description}</p>

				<button className={style.btn}>{buttonText}</button>
			</div>
		</section>
	)
}

export default LargeCard
