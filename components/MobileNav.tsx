'use client';
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {

    const pathName = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt='Menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side={'left'}
                    className='bg-white border-none'
                >
                    <Link
                        className='flex cursor-pointer items-center gap-1 px-4'
                        href="/"
                    >
                        <Image
                            src="/icons/logo.svg"
                            alt='BrawlBank logo'
                            width={34}
                            height={34}
                        />
                        <h1 className='size-26 font-ibm-plex-serif font-bold text-black-1'>RoBank</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='h-full flex flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((item) => {

                                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route}
                                                key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', 
                                                    { 'bg-bank-gradient': isActive })}
                                            >
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                    />
                                                <p className={cn(
                                                    'text-16 font-semibold text-black-1', { 'text-white': isActive }
                                                )}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                User
                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav