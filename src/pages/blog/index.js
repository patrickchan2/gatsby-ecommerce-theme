import React, { useState } from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const [category, setCategory] = useState(null);
  const blogData = generateMockBlogData(6);
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
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('https://www.facebook.com/kidsubabyphoto')}
            to={'https://www.facebook.com/kidsubabyphoto'}
          >
            Design
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('https://www.facebook.com/kidsubabyphoto')}
            to={'https://www.facebook.com/kidsubabyphoto'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => setCategory('review')}
            to={'/blog'}
          >
            Review
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('https://www.facebook.com/kidsubabyphoto')}
            to={'https://www.facebook.com/kidsubabyphoto'}
          >
            News
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
