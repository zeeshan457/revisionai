"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Slide } from "@mui/material";

export const PreviewLanding = () => {
  const images = [
    "/images/blog/blog-post-1.jpg",
    "/images/blog/blog-post-2.jpg",
    "/images/blog/blog-post-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitioning(false);
      }, 500); // Adjust the delay to match the transition duration
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="pb-6 sm:pb-16">
      <div className="container max-w-7xl">
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            {images.map((src, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex && transitioning ? "transitioning" : ""}`}
              >
                <Slide
                  direction="right"
                  in={index === currentIndex && !transitioning}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>
                    <Image
                      className="size-full object-cover object-center"
                      src={src}
                      alt={`preview landing ${index}`}
                      width={2000}
                      height={1000}
                      priority={true}
                    />
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
