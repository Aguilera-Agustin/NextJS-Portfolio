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
                margin: 0 0.3rem;
            }
            a:hover{
                color:gray;
            }
            `}</style>
        </>
    )
}
