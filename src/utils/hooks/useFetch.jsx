import { useState, useEffect } from 'react';

export function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) throw new Error('Veuillez rajouter une URL');

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        const data = await response.json();

        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}
