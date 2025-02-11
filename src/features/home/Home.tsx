import styles from './Home.module.scss'
import HeroSection from '../../components/HeroSection'
import Dashboard from '../Dashboard'
import { useState } from 'react'

interface Artist {
  name: string
  streams: string
  image: string
}

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  return (
    <>
      <div className={styles.home}>
        <Dashboard setSelectedArtist={setSelectedArtist} selectedArtist={selectedArtist} />
        <HeroSection
          title={
            selectedArtist ? selectedArtist.name : 'Hey, welcome to zounz, the place to discover local artists!'
          }
          description={
            selectedArtist
              ? `Streams: ${selectedArtist.streams}`
              : 'Try clicking on an artist to see their profile, or check out the about page!.'
          }
          selectedArtist={selectedArtist}
        />
      </div>
    </>
  )
}

export default Home
