import React, { useEffect, useState } from "react";

const usePageBottom = () => {
  //Use the useState hook to create a state variable
  //that indicates whether the bottom of the page has been reached.
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    //calculate the distance from the bottom of the page
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      console.log("srollTop", scrollTop);

      const innerHeight = window.innerHeight;

      const offsetHeight = document.documentElement.offsetHeight;

      const distanceToBottom = scrollTop + innerHeight >= offsetHeight;
      console.log(distanceToBottom);

      // Set isBottom true if the distance is less than some threshold (e.g., 100px)
      setIsBottom(distanceToBottom);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  return isBottom
};

export default usePageBottom;
