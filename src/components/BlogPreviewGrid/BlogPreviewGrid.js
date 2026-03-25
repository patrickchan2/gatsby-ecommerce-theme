import React, { useContext } from 'react';
import * as styles from './BlogPreviewGrid.module.css';

import BlogPreview from '../BlogPreview';
import { LanguageContext } from '../../context/LanguageContext';

const BlogPreviewGrid = (props) => {
  const { data, hideReadMoreOnWeb, showExcerpt } = props;
  const { t, language } = useContext(LanguageContext);

  const getLocalizedText = (item, key) => {
    const i18n = item[`${key}I18n`];
    return (i18n && i18n[language]) || item[key] || '';
  };

  return (
    <div className={styles.root}>
      {data &&
        data.map((blog, index) => {
          return (
            <BlogPreview
              key={index}
              image={blog.image}
              altImage={blog.alt}
              title={getLocalizedText(blog, 'title')}
              link={getLocalizedText(blog, 'link')}
              category={blog.category ? t(`blog.category.${blog.category}`) : ''}
              excerpt={getLocalizedText(blog, 'excerpt')}
              hideReadMoreOnWeb={hideReadMoreOnWeb}
              showExcerpt={showExcerpt}
            />
          );
        })}
    </div>
  );
};

export default BlogPreviewGrid;
