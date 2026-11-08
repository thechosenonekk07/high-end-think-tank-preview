import { R as s, r as u, k as O, _ as d, l as m } from "./index-DOWuBEUh.js";
function i(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? i(Object(r), true).forEach(function(t) {
      m(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function b(e, n) {
  var r = u.useContext(O), t = r.prefixCls, o = t === void 0 ? "arco" : t, l = e.spin, c = e.className, a = p(p({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(c ? c + " " : "").concat(o, "-icon ").concat(o, "-icon-minus") });
  return l && (a.className = "".concat(a.className, " ").concat(o, "-icon-loading")), delete a.spin, delete a.isIcon, s.createElement("svg", d({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, a), s.createElement("path", { d: "M5 24h38" }));
}
var f = s.forwardRef(b);
f.defaultProps = { isIcon: true };
f.displayName = "IconMinus";
export { f as I };
