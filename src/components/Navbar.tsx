'use client'

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import LingoSwitcher from "./switchLingo"

const Navbar = () => {
    const t = useTranslations('Navbar')

    return (
        <div className='nav-wrapper'>
            <Image 
            src='/logo.png' 
            alt="BAP Logo"
            width={72}
            height={72}
            />
            <div className='nav-bar'>
            <Link href="/">{t('1')}</Link>
            <Link href="/">{t('2')}</Link>
            <Link href="/">{t('3')}</Link>
            <Link href="/">{t('4')}</Link>
            <Link href="/">{t('5')}</Link>
            <Link href="/">{t('6')}</Link>
            <Link href="/">{t('7')}</Link>
            </div>
            <LingoSwitcher />
        </div>
    )
}

export default Navbar