/**
 * 判断图标资源是否为外部资源
 * @param {string} path
 * @returns {boolean}
 */
export const isExternalIcon = (path = '') => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
