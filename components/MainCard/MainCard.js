import { LogoContainer } from "../SocialMedias/LogoContainer"

export const MainCard = () => {
    return (
        <>
        <div className='mainContainer'>
            <img src='/aguilera_agustin.svg'></img>
            <h1>Agustín Aguilera</h1>
            <h5>Full Stack Developer</h5>
            <hr/>
            <LogoContainer/>
        </div>

        <style jsx>{`
            .mainContainer{
                background: red;
                margin: 0 auto;
                width: 80vw;
                margin-top: 2rem;
                border-radius: 8px;
                display: flex;
                align-items:center;
                padding: 1rem 0;
                flex-direction: column;
                background: #FFFFFF;
                filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))
            }
            @media screen and (min-width: 900px){
                .mainContainer{
                    width: 25vw;
                }
            }
            img{
                width: 8rem;
                margin-bottom: 0.5rem;
            }
            h1{
                font-size:1.5rem;
                width:100%;
                text-align:center;
                font-weight: bold;
                margin: 0.3rem;
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
        </>
    )
}
