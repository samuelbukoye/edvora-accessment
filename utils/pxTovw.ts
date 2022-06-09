import { viewportWidth } from './dimensions';

export default function pxTovw(px: number) {
  return (100 * px) / viewportWidth + 'vw';
}
