import Image from 'next/image'

export const Card = ({ work }) => {
    return (
        <>
            <div className='card_container'>
                <Image src={work.img} height={650}/>
                <div className='card_body_container'>
                    <h6>{work.title}</h6>
                    <div className='card_target_container'>
                        <p className='card_target_text'>Personal</p>
                        <p className='card_target_text'>WEB</p>
                    </div>
                    <p className='card_abstract'>{work.abstract}</p>
                </div>
            </div>
            <style jsx>{`
                .card_container{
                    border: 1px solid #c9c9c9;
                    border-radius:4px;
                    margin-bottom:1rem;
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
