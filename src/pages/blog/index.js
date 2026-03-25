import React, { useContext, useState } from 'react';
import { navigate } from 'gatsby';
import { LanguageContext } from '../../context/LanguageContext';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import blogData from '../../helpers/blog.json';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const { t } = useContext(LanguageContext);
  const [category, setCategory] = useState(null);
  const filteredBlogData = category
    ? blogData.filter((blog) => blog.category === category)
    : blogData;

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={toOptimizedImage('/blogCover.jpg')}
          title={`Capture every shining moment`}
          ctaLink={'read story'}
          ctaTo={'https://www.facebook.com/kidsubabyphoto/reviews'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => setCategory(null)}
            to={'/blog'}
          >
            {t('blog.allPosts')}
          </ThemeLink>
          <ThemeLink
            onClick={() => setCategory('tips')}
            to={'/blog'}
          >
            {t('blog.category.tips')}
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('https://www.facebook.com/kidsubabyphoto')}
            to={'https://www.facebook.com/kidsubabyphoto'}
          >
            {t('blog.collaboration')}
          </ThemeLink>
          <ThemeLink
            onClick={() => setCategory('review')}
            to={'/blog'}
          >
            {t('blog.category.review')}
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('https://www.facebook.com/kidsubabyphoto')}
            to={'https://www.facebook.com/kidsubabyphoto'}
          >
            {t('blog.category.news')}
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid
              data={filteredBlogData}
              hideReadMoreOnWeb
              showExcerpt
            />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
