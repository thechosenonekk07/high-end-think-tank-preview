import { R as c, r as l, k as f, _ as p, l as u } from "./index-DOWuBEUh.js";
function O(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function d(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? O(Object(r), true).forEach(function(t) {
      u(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function w(e, n) {
  var r = l.useContext(f), t = r.prefixCls, a = t === void 0 ? "arco" : t, i = e.spin, s = e.className, o = d(d({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-plus") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, c.createElement("svg", p({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), c.createElement("path", { d: "M5 24h38M24 5v38" }));
}
var h = c.forwardRef(w);
h.defaultProps = { isIcon: true };
h.displayName = "IconPlus";
function m(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function v(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? m(Object(r), true).forEach(function(t) {
      u(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function x(e, n) {
  var r = l.useContext(f), t = r.prefixCls, a = t === void 0 ? "arco" : t, i = e.spin, s = e.className, o = v(v({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-fullscreen") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, c.createElement("svg", p({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), c.createElement("path", { d: "M42 17V9a1 1 0 0 0-1-1h-8M6 17V9a1 1 0 0 1 1-1h8m27 23v8a1 1 0 0 1-1 1h-8M6 31v8a1 1 0 0 0 1 1h8" }));
}
var y = c.forwardRef(x);
y.defaultProps = { isIcon: true };
y.displayName = "IconFullscreen";
function b(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? b(Object(r), true).forEach(function(t) {
      u(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function C(e, n) {
  var r = l.useContext(f), t = r.prefixCls, a = t === void 0 ? "arco" : t, i = e.spin, s = e.className, o = g(g({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-rotate-right") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, c.createElement("svg", p({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), c.createElement("path", { d: "M38 22a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V22ZM25 11H14a6 6 0 0 0-6 6v6M25.5 12.893 28.413 11 25.5 9.107v3.786Z" }));
}
var j = c.forwardRef(C);
j.defaultProps = { isIcon: true };
j.displayName = "IconRotateRight";
export { h as I, j as a, y as b };
