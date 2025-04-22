import React, { FC, useState } from 'react'
import styles from './HeroSection.module.scss'
import { morpho } from '../assets'
import SearchBar, { ArtistData } from './SearchBar'
import { ITestUsers } from '../types/models/ITestUsers'
import SongItem from './SongItem'
import { testUsers } from '../testUsers'

interface HeroSectionProps {
  title?: string
  subheading?: string
  description?: string
  children?: React.ReactNode
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, subheading, children }) => {
  const [spotifyArtist, setSpotifyArtist] = useState<ArtistData | null>(null)
  const [selectedTestArtist, setSelectedTestArtist] = useState<ITestUsers | null>(null)

  // When a Spotify artist is found, find the corresponding test artist
  const handleArtistFound = (artist: ArtistData | null) => {
    setSpotifyArtist(artist)
    if (artist) {
      const matchingTestArtist = testUsers.find(testArtist =>
        testArtist.name.toLowerCase().includes(artist.name.toLowerCase())
      )
      setSelectedTestArtist(matchingTestArtist || null)
    } else {
      setSelectedTestArtist(null)
    }
  }

  return (
    <div className={styles.hero}>
      {!spotifyArtist ? (
        <div className={styles.hello}>
          <img src={morpho} alt="morpho" />
          <div className={styles.headlines}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>{subheading}</p>
            <SearchBar onArtistFound={handleArtistFound} />
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.artist}>
          <div className={styles.artistDetails}>
            <div className={styles.artistBody} style={{ backgroundImage: `url(${spotifyArtist.images[0]?.url})` }}>
              <h1>{spotifyArtist.name}</h1>
              <div className={styles.artistInfo}>
                <p>Followers: {spotifyArtist.followers.total.toLocaleString()}</p>
                <p>Popularity: {spotifyArtist.popularity}/100</p>
              </div>
            </div>
            <div className={styles.artistSongs}>
              {selectedTestArtist?.songs ? (
                selectedTestArtist.songs.map(song => (
                  <SongItem key={song.id} selectedArtist={selectedTestArtist} song={song} />
                ))
              ) : (
                <p>No songs available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection
