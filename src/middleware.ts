import createIntlMiddleware from 'next-intl/middleware';
import { availableLocales } from './constants/locales';
import { NextRequest } from 'next/server';

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

const middleware = async (request: NextRequest) => {
  const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: availableLocales,
    // Used when no locale matches
    defaultLocale: 'en',
  });

  const response = handleI18nRouting(request);

  return response;
};

export default middleware;
