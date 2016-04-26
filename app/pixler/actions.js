export const EMPTY = 'pixler/empty';
export const SHAPE = 'pixler/shape';
export const OUTLINE = 'pixler/outline';
export const CLEAR = 'pixler/clear';
export const MIRROR = 'pixler/mirror';
export const SET_FONT_SIZE = 'pixler/set_font_size';
export const SET_OUTLINE = 'pixler/set_outline';
export const SET_PIXEL = 'pixler/set_pixel';
export const SET_SHAPE = 'pixler/set_shape';

export function clear() {
  return { type: CLEAR };
}

export function mirror() {
  return { type: MIRROR };
}

export function setFontSize(fontSize) {
  return { type: SET_FONT_SIZE, payload: fontSize };
}

export function setOutline(outline) {
  return { type: SET_OUTLINE, payload: outline };
}

export function setPixel(row, column, pixelType) {
  return { type: SET_PIXEL, column, row, pixelType };
}

export function setShape(shape) {
  return { type: SET_SHAPE, payload: shape };
}
