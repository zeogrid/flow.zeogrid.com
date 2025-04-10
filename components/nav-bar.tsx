"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { navList } from '@/constants/nav-list'
import { MobileNavDrawer } from './nav-drawer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'   
import { ModeToggle } from './mode-toggle'
import { socialLink } from '@/constants/social-link'

export default function NavBar() {
    const pathname = usePathname()   

    return (
        <nav className="flex max-lg:px-4 py-4 items-center top-0 sticky bg-background z-40 justify-between border-y border-t-transparent w-full transition-all ease-in-out duration-300">
            <div className='flex items-center justify-center gap-4  '>
                <div className='flex gap-4 items-center justify-center '>
                    <Link href={"/"} className='flex'>
                        <Button className="relative h-10 w-10 px-0 py-0 [&_svg]:size-6" variant={"outline"} size={"icon"}>
                            <Image className="absolute p-2" src={"/assets/svg/zeoapi.svg"} alt="zeoflow" fill priority />
                        </Button>
                    </Link>
                    <span className='text-md max-md:hidden'>ZeoFlow</span>
                </div>
                <span className='border-r h-6 hidden lg:flex'></span>
                <div className="flex items-center text-sm justify-center gap-6 max-lg:hidden ">
                    {navList.map((nav, index) => {
                        const isActive = pathname === nav.href  // Check if the current path matches the nav link

                        return (
                            <Link key={index} className={`${isActive ? "text-primary" : "text-muted-foreground"
                                } transition-all ease-in-out duration-300`} href={nav.href}>

                                {nav.title}
                            </Link>

                        )
                    })}
                </div>
            </div>
            <div className=' items-center justify-center gap-4 hidden lg:flex'>
                <Link href={"/custom-response"}><Button className='text-muted-foreground  font-normal' variant={"secondary"}>Custom Response</Button>  </Link>
                <span className='border-r h-6'></span>




                <div className="flex justify-center text-muted-foreground ">
                    {
                        socialLink.map((social, index) => {
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" className={`${socialLink.length - 1 != index ? "border-r-0" : ""} transition-all ease-in-out duration-300` } size="icon" aria-label={social.title}>
                                        {social.icon}
                                    </Button>
                                </a>
                            );
                        })
                    }

                </div>
                <span className='border-r h-6'></span>
                <div className='text-muted-foreground '>

                    <ModeToggle />
                </div>
            </div>
            <div className='lg:hidden '>
                <MobileNavDrawer />
            </div>


        </nav>
    )
}
