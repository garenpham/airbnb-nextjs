/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			'links.papareact.com',
			'upload.wikimedia.org',
			'jsonkeeper.com',
		],
	},
	env: {
		mapbox_key:
			'pk.eyJ1IjoicGhhbW1pbmh0YW4iLCJhIjoiY2w2cmNnbzlrMTJmaDNlbnNzczNmYWFpdCJ9.wz3gVBNdBv5c5nQG1dfD-Q',
	},
}
