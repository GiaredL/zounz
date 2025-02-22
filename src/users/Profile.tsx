import axios from 'axios'
import { useState, useEffect } from 'react'

interface ProfileProps {
  name: string
  streams: number
  bio: string
  city: string
  state: string
  image: string
}

const Profile = () => {
  const [userInfo, setUserInfo] = useState<ProfileProps | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

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

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first')
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('http://localhost:5000/api/users/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      })

      if (response.data && response.data.file) {
        setFile(null)
        setError('')
        const imageUrl = `http://localhost:5000/${response.data.file.path}`
        console.log('Image URL:', imageUrl)
        setImageUrl(imageUrl)
      }
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload file')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <h1>{userInfo?.name}</h1>
      <p>
        Location: {userInfo?.city}, {userInfo?.state}
      </p>
      <p>Total Streams: {userInfo?.streams}</p>
      <p>Bio: {userInfo?.bio}</p>
      <img src={userInfo?.image} alt="Profile" />
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'Uploading...' : 'Upload Song'}
      </button>

      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Uploaded profile" className="max-w-xs rounded-lg shadow-md" />
        </div>
      )}
    </div>
  )
}

export default Profile
