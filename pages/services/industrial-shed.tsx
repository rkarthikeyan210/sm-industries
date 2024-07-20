import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Overview.module.css';
import Link from 'next/link';

const Overview: React.FC = () => (
  <div>
    <Head>
      <title>Industrial Shed Fabrication - S.M. Industries</title>
      <meta name="description" content="Detailed description of Industrial Shed Fabrication..." />
    </Head>

    <Header />

    <main className={styles.main}>
      <h1>Industrial Shed Fabrication</h1>
      <p>Detailed description of Industrial Shed Fabrication</p>
      {/* Add recent works and reviews */}
    </main>

    <Footer />
  </div>
);

export default Overview;
