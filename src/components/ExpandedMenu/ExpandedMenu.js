import { Link } from 'gatsby';
import React, { useContext } from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import * as styles from './ExpandedMenu.module.css';
import { toOptimizedImage } from '../../helpers/general';

const ExpandedMenu = (props) => {
  const { menu } = props;
  const { t } = useContext(LanguageContext);

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <span className={styles.categoryName}>{t(item.categoryLabel)}</span>
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className={styles.menuLink} to={link.menuLink}>
                        {t(link.menuLabel)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ExpandedMenu;
