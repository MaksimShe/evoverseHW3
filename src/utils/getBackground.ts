/**
 * @param key - назва картинки
 * @param ext
 * @param from
 */
export function getBackground(key: string, ext: string = 'svg', from: string = 'background'): string {
  return `/${from}/${key}.${ext}`;
}