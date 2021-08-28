export const ContactButton = () => {
	return (
		<div>
			<a href='https://www.linkedin.com/in/aguilera-agustin/'>Contactemos</a>
			<style jsx>{`
            
            div{
                width:100%;
                display:flex;
                justify-content: center;
                margin-top:1.5rem;
                
            }
            a{
                background: #37352f;
                border-radius:5px;
                padding: 0.5rem 1rem;
                color: white;
                font-weight: 300;
                font-size: 0.9rem;
                text-decoration: none;
                transition: 0.2s ease all;
            }
            a:hover{
                background: #2b2b29;
            }

            `}</style>
		</div>
	)
}
