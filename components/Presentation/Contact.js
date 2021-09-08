import { SocialMedia } from './SocialMedia'
export const Contact = () => {
	return (
		<>
			<p className='connect_text'>
				Me gusta charlar y debatir sobre temas informáticos y nuevas tecnologías. También estoy
				disponible para oportunidades de trabajo
			</p>
			<p>agustin.aguilera424@gmail.com</p>
			<SocialMedia />
			<style jsx>
				{`
					div {
						margin-top: 1rem;
					}

					p {
						line-height: 1.6;
						margin-bottom: 0;
					}
					@media screen and (min-width: 768px) {
						.connect_text {
							width: 50%;
						}
					}
				`}
			</style>
		</>
	)
}
