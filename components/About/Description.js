export const Description = () => {
	return (
		<div className='container'>
			<div className='text'>
				<p>
					Soy apasionado por la informática y las nuevas tecnologías, con intención de aprender
					constantemente y mejorar día a día como programador y persona. Me considero una
					persona proactiva, pudiendo trabajar en equipo, para aportar y ayudar a los demás, y
					también trabajar solo cuando es necesario. Estoy estudiando Ingeniería en Computación
					en la Universidad Nacional de Tres de Febrero, y también programación web de forma
					autónoma.
				</p>
			</div>
			<style jsx>{`
				p {
					font-size: 0.9rem;
					margin: 0;
                    color: #37352f;
                    padding: 0.3rem;
				}
				.container {
					display: flex;
					justify-content: center;
					width: 100%;
				}
                .text{
                    padding: 0 1rem;
                    line-height: 19px;
                    border-radius: 3px;
                    transition: 0.2s ease all;
                }
                .text:hover{
                    background: #f7f5f5;
                }
                @media screen and (min-width: 768px) {
                    .text{
                        width:40%;
                        padding: 0;
                    }
                }
			`}</style>
		</div>
	)
}
