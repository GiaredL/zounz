import { useState } from "react";
import api from "../api/config";
import { AxiosError } from "axios";
import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  if (!user) {
    return <div>Not authenticated</div>;
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/users/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data && response.data.file) {
        setFile(null);
        setError("");
        const baseUrl =
          api.defaults.baseURL || "http://54.241.113.130:5000/api";
        const imageUrl = `${baseUrl.replace("/api", "")}/${
          response.data.file.path
        }`;
        console.log("Image URL:", imageUrl);
        setImageUrl(imageUrl);
      }
    } catch (err) {
      console.error("Upload error:", err);
      const axiosError = err as AxiosError<{ message: string }>;
      setError(axiosError.response?.data?.message || "Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{user.name || user.username}</h1>
      <p>
        Location: {user.city || "Not specified"},{" "}
        {user.state || "Not specified"}
      </p>
      <p>Total Streams: {user.streams || 0}</p>
      <p>Bio: {user.bio || "No bio yet"}</p>
      {user.image && <img src={user.image} alt="Profile" />}

      <div>
        <h2>Upload Profile Picture</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          accept="image/*"
        />
        <button onClick={handleUpload} disabled={loading || !file}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>

      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Uploaded profile"
            className="max-w-xs rounded-lg shadow-md"
          />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Profile;
