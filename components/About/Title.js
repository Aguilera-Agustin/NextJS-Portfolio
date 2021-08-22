import Image from 'next/dist/client/image'
import AguileraAgustin from '../../public/aguilera_agustin_real.jpg'

export const Title = () => {
    return (
        <div className='container'>
            <div className='title_container'>
                <p>Sobre mí</p>
                <h3>Agustín Aguilera</h3>
                <h6>Desarrollador web - mobile</h6>
            </div>
            <Image src={AguileraAgustin} className="avatar" width={400} height={30}/>
            <style jsx>{`
                .avatar {
                    border-radius: 50%;
                }
                .container{
                    height:40vh;
                    display:flex;
                    justify-content:center;
                }
                .title_container{
                    height:100%;
                    width:50%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }
                h3{
                    font-size:2rem;
                    color:#37352F;
                    margin: 0;
                }
                h6{
                    font-size:0.8em;
                    margin:0;
                    color: #37352F;
                    font-weight:300;
                    margin-top: 0.5rem;
                }
                p{
                    margin: 0;
                }
            `}</style>
        </div>
    )
}
