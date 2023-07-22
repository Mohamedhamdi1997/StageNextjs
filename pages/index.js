import Head from 'next/head'
import Image from 'next/image'
import { Inter, Noto_Sans_Telugu, Splash } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CustomComponents from "../components/banner/Custom-components";


export default function Home(data) {
  return ( 
    <>
    <Head>
      <title>Bootstrap</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</link>
    </Head>
      <div>
      <CustomComponents />
      </div>
    </>
  )
}
