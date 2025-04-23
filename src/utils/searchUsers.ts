import { ITestUsers } from "../types/models/ITestUsers";
import { calculateDistance } from "./calculateDistance";

export const searchUsers = (
  users: ITestUsers[],
  city: string,
  maxDistance: number,
  userLocation: { lat: number; lng: number }
): ITestUsers[] => {
  return users.filter((user) => {
    if (!user.location || !user.state) return false;
    const distance = calculateDistance(user.location, userLocation);
    return (
      user.state.toLowerCase() === city.toLowerCase() && distance <= maxDistance
    );
  });
};
