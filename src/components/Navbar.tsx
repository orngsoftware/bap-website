'use client'

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import LingoSwitcher from "./switchLingo"
import { useState } from "react"

const Navbar = () => {
    const t = useTranslations('Navbar')
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        {isOpen &&
        <div className="nav-bar-mobile">
            <Link href="/">{t('1')}</Link>
            <Link href="/">{t('2')}</Link>
            <Link href="/">{t('3')}</Link>
            <Link href="/">{t('4')}</Link>
            <Link href="/">{t('5')}</Link>
            <Link href="/">{t('6')}</Link>
            <Link href="/">{t('7')}</Link> 
        </div>
        }
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
            <div className="row" style={{gap: 15}}>
                <LingoSwitcher />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hamburger clickable"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <span className={`hamburger-bar top${isOpen ? " open" : ""}`} />
                    <span className={`hamburger-bar middle${isOpen ? " open" : ""}`} />
                    <span className={`hamburger-bar bottom${isOpen ? " open" : ""}`} />
                </button>
            </div>
        </div>
        </>
    )
}

export default Navbar