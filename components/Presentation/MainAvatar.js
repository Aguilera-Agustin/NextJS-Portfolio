import Image from 'next/image'
import agustinAguilera from '../../public/aguilera_agustin.svg'

export const MainAvatar = () => {
    return (
        <>
            <div>
                <Image src={agustinAguilera} alt='Aguilera Agustin' width={150} height={150} />
            </div>
            <style jsx>{`
                div{
                    display:flex;
                    justify-content:center;
                    margin-bottom:2.5rem;
                }
                @media screen and (min-width:768px){
                    div{
                    justify-content:flex-start;
                    }
                }
                `}
            </style>
        </>
    )
}
