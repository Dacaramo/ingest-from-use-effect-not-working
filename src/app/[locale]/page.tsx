import { FC } from 'react';
import { useTranslations } from 'next-intl';

interface Props {}

const HomePage: FC<Props> = ({}) => {
  const t = useTranslations('server');

  return (
    <main className={`w-full flex flex-col justify-center items-center`}>
      <span>{t('text')}</span>
    </main>
  );
};

export default HomePage;
