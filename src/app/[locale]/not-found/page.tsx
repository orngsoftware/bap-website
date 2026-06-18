import { getTranslations } from "next-intl/server";
import Link from "next/link"

export default async function NotFound() {
    const t = await getTranslations("NotFoundPage")

    return (
        <div className="col-center" style={{gap: 10}}>
            <h1>{t('title')}</h1>
            <p style={{textAlign: "center", maxWidth: 600, marginBottom: 20}}>{t('text1')}</p>
            <Link href="/"><button>{t('link-text')}</button></Link>
        </div>
    )
}