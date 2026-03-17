import React from 'react';
import * as styles from './best-time-of-photoshoot.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const BestTimeOfPhotoshootPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'When is the Best Time for a Baby Photoshoot?'}
              image={'/blogFeatured.png'}
              alt={'Baby photoshoot'}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Deciding on the perfect time for your baby's first photoshoot
                  can be tricky. From sleepy newborns to sitting-up smilers,
                  each stage offers unique and precious moments to capture.
                  We'll guide you through the best ages to schedule your
                  session.
                </p>
                <p className={styles.blogParagraph}>
                  The "newborn" stage, typically within the first 14 days of
                  life, is a magical time for photos. Babies are still very
                  sleepy, curly, and can be posed in those adorable, womb-like
                  positions. They are less likely to be disturbed by the camera
                  and session flow. If you're dreaming of those peaceful,
                  sleeping baby portraits, this is the golden window.
                </p>
                <p className={styles.blogParagraph}>
                  We recommend booking your newborn session during your second
                  or third trimester to ensure availability. We'll pencil in
                  your due date and then schedule the firm date once your little
                  one arrives.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img
                    src={toOptimizedImage('/collections/collection1.jpg')}
                    alt={'newborn baby photoshoot'}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={toOptimizedImage('/collections/collection2.jpg')}
                    alt={'baby smiling photoshoot'}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>
                  Beyond the Newborn Stage
                </h2>
                <p className={styles.blogParagraph}>
                  If you miss the two-week window, don't worry! The "three to
                  four months" stage is fantastic for capturing your baby's
                  budding personality. At this age, they can hold their head up,
                  make eye contact, and give us beautiful, gummy smiles. Tummy
                  time photos are a favorite during these sessions.
                </p>
                <p className={styles.blogParagraph}>
                  The "sitter" session, around six to nine months, is another
                  milestone-packed age. Your baby can likely sit up unassisted,
                  which opens up a whole new world of interactive poses and
                  props. We can capture their curious expressions, chubby rolls,
                  and playful interactions. They are often full of giggles and
                  personality at this stage.
                </p>
                <p className={styles.blogParagraph}>
                  Ultimately, the best time for a photoshoot is whenever you
                  feel ready to capture the memories of your baby's current
                  stage. Each month brings new developments and new reasons to
                  celebrate.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BestTimeOfPhotoshootPage;