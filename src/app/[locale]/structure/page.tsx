'use client'
import { useTranslations } from "next-intl"
import styles from "./structure.module.css"
import { useState } from "react";

function CommunitiesCircle() {
  const [open, setOpen] = useState(null);
  const t = useTranslations('BAP Structure')

  const toggle = (id: any) => setOpen(prev => prev === id ? null : id);

    return (
    <div className={styles["diagram-wrap"]}>
        <div className={styles["circles-wrap"]}>
        <div className={styles["circles-inner"]}>
            <div className={`${styles["circ"]} ${styles["circ-gray"]}`} />
            <div className={`${styles["circ"]} ${styles["circ-navy"]}`} />
            <div className={`${styles["circ"]} ${styles["circ-teal"]}`} />
            <div className={`${styles["circ"]} ${styles["circ-inner"]} clickable`} onClick={() => toggle('inner')}>
            <p>{t("text5")}</p>
            </div>
            <div className={`${styles["pill-on-circle"]} ${styles["pill-grey"]}`} onClick={() => toggle('outer')}>
            <p>{t("text2")}</p>
            </div>
            <div className={`${styles["pill-on-circle"]} ${styles["pill-navy"]}`} onClick={() => toggle('navy')}>
            <p>{t("text3")}</p>
            </div>
            <div className={`${styles["pill-on-circle"]} ${styles["pill-teal"]}`} onClick={() => toggle('teal')}>
            <p>{t("text4")}</p>
            </div>
        </div>
        </div>

        {open !== null && (
        <div className={styles["overlay"]} onClick={() => setOpen(null)}>
            <div className={styles["modal"]} onClick={e => e.stopPropagation()}>
            {open === 'outer' && (
                <>
                    <p className="bold" style={{marginBottom: 10}}>{t("text2")}</p>
                    <p>{t("expanded-text2")}</p>
                </>
            )}
            {open === 'navy'  && (
                <>
                    <p className="bold" style={{marginBottom: 10}}>{t("text3")}</p>
                    <p>{t("expanded-text3")}</p>
                </>
            )}
            {open === 'teal'  && (
                <>
                    <p className="bold" style={{marginBottom: 10}}>{t("text4")}</p>
                    <p>{t("expanded-text4")}</p>
                </>
            )}
            {open === 'inner' && (
                <>
                    <p className="bold" style={{marginBottom: 10}}>{t("text5")}</p>
                    <p>{t("expanded-text5")}</p>
                </>
            )}
            </div>
        </div>
        )}
    </div>
    );
}

export default function Structure() {
    const t = useTranslations('BAP Structure')

    return (
    <div className="col-center" style={{width: "100%"}}>
        <h1>{t("title")}</h1>
        <p style={{textAlign: "center", maxWidth: 600, marginTop: 20}}>{t('sub-text')}</p>
        <CommunitiesCircle />
        <p style={{textAlign: "center", maxWidth: 600}}>{t('text6')}</p>
    </div>
    )
}

