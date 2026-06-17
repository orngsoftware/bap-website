'use client'

import Link from "next/link"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Footer = () => {
    const t = useTranslations('Navbar')
    const footerT = useTranslations('Footer')
    const sub5T = useTranslations('Navbar.sub-5')
    const sub7T = useTranslations('Navbar.sub-7')

    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <Image
                    src='/white_logo.png'
                    alt="White BAP Logo"
                    width={105}
                    height={105}
                    className="footer-logo"
                />

                <div className="footer-col">
                    <p className="footer-heading">{footerT('2')}</p>
                    <Link href="mailto:somefuture@email.com">
                        <div className="icon-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                            somefuture@email.com
                        </div>
                    </Link>
                    <div className="icon-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                        <p style={{color: "white"}}>+371 212345678</p>
                    </div>
                    <Link href="https://www.google.com/maps/place/Therapy/@56.9569683,24.112837,19.66z/data=!4m6!3m5!1s0x46eecf0053a5b553:0x20f222dab293efe6!8m2!3d56.9569235!4d24.1129628!16s%2Fg%2F11mls9qy6m?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D">
                        <div className="icon-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
                            Rūpniecības iela 52, Rīga
                        </div>
                    </Link>
                </div>
                <div className="footer-nav-docs">
                    <div className="footer-col">
                        <p className="footer-heading">{footerT('1')}</p>
                        <Link href="/">{t('1')}</Link>
                        <Link href="/">{t('2')}</Link>
                        <Link href="/">{t('3')}</Link>
                        <Link href="/">{t('4')}</Link>
                        <Link href="/">{t('6')}</Link>
                        <Link href="/">{t('8')}</Link>
                    </div>
                    <div className="footer-col">
                        <p className="footer-heading">{t('7')}</p>
                        <Link href="/">{sub7T('1')}</Link>
                        <Link href="/">{sub7T('2')}</Link>
                        <Link href="/">{sub7T('3')}</Link>
                    </div>
                </div>

                <div className="footer-col">
                    <p className="footer-heading">{t('5')}</p>
                    <Link href="/">{sub5T('1')}</Link>
                    <Link href="/">{sub5T('2')}</Link>
                    <Link href="/">{sub5T('3')}</Link>
                    <Link href="/">{sub5T('4')}</Link>
                    <Link href="/">{sub5T('5')}</Link>
                    <Link href="/">{sub5T('6')}</Link>
                </div>
            </footer>

            <div className="footer-copyright">
                <p>© 2026 Baltic Association for Psychotherapy. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer