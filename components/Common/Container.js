export const Container = ({children, padding=false}) => {
    return (
        <div>
            {children}
            <style jsx>{`
            div{
                background: red;
                margin: 0 auto;
                width: 80vw;
                margin-top: 2rem;
                border-radius: 8px;
                display: flex;
                align-items:center;
                padding: 0;
                flex-direction: column;
                background: #FFFFFF;
                filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));   
                padding: ${padding&&('1rem 0;')}
            }
            @media screen and (min-width: 900px){
                div{
                    width: 25vw;
                }
            }
            `}</style>
        </div>
    )
}
