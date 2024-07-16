import { FC, ReactNode } from 'react';
import { Jost } from 'next/font/google';
import '../globals.css';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import ProvidersWrapper from '@/src/components/ProvidersWrapper/ProvidersWrapper';
import { Amplify } from 'aws-amplify';
import { amplifyConfig } from '@/src/aws/amplifyConfig';

Amplify.configure(amplifyConfig, {
  ssr: true,
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['arial', 'sans-serif', 'monospace'],
});

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
  const allMessages = useMessages();
  const clientMessages = allMessages['client'] as AbstractIntlMessages;

  return (
    <html
      lang={locale}
      data-theme='fantasy'
    >
      <body
        className={`${jost.className} flex flex-col justify-center items-center gap-10`}
      >
        <NextIntlClientProvider messages={clientMessages}>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
