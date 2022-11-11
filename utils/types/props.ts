import type { HexagonColor } from '@/utils/genHexagonSvg';

// TODO: Figure out if component prop typing (when the props interface is used elsewhere) done this way is good.
export interface ButtonHexagonProps {
  backgroundColor: HexagonColor;
  foregroundColor: HexagonColor;
  hexagonScaling?: number;
};