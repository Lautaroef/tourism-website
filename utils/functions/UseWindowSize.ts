import { useEffect, useState } from "react";

function UseWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowXSize, setWindowXSize] = useState<undefined | number>(undefined);

  // Handler to call on window resize
  useEffect(() => {
    function handleResize() {
      setWindowXSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowXSize;
}

export default UseWindowSize;
