/**
 * 一些纯辅助函数
 */
 export default (ctx: any, inject: any) => {
    /**
     * 创建一个 Deferred 对象
     *
     * @returns {object}
     *
     * @example
     * new app.$deferred()
     */
    inject('deferred', function (this: { resolve: any; reject: any; promise: any; resolveNow: any }) {
      this.resolve = null;
      this.reject = null;
      const _this = this;
      this.promise = new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      }.bind(this));
  
      this.resolveNow = () => {
        setTimeout(() => {
          this.resolve();
        });
      };
  
      Object.freeze(this);
    });
  
    /**
     * 加载JS文件
     *
     * @param {string} src JS网址，会以此网址Z作为ID来避免重复加载
     *
     * @returns {promise}
     */
    inject('loadScript', function (src: string) {
      const deferred = new ctx.app.$deferred();
  
      if (document.getElementById(src)) {
        deferred.resolveNow();
      } else {
        const js = document.createElement('script');
        js.id = src;
        js.onload = function () {
          deferred.resolve();
        };
        js.onerror = function (error) {
          deferred.reject(error);
        };
        js.src = src;
        document.head.appendChild(js);
      }
      return deferred.promise;
    });
  
  };
  