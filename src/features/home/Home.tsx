import styles from './Home.module.scss'
import HeroSection from '../../components/HeroSection'
import Dashboard from '../Dashboard'
import { useState } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState<ITestUsers | null>(null)

  return (
    <>
      <div className={styles.home}>
        <Dashboard setSelectedArtist={setSelectedArtist} />
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
