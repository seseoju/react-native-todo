import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL as string,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
  },
});
