import { Divider } from '../Common/Divider'
import { useWork } from '../../hooks/useWork'
import { Target } from '../Presentation/Target'
export const Title = ({ id }) => {
    const thisWork = useWork(id)
    return (
        <>
            <h3>{ thisWork.title }</h3>
            <div>
                {
                    thisWork.technologies.map((eachTech, index) => (
                        <Target style={{ marginRight: '0.6rem' }} key={ index } color={eachTech.color} text={eachTech.name} />
                    ))
                }
            </div>
            <Divider style={{ width: '50%', marginBottom: '3rem' }} />
            <style jsx>{`
                h3{
                    text-align: center;
                    font-size: 2.5rem;
                    margin: 3rem 0 0.5rem 0;
                    color: #37352F;

                }
                div{
                    display:flex;
                    justify-content:center;
                }
                @media screen and (min-width:768px){
                    h3{
                        font-size: 3rem;
                    }
                }
            `}</style>
        </>
    )
}
