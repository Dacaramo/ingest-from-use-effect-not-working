import { getRequestConfig } from 'next-intl/server';
import { availableLocales } from './constants/locales';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!availableLocales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
