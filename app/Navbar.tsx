'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classnames from 'classnames';

const Navbar = () => {
    const currentPath = usePathname()
    const links = [{ label: 'Dashboard', href: '/' }, { label: 'issues', href: '/issues' }]
    return (
        <nav className='flex space-x-7 border-b mb-6 h-16 px-7 items-center'>
            <Link href='/'><FaBug /></Link>
            <ul className='flex space-x-7'>
                {links.map(link => <Link key={link.href} href={link.href} className={`${link.href === currentPath ? 'text-blue-400' : 'text-zinc-500'} hover:text-zinc-900 transition-colors`}>{link.label}</Link>)}
                {/* {links.map(link => <Link key={link.href} href={link.href} className={classnames({
                    'text-blue-400': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover: text-zinc-900': true,
                    'transition-colors': true
                })}>{link.label}</Link>)} */}
            </ul>
        </nav>
    )
}

export default Navbar