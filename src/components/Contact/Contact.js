import React, { useState, useContext } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';
import { LanguageContext } from '../../context/LanguageContext';

const Contact = (props) => {
  const { t } = useContext(LanguageContext);
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>{t('contact.heading')}</h4>
        <p>{t('contact.intro1')}</p>
        <p>{t('contact.intro2')}</p>
      </div>

      <div className={styles.section}>
        <h4>{t('contact.phone.title')}</h4>
        <p>+852 97258413</p>
        <p>{t('contact.phone.hours')}</p>
      </div>

      <div className={styles.section}>
        <h4>{t('contact.email.title')}</h4>
        <p>{t('contact.email.body')}</p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={t('contact.form.name')}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={t('contact.form.phone')}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={t('contact.form.email')}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={t('contact.form.comments')}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            {t('contact.form.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
