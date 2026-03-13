import React, { useContext } from 'react';

import Attribute from '../Attribute';
import { LanguageContext } from '../../context/LanguageContext';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  const { t } = useContext(LanguageContext);
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={t('attributes.commitment.title')}
        subtitle={t('attributes.commitment.subtitle')}
      />
      <Attribute
        icon={'cycle'}
        title={t('attributes.quality.title')}
        subtitle={t('attributes.quality.subtitle')}
      />
      <Attribute
        icon={'creditcard'}
        title={t('attributes.payment.title')}
        subtitle={t('attributes.payment.subtitle')}
      />
    </div>
  );
};

export default AttributeGrid;
