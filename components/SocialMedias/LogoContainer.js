import { Logo } from "./Logo"
import { FaGithub, FaLinkedin, FaRegAddressCard, FaMailBulk } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"

export const LogoContainer = () => {

    const icons = [
        {
            href: 'https://github.com/Aguilera-Agustin',
            title: 'GitHub',
            icon: <FaGithub/>
        },
        {
            href: 'https://www.linkedin.com/in/aguilera-agustin/',
            title: 'Linkedin',
            icon: <FaLinkedin/>
        },
        {
            href: '#3',
            title: 'CV',
            icon: <FaRegAddressCard/>
        },
        {
            href: 'mailto:agustin.aguilera424@gmail.com',
            title: 'Mail',
            icon: <MdEmail/>
        },
    ]

    return (
        <>
            <div>
                {
                    icons.map((eachIcon)=>(
                        <Logo data={eachIcon} key={eachIcon.href}/>
                    ))
                }
            </div>

            <style jsx>{`
                
                div{
                    display: flex;
                }

                `}</style>
        </>
    )
}
