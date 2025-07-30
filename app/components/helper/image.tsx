import { useEffect, useState } from "react";

import { createImageResource } from "~/lib/image";

export default function Image({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let isMounted = true;
    createImageResource(src).then(() => {
      if (isMounted) setLoaded(true);
    });
    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "" : "opacity-80 blur-xs"}`}
      style={{ transition: "all .2s" }}
    />
  );
}
