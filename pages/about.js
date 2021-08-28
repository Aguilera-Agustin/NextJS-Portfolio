import { ContactButton } from '../components/About/ContactButton'
import { Description } from '../components/About/Description'
import { Title } from '../components/About/Title'
import { AppLayout } from '../components/AppLayout/AppLayout'
import { Navbar } from '../components/Navbar/index'
const About = () => {
	return (
		<AppLayout>
			<Navbar />
			<Title />
			<Description />
			<ContactButton />
			<style jsx>{`
				div {
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</AppLayout>
	)
}

export default About
