export interface ITestUsers {
  id?: string | number;
  username: string;
  name?: string;
  email?: string;
  password?: string;
  state?: string;
  city?: string;
  streams: number;
  location?: {
    lat: number;
    lng: number;
  };
  image?: string;
  bio?: string;
  songs?: Array<{
    title: string;
    album: string;
    streams: number;
    audioUrl: string;
    image: string;
    id?: number;
  }>;
}
