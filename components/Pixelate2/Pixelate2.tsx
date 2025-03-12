import './styles.css';

export function Pixelate2() {
    return (
        <svg width="0" height="0">
        <filter id="pixelate2" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feFlood x="5" y="5" height="1" width="1">
            <animate attributeName="x" from="5" to="1" dur="1s" fill="freeze" />
            <animate attributeName="y" from="5" to="1" dur="1s" fill="freeze" />
          </feFlood>
          <feComposite width="20" height="20">
            <animate attributeName="width" from="10" to="1" dur="1s" fill="freeze" />
            <animate attributeName="height" from="10" to="1" dur="1s" fill="freeze" />
          </feComposite>
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="10">
          </feMorphology>
        </filter>
      </svg>
    );
}
