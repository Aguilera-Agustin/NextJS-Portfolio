
export const Contact = () => {
    return (
        <>
            <p className='connect_text'>I like talking and discussing about design, psychology and new products in market. I am also available for freelance and internship opportunities. Lets catch up!</p>
            <p >agustin.aguilera424@gmail.com</p>
            <div className='blue_link_container'>
                <div className='blue_link'>
                Linkedin
                </div>
                <div className='blue_link'>
                    Github
                </div>
                <div className='blue_link'>
                    Curriculum Vitae
                </div>
                <div className='blue_link'>
                    Email
                </div>
            </div>
            <style jsx>{`
                div{
                    margin-top:1rem;
                }
                .blue_link_container{
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                p{
                    line-height: 1.6;
                    margin-bottom:0
                }
                .blue_link{
                    background: #F4F9FB;
                    width:70%;
                    padding: 1.3rem 1rem;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 0.9rem;
                    margin-top:1rem;
                }
                @media screen and (min-width:768px){
                    .connect_text{
                        width:50%;
                    }
                    .blue_link_container{
                        flex-direction:row;
                        justify-content:space-between;
                        margin-top:1rem;
                    }
                    .blue_link{
                        width:15%;
                    }
                }
                `}
            </style>
        </>
    )
}
