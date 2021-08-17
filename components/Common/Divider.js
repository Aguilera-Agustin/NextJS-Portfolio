import React from 'react'

export const Divider = () => {
    return (
        <>
            <hr/>
            <style jsx>{`
                hr{
                    color: #37352F;
                    opacity: 0.4;
                    margin-bottom:2rem;
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
