export const getLocationPath = (pathname = ''): string => {
  return pathname.substring(0, pathname.lastIndexOf('/'))
}

export const isIOS = (): boolean => {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export const isAndroid = (): boolean => {
  const u = navigator.userAgent
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
}
