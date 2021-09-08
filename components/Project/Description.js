import { useWork } from '../../hooks/useWork'
import Link from 'next/link'

export const Description = ({ id }) => {
    const thisDescription = useWork(id)
    return (
        <div className='container'>
            <div className='description_container'>
                <p className='description_title'>Descripción</p>
                <p className='description_data'>{ thisDescription.description }</p>
            </div>
            {
                thisDescription.live&&(
                    <div className='description_container'>
                        <p className='description_title'>Ver online</p>
                        <Link href={ thisDescription.live }>
                            <a className='description_data'>{ thisDescription.live }</a>
                        </Link>
                    </div>
                )
            }
            {
                thisDescription.code&&(
                    <div className='description_container'>
                        <p className='description_title'>Ver código</p>
                        <Link href={ thisDescription.code }>
                            <a className='description_data'>{ thisDescription.code }</a>
                        </Link>
                    </div>
                )
            }
            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:column;
                    justify-content: center;
                    width:90%;
                    margin: 0 auto;
                    gap: 3rem;
                }
                .description_title{
                    flex:1;
                    display:flex;
                    justify-content:flex-start;
                    color: #37352F99;
                    font-weight:800;
                    line-height: 1.5;
                }
                .description_data{
                    flex:9;
                    color: rgba(55, 53, 47, 0.8);
                    line-height: 1.5;
                    font-size:0.9rem;
                }
                .description_container{
                    display:flex;
                    gap: 3rem;
                }
                a{
                    display: block;
                    margin: 0;
                    text-decoration: none;
                    transition: 0.2s ease all;
                }
                a:hover{
                    color: rgba(55, 53, 47, 1);
                }
                p{
                    margin: 0;
                }
                @media screen and (min-width:768px){
                    .container{
                        width:50%;
                        
                    }
                    .description_title{
                        justify-content:flex-end;
                        flex:2
                    }
                    .description_data{
                        flex:4;
                    }
                }
            `}</style>
        </div>
    )
}
