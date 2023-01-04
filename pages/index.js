import Head from 'next/head'
import Header from './../components/Header';

const style = {}

export default function Home() {
	return (
		<div className={style.wrapper}>
			<Head>
				<title>AIRBNB Clone</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />
		</div>
	)
}
