import React, { FC } from 'react'
import styles from './HeroSection.module.scss'
import { morpho } from '../assets'

interface HeroSectionProps {
  title?: string
  subheading?: string
  description?: string
  children?: React.ReactNode
  selectedArtist?: any
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
          <img src={selectedArtist.image} alt={selectedArtist.name} />
          <div className={styles.artistDetails}>
            <h1>{selectedArtist.name}</h1>
            <p>Streams: {selectedArtist.streams}</p>
            <h2>{selectedArtist.state}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection
