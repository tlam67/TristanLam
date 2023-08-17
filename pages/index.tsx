import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollLink } from "../components/ScrollLink";
import { homeData } from '../portfolioInfo';

function Title() {
  if (homeData.subsubtitle != null && homeData.subsubtitle != '') {
    return (
      <>
        <h1 className={styles.title}>
          {homeData.title}
        </h1>
        <h3>
          {homeData.subtitle}
        </h3>
        <p style={{'fontSize': '14px'}}>
          {homeData.subsubtitle}
        </p>
      </>
    )
  }

  return (
    <>
      <h1 className={styles.title}>
        {homeData.title}
      </h1>
      <h3>
        {homeData.subtitle}
      </h3>
    </>
  )
  
}

export default function Home() {


  return (
    <div className={styles.container} id="home">
      <Head>
        <title>{homeData.websiteTitle}</title>
        <meta name="description" content="Created by Tristan Lam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title/>
        <ScrollLink href={"#about"}>
          <FontAwesomeIcon icon={faAngleDown} size="5x" className="mt-2" id="down-arrow"/>
        </ScrollLink>
      </main>
    </div>
  )
}
