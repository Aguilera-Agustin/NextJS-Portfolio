import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ work }) => {
    return (
        <>
            <Link href={`/project/${work.url}`}>
                <div className='card_container'>
                    <Image src={work.img} height={800} />
                    <div className='card_body_container'>
                        <h6>{work.title}</h6>
                        <div className='card_target_container'>
                            <p className='card_target_text'>Personal</p>
                            <p className='card_target_text'>WEB</p>
                        </div>
                        <p className='card_abstract'>{work.abstract}</p>
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .card_container:hover{
                    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
                    background: #f7f7f7;
                }
                .card_container{
                    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
                    transition: 0.3s ease all;
                    border: 1px solid #c9c9c9;
                    border-radius:4px;
                    margin-bottom:1rem;
                    cursor:pointer;
                }
                .card_body_container{
                    padding: 0.5rem 1rem;
                    overflow:hidden;
                }
                .card_target_container{
                    display: flex;
                }
                .card_target_text{
                    font-size:0.7rem;
                    margin-right:0.5rem;
                    background: #F5D3E6;
                    padding:0 8px;
                    border-radius:3px;
                    font-weight: 500;
                    color: #37352F;
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
