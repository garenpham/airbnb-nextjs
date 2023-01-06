const style = {
	wrapper: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600`,
	container: `space-y-4 text-xs-gray-800`,
	title: `font-bold`,
}

function Footer() {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<h5 className={style.title}>ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty awesome clone</p>
				<p>With tailwindCSS and Nextjs</p>
				<p>Inspired by PapaReact</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>HOST</h5>
				<p>Pham Minh Tan</p>
				<p>Presents</p>
				<p>Airbnb Clone</p>
				<p>With Nextjs</p>
				<p>Visit my Github</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>SUPPORT</h5>
				<p>Help Centre</p>
				<p>Trust & Safety</p>
				<p>Contact Us</p>
				<p>Easter Eggs</p>
				<p>Happy Coding!</p>
			</div>
		</div>
	)
}

export default Footer
