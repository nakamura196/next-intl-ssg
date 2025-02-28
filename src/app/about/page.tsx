// src/app/about/page.tsx
import { getMessages, defaultLocale } from '@/lib/i18n';
import I18nProvider from '@/components/I18nProvider';
import AboutPage from '@/components/AboutPage';

export default async function About() {
  // 日本語のメッセージを取得
  const messages = await getMessages(defaultLocale);
  
  return (
    <I18nProvider locale={defaultLocale} messages={messages}>
      <AboutPage />
    </I18nProvider>
  );
}
