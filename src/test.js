const clientCredentials = '0815ec231f0649679fd1c202676dcbb1' // Replace with your actual client ID
const clientSecret = '140f5cce1acb430985441129193a2983' // Replace with your actual client secret
const trackId = '5IZXB5IKAD2qlvTPJYDCFB' // Track ID for "Radioactive" by Imagine Dragons

// Function to get Access Token
async function getAccessToken(clientCredentials, clientSecret) {
  const authString = `${clientCredentials}:${clientSecret}`
  const base64Auth = btoa(authString) // Base64 encode the Client ID and Secret

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64Auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  })

  if (!response.ok) {
    throw new Error('Failed to get access token')
  }

  const data = await response.json()
  return data.access_token
}

// Function to get Track Info
async function getTrackInfo(trackId, accessToken) {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch track info')
  }

  const trackData = await response.json()
  console.log('Track Name:', trackData.name)
  console.log('Artist:', trackData.artists[0].name)
  console.log('Popularity:', trackData.popularity)
  return trackData
}

// Main function to execute
async function main() {
  try {
    const accessToken = await getAccessToken(clientCredentials, clientSecret)
    const trackData = await getTrackInfo(trackId, accessToken)

    // You can now use `trackData` for further processing
  } catch (error) {
    console.error('Error:', error.message)
  }
}

main()
