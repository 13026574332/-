"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (course + MangeScore + Static + Other)();
}
const course = () => "../../../components/score/course.js";
const MangeScore = () => "../../../components/score/MangeScore.js";
const Static = () => "../../../components/score/static.js";
const Other = () => "../../../components/score/other.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "score",
  setup(__props) {
    const navIndex = common_vendor.ref(1);
    function first() {
      navIndex.value = 1;
    }
    function second() {
      navIndex.value = 2;
      common_vendor.index.__f__("log", "at pages/tabBar/score/score.vue:31", "navIndex = 2");
    }
    function third() {
      navIndex.value = 3;
    }
    function forth() {
      navIndex.value = 4;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(first),
        b: common_vendor.o(second),
        c: common_vendor.o(third),
        d: common_vendor.o(forth),
        e: navIndex.value === 1
      }, navIndex.value === 1 ? {} : {}, {
        f: navIndex.value === 2
      }, navIndex.value === 2 ? {} : {}, {
        g: navIndex.value === 3
      }, navIndex.value === 3 ? {} : {}, {
        h: navIndex.value === 4
      }, navIndex.value === 4 ? {} : {});
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/score/score.js.map
