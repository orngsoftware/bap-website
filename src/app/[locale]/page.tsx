import ImageGrid from "@/components/ImageGrid";
import { useTranslations } from "next-intl";
import styles from "./landing.module.css"
import Link from "next/link";

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h1 style={{maxWidth: "65%"}}>{t('title')}</h1>
        <p className={styles.sub_text} style={{marginTop: 10, marginLeft: 5}}>{t('sub-text')}</p>
        <div className="row" style={{gap: 10, marginTop: 50}}>
          <button className="btn-blue">{t('btn-text-main')}</button>
          <Link href="/about"><button>{t('btn-text-secondary')}</button></Link>
        </div>
      </div>
      <ImageGrid />
    </div>
  )
}
