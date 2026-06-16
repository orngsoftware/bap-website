import { useTranslations } from "next-intl";
import Link from "next/link";

function TickIcon({ width, height, fill }: { width: string; height: string; fill: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
    )
}


export default function Membership() {
    const t = useTranslations('MembershipPage')

    return (
        <div className="col-center" style={{gap: 15, maxWidth: 750}}>
            <h1>{t('title')}</h1>
            <p style={{textAlign: "center"}}>{t('text1')}</p>
            <div className="card" style={{maxWidth: 500, minWidth: 310, marginTop: 20, marginBottom: 25}}>
                <div className="row">
                <h1>€60</h1>
                <p>/{t('year')}</p>
                </div>
                <p className="bold" style={{borderBottom: "1.5px solid var(--light-grey-color)", paddingBottom: 10}}>{t('card-sub-title')}</p>
                <div className="col" style={{gap: 10, borderBottom: "1.5px solid var(--light-grey-color)", paddingBottom: 25}}>
                    <div className="icon-row">
                        <TickIcon width="20" height="20" fill="var(--almost-black-color)" />
                        <p>{t('benefit1')}</p>
                    </div>
                    <div className="icon-row">
                        <TickIcon width="20" height="20" fill="var(--almost-black-color)" />
                        <p>{t('benefit2')}</p>
                    </div>
                    <div className="col" style={{marginLeft: 45, gap: 5}}>
                        <p>{t('benefit2-details.1')}</p>
                        <p>{t('benefit2-details.2')}</p>
                        <p>{t('benefit2-details.3')}</p>
                        <p>{t('benefit2-details.4')}</p>
                        <p>{t('benefit2-details.5')}</p>
                    </div>
                    <div className="icon-row">
                        <TickIcon width="20" height="20" fill="var(--almost-black-color)" />
                        <p>{t('benefit3')}</p>
                    </div>
                </div>
                <Link href="https://form.typeform.com/to/WxWjR4gA" style={{minWidth: "100%"}}><button className="btn-blue" style={{width: "100%"}}>{t('btn-text2')}</button></Link>
            </div>
            <div className="diff-color-bg">
                <p>{t('text4')}</p>
            </div>
            <p style={{borderBottom: "1.5px solid var(--light-grey-color)", paddingBottom: 20, marginTop: 10}}>{t('text3')}</p>
            <p style={{textAlign: "center", marginTop: 15}}>{t('text2')}</p>
            <Link href="/ethics"><button>{t('btn-text1')}</button></Link>
        </div>
    )
}