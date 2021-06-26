import { Container } from "../Common/Container"
import { LogoContainer } from "../SocialMedias/LogoContainer"
import Image from 'next/image'

export const MainCard = () => {
    return (
        <div>
        <Container padding>
            <Image 
                width={150}
                height={150} 
                src='/aguilera_agustin.svg' 
                alt='Agustin Aguilera'
            />
            <h1>Agustín Aguilera</h1>
            <h5>Full Stack Developer</h5>
            <hr/>
            <LogoContainer/>
        </Container>

        <style jsx>{`
            div{
                padding: 1rem 0;
            }
            h1{
                font-size:1.5rem;
                width:100%;
                text-align:center;
                font-weight: bold;
                margin: 0.3rem;
                margin-top:0.6rem;
            }
            h5{
                margin: 0;
                margin-top: 0.3rem;
                font-weight: 300;
                font-size: 0.9rem;
                color: #ADB2BB
            }
            hr{
                width:50%;
                margin-top: 1rem;
                color: #ADB2BB;
                opacity: 0.3
            }
            
            `}</style>
        </div>
    )
}
