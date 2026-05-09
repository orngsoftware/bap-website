import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('AboutPage')
    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <div className="col-center" style={{maxWidth: 800, gap: 20}}>
                <p>{t('text1')}</p>
                <p>{t('text2')}</p>
            </div>

        </div>
    )
}