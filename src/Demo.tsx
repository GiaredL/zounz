// import React, { useState, useEffect } from 'react'
// import { CLIENT_ID, CLIENT_SECRET } from './constants'

// const TrackIds: React.FC = () => {
//   const [artistName, setArtistName] = useState('')
//   const [artistId, setArtistId] = useState('')
//   const [albumIds, setAlbumIds] = useState<string[]>([])
//   const [foundTrackIds, setFoundTrackIds] = useState<string[]>([])
//   const [error, setError] = useState<string | null>(null)
//   const [popularityScore, setPopularityScore] = useState<number>(0)

//   // Fetch access token
//   const getAccessToken = async (CLIENT_ID: string, CLIENT_SECRET: string): Promise<string> => {
//     const authString = `${CLIENT_ID}:${CLIENT_SECRET}`
//     const base64Auth = btoa(authString)

//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${base64Auth}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: 'grant_type=client_credentials'
//     })

//     if (!response.ok) {
//       throw new Error('Failed to get access token')
//     }

//     const data = await response.json()
//     return data.access_token
//   }

//   const getArtistId = async (artistName: string, accessToken: string) => {
//     const response = await fetch(
//       `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       }
//     )
//     if (!response.ok) {
//       throw new Error('Failed to fetch artist information')
//     }

//     const data = await response.json()
//     const artistNameFound = data.artists.items[0]

//     if (artistNameFound) {
//       setArtistId(artistNameFound.id)
//     } else {
//       setError('Artist not found')
//       console.log('no artist found')
//     }
//   }

//   const getAlbums = async (artistId: string, accessToken: string) => {
//     const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=50`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//     if (!response.ok) {
//       throw new Error('Failed to fetch artists tracks')
//     }
//     const albumsData = await response.json()
//     const albumItems = albumsData.items

//     const newAlbumIds = albumItems.map((album: string) => album.id)

//     setAlbumIds(newAlbumIds)

//     // setAlbumIds(prevAlbumIds => {
//     //   const uniqueAlbumIds = newAlbumIds.filter((id: string) => !prevAlbumIds.includes(id))
//     //   return [...prevAlbumIds, ...uniqueAlbumIds]
//     // })
//   }

//   const getAlbumTrackIds = async (albumId: string, accessToken: string) => {
//     const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })

//     if (!response.ok) {
//       throw new Error('could not find album tracks')
//     }

//     const trackData = await response.json()
//     const trackItems = trackData.items
//     const trackIds = trackItems.map((track: string) => track.id)

//     setFoundTrackIds(trackIds)

//     // setFoundTrackIds(prevTrackIds => {
//     //   // Create a set to ensure uniqueness
//     //   const newTrackIds = trackItems.map((track: { id: string }) => track.id)
//     //   const uniqueTrackIds = new Set([...prevTrackIds, ...newTrackIds]) // Merging previous and new IDs, ensuring uniqueness
//     //   return Array.from(uniqueTrackIds) // Convert the Set back to an array
//     // })
//   }

//   const getPopularityScore = async (trackId: string, accessToken: string) => {
//     const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })

//     if (!response.ok) {
//       throw new Error('could not find album tracks')
//     }

//     const trackData = await response.json()
//     console.log(trackData.popularity)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setArtistName(e.target.value)
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setArtistName('')
//     setArtistId('')
//     setAlbumIds([])
//     setFoundTrackIds([])
//     setPopularityScore(0)

//     try {
//       const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET)
//       await getArtistId(artistName, accessToken)
//     } catch (error: any) {
//       setError(error.message)
//     }
//   }

//   // Fetch albums when artistId changes
//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET)
//         if (artistId) {
//           await getAlbums(artistId, accessToken)
//         }
//       } catch (error: any) {
//         setError(error.message)
//       }
//     }
//     fetchAlbums()
//   }, [artistId])

//   // Fetch tracks for each album once albumIds updates
//   useEffect(() => {
//     const fetchTracks = async () => {
//       const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET)
//       for (const albumId of albumIds) {
//         await getAlbumTrackIds(albumId, accessToken)
//       }
//     }

//     if (albumIds.length > 0) {
//       fetchTracks()
//     }

//     // console.log(foundTrackIds.length)
//   }, [albumIds])

//   //Fetch track popularity after album tracks are found

//   useEffect(() => {
//     const fetchPopularity = async () => {
//       const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET)
//       for (const track of foundTrackIds) {
//         await getPopularityScore(track, accessToken)
//       }
//     }

//     if (foundTrackIds.length > 0) {
//       fetchPopularity()
//     }
//   }, [foundTrackIds])

//   // useEffect(() => {
//   //   const fetchPopularity = async () => {
//   //     const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET)
//   //     let totalPopularity = 0

//   //     for (const trackId of foundTrackIds) {
//   //       const trackPopularity = await getPopularityScore(trackId, accessToken)
//   //       totalPopularity += trackPopularity
//   //     }

//   //     setPopularityScore(totalPopularity)
//   //   }

//   //   if (foundTrackIds.length > 0) {
//   //     fetchPopularity()
//   //   }
//   // }, [foundTrackIds])

//   return (
//     <div>
//       <h1>Discover Artist Popularity</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={artistName} onChange={handleInputChange} placeholder="Search for an artist..." />
//         <button type="submit">Search</button>
//       </form>
//       <h2>Total Popularity Score: {popularityScore}</h2>
//       <ol>
//         {foundTrackIds.map(trackId => (
//           <li key={trackId}>{trackId}</li>
//         ))}
//       </ol>
//       {error && <p>Error: {error}</p>}
//     </div>
//   )
// }

// export default TrackIds
