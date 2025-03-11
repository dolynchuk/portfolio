import { useEffect, useRef } from "react";
import { windowsPixelNightBase64 } from "./windowsPixelNightBase64";

export function HeroImageNight() {

    const ticking = useRef(false);
    const rootRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const updateScrollPercentage = () => {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const screenHeight = window.innerHeight;
                    const scrollPercentage = (scrolled / screenHeight) * 100;
                    if (rootRef.current) {
                        if (scrollPercentage > 50) {
                            rootRef.current.classList.add("visible");
                        } else {
                            rootRef.current.classList.remove('visible');
                        }

                    }
                    ticking.current = false;
                });
            }
        };

        const abortController = new AbortController();
        window.addEventListener("scroll", updateScrollPercentage, { passive: true, signal: abortController.signal });
        updateScrollPercentage();

        return () => {
            abortController.abort();
        }
    }, []);


    return <div className="heroBackgroundImage imageNight" ref={rootRef}><img src={windowsPixelNightBase64} alt="" /></div>
}
