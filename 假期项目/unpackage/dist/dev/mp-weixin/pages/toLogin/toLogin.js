"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "toLogin",
  setup(__props) {
    const currentTab = common_vendor.ref(0);
    function gotoLogin() {
      common_vendor.index.__f__("log", "at pages/toLogin/toLogin.vue:37", "点击了登录");
      common_vendor.wx$1.reLaunch({
        url: "/pages/tabBar/index/index"
        // wx.showToast({
        //     title: '登录成功',
        //     icon: 'success', 
        //     duration: 2000,
        // success: () => {
        // }
      });
    }
    function change(index) {
      currentTab.value = index;
      common_vendor.index.__f__("log", "at pages/toLogin/toLogin.vue:52", "点击了标签", index === 0 ? "登录" : "注册");
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentTab.value === 0 ? 1 : "",
        b: common_vendor.o(($event) => change(0)),
        c: currentTab.value === 1 ? 1 : "",
        d: common_vendor.o(($event) => change(1)),
        e: currentTab.value === 1
      }, currentTab.value === 1 ? {} : {}, {
        f: currentTab.value === 1
      }, currentTab.value === 1 ? {} : {}, {
        g: currentTab.value === 0
      }, currentTab.value === 0 ? {
        h: common_vendor.o(($event) => gotoLogin())
      } : {
        i: common_vendor.o(($event) => gotoLogin())
      });
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/toLogin/toLogin.js.map
