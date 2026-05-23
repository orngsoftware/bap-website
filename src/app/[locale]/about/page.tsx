import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('AboutPage')
    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <div className="col-center" style={{maxWidth: 800, gap: 20, marginTop: 10}}>
                <p style={{textAlign: "center"}}>{t('text1')}</p>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section1')}</h2>
                <div className="row cards-row" style={{gap: 10}}>
                    <div className="card" style={{height: 125, maxWidth: 300}}>
                        <p className="bold">{t('card1.title')}</p>
                        <p>{t('card1.sub-title')}</p>
                    </div>
                    <div className="card" style={{height: 125, maxWidth: 300}}>
                        <p className="bold">{t('card2.title')}</p>
                        <p>{t('card2.sub-title')}</p>
                    </div>
                    <div className="card" style={{height: 125, maxWidth: 300}}>
                        <p className="bold">{t('card3.title')}</p>
                        <p>{t('card3.sub-title')}</p>
                    </div>
                    <div className="card" style={{height: 125, maxWidth: 300}}>
                        <p className="bold">{t('card4.title')}</p>
                        <p>{t('card4.sub-title')}</p>
                    </div>
                </div>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section2')}</h2>
                <p>{t('text2')}</p>
                <p>{t('text3')}</p>
                <p>{t('text4')}</p>
                <div className="card" style={{textAlign: "left", border: "none"}}>
                    <div className="icon-row" style={{gap: 15}}>
                        <svg style={{flex: "none"}} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#39707f" viewBox="0 0 256 256"><path d="M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-96,87.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16h7.6A80.15,80.15,0,0,1,136,207.6ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z"></path></svg>
                        <p>{t('text5')}</p>
                    </div>
                </div>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section3')}</h2>
                <p>{t('text6')}</p>
                <p>{t('text7')}</p>
                <p>{t('text8')}</p>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section4')}</h2>
                <p>{t('text9')}</p>
            </div>

        </div>
    )
}