import { useWork } from '../../hooks/useWork'
import Link from 'next/link'

export const Description = ({ id }) => {
    const thisDescription = useWork(id)
    return (
        <div className='container'>
            <div className='description_container'>
                <p className='description_title'>Description</p>
                <p className='description_data'>{ thisDescription.description }</p>
            </div>
            <div className='description_container'>
                <p className='description_title'>Ver online</p>
                <Link href={ thisDescription.live }>
                    <a className='description_data'>{ thisDescription.live }</a>
                </Link>
            </div>
            <div className='description_container'>
                <p className='description_title'>Ver código</p>
                <Link href={ thisDescription.code }>
                    <a className='description_data'>{ thisDescription.code }</a>
                </Link>
            </div>
            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:column;
                    justify-content: center;
                    width:50%;
                    margin: 0 auto;
                }
                .description_title{
                    flex:2;
                    display:flex;
                    justify-content:flex-end;
                    color: #37352F99;
                    font-weight:800;
                    line-height: 1.5;
                }
                .description_data{
                    flex:4;
                    color: rgba(55, 53, 47, 0.8);
                    line-height: 1.5;
                }
                .description_container{
                    display:flex;
                    gap: 3rem;
                }
                a{
                    display: block;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    text-decoration: none;
                    transition: 0.2s ease all;
                }
                a:hover{
                    color: rgba(55, 53, 47, 1);
                }
            `}</style>
        </div>
    )
}
