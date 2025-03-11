import { useEffect, useState } from "react";

type Props = {
    startSize?: number;
    maxPixelSize?: number;
    minPixelSize?: number;
    stepDuration?: number;
    type?: "pixelate" | "depixelate";
};

export function Pixelate({
    startSize = 10,
    maxPixelSize = 20,
    minPixelSize = 1,
    stepDuration = 100,
    type = "depixelate",
}: Props) {
    const [pixelSize, setPixelSize] = useState(startSize);

    useEffect(() => {
        let frameId: number;
        const updatePixelSize = () => {
            setPixelSize((prev) => {
                const nextSize =
                    type === "pixelate" ? prev + 1 : prev - 1;
                return Math.min(maxPixelSize, Math.max(minPixelSize, nextSize));
            });
            frameId = requestAnimationFrame(updatePixelSize);
        };

        const intervalId = setInterval(() => {
            frameId = requestAnimationFrame(updatePixelSize);
        }, stepDuration);

        return () => {
            clearInterval(intervalId);
            cancelAnimationFrame(frameId);
        };
    }, [maxPixelSize, minPixelSize, stepDuration, type]);

    return (
        <svg width="0" height="0">
            <filter id="pixelate" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
                <feFlood x={pixelSize} y={pixelSize} height={1} width={1} />
                <feComposite width={pixelSize * 2} height={pixelSize * 2} />
                <feTile result="a" />
                <feComposite in="SourceGraphic" in2="a" operator="in" />
                <feMorphology operator="dilate" radius={pixelSize} />
            </filter>
        </svg>
    );
}
