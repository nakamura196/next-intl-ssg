// src/app/[locale]/about/page.tsx
import { getMessages, locales } from '@/lib/i18n';
import I18nProvider from '@/components/I18nProvider';
import AboutPage from '@/components/AboutPage';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedAbout({ params }: Props) {
  const { locale } = await params;
  
  // 指定された言語のメッセージを取得
  const messages = await getMessages(locale);
  
  return (
    <I18nProvider locale={locale} messages={messages}>
      <AboutPage />
    </I18nProvider>
  );
}

// SSGのためのパラメータ生成
export function generateStaticParams() {
  // デフォルト言語を除外
  return locales.filter(locale => locale !== 'ja').map(locale => ({
    locale
  }));
}
