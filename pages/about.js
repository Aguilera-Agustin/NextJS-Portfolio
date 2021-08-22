import { Title } from '../components/About/Title'
import { AppLayout } from '../components/AppLayout/AppLayout'
import { Navbar } from '../components/Navbar/index'

const About = () => {
    return (
        <AppLayout>
            <Navbar />
            <Title/>
            <style jsx>{`
                div{
                    display:flex;
                    justify-content:space-between;
                }
            `}</style>
        </AppLayout>
    )
}

export default About
