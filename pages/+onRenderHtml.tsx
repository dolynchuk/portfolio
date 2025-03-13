import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

export default async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const base = import.meta.env.BASE_URL;

  const pageHtml = renderToString(<Page {...pageProps} />);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="${base}favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maksym Dolynchuk portfolio</title>
        <meta name="theme-color" content="white" />
        <!-- SEO Meta Tags -->
        <meta name="description" content="Front end engineer Portfolio website" />
        <meta name="keywords" content="Portfolio, Front-end, Frontend, front-end, Front end engineer, engineer portfolio, Maksym Dolynchuk, Maksym Dolynchuk portfolio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dolynchuk.github.io/portfolio" />
        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="Front end engineer portfolio" />
        <meta property="og:description" content="Front End Engineer Maksym Dolynchuk portfolio website" />
        <meta property="og:url" content="https://dolynchuk.github.io/portfolio" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://prod.spline.design" crossorigin="anonymous" />
        <link rel="preconnect" href="https://www.gstatic.com" crossorigin="anonymous" />
        <link
          rel="preload"
          href="${base}font/KyivTypeSans-VarGX.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="${base}font/KyivTypeSerif-VarGX.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
