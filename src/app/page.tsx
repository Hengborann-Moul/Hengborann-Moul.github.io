import ProfilePic from '@/components/profile-pic/profile-pic'
import styles from './page.module.css'

import Particle from '@/components/particles/particles'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hengborann Moul',
  icons: '/images/tech-icons/ubuntu-icon.svg',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Particle />
        <ProfilePic />
        <h1>Hengborann Moul</h1>
        <h2>Software Engineer</h2>
      </div>
      {/* TODO: Add Icon to blog page. */}
      {/* <div>Blog Icon</div> */}
    </main>
  )
}
