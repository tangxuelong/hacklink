/**
 * swiper
 */
let swiperSdkLoaded = false;
declare let Swiper: any;

export default (ctx: any, inject: any) => {
  const $swiper = function (ele, opt) {
    if (!swiperSdkLoaded) {
      const cssUrl = 'https://unpkg.com/swiper@8/swiper-bundle.min.css';
      const url = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
      const oLink = document.createElement('link');
      oLink.href = cssUrl;
      oLink.type = 'text/css';
      oLink.rel = 'stylesheet';
      document.head.appendChild(oLink);
      return ctx.app.$loadScript(url).then(function () {
        swiperSdkLoaded = true;
        return ctx.app.$swiper(ele, opt);
      });
    } else {
      return new Promise(function (resolve) {
        setTimeout(()=> {
          const swiper = new Swiper(ele, opt);
          resolve(swiper);
        }, 0);
      });
    }
  };

  inject('swiper', $swiper);
};
