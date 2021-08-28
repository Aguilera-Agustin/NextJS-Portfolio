export const SocialMedia = () => {
	return (
		<div className='blue_link_container'>
			<div className='blue_link'>Linkedin</div>
			<div className='blue_link'>Github</div>
			<div className='blue_link'>Curriculum Vitae</div>
			<div className='blue_link'>Email</div>
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
