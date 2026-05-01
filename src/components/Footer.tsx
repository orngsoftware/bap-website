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
                    <div className="contact-form-footer">
                        <div className="footer-email-row">
                            <input
                                type="email"
                                placeholder={footerT('placeholder1')}
                            />
                            <button className="btn-white" type="button">
                                {footerT('send-btn')}
                            </button>
                        </div>
                        <textarea
                            className="message-input"
                            placeholder={footerT('placeholder2')}
                        />
                    </div>
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