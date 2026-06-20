import { useTranslations } from "next-intl";
import styles from "./landing.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h1 style={{maxWidth: "65%"}}>{t('title')}</h1>
        <p className={styles.sub_text} style={{marginTop: 10, marginLeft: 5}}>{t('sub-text')}</p>
        <div className="row" style={{gap: 10, marginTop: 50}}>
          <Link href="https://form.typeform.com/to/WxWjR4gA"><button className="btn-blue">{t('btn-text-main')}</button></Link>
          <Link href="/about"><button>{t('btn-text-secondary')}</button></Link>
        </div>
      </div>
      <Image width={400} height={400} src="/home_image.webp" alt="People are standing in the circle on beach" />
    </div>
  )
}
