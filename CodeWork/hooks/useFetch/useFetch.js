import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setLoading(false);
      setData(responseData);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return { data, loading, error };
};

export default useFetch;
