import Image from 'next/image'
import { works } from '../../assets/works'
import agustinAguilera from '../../public/aguilera_agustin.svg'

const Presentation = () => {
    return (
        <div className='container'>
            <div className='img_container'>
                <Image src={agustinAguilera} alt='Aguilera Agustin' width={150} height={150} />
            </div>
            <h1>Hola 👋🏻, soy Agustín Aguilera </h1>
            <div className='main_title_container'>
                <div className='main_title_text'>
                    <h4>Programador web originario de Argentina</h4>
                    <p>Amo usar la programación y la tecnología para crear
                        soluciones adaptadas a problemas cotidianos o empresariales. Estoy en
                        constante aprendimiento, deseando emprender nuevos desafíos.</p>
                </div>
                <div className='a_container'>
                    <a>👨🏻 Sobre mí</a>
                    <a>📃 CV</a>
                </div>
            </div>
            <div className='current'>
                <p className='current_text'>
                    📌
                </p>
                <p className='current_text'>
                    Actualmente: React Native Developer en Epidata ARG
                </p>
            </div>
            <hr/>
            <h5>Mis trabajos</h5>
            <div className='cards_container'>
                {
                    works.map(eachWork => (
                        <div key={eachWork.url} className='card_container'>
                            <Image src={eachWork.img} height={650}/>
                            <div className='card_body_container'>
                                <h6>{eachWork.title}</h6>
                                <div className='card_target_container'>
                                    <p className='card_target_text'>Personal</p>
                                    <p className='card_target_text'>WEB</p>
                                </div>
                                <p className='card_abstract'>{eachWork.abstract}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr/>
            <h5>Conectemos</h5>
            <p className='connect_text'>I like talking and discussing about design, psychology and new products in market. I am also available for freelance and internship opportunities. Let's catch up!</p>
            <p >agustin.aguilera424@gmail.com</p>
            <div className='blue_link_container'>
                <div className='blue_link'>
                Linkedin
                </div>
                <div className='blue_link'>
                    Github
                </div>
                <div className='blue_link'>
                    Curriculum Vitae
                </div>
                <div className='blue_link'>
                    Email
                </div>
            </div>
            <div style={ { marginTop: '2rem' } }>
                <p style={{textAlign:'center'}}> Gracias por visitar mi portfolio! - Agustín Aguilera </p>
            </div>

            <style jsx global>{`
            .container{
                margin-top:5rem;
                padding: 0 0.3rem;
            }
            .img_container{
                display:flex;
                justify-content:center;
                margin-bottom:2.5rem;
            }
            h1,h4, h5{
                font-size:2rem;
                color: #37352F;
                margin: 0;
                margin-top:0.6em;
            }
            h4{
                font-size:1.3rem;
            }
            h6{
                font-size: 1rem;
                font-weight:500;
                margin: 0;
                color: #37352F;
            }
            p{
                line-height: 1.6;
                margin-bottom:0
            }
            .current{
                background: #F4F9FB;
                width:100%;
                height:4em;
                display:flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 5px;
                margin:2rem 0;
            }
            .current_text{
                margin: 0.5rem;
                font-size: 0.9rem;
                font-weight: 500;
                color: #37352F;
            }
            .a_container{
                display:flex;
                flex-direction: column;
                margin-bottom: 2rem;
            }
            .a_container a{
                margin-top: 0.7rem;
                font-weight: 500;
                color: #37352F;
            }
            hr{
                color: #37352F;
                opacity: 0.4;
                margin-bottom:2rem;
            }
            h5{
                font-size:1.6em;
                margin: 0;
            }
            .cards_container{
                margin-top:1rem;
            }
            .card_container{
                border: 1px solid #c9c9c9;
                border-radius:4px;
                margin-bottom:1rem;
            }
            .card_body_container{
                padding: 0.5rem 1rem;
                overflow:hidden;
            }
            .card_target_container{
                display: flex;
            }
            .card_target_text{
                font-size:0.8rem;
                margin-right:0.5rem;
                background: #F5D3E6;
                padding:0 8px;
                border-radius:3px;
                font-weight: 500;
                color: #37352F;
            }
            .card_abstract{
                font-size:0.8rem;
            }
            .main_title_container{
                margin-top: 2.5rem;
            }
            .blue_link_container{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;

            }
            .blue_link{
                background: #F4F9FB;
                width:70%;
                padding: 1.3rem 1rem;
                border-radius: 4px;
                font-weight: 500;
                margin-top:1rem;
            }
            @media screen and (min-width:768px){
                .container{
                    padding: 15px 90px
                }
                .main_title_container{
                    display:flex;
                    align-items:center;
                    gap: 50px;
                    margin-top: 2.5rem;

                }
                .img_container{
                    justify-content:flex-start;
                }
                .main_title_text{
                    flex:5;
                }
                .a_container{
                    flex:4;
                    display:flex;
                    width:100%;
                }
                .current{
                    width:40%;
                    justify-content: flex-start;
                }
                .cards_container{
                    margin-top: 1rem;
                    display:grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap:20px
                }
                hr{
                    margin-bottom: 5rem;
                    margin-top: 2rem;
                }
                .connect_text{
                    width:50%;
                }
                .blue_link{
                    width:15%;
                 }
                .blue_link_container{
                    flex-direction:row;
                    justify-content:space-between;
                    margin-top:1rem;
                }
            }

            
        `}</style>
        </div>
    )
}

export default Presentation
