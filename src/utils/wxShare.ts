import { get, API_URL as baseURL } from './request'

function loadScript(url: string): Promise<any> {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = url
    script.type = 'text/javascript'
    document.querySelector('head')!.insertAdjacentElement('beforeend', script)
    script.addEventListener('load', e => {
      resolve(e)
    })
  })
}

function getSignature() {
  return get<any>(baseURL + '/api/WX', {
    url: window.location.href.split('#')[0]
  })
}

async function configWeixinShare({ title = '', desc = '', link = '', imgUrl = '', success = () => {} }) {
  const p1 = loadScript('//res.wx.qq.com/open/js/jweixin-1.6.0.js')
  const p2 = getSignature()

  try {
    const [, res] = await Promise.all([p1, p2])
    // @ts-ignore
    const { appId, noncestr, signature, timestamp } = res

    const wx = window.wx
    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr: noncestr,
      signature,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
    });
    wx.ready(function() {
      // 分享给朋友
      wx.updateAppMessageShareData({
        title,
        desc,
        link,
        imgUrl,
        success
      })

      // 分享朋友圈
      wx.updateTimelineShareData({
        title,
        link,
        imgUrl,
        success
      })
    })
    wx.error(function(err: any) {
      console.log(err)
    })
  } catch(e) {
    console.log(e)
  }
}

export default configWeixinShare
