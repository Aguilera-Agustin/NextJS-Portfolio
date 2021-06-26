import { Container } from '../Common/Container'
import { FaGithub } from 'react-icons/fa'

export const CardPortfolio = ({data}) => {
    return (
        <Container>
            <img src={data.img}></img>
            <h5>{data.title}</h5>
            <div className='line' />
            <p align='center'>{data.content}</p>
            <div className='footer'>
                <a href={data.link1}>
                    <FaGithub/>
                </a>
                <a href={data.link2}>
                    <FaGithub/>
                </a>
            </div>

            <style jsx>{`
                img{
                    width:100%;
                    border-radius: 8px 8px 0 0;
                    transition: 0.3s ease all;
                }
                h5{
                    font-size: 1.3rem;
                    margin: 1rem 0;
                    margin-bottom: 0.5rem;
                }
                img:hover{
                    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));   
                }
                a{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background: #8170EE;
                    border-radius: 100px;
                    width:1.5rem;
                    height:1.5rem;
                    text-decoration:none;
                    color:black;
                }
                .line{
                    width:60%;
                    height:0.1rem;
                    background: #8170EE;
                    margin: 0 auto;
                    border-radius: 8px;
                    margin-bottom: 0.5rem;
                }
                .footer{
                    width:100%;
                    height:2rem;
                    border-radius: 0 0 8px 8px ;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                p{
                    padding: 0 0.8rem;
                    margin: 0.3rem 0;
                    font-size:0.9rem;
                    font-weight: 400;
                }
                
                `}</style>
        </Container>
    )
}
