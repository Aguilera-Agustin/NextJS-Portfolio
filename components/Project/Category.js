export const Category = ({ color }) => {
    return (
        <div>
            <p>WEB</p>
            <style jsx>{`
                p{
                    background: ${color};
                    display:inline-block;
                    padding: 0.2rem 1rem;
                    font-size:0.8rem;
                }
            `}</style>
        </div>
    )
}
