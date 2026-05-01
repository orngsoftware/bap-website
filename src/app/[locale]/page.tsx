import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <div className="col-center">
      <h1 style={{color: "var(--dark-cyan-color"}}>{t('title')}</h1>
    </div>
  )
}
