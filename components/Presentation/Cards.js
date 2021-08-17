import { works } from '../../assets/works'
import { Card } from './Card'

export const Cards = () => {
    return (
        <>
            <div className='cards_container'>
                {
                    works.map(eachWork => (
                        <Card work={eachWork} key={eachWork.url}/>
                    ))
                }
            </div>
            <style jsx>{`
                div{
                    margin-top:1rem;
                }
                @media screen and (min-width:768px){
                    div{
                        margin-top: 1rem;
                        display:grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-gap:20px
                    }
                }
                `}
            </style>
        </>
    )
}
