import api from "./config";

export const userService = {
  async signup(userData: {
    username: string;
    email: string;
    password: string;
  }) {
    const response = await api.post("/users/signup", userData);
    return response.data;
  },

  async getUserProfile() {
    const response = await api.get("/users/user");
    return response.data;
  },

  async getAllUsers() {
    const response = await api.get("/users/users");
    return response.data;
  },

  async searchUsers(term: string) {
    const response = await api.get(`/users/users/search?term=${term}`);
    return response.data;
  },

  async uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/users/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
