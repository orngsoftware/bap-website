'use client';

import { useTranslations } from "next-intl"
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const t = useTranslations('ContactPage')
    const footerT = useTranslations('Footer')
    const [message, setMessage] = useState('')
    const handleSend = () => {
        window.location.href = `mailto:info@bap-org.com?subject=Contact&body=${encodeURIComponent(message)}`;
    }
    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <p style={{textAlign: "center", maxWidth: 600, marginTop: 15}}>{t('sub-title')}</p>
            <div className="row wrap-row" style={{gap: 35, marginTop: 50}}>
                <div className="contact-form">
                    <textarea
                        className="message-input"
                        placeholder={footerT('placeholder2')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="btn-blue" type="button" onClick={handleSend}>
                        {footerT('send-btn')}
                    </button>
                </div>
                <div className="diff-color-bg" style={{padding: 25, gap: 20}}>
                   <h3 style={{alignSelf: "flex-start"}}>{t('heading1')}</h3>
                   <div className="col" style={{gap: 15}}>
                        <Link href="mailto:info@bap-org.com" style={{fontWeight: "normal"}}>
                            <div className="icon-row">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--almost-black-color)" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                                <p>info@bap-org.com</p>
                            </div>
                        </Link>
                        <div className="icon-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--almost-black-color)" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                            <p>+371 212345678</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}