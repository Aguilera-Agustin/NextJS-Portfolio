import { FaGithub } from 'react-icons/fa'

export const Logo = ({data}) => {
    return (
        <>
        <a href={data.href}>
            {data.icon}
        </a>

        <style jsx>{`
            a{
                color:black;
                transition: 0.3s ease all;
                width:100%;
                display:flex;
                justify-content: center;
            }
            a:hover{
                color:gray;
            }
            `}</style>
        </>
    )
}
