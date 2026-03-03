import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'30 days commitment'}
        subtitle={'All photos are ready within 30 days'}
      />
      <Attribute
        icon={'cycle'}
        title={'Quality Guarantee'}
        subtitle={'Refund if not satisfied (T&C apply)'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
