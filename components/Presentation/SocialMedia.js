export const SocialMedia = () => {
	return (
		<div className='blue_link_container'>
			<a className='blue_link' href='https://www.linkedin.com/in/aguilera-agustin/'>
				Linkedin
			</a>
			<a className='blue_link' href='https://github.com/Aguilera-Agustin'>
				Github
			</a>
			<a className='blue_link' href='AgustinAguileraCV.pdf'>
				Curriculum Vitae
			</a>
			<a className='blue_link' href='mailto:agustin.aguilera424@gmail.com'>
				Email
			</a>
			<style jsx>{`
				.blue_link_container {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.blue_link {
					background: #f4f9fb;
					width: 70%;
					padding: 1.3rem 1rem;
					border-radius: 4px;
					font-weight: 800;
					color: #37352f;
					font-size: 0.9rem;
					margin-top: 1rem;
					transition: 0.3s ease all;
					text-decoration: none;
				}
				.blue_link:hover {
					background: #ceebf7;
				}
				@media screen and (min-width: 768px) {
					.blue_link_container {
						flex-direction: row;
						justify-content: space-between;
						margin-top: 1rem;
					}
					.blue_link {
						width: 15%;
					}
				}
			`}</style>
		</div>
	)
}
