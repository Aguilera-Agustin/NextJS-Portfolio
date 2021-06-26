import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <p>Agustin Aguilera - Todos los derechos reservados - Inspirado en nithcodes</p>

            <style jsx>{`

                footer{
                    height:3rem;
                    background: #202A36;
                    margin: 0;
                    display:flex;
                    align-items:center;
                    justify-content:center
                }    
                p{
                    color:white;
                    font-size:0.8rem;
                    letter-spacing:0.1rem;
                }
                
            `}</style>
        </footer>
    )
}
