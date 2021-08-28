import Head from 'next/head'
export const AppLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Agustin Aguilera - Portfolio</title>
				<meta charSet='UTF-8' key='charset' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' key='equiv' />
				<meta
					name='description'
					content='Agustin Aguilera portfolio personal - desarrollador fullstack orientado a WEB.'
					key='description'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
			</Head>
			<main>{children}</main>

			<style jsx global>{`
				html,
				body {
					font-family: Raleway, sans-serif;
				}
			`}</style>
		</>
	)
}
