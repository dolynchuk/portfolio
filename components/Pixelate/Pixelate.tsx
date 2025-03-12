import './styles.css';

export function Pixelate() {
    return (
        <svg width="0" height="0">
        <filter id="pixelate" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feFlood x="10" y="10" height="1" width="1">
            <animate attributeName="x" from="5" to="1" dur="1s" fill="freeze" />
            <animate attributeName="y" from="5" to="1" dur="1s" fill="freeze" />
          </feFlood>
          <feComposite width="20" height="20">
            <animate attributeName="width" from="20" to="2" dur="1s" fill="freeze" />
            <animate attributeName="height" from="20" to="2" dur="1s" fill="freeze" />
            <animate attributeName="width" from="2" to="1" dur="2s" begin="1s" fill="freeze" />
            <animate attributeName="height" from="2" to="1" dur="0.1s" begin="1s" fill="freeze" />
          </feComposite>
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="10">
            <animate attributeName="radius" from="10" to="1" dur="1s" fill="freeze" />
          </feMorphology>
        </filter>
      </svg>
    );
}
