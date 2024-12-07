// src/pages/mission.js
import Head from 'next/head';

export default function Mission() {
  return (
    <>
      <Head>
        <title>Our Mission - Business Career Compass</title>
        <meta name="description" content="Discover the mission of Business Career Compass to empower professionals and students in their careers." />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.title}>Our Mission</h1>
        <p style={styles.description}>
          At Business Career Compass, our mission is to guide aspiring professionals and students towards successful careers in business. 
          We aim to provide resources, mentorship, and opportunities that empower individuals to navigate their career journeys with confidence.
        </p>
      </main>
    </>
  );
}

const styles = {
  main: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    color: '#555',
  },
};