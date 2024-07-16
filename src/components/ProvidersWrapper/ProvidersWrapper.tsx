'use client';

import { FC, ReactNode, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Amplify } from 'aws-amplify';
import { amplifyConfig } from '@/src/aws/amplifyConfig';
import { getQueryClient } from '@/src/utils/reactQuery';
import { MotionConfig } from 'framer-motion';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useTranslations } from 'next-intl';
import { useLogger } from 'next-axiom';

Amplify.configure(amplifyConfig, {
  ssr: true,
});

interface Props {
  children: ReactNode;
}

const ProvidersWrapper: FC<Props> = ({ children }) => {
  const t = useTranslations();
  const queryClient = getQueryClient();
  const log = useLogger();

  log.error('INGEST FROM THE ROOT OF A CLIENT COMPONENT', {
    conclusion: 'WORKS 👍',
  });

  const handleClickOnButton = () => {
    log.error('INGEST FROM INSIDE AN event handler', {
      conclusion: "DON'T WORK 👎",
    });
  };

  useEffect(() => {
    log.error('INGEST FROM INSIDE AN useEffect', {
      conclusion: "DON'T WORK 👎",
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <button
        className='btn btn-primary'
        onClick={handleClickOnButton}
      >
        {t('text')}
      </button>
      <MotionConfig transition={{ duration: 0.5 }}>{children}</MotionConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ProvidersWrapper;
