import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Your query is submitted and you will get a reply from us.');
        event.currentTarget.reset();
      } else {
        setMessage('There was an error submitting your query. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('There was an error submitting your query. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Us - S.M. Industries</title>
        <meta name="description" content="Contact S.M. Industries" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Contact Us</h1>
        {message && <div className={styles.successMessage}>{message}</div>}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" name="comment" required></textarea>
          </div>
          <button className={styles.buttonSubmit} type="submit">Submit</button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
