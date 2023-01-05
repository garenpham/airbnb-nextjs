import Image from 'next/image'

const style = {
	wrapper: `relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]`,
	img: `object-cover`,
	container: `absolute top-1/2 w-full text-center`,
	title: `text-sm sm:text-lg`,//button click trick 🡣
	btn: `text-purple-500 bg-white rounded-full px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150`,
}

function Banner() {
	return (
		<div className={style.wrapper}>
			<Image
				src="https://links.papareact.com/0fm"
				fill
				className={style.img}
			/>
			<div className={style.container}>
				<p className={style.title}>Not sure where to go? Perfect.</p>

				<button className={style.btn}>I'm flexible</button>
			</div>
		</div>
	)
}

export default Banner
