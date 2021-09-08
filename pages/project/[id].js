import { works } from '../../assets/works'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Presentation/Footer'
import { Banner } from '../../components/Project/Banner'
import { Description } from '../../components/Project/Description'
import { Title } from '../../components/Project/Title'
import { useWork } from '../../hooks/useWork'

export default function Project ({ data }) {
    const { url, title, img, abstract, description, code: github, live, banner } = useWork(data.id)
    return (
        <AppLayout>
            <Navbar/>
            <Banner img={banner} name={title} />
            <Title id={ data.id }/>
            <Description id={ data.id } />
            <Footer/>
        </AppLayout>
    )
}

export function getStaticPaths () {
    const paths = works.map(eachWork => ({ params: { id: eachWork.url } }))
    return {
        paths,
        fallback: false
    }
}

export function getStaticProps ({ params }) {
    const data = params
    return {
        props: {
            data
        }
    }
}
