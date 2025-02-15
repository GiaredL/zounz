import { useState, useEffect } from 'react'

interface ProfileProps {
  name: string
  streams: number
  bio: string
  city: string
  state: string
}

const Profile = () => {
  const [userInfo, setUserInfo] = useState<ProfileProps | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/user', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json()
        console.log('Profile response:', data)

        if (response.ok) {
          setUserInfo(data.user)
        } else {
          setError(data.message || 'Failed to fetch user information')
        }
      } catch (err) {
        console.error('Profile fetch error:', err)
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchUserInfo()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>{userInfo?.name}</h1>
      <p>
        Location: {userInfo?.city}, {userInfo?.state}
      </p>
      <p>Total Streams: {userInfo?.streams}</p>
      <p>Bio: {userInfo?.bio}</p>
      <button>Upload Song</button>
    </div>
  )
}

export default Profile
