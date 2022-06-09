import { viewportWidth } from './dimensions';

export default function pxTovw(px: number, min: boolean = false) {
  return min
    ? (100 * px * 1.25) / viewportWidth + 'vw'
    : (100 * px) / viewportWidth + 'vw';
}
