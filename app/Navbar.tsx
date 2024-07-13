import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";

const Navbar = () => {
    const links = [{ label: 'Dashboard', href: '/' }, { label: 'issues', href: '/issues' }]
    return (
        <nav className='flex space-x-7 border-b mb-6 h-16 px-7 items-center'>
            <Link href='/'><FaBug /></Link>
            <ul className='flex space-x-7'>
                {links.map(link => <Link key={link.href} href={link.href} className='text-zinc-500 hover:text-zinc-900 transition-colors'>{link.label}</Link>)}

            </ul>
        </nav>
    )
}

export default Navbar