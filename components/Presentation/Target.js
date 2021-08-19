export const Target = ({ text, color, style }) => {
    return (
        <>
            <p className='card_target_text' style={style}>{text}</p>
            <style jsx>{`
                div{
                    display: flex;
                }
                p{
                    font-size:0.7rem;
                    background: ${color};
                    padding:2px 8px;
                    border-radius:3px;
                    font-weight: 500;
                    color: black;
                }
            `}</style>
        </>
    )
}
