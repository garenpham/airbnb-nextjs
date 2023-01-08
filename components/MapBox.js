import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css'

const style = {
	marker: ``,
	pin: `cursor-pointer text-2xl animate-bounce`,
}

function MapBox({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({})

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}))

	const center = getCenter(coordinates)

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		// longitude: center.longitude,
		// latitude: center.latitude,
		longitude: -0.08472,
		latitude: 51.360794,
		zoom: 11,
	})

	return (
		<Map
			mapStyle="mapbox://styles/phamminhtan/clcnig8ji000214nycsv0bvp3"
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(e) => setViewport(e.viewState)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							role="img"
							onClick={() => setSelectedLocation(result)}
							className={style.pin}
							aria-label="push-pin"
						>
							📌
						</p>
					</Marker>

					{/* Popup show if click on marker */}
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={false}
							longitude={result.long}
							latitude={result.lat}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	)
}
export default MapBox
