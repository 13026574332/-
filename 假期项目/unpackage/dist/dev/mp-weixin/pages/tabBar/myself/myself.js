"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "myself",
  setup(__props) {
    function withdraw() {
      common_vendor.wx$1.reLaunch({
        url: "/pages/firstLogin/firstLogin"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(withdraw)
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/myself/myself.js.map
