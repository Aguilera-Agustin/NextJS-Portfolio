import Link from 'next/link'

export const MainTitle = () => {
    return (
        <div className='main_title_container'>
            <div className='main_title_text'>
                <h4>Programador web originario de Argentina</h4>
                <p>Amo usar la programación y la tecnología para crear
                    soluciones adaptadas a problemas cotidianos o empresariales. Estoy en
                    constante aprendimiento, deseando emprender nuevos desafíos.</p>
            </div>
            <div className='a_container'>
                <Link href='AgustinAguileraCV.pdf'>
                    <a>📃 CV</a>
                </Link>
                <Link href='/about'>
                    <a>👨🏻 Sobre mí</a>
                </Link>
            </div>
            <style jsx>{`
                .main_title_container{
                    margin-top: 2.5rem;
                }
                .a_container{
                    margin-bottom: 2rem;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-start;
                }
                a{
                    margin-top: 0.7rem;
                    font-weight: 500;
                    color: #37352F;
                    display:block;
                    border-radius:3px;
                    padding: 0.3rem;
                    text-decoration: none;
                    transition: 0.2s ease all;
                }
                a:hover{
                    background: #dddddd;
                }
                @media screen and (min-width:768px){
                    .main_title_container{
                        display:flex;
                        align-items:center;
                        gap: 50px;
                        margin-top: 2.5rem;
                    }
                    .main_title_text{
                        flex:5;
                    }
                    .a_container{
                        flex:4;
                        display:flex;
                        width:100%;
                    }
                }
                `}
            </style>
        </div>
    )
}
