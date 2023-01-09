const style = {
	wrapper: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600`,
	container: `space-y-4 text-xs-gray-800`,
	title: `font-bold`,
	content: `hover:underline`,
	// hover:underline
};

function Footer() {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<h5 className={style.title}>ABOUT</h5>
				<p className={style.content}>How Airbnb works</p>
				<p className={style.content}>Newsroom</p>
				<p className={style.content}>Investors</p>
				<p className={style.content}>Airbnb Plus</p>
				<p className={style.content}>Airbnb Luxe</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>COMMUNITY</h5>
				<p className={style.content}>Accessibility</p>
				<p className={style.content}>This is not a real site</p>
				<p className={style.content}>Its a pretty awesome clone</p>
				<p className={style.content}>With tailwindCSS and Nextjs</p>
				<p className={style.content}>Inspired by PapaReact</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>HOST</h5>
				<p className={style.content}>Pham Minh Tan</p>
				<p className={style.content}>Presents</p>
				<p className={style.content}>Airbnb Clone</p>
				<p className={style.content}>With Nextjs</p>
				<p className={style.content}>Visit my Github</p>
			</div>
			<div className={style.container}>
				<h5 className={style.title}>SUPPORT</h5>
				<p className={style.content}>Help Centre</p>
				<p className={style.content}>Trust & Safety</p>
				<p className={style.content}>Contact Us</p>
				<p className={style.content}>Easter Eggs</p>
				<p className={style.content}>Happy Coding!</p>
			</div>
		</div>
	);
}

export default Footer;
