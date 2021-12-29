import Image from 'next/image'
import Link from 'next/link'
import { Target } from './Target'

export const Card = ({ work }) => {
    return (
        <>
            <Link href={`/project/${work.url}`}>
                <div className='card_container'>
                    <Image src={work.img} height={800} />
                    <div className='card_body_container'>
                        <h6>{work.title}</h6>
                        <div className='target_container'>
                            <Target style={{ marginRight: '10px' }} text='Personal' color='#F5D3E6'/>
                            <Target color='#D6E1F8' text={`${work.mobile?'MOBILE':'WEB'}`} />
                        </div>
                        <p className='card_abstract'>{work.abstract}</p>
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .target_container{
                    display:flex
                }
                .card_container:hover{
                    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
                    background: #f7f7f7;
                }
                .card_container{
                    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
                    transition: 0.3s ease all;
                    border: 1px solid #c9c9c9;
                    border-radius:4px;
                    cursor:pointer;
                }
                .card_body_container{
                    padding: 0.5rem 1rem;
                    overflow:hidden;
                }

                .card_abstract{
                    font-size:0.8rem;
                }
                h6{
                    font-size: 1rem;
                    font-weight:500;
                    margin: 0;
                    color: #37352F;
                }
                p{
                    line-height: 1.6;
                    margin-bottom:0
                }
                @media screen and (min-width:768px){
                    hr{
                        margin-bottom: 5rem;
                        margin-top: 2rem;
                    }
                }
                `}
            </style>
        </>
    )
}
