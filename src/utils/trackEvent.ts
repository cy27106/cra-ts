/**
 * 使用百度统计或者友盟埋点
 * @param group
 * @param event
 */
export default function trackEvent(group: string, event: string): void {
  if(window._czc) {
    window._czc.push(['_trackEvent', group, event])
  } else if(window._hmt) {
    window._hmt.push(['_trackEvent', group, event])
  }
}