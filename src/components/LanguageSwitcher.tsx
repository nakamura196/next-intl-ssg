// src/components/LanguageSwitcher.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocalizedPath, locales } from '@/lib/i18n';

const languageNames: Record<string, string> = {
  ja: '日本語',
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  zh: '中文',
  ko: '한국어',
  ru: 'Русский',
  pt: 'Português'
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  return (
    <div className="language-switcher">
      {locales.map(locale => (
        <Link 
          key={locale} 
          href={getLocalizedPath(pathname, locale)}
        >
          {languageNames[locale]}
        </Link>
      )).reduce((prev, curr, i) => (
        <>
          {prev} {i > 0 ? " | " : ""} {curr}
        </>
      ))}
    </div>
  );
}
