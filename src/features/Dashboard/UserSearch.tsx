import React, { useState } from "react";
import { searchUsers } from "../../utils/searchUsers";
import { ITestUsers } from "../../types/models/ITestUsers";
import ChartItem from "./ChartItem";

const UserSearch: React.FC = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState<ITestUsers[]>([]);

  const handleSearch = () => {
    const userLocation = { lat: 40.7608, lng: -111.891 }; // Assume current location (Salt Lake City)
    const searchResults = searchUsers(city, userLocation, 50); // Search within 50 km
    setResults(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((user, rank) => (
          <ChartItem key={user.id} user={user} rank={rank} />
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
