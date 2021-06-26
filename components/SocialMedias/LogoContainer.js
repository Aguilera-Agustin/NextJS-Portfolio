import { Logo } from "./Logo"
import { FaGithub } from 'react-icons/fa'


export const LogoContainer = () => {

    const icons = [
        {
            href: '#',
            title: 'GitHub',
            icon: <FaGithub/>
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

            
        </>
    )
}
