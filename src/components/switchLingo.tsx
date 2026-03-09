'use client'

import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl";

export default function LingoSwitcher() {

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname()

  function changeLocale(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  }

  return (
    <div className="row" style={{gap: 10}}>
        <p className="clickable" onClick={() => changeLocale('en')}>EN</p>
        <p className="clickable" onClick={() => changeLocale('ru')}>RU</p>
    </div>
  );
}