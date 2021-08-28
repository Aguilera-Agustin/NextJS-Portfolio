import { works } from '../../assets/works'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { Navbar } from '../../components/Navbar'
import { Banner } from '../../components/Project/Banner'
import { Description } from '../../components/Project/Description'
import { Title } from '../../components/Project/Title'
import { useWork } from '../../hooks/useWork'

export default function Project ({ data }) {
    const { url, title, img, abstract, description, code: github, live } = useWork(data.id)
    return (
        <AppLayout>
            <Navbar/>
            <Banner img={img} />
            <Title id={ data.id }/>
            <Description id={ data.id } />
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