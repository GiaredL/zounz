import { FC, useRef, useState } from 'react'
import { ITestUsers } from '../types/models/ITestUsers'
import styles from './SongItem.module.scss'
import { ITestSong } from '../types/models/ITestSong'

interface SongItemProps {
  selectedArtist: ITestUsers | null
  song: ITestSong
}

const SongItem: FC<SongItemProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={styles['song-item']}>
      <div className={styles['song-image']}>
        <img src={song.image} alt={song.title} />
      </div>
      <div className={styles['song-info']}>
        <h2>{song.title}</h2>
        <p className={styles.album}>{song.album}</p>
        <p className={styles.streams}>{song.streams.toLocaleString()} streams</p>
        <button className={styles['play-button']} onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <audio ref={audioRef} src={song.audioUrl} onEnded={() => setIsPlaying(false)} />
      </div>
    </div>
  )
}

export default SongItem
