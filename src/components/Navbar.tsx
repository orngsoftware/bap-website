'use client'

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import LingoSwitcher from "./switchLingo"
import { useState } from "react"

const Navbar = () => {
    const t = useTranslations('Navbar')
    const sub7T = useTranslations('Navbar.sub-7')
    const [isOpen, setIsOpen] = useState(false)
    const [subSectionOpen2, setSubSectionOpen2] = useState(false)

    return (
        <>
        {isOpen &&
        <div className="nav-bar-mobile">
            <Link href="/" onClick={() => setIsOpen(false)}>{t('1')}</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>{t('2')}</Link>
            <Link href="/membership" onClick={() => setIsOpen(false)}>{t('3')}</Link>
            <Link href="/ethics" onClick={() => setIsOpen(false)}>{t('4')}</Link>
            <Link href="/structure" onClick={() => setIsOpen(false)}>{t('5')}</Link>
            <Link href="/events" onClick={() => setIsOpen(false)}>{t('6')}</Link>
            <div className="row clickable" onClick={() => setSubSectionOpen2(!subSectionOpen2)}>
                <p className="bold" style={{margin: 0}}>{t('7')}</p>
                <svg className="to-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e4756" viewBox="0 0 256 256">
                    <path d={subSectionOpen2 === false ? 
                        "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" :
                        "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"
                    }></path>
                </svg>
            </div>
            {subSectionOpen2 &&
                <div className="sub-nav-mobile">
                    <Link href="/" onClick={() => setIsOpen(false)}>{sub7T('1')}</Link>
                    <Link href="/" onClick={() => setIsOpen(false)}>{sub7T('2')}</Link>
                    <Link href="/" onClick={() => setIsOpen(false)}>{sub7T('3')}</Link>
                </div>
            }
            <Link href="/contact" onClick={() => setIsOpen(false)}>{t('8')}</Link> 
        </div>
        }
        <div className='nav-wrapper'>
            <Link href="/">
                <Image 
                src='/logo.png' 
                alt="BAP Logo"
                width={72}
                height={72}
                />
            </Link>
            <div className='nav-bar'>
                <Link href="/">{t('1')}</Link>
                <Link href="/about">{t('2')}</Link>
                <Link href="/structure">{t('5')}</Link>
                <Link href="/ethics">{t('4')}</Link>
                <Link href="/membership">{t('3')}</Link>
                <Link href="/events">{t('6')}</Link>
                    <div className="row dropdown" id="dropdown2" style={{gap: 5}}>
                        <p className="bold">{t('7')}</p>
                        <svg className="icon-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e4756" viewBox="0 0 256 256"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path></svg>
                        <svg className="icon-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e4756" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                        <div className="card sub-navbar sub-nav-2">
                            <Link href="/">{sub7T('1')}</Link>
                            <Link href="/">{sub7T('2')}</Link>
                            <Link href="/">{sub7T('3')}</Link>
                        </div>
                    </div>
                <Link href="/contact">{t('8')}</Link>
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