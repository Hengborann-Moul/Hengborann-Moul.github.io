import ProfilePic from '@/components/profile-pic/profile-pic'
import TypewriterTitle from '@/components/typewriter-title/typewriter-title'
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
        <TypewriterTitle />
      </div>
      {/* TODO: Add Icon to blog page. */}
      {/* <div>Blog Icon</div> */}
    </main>
  )
}
