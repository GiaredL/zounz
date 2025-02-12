import React, { FC } from 'react'
import styles from './HeroSection.module.scss'
import { morpho } from '../assets'
import { ITestUsers } from '../types/models/ITestUsers'
import SongItem from './SongItem'

interface HeroSectionProps {
  title?: string
  subheading?: string
  description?: string
  children?: React.ReactNode
  selectedArtist?: ITestUsers | null
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, subheading, children, selectedArtist }) => {
  return (
    <div className={styles.hero}>
      {!selectedArtist ? (
        <div className={styles.hello}>
          <img src={morpho} alt="morpho" />
          <div className={styles.headlines}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>{subheading}</p>
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.artist}>
          <div className={styles.artistDetails}>
            <div>
              <h1>{selectedArtist.name}</h1>
              <div className={styles.artistInfo}>
                <div className={styles.artistLocation}>
                  <p>{selectedArtist.city}</p>
                  <p>{selectedArtist.state}</p>
                </div>
                <p>Streams: {selectedArtist.streams}</p>
              </div>
            </div>
            <div className={styles.artistSongs}>
              {selectedArtist.songs.map(song => (
                <SongItem key={song.id} selectedArtist={selectedArtist} song={song} />
              ))}
            </div>
          </div>
          <div className={styles['artist-bio']}>
            <img src={selectedArtist.image} alt={selectedArtist.name} />
            <div className={styles['artist-info']}>
              <h3>{selectedArtist.name}</h3>
              <p>{selectedArtist.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection
