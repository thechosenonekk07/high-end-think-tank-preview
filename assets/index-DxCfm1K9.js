import { R as c, r as O, f as d, _ as m, g as v } from "./index-BwwIQFuW.js";
function l(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function f(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? l(Object(r), true).forEach(function(t) {
      v(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function h(e, n) {
  var r = O.useContext(d), t = r.prefixCls, a = t === void 0 ? "arco" : t, i = e.spin, s = e.className, o = f(f({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-fullscreen") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, c.createElement("svg", m({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), c.createElement("path", { d: "M42 17V9a1 1 0 0 0-1-1h-8M6 17V9a1 1 0 0 1 1-1h8m27 23v8a1 1 0 0 1-1 1h-8M6 31v8a1 1 0 0 0 1 1h8" }));
}
var b = c.forwardRef(h);
b.defaultProps = { isIcon: true };
b.displayName = "IconFullscreen";
function p(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function u(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? p(Object(r), true).forEach(function(t) {
      v(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function y(e, n) {
  var r = O.useContext(d), t = r.prefixCls, a = t === void 0 ? "arco" : t, i = e.spin, s = e.className, o = u(u({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-rotate-right") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, c.createElement("svg", m({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), c.createElement("path", { d: "M38 22a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V22ZM25 11H14a6 6 0 0 0-6 6v6M25.5 12.893 28.413 11 25.5 9.107v3.786Z" }));
}
var g = c.forwardRef(y);
g.defaultProps = { isIcon: true };
g.displayName = "IconRotateRight";
export { g as I, b as a };
