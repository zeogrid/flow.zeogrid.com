"use client"

import * as React from "react"
import { AlignJustifyIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { ModeToggle } from "@/components/mode-toggle"  
import { navList } from "@/constants/nav-list"
import { socialLink } from "@/constants/social-link"

export function MobileNavDrawer() {
 
    const triggerRef = React.useRef<HTMLButtonElement | null>(null)

    const handleOpen = () => {
        triggerRef.current?.blur()
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    className="h-10 w-10 px-0 py-0 [&_svg]:size-6 text-primary hover:text-primary"
                    ref={triggerRef}
                    variant={"outline"}
                    size="icon"
                    onClick={handleOpen}
                >
                    <AlignJustifyIcon />
                    <span className="sr-only">Open Navigation</span>
                </Button>
            </DrawerTrigger>

            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="sr-only">Navigation</DrawerTitle>
                        <DrawerDescription className="sr-only">
                            Main site navigation menu
                        </DrawerDescription>
                    </DrawerHeader>
                    <nav className="grid grid-cols-4 p-4 gap-4">
                        {
                            navList.map((nav, index) => {
                                return (
                                    <DrawerClose key={index} asChild>
                                        <Link
                                            href={nav.href}
                                            className="text-md w-full flex flex-col items-center justify-center"
                                        >
                                            
                                            <div className="w-full hover:bg-secondary aspect-square border flex items-center justify-center">
                                                {nav.icon}
                                            </div>

                                          
                                            <span className="mt-2 text-xs">{nav.title}</span>
                                        </Link>
                                    </DrawerClose>
                                );
                            })
                        }
                    </nav>



                    <DrawerFooter>
                        {/* Custom Response Button */}
                        <DrawerClose asChild>
                            <Link href="/custom-response" className="block text-md hover:underline">
                                <Button variant="outline" className="w-full py-3 h-fit">
                                    Custom Response
                                </Button>
                            </Link>
                        </DrawerClose>
                        <div className="flex justify-between items-center">


                            {/* Social Media Buttons */}
                            <div className="flex justify-center my-4">
                                 {
                                                        socialLink.map((social, index) => {
                                                            return (
                                                                <a
                                                                    key={index}
                                                                    href={social.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Button variant="outline" className={socialLink.length - 1 != index ? "border-r-0" : ""} size="icon" aria-label={social.title}>
                                                                        {social.icon}
                                                                    </Button>
                                                                </a>
                                                            );
                                                        })
                                                    }
                                
                               
                            </div>
                            {/* Theme Toggle */}
                            <div className="flex justify-center my-4">
                                <ModeToggle />
                            </div>

                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
