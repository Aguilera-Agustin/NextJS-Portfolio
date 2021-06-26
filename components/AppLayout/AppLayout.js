
import Head from 'next/head'
export const AppLayout = ({children}) => {
    return (
        <>
        <Head>
            <title>Mi portfolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
