import { Container } from '../Common/Container'
import Image from 'next/image'

export const CardPortfolio = ({data}) => {
    return (
        <Container>
            <Image  
                width={500}
                height={300} 
                src={data.img}
                quality={90}
                alt={data.title}
            />
            <h5>{data.title}</h5>
            <hr/>
            <p align='center'>{data.content}</p>
            <hr/>
            <div className='footer'>
                <a href={data.link1} rel="nofollow">
                    {data.icon1}
                </a>
                <a href={data.link2} rel="nofollow">
                    {data.icon2}
                </a>
            </div>

            <style jsx>{`
                hr{
                width:70%;
                color: #ADB2BB;
                opacity: 0.3
            }
                h5{
                    font-size: 1.3rem;
                    margin: 0;
                    margin-top: 0.8rem;

                }
                a{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:1.5rem;
                    height:1.5rem;
                    text-decoration:none;
                    color:black;
                    transition: 0.3s ease all;

                }
                a:hover{
                    color: gray;
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
                    justify-content: center;
                    margin-bottom:1rem;
                }
                a{
                    margin: 0 1rem;
                }
                p{
                    padding: 0 0.8rem;
                    margin: 0.3rem 0;
                    font-size:0.9rem;
                    font-weight: 400;
                    opacity: 0.85;
                }
                
                `}</style>
        </Container>
    )
}
