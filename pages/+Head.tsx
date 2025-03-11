import React from "react";

export default function HeadDefault() {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="white" />
      <link rel="preload" href="/font/KyivTypeSans-VarGX.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" href="/font/KyivTypeSerif-VarGX.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" href="/font/KyivTypeTitling-VarGX.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    </>
  );
}
