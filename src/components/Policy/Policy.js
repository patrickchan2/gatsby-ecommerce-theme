import React, { useContext } from 'react';
import * as styles from './Policy.module.css';
import { LanguageContext } from '../../context/LanguageContext';

const Policy = (props) => {
  const { t } = useContext(LanguageContext);

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>{t('policy.1.title')}</h3>
        <p>{t('policy.1.body1')}</p>
      </div>

      <div className={styles.section}>
        <h3>{t('policy.2.title')}</h3>
        <p>{t('policy.2.body1')}</p>
      </div>

      <div className={styles.section}>
        <h3>{t('policy.3.title')}</h3>
        <p>{t('policy.3.body1')}</p>
        <p>{t('policy.3.body2')}</p>
      </div>

      <div className={styles.section}>
        <h3>{t('policy.4.title')}</h3>
        <p>{t('policy.4.body1')}</p>
      </div>

      <div className={styles.section}>
        <h3>{t('policy.5.title')}</h3>
        <p>{t('policy.5.body1')}</p>
      </div>

      <div className={styles.section}>
        <h3>{t('policy.6.title')}</h3>
        <p>{t('policy.6.body1')}</p>
      </div>
    </div>
  );
};

export default Policy;
