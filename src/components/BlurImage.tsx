import React, { useState } from "react";
import Image from "next/image";
import cn from "clsx";
import { BlurImageProps } from "./ProjectGrid";

export function BlurImage(props: BlurImageProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading
          ? "scale-90 blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
