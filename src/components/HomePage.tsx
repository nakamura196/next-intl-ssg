// src/components/HomePage.tsx
'use client';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('Home');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher />
    </div>
  );
}
