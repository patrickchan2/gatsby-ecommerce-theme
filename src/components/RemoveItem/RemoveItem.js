import React from 'react';

import Icon from '../Icons/Icon';

import * as styles from './RemoveItem.module.css';

const RemoveItem = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.root} role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick?.()} aria-label="Remove item">
      <Icon symbol={'cross'} />
    </div>
  );
};

export default RemoveItem;
