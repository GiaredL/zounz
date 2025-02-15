import { ITestUsers } from './types/models/ITestUsers'
import { forDoris, curt, doris, seasons, yesterdaytonight } from './assets'

export const testUsers: ITestUsers[] = [
  {
    id: 1,
    name: 'Naked Angel',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 1523983,
    location: { lat: 40.7608, lng: 111.891 },
    image: curt,
    bio: 'Naked Angel is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: doris
      }
    ]
  },
  {
    id: 2,
    name: 'Seasons',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 1694432983,
    location: { lat: 40.7608, lng: -111.891 },
    image: seasons,
    bio: 'Seasons is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'Yesterday Tonight',
        image: yesterdaytonight,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'She Doesnt Love You',
        image: yesterdaytonight,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'Time',
        image: yesterdaytonight,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'Yesterday Tonight',
        image: yesterdaytonight,
        album: 'Xalo Mach 1 Feat. GiaredL',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 23,
    name: 'CurtThaGr8',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 34222222383,
    location: { lat: 40.7608, lng: -111.891 },
    image: curt,
    bio: 'CurtThaGr8 is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: doris
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: doris
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 25,
    name: 'Donny Ice',
    state: 'UT',
    city: 'Salt Lake City',

    streams: 1534634983,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'Donny Ice is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 21,
    name: 'Convicium',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 23426983,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'Convicium is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 13,
    name: 'Jstone',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 123452983,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'Jstone is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 61,
    name: 'CJ Sleeves',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 43523453,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'CJ Sleeves is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 31,
    name: 'GiaredL',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 32135123,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'GiaredL is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 14,
    name: 'Tui',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 5323233,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'Tui is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: []
  },
  {
    id: 15,
    name: 'Mr. Wildfire',
    state: 'UT',
    city: 'Salt Lake City',
    streams: 183,
    location: { lat: 40.7608, lng: -111.891 },
    image: forDoris,
    bio: 'Mr. Wildfire is a solo artist based out of Salt Lake City, Utah. They are known for their unique sound and style. Basically the goat.',
    songs: [
      {
        id: 1,
        title: 'For Doris',
        image: forDoris,
        album: 'For Doris',
        streams: 1523983,
        audioUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  }
]
