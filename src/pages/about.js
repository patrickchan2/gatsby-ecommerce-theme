import React, { useRef, useContext } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { LanguageContext } from '../context/LanguageContext';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  const { t } = useContext(LanguageContext);
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.jpg'}
          title={t('about.hero.title')}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            {t('about.nav.history')}
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            {t('about.nav.values')}
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            {t('about.nav.vision')}
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>{t('about.intro')}</p>
            <br />
            <br />
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.jpg')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>{t('about.values.title')}</h3>
            <div ref={valuesRef}>
              <p>{t('about.values.body')}</p>
              
              <img alt={'founder'} src={toOptimizedImage('/about2.jpg')}></img>
            </div>
            <h3>{t('about.world.title')}</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>{t('about.world.body1')}</p>
              <p>{t('about.world.body2')}</p>
              <p>{t('about.world.body3')}</p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.jpg')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
