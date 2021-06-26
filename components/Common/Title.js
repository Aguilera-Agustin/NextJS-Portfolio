
export const Title = ({children}) => {
    return (
        <h4 align='center'>
            {children}
            <style jsx>{`
                    h4{
                            font-size:3rem;
                            margin: 0;
                            margin-bottom: 0.5rem;
                        }
                `}</style>
        </h4>
    )
}
