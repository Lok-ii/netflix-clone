import axios from "axios";

const baseUrl = "http://localhost:10000/api/v1/user";

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response.data);
    const data = response.data;
    localStorage.setItem("netflixUser", JSON.stringify(data.user));
    return { ...response.data, user: data.user };
  } catch (error) {
    console.log(error.response);
    return error.response.data;
  }
};

export const signOut = async () => {
  try {
    const response = await axios.post(`${baseUrl}/signout`, {}, {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const authenticateUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/authenticate`, {
      withCredentials: true,
    });
    console.log(res.data);
    const data = res.data;
    for (let key in data.user) {
      if (key === "password") {
        delete data.user.password;
      }
    }
    return data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

export const addToFavourites = async (id) => {
  try {
    const res = await axios.post(`${baseUrl}/likes/${id}`,{}, {
      withCredentials: true,
    });
    console.log(res.data);
    return res.data.updatedUser;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromFavourites = async (id) => {
  try {
    const res = await axios.post(`${baseUrl}/dislikes/${id}`, id,  {
      withCredentials: true,
    });
    console.log(res.data);
    return res.data.updatedUser;
  } catch (error) {
    console.log(error);
  }
};
