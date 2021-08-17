export const MainCurrent = ({ text }) => {
    return (
        <div>
            <p className='current_text'>
                📌
            </p>
            <p className='current_text'>
                { text }
            </p>
            <style jsx>{`
                div{
                    background: #F4F9FB;
                    width:100%;
                    height:4em;
                    display:flex;
                    align-items: center;
                    border-radius: 5px;
                    margin:2rem 0;
                }
                p{        
                    margin: 0.5rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #37352F;
                }
                @media screen and (min-width:768px){
                    div{
                        width:40%;
                    }
                }
                `}
            </style>
        </div>
    )
}
