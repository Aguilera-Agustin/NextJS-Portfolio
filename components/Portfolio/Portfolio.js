import { Title } from "../Common/Title"
import { CardPortfolio } from "./CardPortfolio"

export const Portfolio = () => {

    const cards = [
        {
            title: 'ColinShifts',
            content: 'Plataforma web app encargada de la generación y administración de turnos. En este proyecto usted podrá crear y administrar médicos asociados a un profesional (el cual usted también podrá administrar).',
            link1: 'https://github.com/Aguilera-Agustin/Colins-Shifts',
            link2: 'https://colinshifts.netlify.app/',
            img: '/img.jpg'
        },
        
        {
            title: 'ColinShop',
            content: 'Plataforma web app encargada de la generación y administración de turnos. En este proyecto usted podrá crear y administrar médicos asociados a un profesional (el cual usted también podrá administrar).',
            link1: 'https://github.com/Aguilera-Agustin/Colins-Shifts',
            link2: 'https://colinshifts.netlify.app/',
            img: '/img.jpg'
        },
        {
            title: 'ColinShifts',
            content: 'Plataforma web app encargada de la generación y administración de turnos. En este proyecto usted podrá crear y administrar médicos asociados a un profesional (el cual usted también podrá administrar).',
            link1: 'https://github.com/Aguilera-Agustin/Colins-Shifts',
            link2: 'https://colinshifts.netlify.app/',
            img: '/img.jpg'
        },

    ]
    return (
        <>
            <Title align='center'>Portfolio</Title>
            <div>
                {
                    cards.map((eachCard)=>(
                        <CardPortfolio data={eachCard} key={eachCard.link1}/>
                    ))
                }
            </div>

            <style jsx>{`
                div{
                    display:flex;
                    padding:0 1rem;
                    flex-direction: column;
                }


                @media screen and (min-width: 900px){
                    div{
                        flex-direction:row;
                    }
                }
                
                `}</style>
        </>
    )
}
