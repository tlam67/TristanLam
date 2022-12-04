import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NextLink from "next/link";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollLink } from "../components/ScrollLink";

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <Head>
        <title>Tristan Lam</title>
        <meta name="description" content="Created by Tristan Lam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tristan Lam
        </h1>
        <h3>Computer Science @ UWaterloo </h3>
        <ScrollLink href={"#about"}>
          <FontAwesomeIcon icon={faAngleDown} size="5x" className="mt-2" id="down-arrow"/>
        </ScrollLink>
      </main>
    </div>
  )
}
