import { useEffect, useState } from "react";
import { ITestSong } from "../types/models/ITestSong";
import { ITestUsers } from "../types/models/ITestUsers";
import api from "../api/config";

export const useUserInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<ITestUsers[] | null>(null);
  //   const [error, setError] = useState<string | null>(null)

  const getUserInfo = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/users/users");
      const fetchedData = response.data;

      const transformedUsers = fetchedData.users.map((user: ITestUsers) => ({
        id: user.id,
        name: user.name,
        state: user.state,
        city: user.city,
        streams: user.streams,
        location: user.location || { lat: 0, lng: 0 },
        image: user.image || "",
        bio: user.bio || "",
        songs:
          user.songs?.map((song: ITestSong) => ({
            id: song.id || 0,
            title: song.title || "",
            album: song.album || "",
            image: song.image || "",
            streams: song.streams || 0,
            audioUrl: song.audioUrl || "",
          })) || [],
      }));
      const sortedUsers = [...transformedUsers].sort((a, b) => {
        const streamsA = parseInt(a.streams.toString());
        const streamsB = parseInt(b.streams.toString());
        return streamsB - streamsA;
      });
      setUserData(sortedUsers);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching user info:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return { userData, isLoading, setUserData };
};
