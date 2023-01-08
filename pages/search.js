import Header from './../components/Header'
import Footer from './../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from './../components/InfoCard'
import MapBox from '../components/MapBox'

const style = {
	wrapper: ``,
	main: `flex`,
	headline: `flex-grow pt-14 px-6`,
	small__headline: `text-xs`,
	headline__title: `text-3xl font-semibold mt-2 mb-6`,
	filters: `hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap`,
	results: `flex flex-col`,
	map: `hidden xl:inline-flex xl:min-w-[600px]`,
}

function Search({ searchResults }) {
	const router = useRouter()
	const { location, startDate, endDate, noOfGuests } = router.query
	const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
	const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
	const range = `${formattedStartDate} - ${formattedEndDate}`

	return (
		<div className={style.wrapper}>
			<Header
				placeholder={`${location} | ${range} | ${noOfGuests} guests`}
			/>

			<main className={style.main}>
				<section className={style.headline}>
					<p className={style.small__headline}>
						300+ Stays - {range} - for {noOfGuests} guests
					</p>
					<h1 className={style.headline__title}>
						Stays in {location}
					</h1>

					<div className={style.filters}>
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>

					<div className={style.results}>
						{searchResults.map(
							({
								img,
								location,
								title,
								description,
								star,
								price,
								total,
							}) => (
								<InfoCard
									key={img}
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							),
						)}
					</div>
				</section>

				<section className={style.map}>
					<MapBox searchResults={searchResults} />
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default Search

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
		(res) => res.json(),
	)

	return {
		props: {
			searchResults,
		},
	}
}
