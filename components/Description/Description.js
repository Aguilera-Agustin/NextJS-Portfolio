
export const Description = () => {
    return (
        <>
            <div className='container'>
                <h4 align='center'>Sobre Mi</h4>
                <p align='center'>Hola, mi nombre es Agustín y soy apasionado por la <span>informática</span> y las nuevas tecnologías, enfocandome el apartado WEB. Me encanta crear proyectos personales y compartirlos con mis amigos. A continuación podrá ver alguno de mis trabajos, espero les guste!</p>
                <div className='line' />
            </div>
            

            <style jsx>{`
                .container{
                    margin-top: 5rem;
                }

                .line{
                    width:60%;
                    height:0.1rem;
                    background: #8170EE;
                    margin: 1.5rem auto;
                    border-radius: 8px;


                }

                h4{
                    font-size:3rem;
                    margin: 0;
                    margin-bottom: 0.5rem;
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
                    width: 40%
                }
                .line{
                    width:30%;

                }
                }
                `}</style>
        </>
    )
}
