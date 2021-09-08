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
                    margin-top: 1rem;
                    display:grid;
                    grid-auto-rows: 22rem;
                    gap: 1rem;
                    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))
                }
            `}
            </style>
        </>
    )
}
