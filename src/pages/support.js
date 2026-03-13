import React, { useState, useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import * as styles from './support.module.css';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Policy from '../components/Policy';
import Container from '../components/Container';
import { LanguageContext } from '../context/LanguageContext';

const SupportPage = (props) => {
  const { t } = useContext(LanguageContext);
  const subpages = [
    { titleKey: 'support.terms', key: 'terms' },
    { titleKey: 'support.contact', key: 'contact' },
    { titleKey: 'support.privacy', key: 'policy' },
    { titleKey: 'support.shipping', key: 'shipping' },
    { titleKey: 'support.returns', key: 'returns' },
    { titleKey: 'support.payments', key: 'payments' },
  ];

  const [current, setCurrent] = useState(subpages[0]);

  const renderElement = (key) => {
    let tempElement = <React.Fragment />;

    switch (key) {
      case 'contact':
        tempElement = <Contact />;
        break;
      case 'policy':
        tempElement = <Policy />;
        break;
      case 'shipping':
        tempElement = <Policy />;
        break;
      case 'returns':
        tempElement = <Policy />;
        break;
      case 'payments':
        tempElement = <Policy />;
        break;
      case 'terms':
        tempElement = <Policy />;
        break;
      default:
        break;
    }
    return tempElement;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash !== '' && props.location.hash !== undefined) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.filter((detail) => detail.key === hash)[0];
      if (tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo(0, 475);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={t(current.titleKey)}
          bgImage={'/support.jpg'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details, index) => {
            return (
              <ThemeLink
                onClick={(e) => {
                  navigate(`/support#${details.key}`);
                }}
                key={details.key}
                isActive={current.key === details.key}
                to={`/support#${details.key}`}
              >
                {t(details.titleKey)}
              </ThemeLink>
            );
          })}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => {
              return (
                <div
                  key={details.key}
                  className={`${styles.content} ${
                    current.key === details.key ? styles.show : styles.hide
                  }`}
                >
                  {renderElement(details.key)}
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
