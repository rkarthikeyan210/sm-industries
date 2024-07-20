import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About: React.FC = () => (
  <div>
    <Head>
      <title>About Us - S.M. Industries</title>
      <meta name="description" content="Learn more about S.M. Industries" />
    </Head>

    <Header />

    <main className={styles.main}>
      <h1>About Us</h1>
      {/* Add content similar to the example page */}
    </main>

    <Footer />
  </div>
);

export default About;
