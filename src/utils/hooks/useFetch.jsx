// import { useState, useEffect } from 'react';

// const useFetch = ({ url, initialData }) => {
//   const [data, setData] = useState(initialData);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) setError(true);
//         else setData(res);
//       })
//       .finally(() => setLoading(false));
//   }, []);
//   return { data, loading, error };
// };

// export default useFetch;

//       const result = await response.json();
//       if (response.ok) {
//         setData(result);
//       } else {
//         setHasError(true);
//         setErrorMessage(result);
//       }
//       setIsLoading(false);
//     } catch (err) {
//       setHasError(true);
//       setErrorMessage(err.message);
//       setIsLoading(false);
//     }
//   };
//   fetchData();
// }, []);

// return { data, isLoading, hasError, errorMessage };
// };

import { useState, useEffect } from 'react';

export function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);

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
