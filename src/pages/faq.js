import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.jpg'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            
            <div className={styles.subSection}>
              <h3>What is the workflow for a photo shooting session?</h3>
              <p>Great question — here's a simple step-by-step so you'll always know what to expect:</p>
              <ul>
                <li><strong>After booking is confirmed</strong> — Select your preferred themes, outfits, and any additional props you'd like included. We love helping you personalise every detail!</li>
                <li><strong>2 days before your session</strong> — We'll reach out to confirm the date, time, transport arrangements, and ask if your little one has any special needs so we can prepare accordingly.</li>
                <li><strong>On the day of the shoot</strong> — Please make sure your baby is well-rested, fed (but not too full!), and in a comfortable mood before arriving.</li>
                <li><strong>Arriving early</strong> — We recommend arriving <strong>10 minutes early</strong> so your child has time to get used to the studio environment and settle in before we begin.</li>
              </ul>
              <li><strong>💛 Pro Tip: </strong>Avoid scheduling the session right after naptime or when your baby is usually fussy. A happy, relaxed baby makes for the most beautiful photos!</li>
            </div>
            <div className={styles.subSection}>
              <h3>My baby tends to cry in new environments. Will they be able to complete the whole shoot?</h3>
                <p>Absolutely — please don't worry! Our photographers are highly experienced with babies and young children, and they know exactly how to create a calm, comfortable atmosphere for even the most sensitive little ones.</p>
                <p>Whether your child is giggling, curious, or has a few teary moments, we believe <strong>every expression tells a beautiful story</strong>. Some of our most cherished shots are of babies caught mid-emotion — pure, authentic, and utterly precious.</p>
                <p>We'll take our time, go at your child's pace, and make sure the whole experience feels relaxed and fun — for them and for you!</p>
            </div>
          </div>

          <div className={styles.section}>
            
            <div className={styles.subSection}>
              <h3>How will my photos be delivered after the session?</h3>
              <p>We want your memories to reach you in the best possible quality! Here's how delivery works:</p>
              <ul>
                <li><strong>Digital files</strong> — All edited photos are delivered as <strong>high-resolution JPG files</strong>, downloadable from your own private, password-protected gallery. Easy and secure!</li>
                <li><strong>Physical keepsakes</strong> — If your package includes printed photos or a USB drive, we'll arrange doorstep delivery via <strong>SF Express courier</strong> — no need to come to us.</li>
              </ul>
              <li><strong>📦 Reminder:</strong> Delivery contents depend on your chosen package. Not sure what's included? Feel free to ask us and we'll walk you through it!</li>
            </div>
            <div className={styles.subSection}>
              <h3>How long does a typical photo session take?</h3>
              <p>A typical session runs between <strong>1 to 2 hours</strong>, depending on your package and how many themes or outfit changes are included. For newborns, we allow extra time as they often need feeding and settling breaks — patience is part of our process!</p>
              <p>We never rush your session. Our goal is beautiful, natural photos — and that sometimes means taking a little breather so your child can recharge. 😊</p>
            </div>
            <div className={styles.subSection}>
              <h3>What if I need to reschedule or cancel my booking?</h3>
              <p>We completely understand — little ones can be unpredictable! If you need to reschedule, please <strong>let us know at least 48 hours in advance</strong> so we can arrange a new date that works for your family.</p>
              <p>For cancellations, please note that the <strong>deposit is non-refundable</strong>. This helps us reserve your time slot and prepare everything specially for your session. If your circumstances change, we'd always encourage you to <strong>reschedule rather than cancel</strong> </p>
              <li><strong>📋 Good to Know:</strong> Life with a little one is full of surprises! Reach out to us as early as possible if your plans change and we'll do our best to find a solution together.</li>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
