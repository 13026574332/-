"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "firstLogin",
  setup(__props) {
    function handleLogin() {
      common_vendor.wx$1.reLaunch({
        url: "/pages/toLogin/toLogin"
      });
      common_vendor.index.__f__("log", "at pages/firstLogin/firstLogin.vue:20", "点击了");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleLogin),
        b: common_vendor.o(handleLogin)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55612112"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/firstLogin/firstLogin.js.map
