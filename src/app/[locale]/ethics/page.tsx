import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Ethics() {
    const t = useTranslations('EthicsPage')

    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <p style={{textAlign: "center", maxWidth: 600, marginTop: 15}}>{t('text1')}</p>
            <div className="image-content-row">
                <div className="col">
                    <div className="two-col-grid">
                        <div className="col" style={{ gap: 45 }}>
                            <div className="col" style={{ gap: 10, maxWidth: 350 }}>
                                <h3 style={{ margin: 0 }}>{t('card1.title')}</h3>
                                <p>{t('card1.sub-title')}</p>
                            </div>
                            <div className="col" style={{ gap: 10, maxWidth: 350 }}>
                                <h3 style={{ margin: 0 }}>{t('card2.title')}</h3>
                                <p>{t('card2.sub-title')}</p>
                            </div>
                        </div>
                        <div className="col" style={{ gap: 45 }}>
                            <div className="col" style={{ gap: 10, maxWidth: 350 }}>
                                <h3 style={{ margin: 0 }}>{t('card3.title')}</h3>
                                <p>{t('card3.sub-title')}</p>
                            </div>
                            <div className="col" style={{ gap: 10, maxWidth: 350 }}>
                                <h3 style={{ margin: 0 }}>{t('card4.title')}</h3>
                                <p>{t('card4.sub-title')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image alt="Lecture Image" preload={true} src="/lecture.png" width={400} height={400} />
            </div>
            <div className="diff-color-bg">
            <h2 style={{ alignSelf: "flex-start" }}>{t('sub-title')}</h2>
            <p style={{ alignSelf: "flex-start", marginLeft: 5 }}>{t('text2')}</p>
            <div className="row wrap-row" style={{ gap: 10, marginTop: 15 }}>
                <div className="pill"><p>{t('value1')}</p></div>
                <div className="pill"><p>{t('value2')}</p></div>
                <div className="pill"><p>{t('value3')}</p></div>
                <div className="pill"><p>{t('value4')}</p></div>
                <div className="pill"><p>{t('value5')}</p></div>
                <div className="pill"><p>{t('value6')}</p></div>
                <div className="pill"><p>{t('value7')}</p></div>
            </div>
            </div>   
        </div>
    )
}
