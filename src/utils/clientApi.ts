export interface Options {
  cmd: string,
  args?: {
    callback: string
  }
}

export function call(options: Options): void {
  const { cmd, args } = options
  window.location.href = `protocol://${cmd}#${encodeURIComponent(JSON.stringify(args))}`

  // const u = navigator.userAgent
  // const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  // if(isIOS) {
  //   window.invokeWnl && window.invokeWnl({
  //     command: cmd,
  //     args
  //   })
  // } else {
  //   window.location.href = `protocol://${cmd}#${encodeURIComponent(JSON.stringify(args))}`
  // }
}
