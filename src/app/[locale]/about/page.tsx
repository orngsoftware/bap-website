import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    const t = useTranslations('AboutPage')
    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <div className="col-center" style={{maxWidth: 800, gap: 20, marginTop: 10}}>
                <p style={{textAlign: "center"}}>{t('text1')}</p>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section1')}</h2>
                <div className="row cards-row" style={{ gap: 10 }}>
                <div className="card">
                    <p className="bold">{t('card1.title')}</p>
                    <p>{t('card1.sub-title')}</p>
                </div>
                <div className="card">
                    <p className="bold">{t('card2.title')}</p>
                    <p>{t('card2.sub-title')}</p>
                </div>
                <div className="card">
                    <p className="bold">{t('card3.title')}</p>
                    <p>{t('card3.sub-title')}</p>
                </div>
                <div className="card">
                    <p className="bold">{t('card4.title')}</p>
                    <p>{t('card4.sub-title')}</p>
                </div>
                </div>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section2')}</h2>
                <div className="icon-row" style={{alignItems: "flex-start", gap: 15}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#39707f" viewBox="0 0 256 256"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg>
                    <p>{t('text2')}</p>
                </div>
                <div className="icon-row" style={{alignItems: "flex-start", gap: 15}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#39707f" viewBox="0 0 256 256"><path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path></svg>
                    <p>{t('text3')}</p>
                </div>
                <div className="icon-row" style={{alignItems: "flex-start", gap: 15}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#39707f" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"></path></svg>                    <p>{t('text4')}</p>
                </div>
                <div className="card" style={{textAlign: "left", flexBasis: "100%"}}>
                    <div className="icon-row" style={{gap: 15}}>
                        <svg style={{flex: "none"}} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#39707f" viewBox="0 0 256 256"><path d="M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-96,87.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16h7.6A80.15,80.15,0,0,1,136,207.6ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z"></path></svg>
                        <p>{t('text5')}</p>
                    </div>
                </div>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section3')}</h2>
                <div className="row wrap-row" style={{gap: 25}}>
                    <div className="col" style={{gap: 15}}>
                        <p>{t('text6')}</p>
                        <p>{t('text7')}</p>                    
                    </div>
                    <Image alt="Group Therapy" src="/group_therapy.png" width={350} height={350} />
                </div>
                <p>{t('text8')}</p>
                <h2 style={{alignSelf: "flex-start", margin: 0}}>{t('section4')}</h2>
                <p>{t('text9')}</p>
            </div>

        </div>
    )
}