import * as React from 'react';

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

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'new');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.jpg'}
        title={'Capture the bloosoming moments'}
        subtitle={'Discover Spring New Themes 2026'}
        ctaText={'book now'}
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
          <Title name={'Baby Themes'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Hotest Themes'} link={'/shop'} textLink={'view all'} />
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
            title={'Special Theme'}
            description={`This theme is designed to capture the essence of childhood joy and innocence. With vibrant colors, playful patterns, and whimsical elements, it creates a fun and engaging environment for kids to explore and enjoy.`}
            textLink={'book now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.jpg')} title={`-10% off \n Early Bird book in Easter Holiday`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Girl</Link>
          <Link to={'/shop'}>Boy</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Kidsubaby'}
        quote={
          '“We believe in creating magical moments for children, where every detail is thoughtfully designed to bring joy and comfort.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Review'} subtitle={'Feedback on facebook and instagram'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.jpg')}
          title={'Customisable Themes'}
          subtitle={
            'Your idea can be brought to life with our customisable themes.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Magic Moments'}
          subtitle={'Tag @kidsubaby to be featured.'}
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
