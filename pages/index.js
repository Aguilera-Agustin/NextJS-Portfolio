import { AppLayout } from '../components/AppLayout/AppLayout'
import { Navbar } from '../components/Navbar'
import Presentation from '../components/Presentation'

export default function Home () {
	return (
		<>
			<AppLayout>
				<Navbar />
				<Presentation />
			</AppLayout>
		</>
	)
}
