import { Title } from "../Common/Title"

import logos from "./LogoArray";


export const Description = () => {
    return (
        <>
            <div className='container'>
                <Title>Sobre Mi</Title>
                <p align='center'>Hola, mi nombre es Agustín y soy apasionado por la <span>informática</span> y las nuevas tecnologías, enfocandome el apartado WEB. Me encanta crear proyectos personales y compartirlos con mis amigos. A continuación podrá ver alguno de mis trabajos, espero les guste!</p>
                <div className='logo__container'>
                    {
                        logos.map((eachLogo)=>(
                            <div className='eachIcon' key={eachLogo.title}>
                                {eachLogo.logo}
                            </div>
                        ))
                    }
       
                </div>
                <div className='line' />
            </div>
            

            <style jsx>{`
                .container{
                    margin-top: 7rem;
                }
                .eachIcon{
                    margin: 0 0.3rem;
                }
                .logo__container{
                    width:100%;
                    display:flex;
                    justify-content:center;
                    margin-top: 1.5rem;
                    margin-bottom: 0.3rem;
                }

                .line{
                    width:60%;
                    height:0.1rem;
                    background: #8170EE;
                    margin: 0 auto;
                    border-radius: 8px;
                    margin-bottom: 7rem;
                }
                p{
                    width:90%;
                    line-height: 130%;
                    margin: 0 auto;
                    font-weight: 600;
                    color: #8e949e
                }
                span{
                    font-weight:bold;
                    color: #7e838c;
                }
                @media screen and (min-width: 900px){
                p{
                    width: 50%
                }
                .line{
                    width:30%;

                }
                }
                `}</style>
        </>
    )
}
