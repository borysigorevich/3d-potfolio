import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const keyDown = (event: KeyboardEvent) => {
            if (menuOpen && event.key === 'Escape') setMenuOpen(false)
        }

        window.addEventListener('keydown', keyDown)

        return () => window.removeEventListener('keydown', keyDown)
    }, [menuOpen])

    return (
        <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 py-5 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt="logo" className='w-9 h-9 object-cover rounded-full'/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>Boris &nbsp;
                        <span className='hidden sm:block'>| Kutsenko</span>
                    </p>
                </Link>

                <ul className='hidden sm:flex gap-10'>
                    {navLinks.map(link => (
                        <li
                            className={`${active === link.title ? 'text-white' : 'text-secondary'}
                                hover:text-white text-[18px] font-medium transition 
                            `}
                            key={link.id}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex sm:hidden flex-1 justify-end items-center'>
                    <img
                        src={menuOpen ? close : menu}
                        alt="menu"
                        className='w-[25px] h-[25px] object-contain cursor-pointer'
                        onClick={() => setMenuOpen(state => !state)}
                    />

                    <div
                        className={`fixed inset-0 z-20 grid place-content-center transition-all
                            ${menuOpen ? 'backdrop-blur pointer-events-auto' : 'backdrop-blur-0 pointer-events-none'}
                        `}
                    >
                        <ul
                            className={`flex flex-col gap-10 ${menuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                        >
                            {navLinks.map(link => (
                                <li
                                    className={`${active === link.title ? 'text-white' : 'text-secondary'}
                                hover:text-white text-[28px] font-medium transition 
                            `}
                                    key={link.id}
                                    onClick={() => {
                                        setActive(link.title)
                                        setMenuOpen(false)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar