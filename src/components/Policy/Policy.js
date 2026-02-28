import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Booking Confirmation </h3>
        <p>
        A booking is only confirmed upon our written confirmation of the session details and receipt of the required deposit. The deposit must be paid within 3 days of receiving our confirmation, or the booking will be released automatically.
        </p>
        
      </div>

      <div className={styles.section}>
        <h3>2. Deposit & Payment</h3>
        <p>
        The deposit is strictly non-refundable under any circumstances, including booking cancellations. The remaining balance must be settled in full immediately upon completion of the photo session.
        </p>
        
      </div>

      
      <div className={styles.section}>
        <h3>3. Rescheduling Policy</h3>
        <p>
        Each booking is entitled to <b>one (1)</b> complimentary reschedule, provided that a minimum of <b>3 days'</b> advance notice is given before the original booking date. Rescheduling requests made within 3 days of the session will not be eligible for the complimentary reschedule.
        </p>
        <p>
          Please note that rescheduling due to Black Rainstorm Warning or Typhoon Signal No. 8 (or above) is handled separately and does not count toward your complimentary reschedule. In such cases, we will work with you to arrange an alternative date at no additional cost.
        </p>
      </div>
       <div className={styles.section}>
        <h3>4. Session Overtime</h3>
        <p>
        Each session is booked for a fixed duration. Should the shoot exceed the agreed booking period, an additional charge of HK$350 per half hour (or part thereof) will apply and must be settled on the day of the session.
        </p>        
      </div>
      <div className={styles.section}>
        <h3>5. Use of Photos for Promotion</h3>
        <p>
        Kids U Baby Photography reserves the right to use session photos for marketing and promotional purposes, including but not limited to social media, website, and print materials. If you prefer your photos to remain private and not used for promotion, please notify us in writing at the time of your booking enquiry. We fully respect your privacy and will honor all such requests.
        </p>        
      </div>
      <div className={styles.section}>
        <h3>6. Satisfaction Guarantee</h3>
        <p>
        We are committed to delivering high-quality photos you'll love. In the unlikely event that you are not satisfied with the final images, a partial refund may be arranged after deducting applicable studio rental and administration fees. Refund requests must be raised within 3 days of receiving the final photos. Each case will be reviewed individually and fairly.
        </p>        
      </div>
      
    </div>
  );
};

export default Policy;
