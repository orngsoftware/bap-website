import { useTranslations } from "next-intl";

export default function Ethics() {
    const t = useTranslations('EthicsPage')

    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <div className="row" style={{marginTop: 10, gap: 45}}>
                <div className="col" style={{gap: 10, maxWidth: 350}}>
                    <h3 style={{margin: 0}}>{t('card1.title')}</h3>
                    <p>{t('card1.sub-title')}</p>
                </div>
                <div className="col" style={{gap: 10, maxWidth: 350}}>
                    <h3 style={{margin: 0}}>{t('card2.title')}</h3>
                    <p>{t('card2.sub-title')}</p>
                </div>
            </div>
            <div className="row" style={{marginTop: 35, gap: 45}}>
                <div className="col" style={{gap: 10, maxWidth: 350}}>
                    <h3 style={{margin: 0}}>{t('card3.title')}</h3>
                    <p>{t('card3.sub-title')}</p>
                </div>
                <div className="col" style={{gap: 10, maxWidth: 350}}>
                    <h3 style={{margin: 0}}>{t('card4.title')}</h3>
                    <p>{t('card4.sub-title')}</p>
                </div>
            </div>
        </div>
    )
}
