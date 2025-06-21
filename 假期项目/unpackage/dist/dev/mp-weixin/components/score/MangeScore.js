"use strict";
const common_vendor = require("../../common/vendor.js");
const store_modules_score = require("../../store/modules/score.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MangeScore",
  setup(__props) {
    const studentList = store_modules_score.score.studentList;
    function handleAdd() {
      common_vendor.wx$1.reLaunch({
        url: "/pages/AddStudent/AddStudent"
      });
    }
    function toXiang() {
      common_vendor.wx$1.navigateTo({
        url: "/components/xiangqing/student-xiang/student-xiang"
      });
    }
    function del() {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleAdd),
        b: common_vendor.f(common_vendor.unref(studentList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.class),
            b: common_vendor.t(item.studentNumber),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.gender),
            e: common_vendor.t(item.cao.xiang),
            f: common_vendor.o(toXiang, item.studentNumber),
            g: common_vendor.t(item.cao.del),
            h: common_vendor.o(del, item.studentNumber),
            i: item.studentNumber
          };
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/score/MangeScore.js.map
