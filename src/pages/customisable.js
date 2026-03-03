import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './customisable.module.css';
import { toOptimizedImage } from '../helpers/general';
const CustomisablePage = (props) => {
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
          title={`Kidsbaby \n A HK photography studio since 2019`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
            Welcome to Kids U Baby Photography — a family-owned portrait studio based in Hong Kong, specializing in newborn, baby, kids, and family photography since 2019.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first T-shirts and spent decades
              perfecting the feel of the cotton. Today we are the only brand
              that makes T-shirts in its own factory in the UK. And we do this
              in the same factory we have occupied since 1937.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.jpg')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
              Over the years, we've had the joy of working with over 400 families, capturing precious milestones from a baby's very first days to growing family portraits. Every photo we deliver is a reflection of our commitment to quality, care, and the little details that make your family uniquely yours. We started this studio as parents ourselves — and that changes everything. Knowing firsthand how quickly children grow and how fleeting these moments are, we approach every session with patience, genuine warmth, and a real understanding of how kids behave. We know how to make children feel comfortable and relaxed, so their true personality naturally shines through in every shot. No forced smiles. No stressful sessions. Just real, beautiful moments.

              </p>
              
              <img alt={'founder'} src={toOptimizedImage('/about2.jpg')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Our studio is housed in a Grade A commercial building, offering a quiet, clean, and cozy environment that parents and little ones alike feel at home in. We've carefully designed the space to be safe, comfortable, and fully equipped — so you can focus on enjoying the experience while we take care of everything else.

              </p>
              <p>
              At Kids U Baby Photography, we're not just photographers — we're parents who truly get it. If you're looking for a professional kids and family photographer in Hong Kong who will treat your family with heart, we'd love to be part of your story.

              </p>
              <p>
              Book your session today and let's create something beautiful together.
              </p>
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

export default CustomisablePage;
