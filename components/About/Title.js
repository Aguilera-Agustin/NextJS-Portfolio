export const Title = () => {
	return (
		<div className='container'>
			<div className='title_container'>
				<div className='img' />
				<h3>Agustín Aguilera</h3>
				<h6>Desarrollador web - mobile</h6>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 5rem;
					margin-top:5rem;
					margin-bottom:1.5rem;
				}
				.title_container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items:center;
				}
				h3 {
					font-size: 2rem;
					color: #37352f;
					margin: 0;
				}
				h6 {
					font-size: 0.8em;
					margin: 0;
					color: #37352f;
					font-weight: 300;
					margin-top: 0.5rem;
				}
				.img {
					width: 100px;
					height: 100px;
					background: red;
					border-radius: 50%;
				}
				
			`}</style>
		</div>
	)
}
