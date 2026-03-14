import * as React from 'react';
import { useContext } from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';
import { LanguageContext } from '../context/LanguageContext';

const IndexPage = () => {
  const { t } = useContext(LanguageContext);
  const newArrivals = generateMockProductData(3, 'new');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/enquiry');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.jpg'}
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('home.hero.cta')}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      {/*<div className={styles.messageContainer}>
        <p>
          This is a demonstration of the Sydney theme for verse by{' '}
          <span className={styles.gold}>matter design.</span>
        </p>
        <p>
          wear by <span className={styles.gold}>sunspel</span> and{' '}
          <span className={styles.gold}>scotch&soda</span>
        </p>
      </div>*/}

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={t('home.collection.babyThemes')} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title
            name={t('home.newArrivals.title')}
            link={'/new'}
            textLink={t('home.newArrivals.viewAll')}
          />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
            showPrice={false}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.jpg'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.jpg'}
            miniImageAlt={'mini highlight image'}
            title={t('home.highlight.title')}
            description={t('home.highlight.description')}
            textLink={t('home.highlight.cta')}
            link={'/enquiry'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/banner2.jpg')}
          title={t('home.promo.banner')}
        />
        <div className={styles.linkContainers}>
          <Link to={'/girl'}>{t('home.promo.girl')}</Link>
          <Link to={'/boy'}>{t('home.promo.boy')}</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={t('home.quote.title')}
        quote={
          t('home.quote.text')
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title
            name={t('home.reviews.title')}
            subtitle={t('home.reviews.subtitle')}
          />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.jpg')}
          title={t('home.custom.title')}
          subtitle={t('home.custom.subtitle')}
          ctaText={t('home.custom.cta')}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={t('home.social.title')}
          subtitle={t('home.social.subtitle')}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.jpg`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.jpg`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.jpg`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.jpg`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
