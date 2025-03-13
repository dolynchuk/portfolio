import React from "react";

export default function HeadDefault() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="icon" href={`${base}favicon.ico`} type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="white" />
      <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        href={`${base}font/KyivTypeSans-VarGX.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${base}font/KyivTypeSerif-VarGX.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </>
  );
}
