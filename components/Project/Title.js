import { Category } from './Category'
export const Title = () => {
    return (
        <>
            <h3>Esto es un título</h3>
            <Category color='violet'/>
            <style jsx>{`
                h3{
                    text-align: center;
                    font-size: 1.8rem;
                    margin: 0;
                    margin-top: 1rem;
                    color: #37352F;

                }
            `}</style>
        </>
    )
}
