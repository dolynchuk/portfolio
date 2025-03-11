import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';
import { HeroImageNight } from './HeroImageNight';
import './styles.css'
import { windowsPixelBase64 } from './windowsPixelBase64';



export function Hero() {
  const counterRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    function listener(event: WheelEvent) {
      window.scrollBy({ top: event.deltaY });
    }

    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.addEventListener("wheel", listener, { passive: true, signal: abortController.signal });

    return () => {
      abortController.abort();
    }
  }, []);

  return (
    <div className="heroContainerContent">
      <div className="heroBackgroundImage">
        <img src={windowsPixelBase64} alt="" />
      </div>
      <HeroImageNight />
      <div className="loaderContainer">
        <div aria-hidden={!isLoading} className={`loaderText ${isLoading ? '' : 'hidden'}`}>Loading</div></div>
      <Spline
        className={`spline ${!isLoading ? 'splineLoaded' : ''}`}
        scene="https://prod.spline.design/53Ay5avPimaRMEOn/scene.splinecode"
        onLoad={() => {
          counterRef.current += 1;
          if (counterRef.current === 1) {
            setIsLoading(false);
          }
        }}
      />
    </div>
  );
}
