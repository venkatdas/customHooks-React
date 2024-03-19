import React, { useDebugValue } from "react";
import { useEffect } from "react";
import { useState } from "react";
const UseFetch = (url, options = null) => {
  const [data, setData] = useState(null);
  const [iserror, setIsError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsError(null);
      })
      .catch((error) => {
        setIsError(error);
        setData(null);
      })
      .finally(() => setIsLoading(false));
  }, [url, options]);



  useDebugValue('API fetcher')
  return { isloading, iserror, data };
};

export default UseFetch;
