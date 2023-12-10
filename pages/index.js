import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <title>Ninja API | Home</title>
          <meta name="keywords" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Aldo ls nih bos lorem  nihh text Est non dolor quis deserunt ex incididunt ea. Voluptate incididunt nisi eu quis amet eu amet officia aliquip laborum. Nostrud duis non amet in do. Reprehenderit minim non nisi incididunt laborum voluptate qui voluptate. Mollit ut nostrud proident cupidatat officia nisi. Ut velit tempor et exercitation quis. Lorem laborum occaecat consectetur id in amet in duis nostrud eu eiusmod aute esse excepteur.</p>
      <Link href='/ninjas'
      className={styles.btn}>
        See Ninja Listing
      </Link>
    </>
  )
}
