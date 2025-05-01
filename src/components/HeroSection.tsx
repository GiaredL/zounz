import React, { FC, useState, useEffect, useCallback } from 'react'
import styles from './HeroSection.module.scss'
import { morpho } from '../assets'
import SearchBar, { ArtistData } from './SearchBar'
import { ITestUsers } from '../types/models/ITestUsers'
import SongItem from './SongItem'
import { testUsers } from '../testUsers'
import { useSearch } from '../context/useSearch'

interface HeroSectionProps {
  title?: string
  subheading?: string
  description?: string
  children?: React.ReactNode
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, subheading, children }) => {
  const [spotifyArtist, setSpotifyArtist] = useState<ArtistData | null>(null)
  const [selectedTestArtist, setSelectedTestArtist] = useState<ITestUsers | null>(null)
  const { selectedArtist } = useSearch()

  // Handle chart selection
  useEffect(() => {
    if (selectedArtist) {
      setSelectedTestArtist(selectedArtist)
      setSpotifyArtist(null)
    }
  }, [selectedArtist])

  // Handle Spotify search
  const handleArtistFound = useCallback((artist: ArtistData | null) => {
    if (!artist) {
      setSpotifyArtist(null)
      setSelectedTestArtist(null)
      return
    }

    setSpotifyArtist(artist)
    const matchingTestArtist = testUsers.find(testArtist =>
      testArtist.name.toLowerCase().includes(artist.name.toLowerCase())
    )
    setSelectedTestArtist(matchingTestArtist || null)
  }, [])

  const renderInitialView = () => (
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
  )

  const renderArtistView = () => {
    if (!spotifyArtist && !selectedTestArtist) return renderInitialView()

    const currentArtist = spotifyArtist || selectedTestArtist
    if (!currentArtist) return renderInitialView()

    return (
      <div className={styles.artist}>
        <div className={styles.artistDetails}>
          <div
            className={styles.artistBody}
            style={{
              backgroundImage: `url(${spotifyArtist ? spotifyArtist.images[0]?.url : selectedTestArtist?.image})`,
              height: '200px'
            }}
          >
            <h1>{currentArtist.name}</h1>
            <div className={styles.artistInfo}>
              {spotifyArtist ? (
                <>
                  <p>Followers: {spotifyArtist.followers.total.toLocaleString()}</p>
                  <p>Popularity: {spotifyArtist.popularity}/100</p>
                </>
              ) : (
                selectedTestArtist && (
                  <>
                    <p>Streams: {selectedTestArtist.streams.toLocaleString()}</p>
                    <p>
                      Location: {selectedTestArtist.city}, {selectedTestArtist.state}
                    </p>
                  </>
                )
              )}
            </div>
          </div>
          <div className={styles.artistSongs}>
            {selectedTestArtist?.songs?.length ? (
              selectedTestArtist.songs.map(song => (
                <SongItem key={song.id} selectedArtist={selectedTestArtist} song={song} />
              ))
            ) : (
              <p>No songs available</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return <div className={styles.hero}>{renderArtistView()}</div>
}

export default HeroSection
