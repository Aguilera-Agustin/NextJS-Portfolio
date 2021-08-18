import Image from 'next/image'
import Link from 'next/link'
import agustinAguilera from '../../public/aguilera_agustin.svg'

export const Navbar = () => {
    return (
        <div className='container'>
            <Link href='/'>
                <a>
                    <Image src={agustinAguilera} alt='Aguilera Agustin' width={20} height={20} />
                    <p>Aguilera Agustín</p>
                </a>
            </Link>
            <style jsx>{`
                div{
                    position:fixed;
                    top: 0;
                    height:3rem;
                    z-index:900;
                    width:100%;
                    background: transparent;
                    box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
                    -webkit-backdrop-filter: saturate(180%) blur(8px);
                    backdrop-filter: saturate(180%) blur(8px);
                    display:flex;
                    align-items:center;
                    padding-left:1rem;
                }
                p{
                    font-size:0.8em;
                    margin-left:0.3rem;
                }
                a{
                    font-weight: 500;
                    color: #37352F;
                    display:flex;
                    padding: 0 0.3rem;
                    border-radius:3px;
                    text-decoration: none;
                    transition: 0.2s ease all;
                }
                a:hover{
                    background: #dddddd;
                }
            `}</style>
        </div>
    )
}
