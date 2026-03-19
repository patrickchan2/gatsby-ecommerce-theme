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
              category={'Photography Tips'}
              title={'The Best Time for 6 to 12 Month Baby Photo Shooting'}
              image={toOptimizedImage('/bloghero.jpg')}
              alt={'Baby photoshoot'}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  There's a science to capturing your baby at their most radiant.
                  Discover the expert-backed timing, sleep prep, and morning
                  magic that turns a good photoshoot into an unforgettable one.
                </p>
                <p className={styles.blogParagraph}>
                  Every parent wants that shot — the one where their baby is
                  glowing, giggling, wide-eyed, and absolutely irresistible. But
                  great baby photography isn't just about a great photographer or
                  a beautiful set. It starts the night before, with something as
                  simple as bedtime.
                </p>
                <p className={styles.blogParagraph}>
                  Between 6 and 12 months, babies go through one of the most
                  developmentally rich phases of their lives. Their personalities
                  emerge, their smiles are infectious, and their curiosity is at
                  its most photogenic. But they are also exquisitely sensitive to
                  sleep, hunger, and stimulation. Getting the timing right makes
                  the difference between a fussy, tearful session and a glorious
                  collection of images you'll treasure forever.
                </p>
                <p className={styles.blogParagraph}>
                  At Kids U Baby Photography Studio, we've photographed hundreds of babies
                  in this age window, and we've learned exactly when the magic
                  happens — and why.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  Step 1 — The Night Before
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>Sleep: The Foundation of Every Great Photoshoot</strong>
                  <br />
                  The American Academy of Pediatrics recommends that babies aged 6
                  to 12 months sleep between 12 to 16 hours per day, including
                  naps. Nighttime sleep at this stage should ideally be 10 to 12
                  hours of uninterrupted rest.
                </p>
                <p className={styles.blogParagraph}>
                  <strong>Recommended Bedtime: 7:00 PM.</strong> For a photoshoot
                  scheduled at 11 AM, aim to have your baby in bed by 7:00–7:30
                  PM the evening before. This gives your little one the full
                  10–12 hours of restorative sleep their developing brain and
                  body needs — and sets them up to wake naturally, happily, and
                  full of energy around 7:00–8:00 AM.
                </p>
                <p className={styles.blogParagraph}>
                  Resist the temptation to keep baby up late, hoping they'll
                  "sleep in." Sleep science tells us the opposite is true for
                  infants — an overtired baby is more likely to wake early, sleep
                  poorly, and be irritable the next day. Early to bed truly means
                  happy and bright in the morning.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  Step 2 — Morning of the Shoot
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>Feeding: The 70% Rule That Changes Everything</strong>
                  <br />
                  Once your baby wakes up, the instinct is to give them a full
                  feed — but in the context of a photoshoot, we gently recommend
                  a different approach.
                </p>
                <p className={styles.blogParagraph}>
                  Offer your baby about 70% of their usual morning feed — enough
                  to satisfy hunger and maintain stable blood sugar, but not so
                  much that they become drowsy or experience the sluggishness
                  that comes with a very full tummy. For breastfed babies, this
                  means a slightly shorter feed on each side. For bottle-fed
                  babies, reduce the typical morning volume by about a quarter.
                </p>
                <p className={styles.blogParagraph}>
                  Why not a full feed? A fully satiated baby often enters a state
                  of comfortable drowsiness. Their body diverts energy toward
                  digestion, cortisol drops, and they become content but sleepy —
                  the opposite of the bright-eyed, expressive energy we want in
                  photos. A partial feed keeps blood glucose at an ideal level:
                  high enough for energy and mood, low enough to keep them alert
                  and interactive.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  Step 3 — 1 Hour Before Arrival
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>Studio Prep: What to Pack & Do in the Final Hour</strong>
                </p>
                <ul
                  style={{
                    listStyle: 'disc',
                    paddingLeft: '20px',
                    marginBottom: '48px',
                  }}
                >
                  <li>Change into a fresh nappy/diaper 30 mins before leaving</li>
                  <li>Dress baby in a comfortable, loose outfit for travel</li>
                  <li>Pack your feeding kit and favourite snacks</li>
                  <li>Bring 1–2 comfort items (toy, muslin, etc.)</li>
                  <li>Keep the car ride calm and quiet</li>
                  <li>Arrive 10 minutes early to settle in</li>
                  <li>Bring a spare outfit for baby and yourself</li>
                </ul>

                <h2 className={styles.blogSubHeader}>
                  The Science: Why 11 AM Is the Golden Hour
                </h2>
                <p className={styles.blogParagraph}>
                  This isn't intuition — it's infant physiology. When a baby
                  wakes at around 7:30–8:00 AM and arrives at the studio around
                  10:45 AM for an 11:00 AM session, they are precisely 3 hours
                  post-wake-up. At this point, cortisol (alertness) peaks, blood
                  glucose is stable, and they are in their prime social
                  engagement window.
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
                  Frequently Asked Questions
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>What if my baby normally wakes up later than 8 AM?</strong>
                  <br />
                  That's perfectly fine — simply adjust the session time to 3
                  hours after their natural wake-up. When booking, let us know
                  your baby's typical wake time and we'll schedule accordingly.
                </p>
                <p className={styles.blogParagraph}>
                  <strong>
                    Should I bring solid foods if my baby has started weaning?
                  </strong>
                  <br />
                  Yes, absolutely. If your baby is on solids, offer a small,
                  familiar breakfast at home (around 70% of normal) and bring a
                  small container of their favourite snack for mid-session.
                </p>
                <p className={styles.blogParagraph}>
                  <strong>How long does a 6–12 month session take?</strong>
                  <br />
                  We schedule 90 minutes for milestone sessions. This gives us a
                  beautiful working window before nap pressure builds, with time
                  for outfit changes, a mid-session feed if needed, and plenty of
                  unhurried, playful moments.
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