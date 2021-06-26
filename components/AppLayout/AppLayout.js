
import Head from 'next/head'
export const AppLayout = ({children}) => {
    return (
        <>
        <Head>
            <title>Agustin Aguilera - Portfolio</title>
            <meta charset="UTF-8" key='charset'/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" key='equiv'/>
            <meta name="description" content="Agustin Aguilera portfolio personal - desarrollador fullstack orientado a WEB." key="description"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

            <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap' rel="stylesheet" />
        </Head>
            <main>
                {children}
            </main>

            <style jsx global>{`
                html,
                body {
                    font-family: Raleway, sans-serif;
                    background: #F3F4F6
                }

            `}</style>
        </>
    )
}
