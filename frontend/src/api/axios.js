import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const accessToken = sessionStorage.getItem("accessToken");

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const client = axios.create({ baseURL: BASE_URL });

export const axiosAuth = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response.status === 403) {
      const refresh = async () => {
        const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
          token: accessToken,
        });
        return data;
      };

      const newRefreshToken = refresh();

      localStorage.setItem("accessToken", newRefreshToken);
      return client({ ...options });
    }

    throw error;
  };

  return client(options).then(onSuccess).catch(onError);
};
