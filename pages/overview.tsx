import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Overview.module.css';
import Link from 'next/link';

const Overview: React.FC = () => (
  <div>
    <Head>
      <title>Overview - S.M. Industries</title>
      <meta name="description" content="Overview of services provided by S.M. Industries" />
    </Head>

    <Header />

    <main className={styles.main}>
      <h1>Overview</h1>
      <div className={styles.servicesList}>
        <div className={styles.service}>
          <h2>Industrial Shed Fabrication</h2>
          <p>Overview of Industrial Shed Fabrication...</p>
          <Link href="/services/industrial-shed">
            Learn More
          </Link>
        </div>
        {/* Add more services here */}
      </div>
    </main>

    <Footer />
  </div>
);

export default Overview;
