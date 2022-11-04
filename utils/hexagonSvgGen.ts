import { type Svg, type Gradient as SVGGradient , SVG } from '@svgdotjs/svg.js';

export interface Gradient {
  type?: string
  rotate?: number
  stops: Array<{
    color: string
    offset: number
  }>
}

export type HexagonColor = string|Gradient;

export function getHexagonSvg () {
  const svg = SVG()
    .size(100, 100)
    .viewbox(0, 0, 100, 100)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  // Accurate hexagon
  const polygon = svg.polygon([[25, 6.69], [75, 6.69], [100, 50], [75, 93.3], [25, 93.3], [0, 50]]);

  // Class to make it easier to create event hitboxes that truly have a hexagonal shape
  polygon.addClass('hexagon');

  return svg;
}

export function applyColorToHexagon (hex: Svg, color: HexagonColor) {
  if (typeof color === 'string') {
    hex.fill(color);
  } else {
    const gradient = hex.gradient(color?.type ?? 'linear', (add: SVGGradient) => {
      for (let stop of color.stops) {
        console.log(stop);
        add.stop(stop.offset, stop.color);
      }
    });
    gradient.attr('gradientTransform', `rotate(${color.rotate}, 0.5, 0.5)`)

    hex.fill(gradient);
  }
}