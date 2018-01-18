//获取手机浏览器可视宽高
export function VisualSize () {
    let visualW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let visualH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {width: visualW, height: visualH}
}