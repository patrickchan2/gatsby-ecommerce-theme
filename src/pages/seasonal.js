import React, { useState, useEffect } from 'react';
import * as styles from './seasonal.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData, getProductCountByTag } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [loadedCount, setLoadedCount] = useState(6);
  const totalItems = getProductCountByTag('seasonal');
  const shownCount = Math.min(loadedCount, totalItems);
  const hasMore = loadedCount < totalItems;
  const data = generateMockProductData(shownCount, 'seasonal');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  const handleLoadMore = () => {
    setLoadedCount((prev) => Math.min(prev + 6, totalItems));
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/', label: 'Seasonal' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Seasonal Themes`}
          subtitle={
            'Look to our seasonal themes for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>{totalItems} items</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>{totalItems} items</span>
            <ProductCardGrid data={data} showPrice={false}></ProductCardGrid>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>{shownCount} of {totalItems}</span>
            {hasMore && (
              <Button fullWidth level={'secondary'} onClick={handleLoadMore}>
                LOAD MORE
              </Button>
            )}
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
