import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = (url, apiData) => {
    try {
      setLoading(true);
      const { data: responseData } = axios.post(url, apiData);
      setData(responseData);
    } catch (error) {
      setError(error);
      setLoading(true);
    }
  };

  return { data, loading, error, post };
};

export default usePost;
