import { Title } from "../Common/Title"
import { CardPortfolio } from "./CardPortfolio"
import { FaGithubAlt, FaGlobe, FaYoutube } from 'react-icons/fa'

export const Portfolio = () => {

    const cards = [
        {
            title: 'ColinShifts',
            content: 'Aplicación web a fin de brindar una alternativa práctica y sencilla para la creación de turnos médicos. En ColinShifts usted podrá agrgar tanto turnos como profesionales y profesiones, y administrarlos; todo sin tener la preocupación de que se solapen.',
            link1: 'https://github.com/Aguilera-Agustin/Colins-Shifts',
            link2: 'https://colinshifts.netlify.app/',
            img: '/colinshifts.png',
            icon1: <FaGithubAlt/>,
            icon2: <FaGlobe/>
        },
        
        {
            title: 'JustList',
            content: 'Aplicación administrativa a fin de brindar una solución rápida y satisfactoria para crear notas. En este sitio usted podrá agregar categorías en donde posteriormente creará sus notas personalizadas, las cuales podrá modificar y eliminar. - MERN',
            link1: 'https://github.com/Aguilera-Agustin/JustList-FrontEnd',
            link2: 'https://just-list.netlify.app/',
            img: '/justlist.png',
            icon1: <FaGithubAlt/>,
            icon2: <FaGlobe/>
        },
        {
            title: 'LinkGenerator',
            content: 'Aplicación para que un usuario final pueda pagar el precio en dolares declarado por el administrador, el cual podrá seleccionar los métodos de pagos deseados además del tiempo de duración de cada URL. - MercadoPago | Criptomonedas | Transferencia.',
            link1: 'https://github.com/Aguilera-Agustin/-FRONT-LinkGenerator',
            link2: 'https://youtu.be/AZh03iPuCvM',
            img: '/linkgenerator.png',
            icon1: <FaGithubAlt/>,
            icon2: <FaYoutube/>
        },
 
    ]
    return (
        <>
            <Title align='center'>Portfolio</Title>
            <div>
                {
                    cards.map((eachCard)=>(
                        <CardPortfolio data={eachCard} key={eachCard.link1+eachCard.link2}/>
                    ))
                }
            </div>

            <style jsx>{`
                div{
                    display:flex;
                    padding:0 1rem;
                    flex-direction: column;
                    margin-bottom: 7rem;
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
