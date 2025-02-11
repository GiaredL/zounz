import { calculateDistance } from './calculateDistance'
import { testUsers } from '../testUsers'
import { ITestUsers } from '../types/models/ITestUsers'

export const searchUsers = (
  city: string,
  userLocation: { lat: number; lng: number },
  maxDistance: number
): ITestUsers[] => {
  const filteredUsers = testUsers.filter(user => {
    const distance = calculateDistance(user.location, userLocation)
    return user.state.toLowerCase() === city.toLowerCase() && distance <= maxDistance
  })

  return filteredUsers
}
