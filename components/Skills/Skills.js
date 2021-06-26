import { Title } from '../Common/Title'

export const Skills = () => {
    return (
        <div className='container'>
                <div className='skills__container'>
                    <Title white>Habilidades</Title>
                    <div className='grid'>
                        <p>HTML5</p>
                        <p>SASS</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                        <p>ReactJS</p>
                        <p>NextJS</p>
                        <p>MaterialUI</p>
                        <p>NodeJS</p>
                        <p>Express</p>
                        <p>MongoDB</p>
                        <p>MySQL</p>
                        <p>MariaDB</p>
                        <p>Mule</p>
                        <p>Java</p>
                        <p>Jest</p>
                    </div>
                </div>
                

            <style jsx>{`
                .container{
                    background: #202a36;
                    margin-top:3rem;
                    display:flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .skills__container{
                    margin-top: 2rem;
                    padding: 0 2rem;
                }
                .grid{
                    display:grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: center
                }
                p{
                    color: white;
                }
                @media screen and (min-width: 900px){
                .grid{
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    justify-items: center;
                }
                }
                
                
                `}</style>
        </div>
    )
}
