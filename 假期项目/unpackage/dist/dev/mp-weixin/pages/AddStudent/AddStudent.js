"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "AddStudent",
  setup(__props) {
    function handleAdd() {
      common_vendor.wx$1.reLaunch({
        url: "/pages/tabBar/score/score"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleAdd),
        b: common_vendor.o(handleAdd)
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/AddStudent/AddStudent.js.map
