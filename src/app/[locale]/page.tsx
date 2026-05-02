import ImageGrid from "@/components/ImageGrid";
import { useTranslations } from "next-intl";
import styles from "./landing.module.css"

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h1>{t('title')}</h1>
        <p className={styles.sub_text}>{t('sub-text')}</p>
        <div className="row" style={{gap: 10, marginTop: 50}}>
          <button className="btn-blue">{t('btn-text-main')}</button>
          <button>{t('btn-text-secondary')}</button>
        </div>
      </div>
      <ImageGrid />
    </div>
  )
}
