import { useEffect, useState } from "react";

const useMedia = (query: string) => {
  const [matches, setMatched] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatched(media.matches);
    }
    const listener = () => setMatched(media.matches);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };

  }, [matches, query]);

  return matches;
};

export default useMedia;