import Head from 'next/head'
import Header from './../components/Header'
import Banner from './../components/Banner'
import SmallCard from './../components/SmallCard'
import MediumCard from './../components/MediumCard'
import horizontalScroll from '../utils/horizontalScroll'
import LargeCard from './../components/LargeCard'
import Footer from './../components/Footer';

const style = {
	main: `max-w-7xl mx-auto px-8 sm:px-16`,
	explore: `pt-6`,
	explore__title: `text-4xl font-semibold pb-5`,
	explore__container: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
	live: '',
	live__title: `text-4xl font-semibold py-8`,
	live__container: `flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3`,
}

export default function Home({ exploreData, cardsData }) {
	const scrollHorizontal = horizontalScroll()

	return (
		<div>
			<Head>
				<title>AIRBNB Clone</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />
			<Banner />

			<main className={style.main}>
				<section className={style.explore}>
					<h2 className={style.explore__title}>Explore Nearby</h2>
					<div className={style.explore__container}>
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>

				<section className={style.live}>
					<h2 className={style.live__title}>Live Anywhere</h2>

					<div
						ref={scrollHorizontal}
						className={style.live__container}
					>
						{cardsData?.map(({ img, title }) => (
							<MediumCard
								key={img}
								img={img}
								title={title}
							/>
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb."
					buttonText="Get Inspired"
				/>
			</main>

			<Footer />
		</div>
	)
}

export async function getStaticProps() {
	//Can do with Sanity
	const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
		(res) => res.json(),
	)

	const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
		(res) => res.json(),
	)

	return {
		props: {
			exploreData,
			cardsData,
		},
	}
}
