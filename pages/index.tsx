// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>S.M Industries</title>
        <meta name="description" content="S.M Industries - Metal Fabrication, Scaffolding, and Other Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
          <h1>Welcome to S.M Industries</h1>
          <p>Your one-stop solution for metal fabrication and scaffolding services</p>
        </section>

        <section className={styles.servicesGrid}>
          <h2>Our Services</h2>
          <div className={styles.serviceItem}>
            <h3>Industrial Shed Fabrication</h3>
            <p>Details about Industrial Shed Fabrication.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Cup Lock Scaffolding</h3>
            <p>Details about Cup Lock Scaffolding.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Scaffolding & Form Work Fittings</h3>
            <p>Details about Scaffolding & Form Work Fittings.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Acrow Span</h3>
            <p>Details about Acrow Span.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Column Box</h3>
            <p>Details about Column Box.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Shuttering Plates</h3>
            <p>Details about Shuttering Plates.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Telescopic Probes</h3>
            <p>Details about Telescopic Probes.</p>
          </div>
        </section>

        <section className={styles.recentWorkGrid}>
          <h2>Recent Works</h2>
          <div className={styles.workItem}>
            <Image src="/images/recent-work1.jpg" alt="Recent Work 1" width={300} height={200} />
            <p>Recent Work 1 Description</p>
          </div>
          <div className={styles.workItem}>
            <Image src="/images/recent-work2.jpg" alt="Recent Work 2" width={300} height={200} />
            <p>Recent Work 2 Description</p>
          </div>
          <div className={styles.workItem}>
            <Image src="/images/recent-work3.jpg" alt="Recent Work 3" width={300} height={200} />
            <p>Recent Work 3 Description</p>
          </div>
        </section>

        <section className={styles.newsGrid}>
          <h2>News</h2>
          <div className={styles.newsItem}>
            <h3>News Title 1</h3>
            <p>News Description 1</p>
          </div>
          <div className={styles.newsItem}>
            <h3>News Title 2</h3>
            <p>News Description 2</p>
          </div>
          <div className={styles.newsItem}>
            <h3>News Title 3</h3>
            <p>News Description 3</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
