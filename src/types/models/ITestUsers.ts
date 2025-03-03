import { ITestSong } from './ITestSong'

export interface ITestUsers {
  id: number
  name: string
  state: string
  city: string
  streams: number
  location: { lat: number; lng: number }
  image: string
  bio: string
  songs: ITestSong[]
}
