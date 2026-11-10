import { R as e, r as u, C as fe, u as vt, c as H, I as Ht, T as Kt, a as Qe, b as Ge, d as Ut, e as Et, o as bt, i as Bt, f as qt, _ as Jt, g as Qt, h as Gt, j as Yt, k as Ct, l as jt, m as ae, n as _t, p as se, q as $t, s as er, t as tr, v as $, w as wt, x as At, y as Re, z as Ve, A as rt, B as at, D as Fe, P as rr, E as ar, F as l, G as O, H as lr, M as lt, J as Nt, K as ee, L as ue, N as I, O as Ye, S as ve, Q as nr, U as ne, V as ke, W as Se, X as ir, Y as sr, Z as or } from "./index-BwwIQFuW.js";
import { D as nt } from "./index-CD4FIMXP.js";
import { I as cr, U as dr } from "./upload-7h_6sPb4.js";
import { i as Lt, f as ye, e as Me, t as Ze, a as mr } from "./reportTasks-DAXmF1j7.js";
import { D as it, A as ur } from "./index-Dm7b4RvN.js";
import { I as Xe } from "./index-DistsoRr.js";
import { S as Ae } from "./index-T0DvAvlo.js";
import "./index-DxCfm1K9.js";
var Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, Ie.apply(this, arguments);
}, fr = function(t, i) {
  var a = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (a[n[r]] = t[n[r]]);
  return a;
};
function pr(t, i) {
  var a, n, r, s, o, d, x = u.useContext(fe).getPrefixCls, m = u.useRef(), g = u.useContext(St), E = vt(), h = t.children, L = t.name, C = t.header, y = t.className, T = t.style, A = t.contentStyle, c = t.extra, b = t.disabled, S = t.destroyOnHide, M = t.expandIcon, P = t.showExpandIcon, X = P === void 0 ? true : P, w = fr(t, ["children", "name", "header", "className", "style", "contentStyle", "extra", "disabled", "destroyOnHide", "expandIcon", "showExpandIcon"]), v = x("collapse-item"), R = ((d = g.activeKeys) === null || d === void 0 ? void 0 : d.indexOf(L)) > -1, W = X ? "expandIcon" in t ? M : g.expandIcon : null, k = function(f, V) {
    if (!b) {
      var z = g.triggerRegion, K = z === "icon" ? 0 : z === "header" ? 1 : 2;
      (V === K || z === "header" && [0, 1].includes(V)) && g.onToggle(L, f);
    }
  };
  return e.createElement("div", Ie({ ref: i }, w, { className: H(v, (a = {}, a[v + "-active"] = R, a[v + "-no-icon"] = !W, a[v + "-disabled"] = b, a), y), style: T }), e.createElement("div", Ie({ role: "button", "aria-disabled": b, "aria-expanded": R, "data-active-region": g.triggerRegion, tabIndex: b ? -1 : 0, className: H(v + "-header", v + "-header-" + g.expandIconPosition, (n = {}, n[v + "-header-disabled"] = b, n)), onClick: function(f) {
    return k(f, 2);
  } }, E({ onPressEnter: function(f) {
    !b && g.onToggle(L, f);
  } })), W && e.createElement(Ht, { prefix: v, disabled: b, className: H((r = {}, r[v + "-icon-hover-right"] = g.expandIconPosition === "right", r[v + "-header-icon-right"] = g.expandIconPosition === "right", r)), onClick: function(f) {
    return k(f, 0);
  } }, e.createElement("span", { className: H(v + "-header-icon", (s = {}, s[v + "-header-icon-down"] = R, s)) }, W)), e.createElement("div", { className: v + "-header-title", onClick: function(f) {
    return k(f, 1);
  } }, C), c && e.createElement("div", { className: v + "-header-extra", onClick: function(f) {
    f.stopPropagation();
  } }, c)), e.createElement(Kt, { nodeRef: m, in: R, addEndListener: function(f) {
    var V;
    (V = m.current) === null || V === void 0 || V.addEventListener("transitionend", f, false);
  }, mountOnEnter: "destroyOnHide" in t ? S : g.destroyOnHide || g.lazyload, unmountOnExit: "destroyOnHide" in t ? S : g.destroyOnHide, onEnter: function() {
    var f = m.current;
    f && (f.style.height = "0", f.style.display = "block");
  }, onEntering: function() {
    var f = m.current;
    f && (f.style.height = f.scrollHeight + "px");
  }, onEntered: function() {
    var f = m.current;
    f && (f.style.height = "auto");
  }, onExit: function() {
    var f = m.current;
    f && (f.style.display = "block", f.style.height = f.offsetHeight + "px", f.offsetHeight);
  }, onExiting: function() {
    var f = m.current;
    f && (f.style.height = "0");
  }, onExited: function() {
    var f = m.current;
    f && (f.style.display = "none", f.style.height = "auto");
  } }, e.createElement("div", { role: "region", className: H(v + "-content", (o = {}, o[v + "-content-expanded"] = R, o)), ref: m }, e.createElement("div", { style: A, className: v + "-content-box" }, h))));
}
var kt = e.forwardRef(pr);
kt.displayName = "CollapseItem";
var De = function() {
  return De = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, De.apply(this, arguments);
}, hr = function(t, i) {
  var a = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (a[n[r]] = t[n[r]]);
  return a;
}, st = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, xr = function(t, i, a) {
  if (a || arguments.length === 2) for (var n = 0, r = i.length, s; n < r; n++) (s || !(n in i)) && (s || (s = Array.prototype.slice.call(i, 0, n)), s[n] = i[n]);
  return t.concat(s || Array.prototype.slice.call(i));
}, ot = function(t, i) {
  var a = [].concat(t);
  return i ? a.slice(0, 1) : a;
}, gr = { bordered: true, lazyload: true, expandIconPosition: "left" }, St = u.createContext({ expandIconPosition: "left", expandIcon: e.createElement(Et, null), activeKeys: [], onToggle: function() {
} });
function yr(t, i) {
  var a, n = u.useContext(fe), r = n.getPrefixCls, s = n.componentConfig, o = n.rtl, d = Qe(t, gr, s == null ? void 0 : s.Collapse), x = st(Ge([], { defaultValue: "defaultActiveKey" in d ? ot(d.defaultActiveKey, d.accordion) : void 0, value: "activeKey" in d ? ot(d.activeKey, d.accordion) : void 0 }), 2), m = x[0], g = x[1], E = d.children, h = d.className, L = d.style, C = d.bordered, y = d.lazyload, T = d.expandIcon, A = d.expandIconPosition, c = d.destroyOnHide, b = d.accordion, S = d.triggerRegion, M = d.onChange, P = hr(d, ["children", "className", "style", "bordered", "lazyload", "expandIcon", "expandIconPosition", "destroyOnHide", "accordion", "triggerRegion", "onChange"]), X = r("collapse"), w = function(v, R) {
    var W = xr([], st(m || []), false), k = m == null ? void 0 : m.indexOf(v);
    k > -1 ? W.splice(k, 1) : b ? W = [v] : W.push(v), "activeKey" in d || g(W), Bt(M) && M(v, W, R);
  };
  return e.createElement(St.Provider, { value: { activeKeys: m, triggerRegion: S, lazyload: y, destroyOnHide: c, expandIconPosition: A, onToggle: w, expandIcon: "expandIcon" in d ? T : A === "right" ? e.createElement(Ut, null) : e.createElement(Et, null) } }, e.createElement("div", De({ ref: i }, bt(P, ["activeKey", "defaultActiveKey"]), { className: H(X, X + "-" + (C ? "border" : "borderless"), (a = {}, a[X + "-rtl"] = o, a), h), style: L }), E));
}
var vr = e.forwardRef(yr), Oe = vr;
Oe.displayName = "Collapse";
Oe.Item = kt;
function ct(t, i) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    i && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function dt(t) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ct(Object(a), true).forEach(function(n) {
      Qt(t, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ct(Object(a)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return t;
}
function Er(t, i) {
  var a = u.useContext(qt), n = a.prefixCls, r = n === void 0 ? "arco" : n, s = t.spin, o = t.className, d = dt(dt({ "aria-hidden": true, focusable: false, ref: i }, t), {}, { className: "".concat(o ? o + " " : "").concat(r, "-icon ").concat(r, "-icon-info") });
  return s && (d.className = "".concat(d.className, " ").concat(r, "-icon-loading")), delete d.spin, delete d.isIcon, e.createElement("svg", Jt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, d), e.createElement("path", { d: "M25 39H27V60H25z", transform: "rotate(180 25 39)" }), e.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 39H27V60H25z", transform: "rotate(180 25 39)" }), e.createElement("path", { d: "M25 11H27V13H25z", transform: "rotate(180 25 11)" }), e.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 11H27V13H25z", transform: "rotate(180 25 11)" }));
}
var _e = e.forwardRef(Er);
_e.defaultProps = { isIcon: true };
_e.displayName = "IconInfo";
function br() {
  return e.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 213 213", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, e.createElement("g", { transform: "matrix(1,0,0,1,-1241.95,-445.62)" }, e.createElement("g", null, e.createElement("g", { transform: "matrix(1,0,0,1,295.2,-87.3801)" }, e.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), e.createElement("g", { transform: "matrix(0.38223,0,0,0.38223,1126.12,238.549)" }, e.createElement("g", { transform: "matrix(0.566536,0.327089,-1.28774,0.74348,763.4,317.171)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), e.createElement("g", { transform: "matrix(0.29595,0.170867,-0.91077,0.525833,873.797,588.624)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), e.createElement("g", { transform: "matrix(1,0,0,1,275,-15)" }, e.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), e.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, e.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", { transform: "matrix(1,0,0,1,183.952,-67.5665)" }, e.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), e.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, e.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", { transform: "matrix(1,0,0,1,414,-95.2517)" }, e.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), e.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, e.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", { transform: "matrix(1,0,0,1,322.952,-147.818)" }, e.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), e.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, e.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", null, e.createElement("g", { transform: "matrix(1.42334,-0.821763,1.11271,0.642426,-1439.64,459.621)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(1.40786,-0.812831,6.60237e-16,1.99081,-2052.17,-84.7286)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(1.26159,-0.728382,5.91642e-16,1.78397,-1774.67,11.2303)" }, e.createElement("path", { d: "M1950.29,1194.38C1950.29,1193.37 1949.41,1192.54 1948.34,1192.54L1846.01,1192.54C1844.93,1192.54 1844.06,1193.37 1844.06,1194.38L1844.06,1282.7C1844.06,1283.72 1844.93,1284.54 1846.01,1284.54L1948.34,1284.54C1949.41,1284.54 1950.29,1283.72 1950.29,1282.7L1950.29,1194.38Z", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(1.2198,-0.704254,5.72043e-16,1.72488,-1697.6,37.2103)" }, e.createElement("path", { d: "M1950.29,1194.38C1950.29,1193.37 1949.41,1192.54 1948.34,1192.54L1846.01,1192.54C1844.93,1192.54 1844.06,1193.37 1844.06,1194.38L1844.06,1282.7C1844.06,1283.72 1844.93,1284.54 1846.01,1284.54L1948.34,1284.54C1949.41,1284.54 1950.29,1283.72 1950.29,1282.7L1950.29,1194.38Z", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.707187,0.408295,9.06119e-17,1.54833,-733.949,683.612)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.64553,-0.950049,1.17482,0.678285,-1632.45,473.879)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(0.74666,0.431085,2.3583e-17,0.135259,-816.63,57.1397)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.64553,-0.950049,1.17482,0.678285,-1632.45,473.879)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,354.191)" }, e.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), e.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), e.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,309.191)" }, e.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), e.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), e.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,263.931)" }, e.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), e.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), e.createElement("path", { d: "M555.753,832.474L555.753,921.408L630.693,878.141L630.693,789.207L555.753,832.474Z", style: { fillOpacity: 0.1 } }), e.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,236.431,272.852)" }, e.createElement("g", { transform: "matrix(1.64553,-0.950049,1.14552,0.661368,-1606.78,467.933)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(1.54477,-0.891873,1.05847,0.611108,-1456.84,490.734)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(1.27607,-0.736739,0.751435,0.433841,-970.952,617.519)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.62765,-0.939723,1.42156e-16,0.5,-2476.81,1893.62)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(1.62765,-0.939723,1.42156e-16,0.5,-2476.81,1893.62)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.728038,0.420333,3.52595e-17,0.377589,-790.978,151.274)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2726.83,1873.38)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", null, e.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), e.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, e.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), e.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })))), e.createElement("g", { transform: "matrix(1.62765,-0.939723,4.80984e-17,0.173913,-2468.81,2307.87)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } }))), e.createElement("g", null, e.createElement("g", { transform: "matrix(0.479077,0.276595,-0.564376,0.325843,598.357,-129.986)" }, e.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.15,1317.28 1767.24,1317.28L1684.37,1317.28C1679.46,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.46,1404.46 1684.37,1404.46L1767.24,1404.46C1772.15,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(2.61622,0,0,2.61622,-2305.73,162.161)" }, e.createElement("g", { transform: "matrix(1.09915,-0.634597,1.26919,0.73277,-299.167,-62.4615)" }, e.createElement("ellipse", { cx: "412.719", cy: "770.575", rx: "6.303", ry: "5.459", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.238212,-0.137532,0.178659,0.103149,875.064,207.93)" }, e.createElement("text", { x: "413.474px", y: "892.067px", style: { fontFamily: "NunitoSans-Bold, Nunito Sans", fontWeight: 700, fontSize: 41.569, fill: "white" } }, "?"))))))));
}
function Cr() {
  return e.createElement("svg", { viewBox: "0 0 213 213", height: "100%", width: "100%", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, e.createElement("g", { transform: "matrix(1,0,0,1,-871.485,-445.62)" }, e.createElement("g", null, e.createElement("g", { transform: "matrix(1,0,0,1,-75.2684,-87.3801)" }, e.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), e.createElement("g", { transform: "matrix(1,0,0,1,246.523,295.575)" }, e.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,277.545,71.0298)" }, e.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), e.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), e.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, e.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, e.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), e.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, e.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } }))), e.createElement("g", { transform: "matrix(0.182997,0.105653,-0.494902,0.285732,814.161,66.3087)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), e.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,237.301,94.2647)" }, e.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), e.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), e.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, e.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, e.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), e.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, e.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } }))), e.createElement("g", { transform: "matrix(0.474953,0,0,0.474953,538.938,8.95289)" }, e.createElement("g", { transform: "matrix(0.180615,0.104278,-0.973879,0.562269,790.347,286.159)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), e.createElement("g", { transform: "matrix(0.473356,0,0,0.473356,294.481,129.741)" }, e.createElement("g", null, e.createElement("g", { transform: "matrix(0.1761,-0.101671,1.73518e-16,1.22207,442.564,7.31508)" }, e.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(0.0922781,0.0532768,2.03964e-16,2.20569,405.236,-248.842)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), e.createElement("g", { transform: "matrix(0.147541,-0.0851831,1.52371e-16,1.23446,454.294,-3.8127)" }, e.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(51, 51, 51)" } })), e.createElement("g", { transform: "matrix(0.0921286,0.0531905,-0.126106,0.0728076,474.688,603.724)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })))), e.createElement("g", { transform: "matrix(0.473356,0,0,0.473356,192.621,188.549)" }, e.createElement("g", null, e.createElement("g", { transform: "matrix(0.1761,-0.101671,1.73518e-16,1.22207,442.564,7.31508)" }, e.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(0.0922781,0.0532768,2.03964e-16,2.20569,405.236,-248.842)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), e.createElement("g", { transform: "matrix(0.147541,-0.0851831,1.52371e-16,1.23446,454.294,-3.8127)" }, e.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(51, 51, 51)" } })), e.createElement("g", { transform: "matrix(0.0921286,0.0531905,-0.126106,0.0728076,474.688,603.724)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })))), e.createElement("g", { transform: "matrix(0.668111,0,0,0.668111,-123.979,-49.2109)" }, e.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,974.758,729.412)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,42.5091,1294.14)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(0.0349225,0.0201625,-1.52814,0.882275,1593.11,461.746)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })), e.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,49.4442,1298.14)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(51, 51, 51)" } })), e.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,753.056,857.412)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,898.874,529.479)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,930.12,511.44)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,961.365,493.4)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,992.61,475.361)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1023.86,457.321)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1056.25,438.617)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1085.74,421.589)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", { transform: "matrix(0.668111,0,0,0.668111,-123.979,-91.97)" }, e.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,974.758,729.412)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,42.5091,1294.14)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), e.createElement("g", { transform: "matrix(0.0349225,0.0201625,-1.52814,0.882275,1593.11,461.746)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })), e.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,49.4442,1298.14)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(51, 51, 51)" } })), e.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,753.056,857.412)" }, e.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,898.874,529.479)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,930.12,511.44)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,961.365,493.4)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,992.61,475.361)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1023.86,457.321)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1056.25,438.617)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), e.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1085.74,421.589)" }, e.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } }))), e.createElement("g", { transform: "matrix(0.701585,5.16096e-35,-5.16096e-35,0.701585,-546.219,-21.3487)" }, e.createElement("g", { transform: "matrix(0.558202,-0.322278,0,0.882275,1033.27,615.815)" }, e.createElement("path", { d: "M855.598,410.446C855.598,407.244 852.515,404.643 848.718,404.643L663.891,404.643C660.094,404.643 657.012,407.244 657.012,410.446L657.012,543.92C657.012,547.123 660.094,549.723 663.891,549.723L848.718,549.723C852.515,549.723 855.598,547.123 855.598,543.92L855.598,410.446Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.558202,-0.322278,0,0.882275,1035.25,616.977)" }, e.createElement("path", { d: "M855.598,410.446C855.598,407.244 852.515,404.643 848.718,404.643L663.891,404.643C660.094,404.643 657.012,407.244 657.012,410.446L657.012,543.92C657.012,547.123 660.094,549.723 663.891,549.723L848.718,549.723C852.515,549.723 855.598,547.123 855.598,543.92L855.598,410.446Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(1,0,0,1,418.673,507.243)" }, e.createElement("path", { d: "M1088.34,192.063C1089.79,191.209 1090.78,191.821 1090.78,191.821L1092.71,192.944C1092.71,192.944 1092.29,192.721 1091.7,192.763C1090.99,192.813 1090.34,193.215 1090.34,193.215C1090.34,193.215 1088.85,192.362 1088.34,192.063Z", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(1,0,0,1,235.984,-39.1315)" }, e.createElement("path", { d: "M1164.02,805.247C1164.05,802.517 1165.64,799.379 1167.67,798.118L1169.67,799.272C1167.58,800.648 1166.09,803.702 1166.02,806.402L1164.02,805.247Z", style: { fill: "url(#_Linear1)" } })), e.createElement("g", { transform: "matrix(0.396683,0,0,0.396683,1000.22,516.921)" }, e.createElement("path", { d: "M1011.2,933.14C1009.31,932.075 1008.05,929.696 1007.83,926.324L1012.87,929.235C1012.87,929.235 1012.96,930.191 1013.04,930.698C1013.16,931.427 1013.42,932.344 1013.62,932.845C1013.79,933.255 1014.59,935.155 1016.22,936.046C1015.83,935.781 1011.19,933.139 1011.19,933.139L1011.2,933.14Z", style: { fill: "rgb(238, 238, 238)" } })), e.createElement("g", { transform: "matrix(0.253614,-0.146424,4.87691e-17,0.338152,1209.98,830.02)" }, e.createElement("circle", { cx: "975.681", cy: "316.681", r: "113.681", style: { fill: "rgb(245, 63, 63)" } }), e.createElement("g", { transform: "matrix(1.08844,0,0,0.61677,-99.9184,125.436)" }, e.createElement("path", { d: "M1062,297.556C1062,296.697 1061.61,296 1061.12,296L915.882,296C915.395,296 915,296.697 915,297.556L915,333.356C915,334.215 915.395,334.912 915.882,334.912L1061.12,334.912C1061.61,334.912 1062,334.215 1062,333.356L1062,297.556Z", style: { fill: "white" } }))), e.createElement("g", { transform: "matrix(5.57947,-3.22131,0.306277,0.176829,-6260.71,4938.32)" }, e.createElement("rect", { x: "1335.54", y: "694.688", width: "18.525", height: "6.511", style: { fill: "rgb(248, 248, 248)" } })), e.createElement("g", { transform: "matrix(0.10726,0.0619268,-1.83335e-14,18.1609,1256.76,-11932.8)" }, e.createElement("rect", { x: "1335.54", y: "694.688", width: "18.525", height: "6.511", style: { fill: "rgb(238, 238, 238)" } })))), e.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,269.139,37.8829)" }, e.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), e.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, e.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), e.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), e.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, e.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), e.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, e.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, e.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), e.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, e.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), e.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, e.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } })))))), e.createElement("defs", null, e.createElement("linearGradient", { id: "_Linear1", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(-2.64571,4.04098,-4.04098,-2.64571,1167.67,799.269)" }, e.createElement("stop", { offset: "0", style: { stopColor: "rgb(248, 248, 248)", stopOpacity: 1 } }), e.createElement("stop", { offset: "1", style: { stopColor: "rgb(248, 248, 248)", stopOpacity: 1 } }))));
}
function jr() {
  return e.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 213 213", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, e.createElement("g", { transform: "matrix(1,0,0,1,-483.054,-445.448)" }, e.createElement("g", null, e.createElement("g", { transform: "matrix(1,0,0,1,-463.699,-87.5516)" }, e.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), e.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,260.021)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fillOpacity: 0.1 } })), e.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,218.845)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,238.807)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), e.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,257.804)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), e.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,329.956)" }, e.createElement("clipPath", { id: "_clip1" }, e.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), e.createElement("g", { clipPath: "url(#_clip1)" }, e.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,269.266)" }, e.createElement("use", { href: "#_Image2", x: "50.54", y: "112.301", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,265.448)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,268.45)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,271.452)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,124.262)" }, e.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,420.796)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,419.062)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,417.329)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,415.595)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,413.862)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,196.542)" }, e.createElement("clipPath", { id: "_clip3" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), e.createElement("g", { clipPath: "url(#_clip3)" }, e.createElement("g", { transform: "matrix(1.30028,1.12608,-2.25216,1.95042,68.2716,1030.07)" }, e.createElement("use", { href: "#_Image4", x: "50.54", y: "56.312", width: "112.406px", height: "64.897px", transform: "matrix(0.99474,0,0,0.998422,0,0)" })))), e.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,216.764)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), e.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,235.762)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), e.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,307.652)" }, e.createElement("clipPath", { id: "_clip5" }, e.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), e.createElement("g", { clipPath: "url(#_clip5)" }, e.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,321.266)" }, e.createElement("use", { href: "#_Image2", x: "50.54", y: "89.692", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,243.144)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,246.146)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,249.149)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,101.958)" }, e.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,398.492)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,396.759)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,395.025)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,393.292)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,391.558)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,171.832)" }, e.createElement("clipPath", { id: "_clip6" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), e.createElement("g", { clipPath: "url(#_clip6)" }, e.createElement("g", { transform: "matrix(1.30028,1.12608,-2.25216,1.95042,12.6215,1078.27)" }, e.createElement("use", { href: "#_Image7", x: "50.54", y: "31.563", width: "112.406px", height: "64.897px", transform: "matrix(0.99474,0,0,0.998422,0,0)" })))), e.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,192.055)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), e.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,211.052)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), e.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,282.943)" }, e.createElement("clipPath", { id: "_clip8" }, e.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), e.createElement("g", { clipPath: "url(#_clip8)" }, e.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,378.876)" }, e.createElement("use", { href: "#_Image2", x: "50.54", y: "64.644", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,218.434)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,221.437)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,224.439)" }, e.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,77.2484)" }, e.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,373.782)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,372.049)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,370.316)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,368.582)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,366.849)" }, e.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), e.createElement("g", { transform: "matrix(0.365442,-0.210988,0.421976,0.243628,28.7259,185.45)" }, e.createElement("clipPath", { id: "_clip9" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), e.createElement("g", { clipPath: "url(#_clip9)" }, e.createElement("g", { transform: "matrix(1.36821,1.1849,-2.36981,2.05231,5.46929,1071.93)" }, e.createElement("use", { href: "#_Image10", x: "53.151", y: "30.14", width: "106.825px", height: "61.676px", transform: "matrix(0.998367,0,0,0.994768,0,0)" })))), e.createElement("g", { transform: "matrix(0.365442,-0.210988,0.421976,0.243628,28.7259,183.729)" }, e.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "url(#_Linear11)" } })), e.createElement("g", { transform: "matrix(0.407622,0,0,0.407622,47.38,278)" }, e.createElement("clipPath", { id: "_clip12" }, e.createElement("path", { d: "M1461.07,554.317C1461.07,556.747 1459.6,559.067 1456.6,560.8L1342.04,626.943C1335.41,630.767 1323.83,630.287 1316.18,625.871L1205.33,561.871C1201.14,559.456 1199,556.361 1199,553.426L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,554.317Z" })), e.createElement("g", { clipPath: "url(#_clip12)" }, e.createElement("g", { transform: "matrix(2.45325,-0,-0,2.45325,1068.82,410.793)" }, e.createElement("use", { href: "#_Image13", x: "53.151", y: "58.978", width: "106.825px", height: "33.517px", transform: "matrix(0.998367,0,0,0.985808,0,0)" })))), e.createElement("g", { transform: "matrix(0.371452,-0.214458,2.38096e-17,0.495269,-19.3677,248.256)" }, e.createElement("clipPath", { id: "_clip14" }, e.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.23,1317.28 1767.42,1317.28L1684.19,1317.28C1679.38,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.38,1404.46 1684.19,1404.46L1767.42,1404.46C1772.23,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z" })), e.createElement("g", { clipPath: "url(#_clip14)" }, e.createElement("g", { transform: "matrix(2.69214,1.16573,-1.29422e-16,2.0191,1352.59,983.841)" }, e.createElement("use", { href: "#_Image15", x: "121.882", y: "76.034", width: "37.393px", height: "61.803px", transform: "matrix(0.984021,0,0,0.996825,0,0)" })))), e.createElement("g", { transform: "matrix(0.371452,-0.214458,2.38096e-17,0.495269,-15.0786,249.972)" }, e.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.23,1317.28 1767.42,1317.28L1684.19,1317.28C1679.38,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.38,1404.46 1684.19,1404.46L1767.42,1404.46C1772.23,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z", style: { fill: "white", stopOpacity: 0.9 } })), e.createElement("g", { transform: "matrix(0.220199,-0.127132,1.41145e-17,0.293599,339.708,327.53)" }, e.createElement("path", { d: "M1306.5,1286.73C1307.09,1285.72 1308.6,1285.48 1310.36,1286.12C1312.13,1286.76 1313.84,1288.16 1314.73,1289.7C1326.44,1309.98 1355.4,1360.15 1363.73,1374.57C1364.33,1375.61 1364.49,1376.61 1364.18,1377.35C1363.87,1378.09 1363.11,1378.5 1362.07,1378.5C1346.41,1378.5 1288.17,1378.5 1264.07,1378.5C1262.42,1378.5 1260.37,1377.48 1258.9,1375.94C1257.44,1374.41 1256.88,1372.67 1257.5,1371.6C1268.1,1353.25 1296.8,1303.53 1306.5,1286.73Z", style: { fill: "rgb(245, 63, 63) ;fill-opacity:0.9" } })), e.createElement("g", { transform: "matrix(0.254264,-0.1468,1.22235e-17,0.254264,329.57,364.144)" }, e.createElement("text", { x: "1170.88px", y: "1451.42px", style: { fontFamily: "NunitoSans-Bold, Nunito Sans", fontWeight: 700, fontSize: 41.569, fill: "white", fillOpacity: 0.9 } }, "!")))), e.createElement("defs", null, e.createElement("image", { id: "_Image2", width: "113px", height: "47px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAvCAYAAADU+iVXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABVUlEQVR4nO2aQRKCMAxFxUN4O+9/DNw4CoiTliZN8vPfQlm00ykvP3aQ5fFc11sjy/L+/nx8r3ffm7Fn845jz+aJa23XOJvfs9Zh7NBawv3YrSGtdbj+x10egkFzpRrNt+SSxMgbqkiZJCJDiQDoSmSfdYFJ3JD18GMmcXhDTHUzNZIIXhA1JIJDib0MptqiKbhKzHqQiAaT6IlSFVIiAJQIACUGpLfLhpfIw49Ml8T2v4/JTPySyIJQI3w7JTIYEp2fong3FXWJ3huqCEYSNUlYhZRoyaSCoEQAKHESlqF0kZj9NBgNJhEASgSAEgNx9WfCTmLxpygzYRIBmCORsTIlXxJZED/kk0h+KC1x9E2FKG86qEkMsh8/HG9A6SSGYqAIKDEinUIpUSDDYXiqxAw3JCNMIgDXJTIWYdBJIvukK2ynARit4XASUZ6izCScRFWKCH0BfLM84oTw1Z8AAAAASUVORK5CYII=" }), e.createElement("image", { id: "_Image4", width: "113px", height: "65px", href: "data:image/png;base64,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" }), e.createElement("image", { id: "_Image7", width: "113px", height: "65px", href: "data:image/png;base64,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" }), e.createElement("image", { id: "_Image10", width: "107px", height: "62px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAA+CAYAAAAs/OVIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nN2dWa8saXaWn5jnzMjMPZ5T1V3tsrGR+TNIvjAgC+y2uw22bIONzB/gBgkEAowZJbiBCyR+CzdIIHDX0Gfvs4fMjHmO+LhYEbGrrabdQw2nCKl0ztlDROQ3rPWu933XVxpf0+vn/0CpplEAeJ7G83MBQByHmCaczzVx7GEYMI7QtjAMA/f/1tK+yvf+Wa6v5Yt/4+8olWU5YRgCYJoawyATZxgargtVBZoGZVlhWRamaeJ5Gl0HRVFx/I/B1+6zf61e+Ju/o1TXDTw/P3N7e4NhQN8rbFujaUY0TSMMdU6nhjh2GUfoezBN+a/rIM9LLi8DHh8LNpuQj/+l9rUZg6/Fi17+eq00TaNpGjabDZ6noesyEY4jk2BZUBQKTdPQNIgiyHMYx4lpmnh+fiaKIq6vAz799MxmsyEMDboOlOJrMWnv9Au++s6gLMvgeDxzc7Pj+Tnn4iICIElqLMvCMAxcV2MYoOtGdF0HoOs6NhuH47HAMAw8z0PXIQyhruHx8cwHH+zo+2Wi4aN/8W5P2Dv7cq+/OyrL0jFNAQhl2RIEDtMEwzDRNA2GYWCaJrZtcDwm7PcxVdXQdR37/Ya2HTFNg7bt6LqOi4uQpoEggGGQnFYUA45jzvcdiWOD//GP3s1Je+de6uf/QKkkqXFdlzDUyLKR/d7g+bmfJ0Yjy+T7fd8DEAQ2AIYhIbGqGkzTpCxLttstcSwTrhSk6YjrGuS5THZZllxcxOg6uK6EzjiWifzv//DdmrR35mVuf6tXlmUyTYqqqthuAwxDBm0YBCBoGjw9CURXSrHbRUyT/P4wTLiujq5DWY4YhsHbt2/58MMbHh4KXr8OOZ8nlFJM04TnWVRVh67r6LqO7+u8fZsQxzGGAUVREwTeO5XL3okX+cU/VCpNe7quw3VdbNtgmmQnBAGkqYSq5+czV1e7dVeM40gQuOuEdV2P61r0vXzBsnSaRnZkVVVomkbXdWiaxmazwTDk44+jQinFOI64rkXXCbLUdZ0ggKendwPqf6Uv8Oo7gxrHkf3eJk0FHBiGhmVJ2Hp6EmBR1xPavMCTJMGyLDRNIwgC6rpmHEeUUmy3EXXdst87VBV4HhTFhOPo1PVAFJn0Pei63B9kxyoFeS45sW1Hmqbh/fcD2lZ28+Njxe2tT5Iovv+n+lc2Zl/Jg3e/lisAwzC4ufFmiK0wTY2qahnHEd/3sSxBba7rMk0Tr14FVJUMcF0LPO86uWffy78fH1s8z1mfVVWyC+PYommgrjtc10bXwbbh+bnC932qqsLzPDRNI0kSwjDEtk0sS+6tafJf3yt8X+N//ZMvPzx+qQ/8xt9RCgR1WZZBVTW4rouuQ123dF3H9XXE+dxydeXQdTIxaTphWfoKApJEQMfpNLLdSsh8fq4YxxHLstjvXepaQmieK6JIo65hGGRBLGiwaWQyHcdhGAa2W4tpetl1SVLiui5ZlrHb7VBKYRgamw0cjyN3/8b8UsdP/7IedPG3KrXdwjQp2ralLGvC0GW3g+0WqqqawxlomsbxOFCWE30vNVPT9HSdoq5hszE4HgeCwJjBwIRpmrx+HXFx4ZIkHY4jfGDXdYyj1FKGIbTU+TzO7MbIxYVLHGsMw0Cej+i6TFLfw/vvB2y3Bo7jEEl5R5YVvH3bSH77lUe1/Rup+rLG8AtfGX/p7yk1jpAkFWHoM00CsR1HcsfjY0UQ+KRpNoceHcOQHVUUijjWqCqYJil6o8jANOGTTxLeey+maaDrJrquw/Nc2rbDcWyKouT6OkDTIMvkPkmi2Gw0jsduDXv7vUNZQlEUbLchj49HXr8+rCVA27YEQYBpmozjOIdUeHrqmaYJy7IA2G71L7w++8Ju/kt/pFTfQ12P9H2PruvEsY1SMlF3dxWvXvlkGWw28uGVUvi+jWHA8SiDl+cVjiM5KAyNleuzrIVOGpkmgeS2bWOazPBdBvPyUn738VFyl6ZpuK5J3yssS8P3hfRdCuhpUniexjRBUXQz+2GsTMeSv2ybmd3vsW2ZsGGQ+PlFhcfPPQxef7tVv/zHStU1pGlNFBlEkQtInkjTjrKE/d7n/r7G8+D+vp4LXpthgKoaiaKQYVDouo6maWy3BgB13VPXik8+OdO2LUmSsNtZTJNwgAtpOwwDYejQNHA6DTPMt+j7nr5XpGmK5wlQUUrAjiwkYebbVhFFNk3ToJSE7+MxZxwnum7g/v5MVUEUWXRdTxDAdmuQ5znv/231hYTGz3WyXn93VI5j07ZwOiV4nkdZKrKsZr+3CUPwfZtxhDzvKYqC47HB9z0MQxJ/FMlAx7Hcs65r+r7n8bECIAyteSJCuk6K2rKUwfZ9naIYaBrwfY++l/DbdR1RFOA4cH3tsdlInfX01OD7EpYNQ547DLKDhmGgaRS+73M+SyE+DAOapnE4mDNDUtP3cHtr0XWQJAPvvy9F9eavJ+qD3/18J+1z2a7X324VgOMI7XM6nQHQdZ3NZoNlCYL63vdSXr3aUlUSMmzboGl6qqpis9lgmhpJkq/E636vkabQdVIUN00/k7fQNBJa27YlDP0VtpumCcjAWpZFGOqkac9mYzEMzEVuz25nUZbQNO2aj2zbRinZdZeX8VqTLXVf0wwYhuxw09RwHAmhris5tW0VYaiRJBLSlVJ4nkPTdDz8e+dnHuuf6Qa7X8vV9XWIZcFHHyVzYbrFdfWVfTif1YzIRnY7n7aVAQCJ/a4Lb9/mRFFEXdd4nkdVCejoup793sKy4HhU6LrIH6dTwqtXMVk24Lom4whFUc7PD9E0Zgguz7ZtG8PQqKqGvu85HCK6DsqyxDRNHMdZ0eMCfJoG+n7g6srk6UlykYANH5CclSQ1tm0TBAZv30qxHscBXSclwgI3TFNy3c/K6v/Uv3z567WKY3fl4ZqmIQhc6rrjcLDpe3h4SLm93a4F7MIqZJmiLEssS0Ka7/szoRry9JQTx4KTpwnqull3y7ID0jTl9es9b9+m2LaNZVl0XUcY+tR1y/W1gIqylHukqYSxzSZkHBXDMNC27TyJBpZlcDolXF7GaJrsEAmJA77vEYbyzn3fs9lImJ8m+bfr2uu7Sn6THRVFPmEoIGgYhIGxLA3DgP/9T3+6SfuJc1b0187qm7+j1OWly/lcs9sJlHYchywrVz2p72G/3zIM8nt5Ln+ezwNxrKGUwjRN4jjgcNB4770Qz4M4juYBG5gmNSNEk67r6Pue3c7A9/05pAXYto1tm/PPQRg6HI8jeS7vUNcdnucRxyF9/8L5tW3LdmvTdR2GARcXMVXVUxQdti1j+eqVx/Pzcf3sSikeHzMA0jRlu7Vpmo7n5xOmCRcXLlHkYZomeV5xOo0YhnCURVHg+/JOr74zqJvf7H7ifPZjz/B7vz0ppdScrF2Uku3dNPIhNE2jqiouLnzGUVZaWUrN07YdFxf2al4ZRzgeG4Zh4OYm5OGhJAwDxlF4vDR9get5nrPbCdooipKLi4Dz+QWGT9PEdmtTlhNBoK9C4kIPCZID3xdC+HAwub+v5h1lEQQ6SdLOSHSYw6KEsK57uUfbdrNtwMJx5BllKWHQ9405Cgzouo5t63TdRBjKwjVNuL8v8TyPpmnWksVxZPw++ZMfb6f9hTvrw99X6hf+rlJZlqFpGp7nkqYVVdXx9JSTpikguSeKfE6nBtuWiYoim74fmKaJuoaHh448Z4buAufrGrbbYKaREspSapv9XuqbwyGmKEpME3zfp2nkd7MsI45Ntlt7DrM6x2PFOC6c4Uhd9+i6TPLjY8luZ/LxxwkAlmWRpum8++p5UGWH6jo8PCSM40RZ1ozjRBjKLpSwquj7kcPBmxeMLEDPM2fKC8JQ5/4+pSwVaarYbAKqShbhQoVlWU/X9T821P+Rk/X6u6MaR6mPvvWtLbouRSSI4HdzExGGIaapMY4yQI7j8OmnCZqmEUWsVX8Uwc2NvSZw4flcum6kbUf6njnW27RtS9+/cHSO49A0I0GgMU2KcYT9fr8O0jAMdB3Ytk3XQZoKEnVdi6YZub2VcFmWsNvFXF0Jcbvb7ajrnutr2bmbjYZl6bQt3N7GGIbOxYXH4aBTliK1TJP8XF3XGIY8p+tk8ppmxLYtzueGuoY43hIEkqvO52z+2W7O5xVKKW5vLTQNfu73lFpQ9f/r+qHbz/qr9+rDD28YBkE8mqZxdeVyd1dwcRFi27K6hmHAcSzOZwESDw9iD3McDaUkPrvuwihIQnYcG8+TuibLFK6rkeeyC7tOVNokEUjteQ6nk8j1SskOCYIAXRdEeDjEKyNSVeJyenqS+s5xnJmyknDrui5RZFJVijzP2W43lGU112cOeV6x3/v0vYTMtoXHxwTf99ls7DXcPzw88OrVDUVRYds24zhS1zWHQzwvnhc5x/MEUCyFN8i96/olvC6k8v19MpcvOn3/w0niH/hC+KsntdvtZugrDPM4KrZbjTyXAZYQJ1SNhBjxN3zwQcgwvEB1WTUuZSmUU1EU7HbbFY3VdU0cb6iqBt93KQqB63kuyO2zxpcoivB9g2GQiX96+qym5dP3gmIOB5OyhCQRm5llQV1PxLHO42OzcodRZK8KdJIUKKUIw5BhGFZRU9O0dZJlMQitFcfCzJ9O9fw9bd79gnYXrWwcX+ist28rdjt//nvLdisLqSwlFwpQkXquqiRvRpF8/7NKtQbwwe8q5TiQpsJzaZo8XOCo1AwgyEoEQgPL0lY+7XxOuLqKSdMa3xcXkePA8VgzTRPX18G6A85ncRgdjx2bjXCFCwgYBlkMS6gcR7i/zzFNk7Zt8TyP16+FQioKIV89z8OyjHWVlqXcbwm/4ziuueLy0uajj8SGJpKIQ12rVb8KQ4u2lR0kphsHTRP+b7+3yHN5pmVZc8h2sW1517Zd0GdDXYvzStd1HMdhuzXWiWzbkTA0SFPR1dq2xzAM0jTl1asdZTlhmjrjqKjrGsdx1l2m/ZV/oFSWsdq08lyI1ft7QTq6rs+eBYHowj4M+L6JbcPp1BEENlUlrECWTUSRzt1dShxvGQZRgPu+ZxxHwtADpPa5vAxnmkaK4jiGLBPpQrg84Qo9j3kXy4TI7pYdGwQGeS6DWZby/U8/TbBtmzj2ybKGsizZ7/fzhLtkmTwvyzJev96QptOsWcV0nZhwltJCPBpwPqdcX285nSo2G5++V+tOdBydthXH1cWFT1lKydE0DTc3AooELcoY6LrOMAwcDj739xJql5C6eBkXt1YQyOe2bdAXo6Ss4oq6btcJCQKDYRjYbAzGcVFoayzLpK7HWSey6Hvh7N68STEMna4Tri7LcnRdRylFENhEkYemycDHcbjunu02IgzhdJrWWmgphA1DVm2ajmgavHmT8NFHKboutU6evyT+/V5W99VVjO/7KAW+73I4HCjLcg1pcRyhlMJxnBnF6ViWhW0LMXt5abHbCdAR24Di8nJLnvdcXvqcz1I0TtOEbctkmqbObuevoXu71TkcfO7uCqZJFGZRqxtcVxaSbcN778WM40iWZRiGweOj3PvqKp69IRIeTRP0slQUxTCHPmf2IahVCGya5geS7n7vMU0KxzE4nxsBJJaEy/1+S98PZFm91jGyKwUxDQNkWUWeN2voEGGx43zu15eWUKtTlt2cv8A0DYZhJIoibm+3WBYcDvsZTWmczx2nk8T2cZQoIQ0JPZoGFxfhCsuXLOB5Ds/PFedzRRAEPD1l1LWi70VLMwyDIBB4Lova4ulJgIXjaBwODsMgu2ah0IZBFnRdy9d3u5CybHFdjdOp5fXreJVXJMf3OI6DrutEkcyBUswLRyPLJpSSn9Vlpk08T1ZKkkiCD8OQtpU/01TY5b6XxBqGGk0zcHUl3ogXWM3skHWpqgrXdbm8NGYxUQrNqyufw8FlGCR+L+Kd48ifu91uDpkTrmtTVR1ZVmNZsNsJrVUUE3kOux3c3QmYsSwLz5OFs4Tn8znFdS2mSdgNIWtllSdJQt+PRJE/85Adt7cbgkCjKCRP931P2/Zst3A+J2ga3Nz4aJpGWfZzflQURTtrW6IMbLfbWcHuOR4z4tjh8VGose9//8zpVJGm/ZyrRYv7xjdC7u8lH55OCXUNd3fZLP0IwNEOf7NUC+sgtY7krDRlVVOXLg2ZWBddXxjnabV3Lbxd3/c0TUMcx0SRwfEoqElW3UCWZWw2G+LY4nwWVsC2rRni9mRZNsvoIUEgFb5hvDAiS/ja7eDP/uzFmqaU4vra4/m5m8OnQd/3DMMw+wJ9np6eME0TTdP45jdjigKyTJiFKNLpe1nBS+gRH7wiy7LZpxjT98PMZBjc3yfz38MZlhtomoyLMBmSb9++fSF8FyI7z8Woo2lSpvR9z8VFyPlcz5KRLOZpmnAcWYjaYlNumn71zJ1OJ25uLgHW9plFUZWXkUnbbGQwxxEeH4/s93tsW3ZQmopJMgjg7dty5vVi6loMKotnT9fh+VlI1CU0+v4LU11VkqzP5zOO43A4hOS5wF0pxGVAl8vztJmz9DidxEL25k1BEAT4vsbxWBFF/uqL3++1Wf4QdTkIRErx/UUsbZmmadbHBmzbZBgkVzXNsOZWXWeWbsY53ztUVTfbDTxc18B1hRsVf6KzSi+uK97EIPDRdXn2w0M1q+sueT4DE8PQGQaF686zp2lcXFzQNBLrP/nkiK7LRNV1MwuELuM4znWCmgFDPPsbsjlceLRtP/Nr2oy+cm5uXA4Hjb4fqev2MywFc64oSJKONFWzu0m6R0zTxHVdDEPYk9Oppm3VHIYbDEPD8zSSRMwsAqV7qkpCeRRpFMU452XZBV3XkSSyQNpWEQQWx2NOlhXzTh7nWs6b84hJ28rAdd1EURQ4juSoMISuU+vC6bppLTeapqHrFEky4jgmwzBg26xCZ9PA7a1ocraQ+Fxe+nPBrdjvLbZbV+imzUabfd6KoijQdY3NxqIoGl6/PpDn1Sp9C3qCKDJ4fj6jaRrPz+lniladp6eMqoI4lrpFaKBOaoa7isfHgSgy2G4lmb56FVOWzDkkpKoqTFOjrru5PnN49WqLpmmzaRMuLz0cR4jc3c7j6em4vuP1tWha2+2WPJe6pyjAsowZaUqxfH3tEMfw+Jiy2Whz2PJo23ZGlwKSzueUNE1xXbBtsQbYtr7SW+M48sknCXGsURTFHLrElp1l2Spquq4xRzB3DrkTRTFwPCYkiXCIadpxPIr14fY2mEsIyX9rdfxLf6RUUYjOdHkZkiQtUeTMiGrAssw11CxajoQRk/N5XF9sAQy7nb+WBOKulXadZcX7vkWaVtzc+PNASjhI08U2JtJ/HFsoBff36YzCHJqmYZomwjCc2fF+VYa3W5MkEfV5yVXDMHBxIS7d+fVoGoH+oiZL7ghDef5CChyPJZtNQBiymkvzfFhFUssyOZ3OxHFMWZa8ehXy8CAOYc/z8H2Dh4eE29uYtoWm6fA8e65XpUYUEfOFohJ0LX+vKvn5PBf79g/QTe/99qQ8TyPP+1WgE1len7sw1JwIhR5ZFFnPg48/lmTfdWrt/kiShIuLA1mWc3sbUVXC6d3cxNS18ILCM76Ic54nAzkMwp6/fSsTKsWyTHKSlPK+7wWzfCE5482bZGYWIjYbE8OA+/uCOA5n4CBq89L8YNs2fd/jeR5ZlnF1teV0KmeNzJpRsZhKNxuDspR8soAe8XgkXFzEFIV0W3adjIfY7xr2e5eqkp/b72NcVxbMxx9L4f76tc+bNxXTNHE4hLMFrub62qMsf1Bd/qFE7vW3W3VxYfPxx0LNyPaVVhmxNBe4rsswDFxfuzw8CL8nu47ZFqZxPhc4joPrWivddDxWbLc+VSXU1uKB2O8NkkTNZpiXnxeXVMnNTUCWiXVZdkU2W6xNsixnv49WC/WnnyazsBnSNOJxf3jIuLraoGmQJC23tw53d/Le0/RS4I6jLELDWDzwNZuNmG+macIw9BURGoZBXQuYEZpKJsX3fS4v7bWrsusk5IHoc9/85pb7e6lFw9CmbcX+JjRagW3bP9Sz8SNFL/dXHtXFxcUqyi3EbpIk3N7ueHrKORwimuZlGxuGwPrvfe8tH3xwQ1VJK87iim0aOJ/Pcy2i43mQJB2WZeE4Ur9EkbUW0GHoE8fw/Cwf1vd1hmGRRl6oLN+3aZqBvu8JAo9xlETvuhpFIQtjATFSZE6z1yOY/YUG9/fC9KephOyFXpP7QFGM+L6B5wlhLbltWkGI9IcpLi+liBZ7tlBISdICzKDE4fY2pCggzwt0Xef2VqLHjxIif6Se1fzXK+37f6prCyEq6rA228BEjxKI3X8GlS3o5oY8l0Q8lyFzp2GBaZr0fc/5nJDnQrhO08T5XHJxYVHXiq6bCAIfzxOzzOEgWlBRDKRpObMZxsyE27guM1vt0TQdbdtSVRVVNVKW5QyH09nvLjWk7/trC1CaCqMxjmr2lKjZONNiGHB3dyYM5et3dxVBoLHdujiOQxx7zAgeXdf45JNqNd90XUdVKaLImZVpcfem6UTX9VxdhbP/Uf2FivGPLevf/lavxnEkihzqesRxDLpOGOKlvgBmuf1Fspa6TAq9um6wLIu2bbm99TmdFh5Q53xOef16uxLBDw/CpARBgKaJ1CCrmzVESn0npGwQQJL0lGXJbhdTltXqbNrv/dVSIMy/7Ib9XuPTTyWnWZaE8PNZdvMwCPQW86m1cppZJnJHUfT0fc9+768O3cfHdmbahWfsOmZILwtFhFoBFVnWcnHhkKYTb/618WPNw0/ssvm531OqqiRUSfErjMF2a/P0VHB9HfL8XHN15VFVUFXtHJqCub5Y6jl4eCjm5jkhYpcicRzVGtocB56f61lM1ElTETiXGL+gvsUDcn29o20FvLx9K/1dWSbhCiCOPaZJNDEhdh1cV6Np1ErcfvjhjtNJ7h2GPlXVEIYuWVZxOPgUxThbD2TXAytRvKgLi3NqYdilTpTnOI5GXf/kXSg/tRXt6jcatds5ZNlAGJorKmuaht3OpW2XLvh+RjpCej495VxeRiRJQxRJu8/xWLDbhZzPBVEkMdOy4HyWMytAEr4UlQZl2a4OJSmUDYpCWArD0EnTjJubzbxYRNJYitRhGNjtIvJcdjvIbhP/vRhy7u7On+EoRzzPJQzh6amZuU/xMmZZtxpbF5/7QjjbtsEwCHBoW1G5bdvm+tr6qXuVf2aX6F/++0rJJEnyrSoRJIXYlGTq+xZdJ6v9fK7mVWYTRfDmjfzMxYXFRx+d125GOadCm3WrmosLj/NZtLOuU7MPQpiCpTkhihzKsl9lGYA4Nueww9pDLMYWKcLD0FgprbaVRSCuX52yrFYuse97osinqgRJns/LCTYiNEoXypY0TWeUKnLI5aXH83OzaoOf/quf3uj5udinf/mPpWPk6Unif5IUvP9+SJqKRLEgSduWvJAkFXHs0zQCl/v+Bbm1LatAB5Kg5XvCNhgGPD2p2e+3AB9h3S3LWOX052epa8TTCHd3+SxDBKv7Vu4riK8opEl8IV2X0LrbidD58HAmiiK6ruPmxl89KEFgzfodlKUYXZUS/tTz3PUZn0en5OfamvLeb09KQp5BnktCXpqzP2tpLsuSzSbkdEpm352P677UJGUpk1nXUowuRPLiUxgGGYAsm6jrmv0+4HgsOBzEzHN/L+1Ci1IQRUIoPz8LUfvmzRO6rnN9fZhbTyXnSDuQuy6WIDBWqJ9lEqIti1VvWkJ9WU6cz2cuLw+AfEbZ6Qb/8x9/fj1bX0gf0TJpfd8Thu6aH3xfEJthGGuN9fwsSXwcpZAWL4bi+fmZ/X6PruszMdtyOATkeT9bzPrZhLOjLKVoXgjZaRKJ4nQ68fr1AcuSfKfrOufzmffe2895pCaKPBwH8nyakZzk0JubkDwXXUuUXmHcXfflqIdPPz3yC79w4O5OdpGgYvHfT9Pnf8TQF9ZMd/UbjdpuRQZ4eKhm+O3N/cPdipSyLOP997eMI5zP3bqq+75fm+kuLvx1hy6QuG1lwNp2YrvV5w5IxX4vH0kpePtWlOzt1uXhQSxqfd/zjW9IiO77ic1G5/m54fLS5XTqubiw1ibyYZAdE8/9R8LMmPT9uDq0ttvt6nHf7Xy67sd32P6k1xfepvr6u6NaTCdNs8j0+io3RJGF6wqt1PfM9ZI0iKdpznYrTQrL15cmiO3W5XgsaNuWq6vDLOP0q74kjXVyFBC85MHbW4ePP5b7iggou35RbTVNI4417u7KuRbzSVOZvLIUoFOWi7G0WwXEsvziz8r40rrNlxNklILj8cirV4f1WATTlB2T5xO+r5PnPYeDWL/O5wTDMNhsIoZhXLs0tltr3lmsNdrzsyjbck9Rt4W81Wcm5AWJ1nWL4zgrk7H0MS8uX8mfPZ5n0bbjeqCKlCbe7NUQ0+oXtZP+/PWln+Xw4e8rlSQyQHVdz40A1mxFlhDXdf0s95ukqdRlZSmtPldX+zUkLpY1zxPTpijHclLNe+8Fs2AquXMxhcqgO6sBaJFFhkHAzCITXV+Hs/dBmPoFVb55I7LK0qZ0+k/hlzaGX8mhJT//B0qlabNyi0tH4vEo0FfafWRGgsBeqaCyHFe/uFILdA6wLI00FWu1uGuFSLVtGVzf9/E8a0Wjcp6FPnNzFlUFed4xTRP7vYvrwsODyDHLwsiyksMhIE2lFnv77+z/vw8t+fNX+Ksntd/vVmtY2/azVGHjujLgi4zuOA6bjRTJYfiieS1HNeS5eBjKUsBM0zR861s7zmcpxstSjKnzQWozky8F/HYr/vqlt3ix4rVtSxQFNE1HGNqUZf+VTNJyfWmHlvywq/gve+2TP9E0yQ8DRVGsO0aI4A7ft9ak//QkHpCPPz7PTW/Mztd+1paa+SxcjziOOZ/FmZTn3Xw24dLoPc4yy4jvC7sh8jucTvIOeZ6vB0q6rs3/+Wea9lVOFLwjp6It1y/+oTzw8moAAAHYSURBVFJl+cJOLBrZZmOQ52IWTVOxQ4vxJVhdUkqJoadtWyzL4nDw1zZWOWjEnk+gfhH6kkSOrNM0+V3fd9fifQE9bQvf++df/jlNP+x6J17is9f1t1slsNtc/eJRFK2+jEWUXPyMy0Eii31rYfhBmtsk1y07zqTr5J6CEB36fmS3M+beXykZyrKmbVvy/7x7p8bnnXqZz17f/B2lmqabpXRhuhf6yLZt8jxns9ng+8I6LKzC6TSujLznuSuh7Hketm3MLMo4d+2LMzjPO4ZhmPWp7Tt7Vu47+VKfvV59Z1B1Xa/Iz/etGVio9biE5aihpVuy7wWG17XkvcPB5u4un21rW5qmY7ezubtL567MkGmSXPlV56Ufdb2zL/bZ6+Y3O+W6FmXZrAJfFFkUxbDmryhyZxVYWAyhgnyaZlxNKLe3Huezms0uL4eN/CRN2F/l9c6/4GevX/ojpapKitMX1gPyXDjA5WyLxUMoNmWXzcbg8bFkuw3WBkA5zvXLPzPwZ7m+Ni/62Wv5/5Asx4W7rs3pJK2rV1fB3GB9nifKo22Fxlr8hVXV8vgf3K/dZ//avfBnr8tfr9UC1a+u/PXM9udnYc+zbPH+vfx/Sx4eHuj/2+3X8nP/X8+jjAy2QdiEAAAAAElFTkSuQmCC" }), e.createElement("linearGradient", { id: "_Linear11", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(-118.47,-106.79,210.785,-180.125,69.2121,1372.7)" }, e.createElement("stop", { offset: "0", style: { stopColor: "rgb(64, 128, 255)", stopOpacity: 1 } }), e.createElement("stop", { offset: "1", style: { stopColor: "rgb(64, 128, 255)", stopOpacity: 1 } })), e.createElement("image", { id: "_Image13", width: "107px", height: "34px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAiCAYAAABY6CeoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFElEQVRoge2aQRKDMAhFmx6it/P+x7Ab64xOmaAG8vnwFnWhiOGFOG3TPsu6vpS0djpuH61zXoz5F3s6r4rRxipiftddeUbp3t18QozEu3/JfdSzgCy5VWpTWcVYSlaPqcvDEUpZQPUdCqUsSAbMoJIViJIVCBNZrO+MHtbjrs4KRMkKBJUs9uXXTxZ7JR2g6ix27sly6BIxReIOHdpZWevoNe68y2DAmTVXFmDBAB9pJ29nBYRCln5jgkVyv1QUsrIAJyvtvg1F7iGykF/KlniPG66zKDCyWLI2IqwOJSsQz2URbqZEpTorEDCypn6xnciVYT+SlbS+08Zt01lJfv7xBmYZLPpgy6p/pA9gyxIArKMLXxexLNiBCThLAAAAAElFTkSuQmCC" }), e.createElement("image", { id: "_Image15", width: "38px", height: "62px", href: "data:image/png;base64,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" })));
}
var He = function() {
  return He = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, He.apply(this, arguments);
}, wr = function(t, i) {
  var a = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (a[n[r]] = t[n[r]]);
  return a;
}, Ar = { success: e.createElement(Yt, null), info: e.createElement(_e, null), warning: e.createElement(cr, null), error: e.createElement(Gt, null), 404: e.createElement(br, null), 403: e.createElement(Cr, null), 500: e.createElement(jr, null) }, Nr = { status: "info" };
function Lr(t, i) {
  var a, n, r = u.useContext(fe), s = r.getPrefixCls, o = r.componentConfig, d = r.rtl, x = Qe(t, Nr, o == null ? void 0 : o.Result), m = x.className, g = x.style, E = x.status, h = x.title, L = x.subTitle, C = x.extra, y = x.children, T = x.icon, A = wr(x, ["className", "style", "status", "title", "subTitle", "extra", "children", "icon"]), c = s("result"), b = "icon" in x ? T : Ar[E];
  return e.createElement("div", He({ ref: i, className: H(c, (a = {}, a[c + "-is-" + E] = E, a[c + "-rtl"] = d, a), m), style: g }, A), b && e.createElement("div", { className: c + "-icon" }, e.createElement("span", { className: H(c + "-icon-tip", (n = {}, n[c + "-icon-" + E] = E, n[c + "-icon-custom"] = E === null, n)) }, b)), h && e.createElement("div", { className: c + "-title" }, h), L && e.createElement("div", { className: c + "-subtitle" }, L), C && e.createElement("div", { className: c + "-extra" }, C), y && e.createElement("div", { className: c + "-content" }, y));
}
var It = u.forwardRef(Lr);
It.displayName = "Result";
function kr(t, i) {
  var a = u.useContext(fe).getPrefixCls, n = a("typography"), r = t.className, s = t.style, o = t.children, d = H(n, r);
  return e.createElement("article", { ref: i, style: s, className: d }, o);
}
var Ot = u.forwardRef(kr);
Ot.displayName = "Typography";
var Sr = function(t, i, a, n) {
  function r(s) {
    return s instanceof a ? s : new a(function(o) {
      o(s);
    });
  }
  return new (a || (a = Promise))(function(s, o) {
    function d(g) {
      try {
        m(n.next(g));
      } catch (E) {
        o(E);
      }
    }
    function x(g) {
      try {
        m(n.throw(g));
      } catch (E) {
        o(E);
      }
    }
    function m(g) {
      g.done ? s(g.value) : r(g.value).then(d, x);
    }
    m((n = n.apply(t, i || [])).next());
  });
}, Ir = function(t, i) {
  var a = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, r, s, o;
  return o = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function d(m) {
    return function(g) {
      return x([m, g]);
    };
  }
  function x(m) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (n = 1, r && (s = m[0] & 2 ? r.return : m[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, m[1])).done) return s;
      switch (r = 0, s && (m = [m[0] & 2, s.value]), m[0]) {
        case 0:
        case 1:
          s = m;
          break;
        case 4:
          return a.label++, { value: m[1], done: false };
        case 5:
          a.label++, r = m[1], m = [0];
          continue;
        case 7:
          m = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (s = a.trys, !(s = s.length > 0 && s[s.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            a = 0;
            continue;
          }
          if (m[0] === 3 && (!s || m[1] > s[0] && m[1] < s[3])) {
            a.label = m[1];
            break;
          }
          if (m[0] === 6 && a.label < s[1]) {
            a.label = s[1], s = m;
            break;
          }
          if (s && a.label < s[2]) {
            a.label = s[2], a.ops.push(m);
            break;
          }
          s[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      m = i.call(t, a);
    } catch (g) {
      m = [6, g], r = 0;
    } finally {
      n = s = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: true };
  }
};
function Or(t) {
  return Sr(this, void 0, void 0, function() {
    var i, a, n, r, s;
    return Ir(this, function(o) {
      switch (o.label) {
        case 0:
          if (!(navigator.clipboard && navigator.clipboard.writeText)) return [3, 4];
          o.label = 1;
        case 1:
          return o.trys.push([1, 3, , 4]), [4, navigator.clipboard.writeText(t)];
        case 2:
          return o.sent(), [2];
        case 3:
          return i = o.sent(), console.error(i ?? new DOMException("The request is not allowed", "NotAllowedError")), [3, 4];
        case 4:
          a = document.createElement("span"), a.textContent = t, a.style.whiteSpace = "pre", document.body.appendChild(a), n = window.getSelection(), r = window.document.createRange(), n.removeAllRanges(), r.selectNode(a), n.addRange(r), s = false;
          try {
            s = window.document.execCommand("copy");
          } catch (d) {
            console.log("error", d);
          }
          return n.removeAllRanges(), window.document.body.removeChild(a), [2, s ? Promise.resolve() : Promise.reject(new DOMException("The request is not allowed", "NotAllowedError"))];
      }
    });
  });
}
var mt = function(t) {
  return Ct(t) || jt(t);
};
function we(t) {
  var i = [""];
  return e.Children.forEach(t, function(a) {
    var n = i.length - 1, r = i[n];
    mt(a) && mt(r) ? i[n] = "" + r + a : a && a.props && a.props.children && i.push(we(a.props.children));
  }), i.join("");
}
var de = function() {
  return de = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, de.apply(this, arguments);
}, Pr = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
};
function zr(t) {
  var i = t.children, a = t.copyable, n = t.editable, r = t.ellipsis, s = t.expanding, o = t.setEditing, d = t.onClickExpand, x = t.forceShowExpand, m = t.isEllipsis, g = t.currentContext, E = g === void 0 ? {} : g, h = vt(), L = E.getPrefixCls, C = E.locale, y = L("typography"), T = Pr(u.useState(false), 2), A = T[0], c = T[1], b = u.useRef(null), S = ae(a) ? a : {}, M = ae(r) ? r : {}, P = ae(n) ? n : {}, X = _t(M.expandNodes) ? M.expandNodes : [C.Typography.fold, C.Typography.unfold];
  u.useEffect(function() {
    return function() {
      clearTimeout(b.current), b.current = null;
    };
  }, []);
  function w(V) {
    if (!A) {
      var z = S.text !== void 0 ? S.text : we(i);
      Or(z), c(true), S.onCopy && S.onCopy(z, V), b.current = setTimeout(function() {
        c(false);
      }, 3e3);
    }
  }
  var v = function(V) {
    P.onStart && P.onStart(we(i), V), o(true);
  }, R = S.tooltips || [C.Typography.copy, C.Typography.copied], W = a && e.createElement(se, de({ content: A ? R[1] : R[0] }, S.tooltipProps), e.createElement("span", de({ className: A ? y + "-operation-copied" : y + "-operation-copy", onClick: w, role: "button", "aria-label": R[0], tabIndex: 0 }, h({ onPressEnter: w })), A ? e.createElement($t, null) : S.icon || e.createElement(er, null))), k = n && e.createElement(se, de({ content: C.Typography.edit }, P.tooltipProps), e.createElement("span", de({ tabIndex: 0, "aria-label": C.Typography.edit, role: "button", className: y + "-operation-edit", onClick: v }, h({ onPressEnter: v })), e.createElement(tr, null))), f = x || M.expandable && m ? e.createElement("a", de({ className: y + "-operation-expand", onClick: d, role: "button", tabIndex: 0, "aria-label": C.Typography.unfold }, h({ onPressEnter: d })), s ? X[0] : X[1]) : null;
  return e.createElement(e.Fragment, null, f, k, W);
}
function Tr(t, i) {
  var a = t.prefixCls, n = t.children, r = t.setEditing, s = t.editableConfig, o = t.style, d = H(a + "-typography", a + "-edit-content", t.className), x = we(n), m = u.useRef(null);
  u.useEffect(function() {
    if (m.current && m.current.focus && m.current.focus(), m.current && m.current.dom) {
      var L = m.current.dom.value.length;
      m.current.dom.setSelectionRange(L, L);
    }
  }, []);
  function g() {
    r(false), s.onEnd && s.onEnd(x);
  }
  function E(L) {
    s.onChange && s.onChange(L);
  }
  function h() {
    g();
  }
  return e.createElement("div", { className: d, style: o, ref: i }, e.createElement($.TextArea, { className: a + "-edit-content-textarea", onBlur: h, ref: m, value: x, autoSize: true, onChange: E, onPressEnter: g }));
}
const Rr = u.forwardRef(Tr);
var ge = function() {
  return ge = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, ge.apply(this, arguments);
}, je = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, Mr = "hxj", D;
(function(t) {
  t[t.INIT = 0] = "INIT", t[t.BEFORE_MEASURE = 1] = "BEFORE_MEASURE", t[t.MEASURING = 2] = "MEASURING", t[t.MEASURE_END = 3] = "MEASURE_END", t[t.NO_NEED_ELLIPSIS = 4] = "NO_NEED_ELLIPSIS";
})(D || (D = {}));
function Zr(t) {
  var i = t.children, a = t.rows, n = a === void 0 ? 1 : a, r = t.width, s = t.expanding, o = t.renderMeasureContent, d = t.simpleEllipsis, x = t.onEllipsis, m = t.suffix, g = t.expandNodes, E = t.expandable, h = t.ellipsisStr, L = u.useRef(), C = u.useRef(), y = je(u.useState([0, 0, 0]), 2), T = y[0], A = y[1], c = je(u.useState(0), 2), b = c[0], S = c[1], M = je(u.useState(D.NO_NEED_ELLIPSIS), 2), P = M[0], X = M[1], w = je(T, 3), v = w[0], R = w[1], W = w[2], k = je(u.useState(false), 2), f = k[0], V = k[1], z = u.useMemo(function() {
    return e.Children.toArray(i);
  }, [i]), K = u.useRef(0);
  wt(function() {
    x && x(f);
  }, [f]);
  var re = function(Z) {
    return Ct(Z) || jt(Z);
  }, p = function(Z) {
    var U = 0;
    return Z.forEach(function(Q) {
      re(Q) ? U += String(Q).length : U += 1;
    }), U;
  }, j = u.useMemo(function() {
    return p(z);
  }, [z]), N = At(function(Z) {
    return A(Z);
  }), le = function(Z) {
    var U = [], Q = 0;
    if (Z >= j) return z;
    for (var F in z) {
      var B = z[F];
      if (Q >= Z) return U;
      var J = re(B) ? String(B).length : 1;
      if (J > Z - Q) return U.push(String(B).slice(0, Z - Q)), Q = Z, U;
      Q += J, U.push(B);
    }
    return U;
  }, ie = function() {
    var Z, U;
    if (b) {
      if (P === D.INIT) {
        var Q = n * b, F = (Z = C.current) === null || Z === void 0 ? void 0 : Z.offsetHeight, B = F > Q;
        !B || d || s ? (X(D.MEASURE_END), V(B), A([0, j, j])) : (V(true), X(D.BEFORE_MEASURE));
      } else if (P === D.BEFORE_MEASURE) {
        var J = L == null ? void 0 : L.current.offsetWidth, te = n * r;
        if (J > n * r) {
          var ce = Math.max(te / J - 0.1, 0), Ee = Math.min(te / J + 0.1, 1), be = Math.floor(ce * j), he = Math.ceil(Ee * j), Ce = Math.floor((be + he) / 2);
          K.current = Ce;
        }
        X(D.MEASURING);
      } else if (P === D.MEASURING) if (v !== W - 1) {
        var F = (U = C.current) === null || U === void 0 ? void 0 : U.offsetHeight, Q = n * b, xe = v, Te = W;
        F <= Q ? xe = R : Te = R;
        var Dt = Math.floor((Te + xe) / 2);
        N([xe, Dt, Te]);
      } else N([v, v, v]), X(D.MEASURE_END);
    }
  };
  Re(function() {
    t.rows && r ? (A([0, Math.floor(j / 2), j]), X(D.INIT)) : X(D.NO_NEED_ELLIPSIS);
  }, [j, d, s, r, m, g, E, h, t.rows]), Re(function() {
    if (L.current && P === D.INIT) {
      var Z = L.current.offsetHeight;
      S(Z);
    }
  }, [P]), Re(function() {
    ie();
  }, [P, R, v, W, b]);
  var G = { zIndex: -999, position: "fixed", opacity: 0, padding: 0, margin: 0 }, pe = ge({ whiteSpace: "nowrap" }, G), oe = d ? ge({ textOverflow: "clip" }, G) : G, Y;
  if (P === D.INIT || P === D.BEFORE_MEASURE) Y = e.createElement("div", null, e.createElement("div", { ref: L, style: pe }, P === D.INIT ? Mr : o(i, false)), e.createElement("div", { ref: C, style: ge({ width: r }, oe) }, o(i, f))), Y = Y.props.children;
  else if (P === D.MEASURING) {
    var q = { height: b * n, overflow: "hidden" };
    Y = e.createElement("div", null, e.createElement("div", { ref: C, style: ge({ width: r }, oe) }, o(le(R), f)), e.createElement("div", { style: q }, le(K.current))), Y = Y.props.children;
  } else P === D.MEASURE_END ? Y = o(le(R), f) : P === D.NO_NEED_ELLIPSIS && (Y = o(i, false));
  return { ellipsisNode: Y, isEllipsis: f, measureStatus: P };
}
var Xr = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, Wr = function(t, i) {
  if (typeof window < "u" && window.CSS && window.CSS.supports) return Ve(i) ? window.CSS.supports(t) : window.CSS.supports(t, i);
  if (typeof document < "u" && document.createElement) {
    var a = document.createElement("div");
    return a.setAttribute("style", t + ":" + i + ";"), typeof a.style[t] < "u";
  }
  return false;
}, Vr = { display: " -webkit-box", "-webkit-line-clamp": 2 }, Fr = function() {
  return Object.entries(Vr).every(function(t) {
    var i = Xr(t, 2), a = i[0], n = i[1];
    return Wr(a, n);
  });
};
function Dr(t) {
  var i = t.cssEllipsis, a = t.ellipsisStr, n = a === void 0 ? "..." : a, r = t.suffix, s = t.rows, o = u.useMemo(function() {
    return !i || s > 1 && !Fr() ? false : n === "..." && !r;
  }, [n, i, s, r]), d = { textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }, x = { textOverflow: "ellipsis", whiteSpace: "normal", overflow: "hidden", WebkitLineClamp: "" + t.rows, WebkitBoxOrient: "vertical", display: "-webkit-box" };
  return { simpleEllipsis: o, ellipsisStyle: o ? t.rows > 1 ? x : d : {} };
}
var ut = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ft = function(t, i, a) {
  if (a || arguments.length === 2) for (var n = 0, r = i.length, s; n < r; n++) (s || !(n in i)) && (s || (s = Array.prototype.slice.call(i, 0, n)), s[n] = i[n]);
  return t.concat(s || Array.prototype.slice.call(i));
};
function Hr(t) {
  var i = null, a = function() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    i || (t.apply(void 0, ft([], ut(n), false)), i = at(function() {
    })), i && rt(i), i = at(function() {
      t.apply(void 0, ft([], ut(n), false)), i = null;
    });
  };
  return a.cancel = function() {
    rt(i), i = null;
  }, a;
}
var _ = function() {
  return _ = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, _.apply(this, arguments);
}, Kr = function(t, i) {
  var a = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (a[n[r]] = t[n[r]]);
  return a;
}, We = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
};
function Ur(t, i) {
  var a = t.type, n = t.bold, r = t.disabled, s = t.mark, o = t.underline, d = t.delete, x = t.code, m = [], g = [];
  return a && g.push(i + "-" + a), r && g.push(i + "-disabled"), n && m.push("b"), o && m.push("u"), d && m.push("del"), x && m.push("code"), s && m.push("mark"), { component: m, className: g };
}
function Br(t, i) {
  var a, n = t.componentType, r = t.style, s = t.className, o = t.children, d = t.editable, x = t.ellipsis, m = t.heading, g = t.blockquote, E = Kr(t, ["componentType", "style", "className", "children", "editable", "ellipsis", "heading", "blockquote"]), h = u.useContext(fe), L = h.getPrefixCls, C = h.rtl, y = L("typography"), T = u.useRef(), A = Ur(t, y), c = A.component, b = A.className, S = We(u.useState(false), 2), M = S[0], P = S[1], X = We(u.useState(0), 2), w = X[0], v = X[1], R = ae(d) ? d : {}, W = "editing" in R ? R.editing : M, k = x ? _({ rows: 1, ellipsisStr: "...", cssEllipsis: false }, ae(x) ? x : {}) : {}, f = k.wrapper || e.Fragment, V = We(Ge(false, { defaultValue: k.defaultExpanded, value: k.expanded }), 2), z = V[0], K = V[1], re = Dr(k), p = re.simpleEllipsis, j = re.ellipsisStyle, N = function(F, B) {
    var J = Ve(k.ellipsisStr) ? "..." : k.ellipsisStr, te = !Ve(k.suffix) && k.suffix;
    return e.createElement(f, null, F, B && !z && !p ? J : "", te, Y(B));
  }, le = Zr(_(_({}, k), { children: o, expanding: z, width: w, renderMeasureContent: N, simpleEllipsis: p || z })), ie = le.ellipsisNode, G = le.isEllipsis, pe = le.measureStatus, oe = Hr(function(F) {
    var B = (F == null ? void 0 : F[0]).contentRect;
    if (B) {
      var J = c.includes("code") ? B.width - 18 : B.width, te = [D.NO_NEED_ELLIPSIS, D.MEASURE_END];
      te.includes(pe) && v(J);
    }
  });
  function Y(F) {
    return e.createElement(e.Fragment, null, e.createElement(zr, _({}, t, { setEditing: P, onClickExpand: q, expanding: z, isEllipsis: F, currentContext: h })));
  }
  function q(F) {
    K(!z), t.onClickExpand && t.onClickExpand(F), k.onExpand && k.onExpand(!z, F);
  }
  wt(function() {
    k.onEllipsis && k.onEllipsis(G);
  }, [G]), u.useImperativeHandle(i, function() {
    return T.current;
  });
  function Z(F, B, J, te) {
    te === void 0 && (te = {});
    var ce = F;
    return B.forEach(function(Ee, be) {
      var he = be === 0 ? te : {}, Ce = ae(J.mark) && J.mark.color ? _({ style: { backgroundColor: J.mark.color } }, he) : _({}, he);
      ce = e.createElement(Ee, _({}, Ce), ce);
    }), ce;
  }
  var U;
  n === "Paragraph" ? U = g ? "blockquote" : "div" : n === "Title" ? U = "h" + m : n === "Text" && (U = x ? "div" : "span");
  function Q() {
    var F, B = we(e.Children.toArray(o)), J = k.showTooltip, te = ae(k.showTooltip) && k.showTooltip.type === "popover" ? "popover" : "tooltip", ce = ae(k.showTooltip) ? k.showTooltip.props || {} : {}, Ee = te === "popover" ? rr : se, be = G && !J && !z ? { title: B } : {}, he = _({ style: r }, be), Ce = G && J && !z, xe = e.createElement(Fe, { onResize: oe, getTargetDOMNode: function() {
      return T.current;
    } }, e.createElement(U, _({ ref: T, className: H(y, b, (F = {}, F[y + "-rtl"] = C, F), s) }, he, bt(E, ["spacing", "type", "close", "bold", "disabled", "mark", "underline", "delete", "code", "copyable", "isEllipsis", "expanding", "onClickExpand", "setEditing", "forceShowExpand"])), p && pe !== D.INIT && !z && G ? Z(N(e.createElement("span", { style: j }, o), G), c.length ? c : ["span"], t, { className: y + "-simple-ellipsis" }) : Z(ie, c, t)));
    return Ce ? e.createElement(Ee, _({ content: B }, ce), e.createElement("span", null, xe)) : xe;
  }
  return W ? e.createElement(Rr, _({ ref: i }, t, { className: H(y, b, (a = {}, a[y + "-rtl"] = C, a), y + "-" + U, s), prefixCls: y, setEditing: P, editableConfig: R })) : Q();
}
const $e = u.forwardRef(Br);
var Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, Ke.apply(this, arguments);
}, qr = function(t, i) {
  var a = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (a[n[r]] = t[n[r]]);
  return a;
};
function Jr(t, i) {
  var a = t.heading, n = a === void 0 ? 1 : a, r = qr(t, ["heading"]);
  return e.createElement($e, Ke({ heading: n }, r, { componentType: "Title", ref: i }));
}
var Pt = u.forwardRef(Jr);
Pt.displayName = "Title";
var Ue = function() {
  return Ue = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, Ue.apply(this, arguments);
};
function Qr(t, i) {
  return e.createElement($e, Ue({}, t, { componentType: "Text", ref: i }));
}
var zt = u.forwardRef(Qr);
zt.displayName = "Text";
var Be = function() {
  return Be = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function Gr(t, i) {
  var a = t.spacing, n = a === void 0 ? "default" : a, r = t.className, s = u.useContext(fe).getPrefixCls, o = s("typography"), d = n === "close" ? H(o + "-spacing-close", r) : r;
  return e.createElement($e, Be({}, t, { ref: i, componentType: "Paragraph", className: d }));
}
var Tt = u.forwardRef(Gr);
Tt.displayName = "Paragraph";
var qe = function() {
  return qe = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++) {
      i = arguments[a];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, qe.apply(this, arguments);
}, Ne = function(t, i) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var n = a.call(t), r, s = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = n.next()).done; ) s.push(r.value);
  } catch (d) {
    o = { error: d };
  } finally {
    try {
      r && !r.done && (a = n.return) && a.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, Yr = { rows: 1, expandable: true, defaultExpanded: false }, _r = function(t, i) {
  var a, n, r = u.useContext(fe), s = Qe(t, Yr, (a = r.componentConfig) === null || a === void 0 ? void 0 : a["Typography.Ellipsis"]), o = s.className, d = s.style, x = s.rows, m = s.disabled, g = s.showTooltip, E = s.children, h = s.expandable, L = s.expandRender, C = s.onExpand, y = s.onEllipsis, T = r.locale, A = ar ? false : /^((?!chrome|android).)*safari/i.test((n = navigator == null ? void 0 : navigator.userAgent) !== null && n !== void 0 ? n : ""), c = u.useRef(null), b = u.useRef(null), S = Ne(u.useState(""), 2), M = S[0], P = S[1], X = Ne(u.useState(false), 2), w = X[0], v = X[1], R = u.useRef(null), W = u.useRef(null), k = Ne(Ge(false, { defaultValue: s.defaultExpanded, value: s.expanded }), 2), f = k[0], V = k[1], z = Ne(u.useState(false), 2), K = z[0], re = z[1], p = u.useMemo(function() {
    return ae(h) ? !h.single && x === 1 : x === 1;
  }, [x, h]), j = u.useMemo(function() {
    return ae(g) ? { tooltip: true, tooltipProps: g } : { tooltip: !!g, tooltipProps: g };
  }, [g]);
  u.useEffect(function() {
    if (b.current) {
      var q = b.current.textContent;
      q && P(q);
    }
  }, [E, b]);
  var N = r.getPrefixCls("ellipsis"), le = function() {
    return L ? L(f) : e.createElement("span", { className: N + "-action-text" }, f ? T.Typography.fold : T.Typography.unfold);
  }, ie = function() {
    var q;
    return h && K ? e.createElement("div", { className: H(N + "-action", (q = {}, q[N + "-action-collapsed"] = !f, q)), onClick: function(Z) {
      f ? (V(false), C == null || C(false, Z)) : (V(true), v(false), C == null || C(true, Z));
    } }, le()) : null;
  }, G = u.useCallback(At(function() {
    if (W.current && R.current) {
      var q = p ? W.current.offsetWidth > R.current.offsetWidth : W.current.offsetHeight > R.current.offsetHeight;
      q ? K === false && (re(true), y == null || y(true)) : K === true && (re(false), y == null || y(false));
    }
  }), [K, p]), pe = function() {
    return m ? null : e.createElement(Fe, { onResize: G }, e.createElement("div", { className: p ? H(N + "-content-mirror", N + "-single") : H(N + "-content-mirror", N + "-multiple", N + "-collapsed"), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: x }, ref: R }, e.createElement(Fe, { onResize: G }, e.createElement("span", { ref: W, className: N + "-text" }, E))));
  }, oe = function() {
    var q, Z;
    return p ? e.createElement("div", { className: H(N + "-content", N + "-single") }, e.createElement("span", { ref: b, className: N + "-text" }, E)) : A ? e.createElement("div", { className: H(N + "-content", N + "-multiple"), title: !j.tooltip && K && !f ? M : void 0 }, !f && ie(), e.createElement("span", { ref: b, className: H(N + "-text", (q = {}, q[N + "-collapsed"] = !f, q)), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: x } }, E), f && ie()) : e.createElement("div", { className: H(N + "-content", N + "-multiple", (Z = {}, Z[N + "-collapsed"] = !f, Z)), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: x }, title: !j.tooltip && K && !f ? M : void 0 }, !f && ie(), e.createElement("span", { ref: b, className: N + "-text" }, E), f && ie());
  }, Y = function() {
    return m ? e.createElement("div", { className: N + "-content" }, e.createElement("span", { ref: b, className: N + "-text" }, E)) : j.tooltip ? e.createElement(se, qe({ content: M, popupVisible: w, disabled: !K || f, triggerProps: { mouseEnterDelay: 100 }, onVisibleChange: function(q) {
      q ? K && !f && v(true) : v(false);
    } }, j.tooltipProps), oe()) : oe();
  };
  return e.createElement("div", { ref: c, className: H(N, o), style: d }, pe(), Y());
}, $r = u.forwardRef(_r), me = Ot;
me.Title = Pt;
me.Text = zt;
me.Paragraph = Tt;
me.Ellipsis = $r;
function ea(t) {
  const i = [{ key: "detail", label: "详情" }];
  return t.auditStatus !== "not_applied" ? i.push({ key: "application", label: "查看申请" }) : t.status === "completed" && i.push({ key: "apply", label: "申请发布" }), t.status === "completed" && i.push({ key: "knowledge", label: "加入知识库" }, { key: "template", label: "加入模板库" }), i.push({ key: "delete", label: "删除", danger: true }), i;
}
function ta(t) {
  return t.length >= 5 ? { visible: t.slice(0, 2), more: t.slice(2) } : { visible: t, more: [] };
}
function ra({ task: t, onAction: i }) {
  const [a, n] = u.useState(false), { visible: r, more: s } = ta(ea(t));
  return l.jsxs("div", { className: "task-row-actions", onKeyDown: (o) => {
    o.key === "Escape" && n(false);
  }, children: [r.map((o) => l.jsx(O, { type: "text", status: o.danger ? "danger" : void 0, "aria-label": `${o.label}：${t.name}`, onClick: () => i(o.key, t), children: o.label }, o.key)), s.length > 0 && l.jsx(lr, { trigger: "click", position: "br", popupVisible: a, onVisibleChange: n, droplist: l.jsx(lt, { selectable: false, className: "task-actions-menu", onClickMenuItem: (o) => {
    n(false);
    const d = s.find((x) => x.key === o);
    d && i(d.key, t);
  }, children: s.map((o) => l.jsx(lt.Item, { className: o.danger ? "task-action-danger" : void 0, children: o.label }, o.key)) }), children: l.jsx(O, { type: "text", "aria-label": `更多操作：${t.name}`, "aria-haspopup": "menu", "aria-expanded": a, children: "更多" }) })] });
}
function pt({ task: t, expanded: i = false }) {
  const a = i ? t.tags : t.tags.slice(0, 2), n = i ? [] : t.tags.slice(2), r = n.length + (t.additionalTagCount ?? 0);
  return l.jsxs("div", { className: "task-tags", children: [a.map((s, o) => l.jsx(Nt, { className: "task-topic-tag", children: s }, `${s}-${o}`)), r > 0 && l.jsx(se, { content: l.jsxs("div", { children: [n.map((s, o) => l.jsx("div", { children: s }, `${s}-${o}`)), !!t.additionalTagCount && l.jsxs("div", { children: ["另有 ", t.additionalTagCount, " 个标签，标签信息暂不可用"] })] }), children: l.jsxs("button", { type: "button", className: "task-topic-overflow", "aria-label": `查看其余 ${r} 个标签`, children: ["+", r] }) })] });
}
const aa = [{ id: "ai", name: "AI硬件产业资料", description: "研究报告 12 篇 · 企业图谱 · 投融资数据" }, { id: "energy", name: "新能源材料数据包", description: "指标表格 · 专家观点 · 区域案例" }, { id: "consumer", name: "消费市场趋势数据库", description: "消费指标 · 人群洞察 · 市场月报" }, { id: "low-altitude", name: "低空经济政策包", description: "政策文件 42 份 · 城市试点 18 条 · 容量 50/50 已满", full: true }], la = ["先进制造", "人工智能", "新能源", "低空经济", "产业政策", "金融", "消费", "城市治理", "综合"], na = ["研究分析", "趋势洞察", "投资决策", "政策制定", "招商落地", "转型规划", "周期跟踪"], Rt = { 研究报告: "研究报告", 洞察报告: "洞察报告", 战略咨询报告: "战略咨询成果" };
function Je(t) {
  return { title: t.name, industries: [t.industry], tags: [...t.tags], signature: "", summary: "", scope: "all", allowDownload: false, allowKnowledge: false, allowTemplate: false, desNumbers: true, desKeyword: false, keywords: "", confirmed: false, projectMode: "none", projectName: "", projectClient: "", projectDoneDate: "", scoreDate: "", evidence: [], projectPublic: false };
}
function Mt() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function et(t, i, a) {
  try {
    const n = JSON.parse(Mt().getItem(t) || "null");
    return n === null ? i : a(n);
  } catch {
    return i;
  }
}
function Pe(t, i) {
  try {
    return Mt().setItem(t, JSON.stringify(i)), true;
  } catch {
    return false;
  }
}
const ze = (t) => t && typeof t == "object" && !Array.isArray(t) ? t : {}, ht = (t) => Array.isArray(t) ? t.filter((i) => typeof i == "string") : [], Zt = (t) => Array.isArray(t) ? t.flatMap((i) => {
  const a = ze(i);
  return typeof a.name == "string" && typeof a.size == "number" && a.size >= 0 ? [{ name: a.name, size: a.size }] : [];
}) : [];
function Xt(t, i) {
  const a = ze(t), n = { ...i };
  for (const r of ["title", "signature", "summary", "keywords", "projectName", "projectClient", "projectDoneDate", "scoreDate"]) typeof a[r] == "string" && (n[r] = a[r]);
  for (const r of ["allowDownload", "allowKnowledge", "allowTemplate", "desNumbers", "desKeyword", "confirmed", "projectPublic"]) typeof a[r] == "boolean" && (n[r] = a[r]);
  for (const r of ["investment", "income", "satisfaction"]) typeof a[r] == "number" && Number.isFinite(a[r]) && (n[r] = a[r]);
  return Array.isArray(a.industries) && (n.industries = ht(a.industries)), Array.isArray(a.tags) && (n.tags = ht(a.tags)), (a.scope === "all" || a.scope === "org") && (n.scope = a.scope), (a.projectMode === "none" || a.projectMode === "manual") && (n.projectMode = a.projectMode), n.evidence = Zt(a.evidence), n;
}
function ia(t, i) {
  const a = ze(t), n = { ...i };
  for (const r of ["title", "type", "industry", "scene", "requirement"]) typeof a[r] == "string" && (n[r] = a[r]);
  return n.files = Zt(a.files), n;
}
function sa(t) {
  return Array.isArray(t) ? t.flatMap((i) => {
    const a = ze(i);
    return typeof a.id == "string" && typeof a.name == "string" && typeof a.description == "string" ? [{ id: a.id, name: a.name, description: a.description }] : [];
  }) : [];
}
function tt({ files: t, onChange: i, accept: a, limit: n = 10, drag: r = false }) {
  return l.jsxs("div", { className: "task-local-files", children: [l.jsx(dr, { accept: a, autoUpload: false, multiple: n > 1, drag: r, showUploadList: false, fileList: t.map((s, o) => ({ uid: String(o), name: s.name, status: "init" })), beforeUpload: (s) => s.size > 50 * 1024 * 1024 ? (ee.error(`文件“${s.name}”超过 50MB，请重新选择。`), false) : true, onChange: (s) => i(s.map((o) => {
    var d, x;
    return { name: o.name ?? "", size: ((d = o.originFile) == null ? void 0 : d.size) ?? ((x = t[Number(o.uid)]) == null ? void 0 : x.size) ?? 0 };
  })), onExceedLimit: () => ee.warning(`最多选择 ${n} 个文件，请移除已有文件后重试。`), limit: { maxCount: n, hideOnExceedLimit: false }, tip: `最多 ${n} 个文件，每个不超过 50MB；仅本地选择，尚未上传。`, children: !r && l.jsx(O, { size: "default", children: "选择文件" }) }), t.length > 0 && l.jsx("ul", { children: t.map((s, o) => l.jsxs("li", { children: [l.jsxs("span", { children: [s.name, " ", l.jsxs("small", { children: [(s.size / 1024).toFixed(1), " KB"] })] }), l.jsx(O, { type: "text", status: "danger", onClick: () => i(t.filter((d, x) => x !== o)), "aria-label": `移除文件：${s.name}`, children: "移除" })] }, `${s.name}-${o}`)) })] });
}
function Le({ value: t, label: i }) {
  return l.jsx($, { "aria-label": i, value: t, readOnly: true, tabIndex: -1, size: "default", className: "task-readonly-input" });
}
function Wt({ draft: t, task: i, masked: a = false }) {
  const n = (s) => {
    let o = s.replace(new RegExp("(?<!\\d)1[3-9]\\d{9}(?!\\d)", "g"), "***********");
    if (t.desKeyword) for (const d of t.keywords.split(/[,，\n]/).map((x) => x.trim()).filter(Boolean)) o = o.split(d).join("***");
    return t.desNumbers && (o = o.split(/(\d{4}[-/年]\d{1,2}(?:[-/月]\d{1,2}日?)?|\d{1,2}:\d{2}(?::\d{2})?)/g).map((d, x) => x % 2 ? d : d.replace(/\d+(?:\.\d+)?/g, "***")).join("")), o;
  }, r = a ? n(t.title) : t.title;
  return l.jsxs("div", { className: "task-publish-details", children: [l.jsx(me.Title, { heading: 5, children: r }), l.jsx(nt, { column: 1, size: "small", data: [{ label: "报告版本", value: "当前版本" }, { label: "报告类型 / 栏目", value: `${i.reportType} / ${Rt[i.reportType] ?? i.reportType}` }, { label: "行业分类", value: t.industries.join("、") || "—" }, { label: "内容标签", value: l.jsx("div", { className: "task-dialog-tags", children: t.tags.map((s, o) => l.jsx(Nt, { children: a ? n(s) : s }, `${s}-${o}`)) }) }, { label: "公开署名", value: a ? n(t.signature) : t.signature || "—" }, { label: "公开权限", value: `${t.scope === "all" ? "全平台公开" : "机构用户可见"}；${[t.allowDownload && "允许下载", t.allowKnowledge && "允许加入知识库", t.allowTemplate && "允许提取结构加入模板库"].filter(Boolean).join("、") || "未开放下载与复用"}` }, { label: "脱敏要求", value: ["手机号", t.desNumbers && "数字（除了时间）", t.desKeyword && `关键词：${t.keywords}`].filter(Boolean).join("、") }] }), l.jsx(me.Title, { heading: 6, children: "报告摘要" }), l.jsx("p", { className: "task-dialog-summary", children: (a ? n(t.summary) : t.summary) || "尚未填写摘要" }), t.projectMode === "manual" && l.jsxs(l.Fragment, { children: [l.jsx(me.Title, { heading: 6, children: "关联项目及成果数据" }), l.jsx(nt, { column: 2, size: "small", data: [{ label: "项目名称", value: t.projectName }, { label: "委托机构", value: t.projectClient || "—" }, { label: "实际完成日期", value: t.projectDoneDate || "—" }, { label: "实际投资额（万元）", value: t.investment ?? "—" }, { label: "实际净收益（万元）", value: t.income ?? "—" }, { label: "ROI", value: t.investment ? `${((t.income ?? 0) / t.investment * 100).toFixed(2)}%` : "—" }, { label: "客户满意度", value: t.satisfaction ?? "—" }, { label: "评价日期", value: t.scoreDate || "—" }] })] })] });
}
const xt = "thinktank:personal-collections:v1";
function oa({ task: t, onClose: i, onConfirm: a }) {
  var X;
  const [n, r] = u.useState(() => et(xt, [], sa)), [s, o] = u.useState(((X = t.knowledgeDraft) == null ? void 0 : X.collectionId) ?? ""), [d, x] = u.useState(false), [m, g] = u.useState(""), [E, h] = u.useState(""), [L, C] = u.useState([]), [y, T] = u.useState(""), [A, c] = u.useState(false), b = [...aa, ...n], S = b.find((w) => w.id === s);
  function M() {
    if (!m.trim()) {
      T("请填写知识库名称");
      return;
    }
    if (b.some((R) => R.name === m.trim())) {
      T("已有同名合集，请使用其他名称");
      return;
    }
    const w = { id: `local-${Date.now()}`, name: m.trim(), description: E.trim() || "新建个人合集" }, v = [...n, w];
    if (!Pe(xt, v)) {
      ee.error("浏览器无法保存合集，请重试。");
      return;
    }
    r(v), o(w.id), x(false), T(""), ee.success("已创建本机合集信息，已选文件尚未上传。");
  }
  function P() {
    if (!S || S.full) {
      T("请选择一个容量可用的个人合集");
      return;
    }
    a({ collectionId: s, requestedAt: (/* @__PURE__ */ new Date()).toISOString() }), c(true);
  }
  return l.jsx(ue, { title: d ? "新建知识库" : "加入知识库", visible: true, onCancel: i, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-knowledge-modal", style: { width: 560 }, footer: A ? l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { size: "default", onClick: () => {
    a(void 0), c(false);
  }, children: "撤销本地确认" }), l.jsx(O, { size: "default", type: "primary", onClick: i, children: "关闭" })] }) : d ? l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { size: "default", onClick: () => {
    x(false), T("");
  }, children: "返回选择" }), l.jsx(O, { size: "default", type: "primary", onClick: M, children: "创建并选择合集" })] }) : l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { size: "default", onClick: i, children: "取消" }), l.jsx(O, { size: "default", type: "primary", onClick: P, children: "确认加入" })] }), children: A ? l.jsx(It, { status: "success", title: "加入信息已在本机确认", subTitle: `目标合集：${S == null ? void 0 : S.name}。导入任务尚未发送，报告文件及来源版本将在服务接入后处理。` }) : d ? l.jsxs(l.Fragment, { children: [l.jsx("p", { className: "task-dialog-description", children: "创建合集并选择研究资料，供报告创作时引用；也可以先创建空合集。" }), l.jsxs(I, { layout: "vertical", className: "task-dialog-form", size: "default", children: [l.jsx(I.Item, { label: "知识库名称", required: true, validateStatus: y ? "error" : void 0, help: y, children: l.jsx($, { "aria-label": "知识库名称", value: m, onChange: (w) => {
    g(w), T("");
  }, maxLength: 80, placeholder: "输入个人合集名称" }) }), l.jsx(I.Item, { label: "内容简述", children: l.jsx($.TextArea, { "aria-label": "内容简述", value: E, onChange: h, rows: 3, maxLength: 500, showWordLimit: true, placeholder: "说明合集主题、内容范围与用途" }) }), l.jsxs(I.Item, { label: "来源", extra: "支持同时从多个来源添加；最多 10 个文档，每个不超过 50MB。", children: [l.jsx("div", { className: "task-collection-sources", children: l.jsx(Ye.Group, { type: "button", value: "local", options: [{ label: "本地上传", value: "local" }, { label: "我的报告任务", value: "tasks", disabled: true }, { label: "案例广场", value: "cases", disabled: true }] }) }), l.jsx(tt, { files: L, onChange: C, accept: ".pdf,.doc,.docx,.xls,.xlsx", drag: true }), l.jsx("p", { className: "task-dialog-help", children: "报告文件和案例素材服务尚未接入。选中文件仅供本次预览，创建时保存合集名称与简述。" })] })] })] }) : l.jsxs(l.Fragment, { children: [l.jsx("p", { className: "task-dialog-description", children: "选择一个个人合集导入当前公开版本，保留来源及版本信息。" }), l.jsx("div", { className: "task-collection-heading", children: "选择个人合集（单选）" }), l.jsx("div", { className: "task-collection-list", role: "radiogroup", "aria-label": "选择个人合集", children: b.map((w) => l.jsxs("div", { role: "radio", "aria-checked": s === w.id, "aria-disabled": w.full, tabIndex: w.full ? -1 : 0, className: `task-collection-row ${s === w.id ? "is-selected" : ""} ${w.full ? "is-full" : ""}`, onClick: () => {
    w.full || (o(w.id), T(""));
  }, onKeyDown: (v) => {
    !w.full && (v.key === "Enter" || v.key === " ") && (v.preventDefault(), o(w.id), T(""));
  }, children: [l.jsxs("span", { className: "task-collection-copy", children: [l.jsx("strong", { children: w.name }), l.jsx("span", { children: w.description })] }), l.jsx(O, { type: s === w.id ? "primary" : "outline", disabled: w.full, tabIndex: -1, children: w.full ? "已满" : s === w.id ? "已选择" : "选择" })] }, w.id)) }), y && l.jsx("p", { className: "task-collection-error", role: "alert", children: y }), l.jsx(O, { className: "task-new-collection-entry", size: "default", onClick: () => {
    x(true), T("");
  }, children: "没有合适的合集？新建个人合集" })] }) });
}
function ca({ task: t, onClose: i }) {
  const a = `thinktank:template-draft:${t.id}:v1`, n = { title: `${t.name}—参考模板`, type: t.reportType, industry: "综合", scene: "研究分析", requirement: "", files: [] }, [r, s] = u.useState(() => et(a, n, (h) => ia(h, n))), [o, d] = u.useState({}), [x, m] = u.useState(false);
  function g(h, L) {
    s((C) => ({ ...C, [h]: L })), d((C) => ({ ...C, [h]: "" })), m(false);
  }
  function E() {
    const h = {};
    r.title.trim() || (h.title = "请填写模板标题"), r.requirement.trim() || (h.requirement = "请填写写作要求"), d(h), !Object.keys(h).length && (Pe(a, r) ? (m(true), ee.success("模板配置草稿已保存到本机，可重新打开继续编辑。")) : ee.error("浏览器无法保存草稿，请重试。"));
  }
  return l.jsxs(ue, { title: "自定义写作模板", visible: true, onCancel: i, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-template-modal", style: { width: 560 }, footer: l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { size: "default", onClick: i, children: "取消" }), l.jsx(O, { size: "default", type: "primary", onClick: E, children: x ? "草稿已保存" : "保存模板草稿" })] }), children: [l.jsx("p", { className: "task-dialog-description", children: "先用自然语言描述模板用途，系统生成模板后可继续编辑章节、适用行业场景和模板简述。" }), l.jsxs(I, { layout: "vertical", className: "task-dialog-form task-standard-form", size: "default", children: [l.jsx(I.Item, { label: "模板标题", required: true, validateStatus: o.title ? "error" : void 0, help: o.title, children: l.jsx($, { "aria-label": "模板标题", value: r.title, onChange: (h) => g("title", h), maxLength: 120, showWordLimit: true }) }), l.jsx(I.Item, { label: "模板类型", required: true, children: l.jsx(Ye.Group, { type: "button", "aria-label": "模板类型", value: r.type, onChange: (h) => g("type", h), options: ["研究报告", "洞察报告", "战略咨询报告", "其他"] }) }), l.jsxs("div", { className: "task-dialog-two-columns", children: [l.jsx(I.Item, { label: "行业分类", required: true, children: l.jsx(ve, { "aria-label": "模板行业分类", value: r.industry, onChange: (h) => g("industry", h), options: la }) }), l.jsx(I.Item, { label: "场景分类", required: true, children: l.jsx(ve, { "aria-label": "场景分类", value: r.scene, onChange: (h) => g("scene", h), options: na }) })] }), l.jsx(I.Item, { label: "写作要求", required: true, validateStatus: o.requirement ? "error" : void 0, help: o.requirement, children: l.jsx($.TextArea, { "aria-label": "写作要求", value: r.requirement, onChange: (h) => g("requirement", h), rows: 5, maxLength: 2e3, showWordLimit: true, placeholder: "描述模板适用的行业、场景、分析重点和结构要求，例如：围绕产业基础、竞争格局、机会判断和实施路径形成结构化报告。" }) }), l.jsx(I.Item, { label: "上传参考文档（选填）", extra: "参考文档仅辅助本次模板生成，不自动保存到知识库；未上传文件也可以配置模板。", children: l.jsx(tt, { files: r.files, onChange: (h) => g("files", h), accept: ".doc,.docx,.txt", limit: 1, drag: true }) }), l.jsx(O, { size: "default", disabled: true, children: "生成模板" }), l.jsx("p", { className: "task-dialog-help", children: "结构提取与模板生成将在服务接入后提供。草稿保存文件名称与大小，文件内容不会持久化。" })] })] });
}
function da({ task: t, onClose: i, onSubmit: a }) {
  const n = `thinktank:publish-draft:${t.id}:v1`, [r, s] = u.useState(() => et(n, Je(t), (c) => Xt(c, Je(t)))), [o, d] = u.useState({}), [x, m] = u.useState(false), [g, E] = u.useState(false);
  function h(c, b) {
    s((S) => ({ ...S, [c]: b })), d((S) => ({ ...S, [c]: "" }));
  }
  function L() {
    Pe(n, r) ? (E(true), ee.success("申请草稿已保存到本机，可继续修改。")) : ee.error("浏览器无法保存草稿，请保留当前弹窗后重试。");
  }
  function C() {
    const c = {};
    if (r.title.trim() || (c.title = "请填写公开展示的报告标题"), r.industries.length || (c.industries = "请至少选择一个行业分类"), r.signature.trim() || (c.signature = "请填写公开署名"), r.summary.trim() || (c.summary = "请填写报告摘要"), r.desKeyword && !r.keywords.trim() && (c.keywords = "请填写需要脱敏的关键词"), r.confirmed || (c.confirmed = "提交前请确认拟公开版本、脱敏和授权设置"), r.projectMode === "manual" && (r.projectName.trim() || (c.projectName = "请填写真实项目名称"), r.projectClient.trim() || (c.projectClient = "请填写委托机构"), r.projectDoneDate || (c.projectDoneDate = "请选择实际完成日期"), (r.investment !== void 0 || r.income !== void 0) && ((r.investment === void 0 || r.investment <= 0) && (c.investment = "请填写大于 0 的实际投资额"), r.income === void 0 && (c.income = "请填写评价期内实际净收益")), r.satisfaction !== void 0 && !r.scoreDate && (c.scoreDate = "请选择评价日期"), r.projectPublic || (c.projectPublic = "请确认所填成果数据允许公开")), d(c), Object.keys(c).length) {
      ee.warning("请补全标红字段后提交。");
      return;
    }
    const b = { ...r, title: r.title.trim(), signature: r.signature.trim(), summary: r.summary.trim() };
    Pe(n, b), a(b);
  }
  const y = (c) => ({ validateStatus: o[c] ? "error" : void 0, help: o[c] }), T = [.../* @__PURE__ */ new Set([...Lt.filter((c) => c !== "全部"), t.industry])], A = r.investment && r.income !== void 0 ? `${(r.income / r.investment * 100).toFixed(2)}%` : "—";
  return l.jsxs(l.Fragment, { children: [l.jsx(ue, { title: "申请发布到案例广场", visible: true, onCancel: i, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-publish-modal", style: { width: 560 }, footer: l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { size: "default", onClick: L, children: g ? "草稿已保存" : "保存草稿" }), l.jsx(O, { size: "default", onClick: () => m(true), children: "预览公开版本" }), l.jsx(O, { size: "default", type: "primary", onClick: C, children: "提交审核" })] }), children: l.jsxs(I, { layout: "vertical", className: "task-dialog-form task-standard-form", size: "default", children: [l.jsx(I.Item, { label: "报告版本", children: l.jsx(Le, { label: "报告版本", value: `V1.2 · ${ye(t.updatedAt)}` }) }), l.jsx(I.Item, { label: "报告标题", required: true, ...y("title"), children: l.jsx($, { "aria-label": "报告标题", value: r.title, onChange: (c) => h("title", c), placeholder: "公开展示的报告标题", maxLength: 120, showWordLimit: true }) }), l.jsx(I.Item, { label: "报告类型 / 案例广场栏目", children: l.jsx(Le, { label: "报告类型 / 案例广场栏目", value: `${t.reportType} → 案例广场栏目：${Rt[t.reportType] ?? t.reportType}` }) }), l.jsx(I.Item, { label: l.jsxs("span", { children: ["行业分类 ", l.jsx("em", { className: "task-label-hint", children: "（至少一项，可关联多个分类）" })] }), required: true, ...y("industries"), children: l.jsx(ve, { mode: "multiple", "aria-label": "发布行业分类", value: r.industries, onChange: (c) => h("industries", c), options: T, allowClear: true, placeholder: "选择行业分类" }) }), l.jsx(I.Item, { label: "内容标签", children: l.jsx(nr, { "aria-label": "内容标签", value: r.tags, onChange: (c) => h("tags", c), allowClear: true, placeholder: "输入标签，按 Enter 添加" }) }), l.jsxs(I.Item, { label: "公开署名", required: true, ...y("signature"), children: [l.jsx($, { "aria-label": "公开署名", value: r.signature, onChange: (c) => h("signature", c), placeholder: "拟展示的作者姓名", maxLength: 40 }), l.jsxs("div", { className: "task-dialog-extra-row", children: [l.jsx(se, { content: "当前未接入账号认证信息，无法选用有效认证。", children: l.jsx("span", { children: l.jsx(ne, { disabled: true, children: "展示平台认证身份" }) }) }), l.jsx("span", { children: "仅可选用平台已有有效认证，不可自行填写" })] })] }), l.jsxs(I.Item, { label: "报告摘要", required: true, ...y("summary"), children: [l.jsx($.TextArea, { "aria-label": "报告摘要", value: r.summary, onChange: (c) => h("summary", c), placeholder: "填写当前版本的研究范围、结构与主要发现", rows: 3, maxLength: 1e3, showWordLimit: true }), l.jsx("div", { className: "task-dialog-extra-row", children: l.jsx(se, { content: "报告正文及摘要生成服务尚未接入，请手动填写摘要。", children: l.jsx("span", { children: l.jsx(O, { type: "text", disabled: true, children: "按当前版本成稿重新生成" }) }) }) })] }), l.jsxs(I.Item, { label: "公开权限", required: true, children: [l.jsx(Ye.Group, { type: "button", "aria-label": "公开权限", value: r.scope, onChange: (c) => h("scope", c), options: [{ label: "全平台公开", value: "all" }, { label: "机构用户可见", value: "org" }] }), l.jsxs("div", { className: "task-dialog-checks", children: [l.jsx(ne, { checked: r.allowDownload, onChange: (c) => h("allowDownload", c), children: "允许下载" }), l.jsx(ne, { checked: r.allowKnowledge, onChange: (c) => h("allowKnowledge", c), children: "允许加入知识库" }), l.jsx(ne, { checked: r.allowTemplate, onChange: (c) => h("allowTemplate", c), children: "允许提取结构加入模板库" })] })] }), l.jsxs(I.Item, { label: "脱敏要求", ...y("keywords"), children: [l.jsxs("div", { className: "task-dialog-checks task-dialog-checks-first", children: [l.jsx(ne, { checked: r.desNumbers, onChange: (c) => h("desNumbers", c), children: "数字（除了时间）" }), l.jsx(ne, { checked: true, disabled: true, children: "手机号" }), l.jsx(ne, { checked: r.desKeyword, onChange: (c) => h("desKeyword", c), children: "关键词" })] }), l.jsx($.TextArea, { "aria-label": "自定义脱敏关键词", value: r.keywords, onChange: (c) => h("keywords", c), disabled: !r.desKeyword, rows: 2, placeholder: "自定义脱敏关键词，多个用逗号分隔，例如：客户A，项目代号" }), l.jsx("p", { className: "task-dialog-help", children: "可在“预览公开版本”中查看对应遮盖效果。" })] }), t.reportType === "战略咨询报告" && l.jsx(Oe, { className: "task-project-collapse", bordered: true, children: l.jsxs(Oe.Item, { header: "关联项目及成果数据（选填 · 仅战略咨询报告）", name: "project", children: [l.jsx("p", { className: "task-dialog-help", children: "没有真实项目或暂无可核验成效时，可不填并正常提交。请勿以预计投资额、目标值或生成的数字代替实际成果。" }), l.jsx(I.Item, { label: "关联项目", children: l.jsx(ve, { "aria-label": "关联项目", value: r.projectMode, onChange: (c) => h("projectMode", c), options: [{ value: "none", label: "暂不关联项目" }, { value: "linked", label: "关联已录入项目（暂无可用项目）", disabled: true }, { value: "manual", label: "补录新项目信息" }] }) }), r.projectMode === "manual" && l.jsxs(l.Fragment, { children: [l.jsxs("div", { className: "task-dialog-two-columns", children: [l.jsx(I.Item, { label: "项目名称（补录）", required: true, ...y("projectName"), children: l.jsx($, { "aria-label": "项目名称", value: r.projectName, onChange: (c) => h("projectName", c), placeholder: "补录真实项目名称" }) }), l.jsx(I.Item, { label: "委托机构", required: true, ...y("projectClient"), children: l.jsx($, { "aria-label": "委托机构", value: r.projectClient, onChange: (c) => h("projectClient", c) }) })] }), l.jsx(I.Item, { label: "实际完成日期", required: true, ...y("projectDoneDate"), children: l.jsx(it, { "aria-label": "实际完成日期", value: r.projectDoneDate || void 0, onChange: (c) => h("projectDoneDate", c) }) })] }), l.jsxs("div", { className: "task-dialog-two-columns", children: [l.jsx(I.Item, { label: "实际投资额（万元）", ...y("investment"), children: l.jsx(Xe, { "aria-label": "实际投资额", min: 0, value: r.investment, disabled: r.projectMode === "none", onChange: (c) => h("investment", c), placeholder: "实际发生的投资额" }) }), l.jsx(I.Item, { label: "ROI 评价期", children: l.jsx(Le, { label: "ROI 评价期", value: "自实际完成日起连续 12 个月" }) }), l.jsx(I.Item, { label: "评价期内实际净收益（万元）", ...y("income"), children: l.jsx(Xe, { "aria-label": "实际净收益", value: r.income, disabled: r.projectMode === "none", onChange: (c) => h("income", c) }) }), l.jsx(I.Item, { label: "ROI（净收益 ÷ 实际投资额）", children: l.jsx(Le, { label: "ROI", value: A }) }), l.jsx(I.Item, { label: "客户满意度（百分制）", children: l.jsx(Xe, { "aria-label": "客户满意度", min: 0, max: 100, value: r.satisfaction, disabled: r.projectMode === "none", onChange: (c) => h("satisfaction", c) }) }), l.jsx(I.Item, { label: "评价日期", ...y("scoreDate"), children: l.jsx(it, { "aria-label": "评价日期", value: r.scoreDate || void 0, disabled: r.projectMode === "none", onChange: (c) => h("scoreDate", c) }) })] }), l.jsx(I.Item, { label: "核验材料", extra: "合同、验收报告、收益凭证等；仅管理及审核人员查看，不随报告公开。", children: l.jsx(tt, { files: r.evidence, onChange: (c) => h("evidence", c), accept: ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" }) }), l.jsx(I.Item, { ...y("projectPublic"), children: l.jsx(ne, { checked: r.projectPublic, disabled: r.projectMode === "none", onChange: (c) => h("projectPublic", c), children: "我确认以上所填成果指标数据允许随本次申请公开。" }) })] }) }), l.jsx(I.Item, { ...y("confirmed"), className: "task-publish-confirm", children: l.jsx(ne, { checked: r.confirmed, onChange: (c) => h("confirmed", c), children: "我已检查拟公开版本、脱敏效果及授权设置，确认提交报告审核。" }) })] }) }), l.jsxs(ue, { title: "公开版本预览", visible: x, onCancel: () => m(false), className: "task-form-modal", style: { width: 680 }, footer: l.jsx(O, { size: "default", onClick: () => m(false), children: "返回修改" }), children: [l.jsx(ur, { type: "info", content: "此处仅预览已填写的公开信息和遮盖示例，暂无报告正文；核验材料不会展示。" }), l.jsx(Wt, { draft: r, task: t, masked: true })] })] });
}
const ma = { reviewing: { current: "审批中", final: "等待结果" }, approved: { current: "审批完成", final: "已通过" }, not_applied: { current: "尚未提交", final: "等待提交" } };
function ua({ task: t, onClose: i, onWithdraw: a }) {
  const [n, r] = u.useState(false), s = ma[t.auditStatus], o = t.applicationDate || t.updatedAt, d = t.auditStatus === "approved" ? 3 : t.auditStatus === "reviewing" ? 2 : 1;
  return l.jsx(ue, { title: n ? "已提交内容" : "申请进度", visible: true, onCancel: i, maskClosable: false, autoFocus: false, className: "task-standard-modal application-progress-modal", style: { width: 620 }, footer: n ? l.jsxs("div", { className: "task-modal-footer", children: [l.jsx(O, { onClick: () => r(false), children: "返回进度" }), l.jsx(O, { type: "primary", onClick: i, children: "关闭" })] }) : l.jsxs("div", { className: "task-modal-footer application-progress-footer", children: [t.auditStatus === "reviewing" && l.jsx(O, { type: "text", status: "danger", className: "application-cancel-button", onClick: a, children: "取消申请" }), l.jsxs("div", { children: [l.jsx(O, { onClick: () => r(true), children: "查看已提交内容" }), l.jsx(O, { type: "primary", onClick: i, children: "关闭" })] })] }), children: n ? t.applicationForm ? l.jsx(Wt, { draft: t.applicationForm, task: t }) : l.jsxs("div", { className: "application-submitted-empty", children: [l.jsx(ke, { description: "该示例申请没有保存完整提交表单" }), l.jsx("p", { children: t.applicationNote || "暂无已提交内容。" })] }) : l.jsxs("div", { className: "application-progress-content", children: [l.jsx("p", { className: "application-progress-tip", children: t.auditStatus === "reviewing" ? "申请正在审核，请耐心等待" : t.auditStatus === "approved" ? "申请已完成审核" : "尚未进入审核流程" }), l.jsxs(Ae, { current: d, size: "small", className: "application-arco-steps", children: [l.jsx(Ae.Step, { title: "提交申请", description: ye(o) }), l.jsx(Ae.Step, { title: s.current, description: t.auditStatus === "not_applied" ? "--" : ye(o) }), l.jsx(Ae.Step, { title: s.final, description: t.auditStatus === "approved" ? ye(t.updatedAt) : "--" })] })] }) });
}
const Vt = "thinktank:report-tasks:examples:v1";
function Ft() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function fa() {
  try {
    const t = JSON.parse(Ft().getItem(Vt) || "null");
    return Array.isArray(t) ? Me.map((i) => {
      const a = t.find((r) => r && typeof r == "object" && r.id === i.id);
      if (!a) return i;
      const n = { ...i };
      return ["not_applied", "reviewing", "approved"].includes(a.auditStatus) && (n.auditStatus = a.auditStatus), typeof a.updatedAt == "string" && Number.isFinite(Date.parse(a.updatedAt)) && (n.updatedAt = a.updatedAt), typeof a.applicationDate == "string" && Number.isFinite(Date.parse(a.applicationDate)) && (n.applicationDate = a.applicationDate), typeof a.applicationNote == "string" && (n.applicationNote = a.applicationNote), a.applicationForm && typeof a.applicationForm == "object" && (n.applicationForm = Xt(a.applicationForm, Je(i))), a.knowledgeDraft && typeof a.knowledgeDraft.collectionId == "string" && typeof a.knowledgeDraft.requestedAt == "string" && (n.knowledgeDraft = { collectionId: a.knowledgeDraft.collectionId, requestedAt: a.knowledgeDraft.requestedAt }), n.deleted = a.deleted === true, n;
    }) : Me;
  } catch {
    return Me;
  }
}
function pa() {
  const [t, i] = u.useState(fa), [a, n] = u.useState(false);
  u.useEffect(() => {
    try {
      Ft().setItem(Vt, JSON.stringify(t)), n(false);
    } catch {
      n(true);
    }
  }, [t]);
  function r(s, o) {
    i((d) => d.map((x) => x.id === s ? { ...x, ...o } : x));
  }
  return { tasks: t, updateTask: r, storageWarning: a };
}
const ha = { all: 1 / 0, year: 365, quarter: 90, month: 30, week: 7 }, gt = { status: "all", period: "all", query: "" };
function yt({ task: t }) {
  const i = t.auditStatus === "reviewing" ? "imgEllipse14306" : t.auditStatus === "approved" ? "imgEllipse14307" : "imgEllipse14308";
  return l.jsxs("span", { className: "task-status task-audit-status", children: [l.jsx("span", { className: "task-status-dot", children: l.jsx(Se, { name: `tasks-${i}.svg`, size: 10 }) }), mr[t.auditStatus]] });
}
function wa() {
  const { tasks: t, updateTask: i, storageWarning: a } = pa(), [n, r] = u.useState("全部"), [s, o] = u.useState("all"), [d, x] = u.useState("all"), [m, g] = u.useState(""), [E, h] = u.useState(gt), [L, C] = u.useState(1), [y, T] = u.useState(10), [A, c] = u.useState(null), [b, S] = u.useState(null), [M, P] = u.useState(null), [X, w] = u.useState(false), v = u.useMemo(() => {
    const p = Date.now() - (ha[E.period] ?? 1 / 0) * 864e5, j = E.query.trim().toLocaleLowerCase();
    return t.filter((N) => !N.deleted && (n === "全部" || N.industry === n) && (E.status === "all" || N.status === E.status) && Date.parse(N.updatedAt) >= p && (!j || `${N.name} ${N.industry} ${N.reportType} ${N.tags.join(" ")}`.toLocaleLowerCase().includes(j)));
  }, [t, n, E]);
  u.useEffect(() => {
    C(1);
  }, [n, E, y]), u.useEffect(() => {
    C((p) => Math.min(p, Math.max(1, Math.ceil(v.length / y))));
  }, [v.length, y]);
  function R() {
    r("全部"), o("all"), x("all"), g(""), h(gt), C(1);
  }
  function W(p) {
    i(p.id, { deleted: true }), (A == null ? void 0 : A.id) === p.id && c(null);
    const j = ee.success({ duration: 8e3, content: l.jsxs("span", { className: "task-undo-message", children: ["任务已移除", l.jsx(O, { type: "text", onClick: () => {
      i(p.id, { deleted: false }), j();
    }, children: "撤销" })] }) });
  }
  function k(p, j) {
    switch (p) {
      case "detail":
        c({ id: j.id, view: "detail" });
        break;
      case "application":
        c({ id: j.id, view: "application" });
        break;
      case "apply":
        j.status === "completed" && j.auditStatus === "not_applied" && S(j.id);
        break;
      case "knowledge":
      case "template":
        j.status === "completed" && P({ id: j.id, type: p });
        break;
      case "delete":
        ue.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: l.jsxs("div", { className: "task-delete-content", children: [l.jsxs("p", { children: ["确定要删除报告“", j.name, "”吗？"] }), l.jsx("p", { children: "删除后可通过提示中的“撤销”或“已移除”列表恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => W(j) });
        break;
    }
  }
  const f = t.find((p) => p.id === (A == null ? void 0 : A.id) && !p.deleted), V = t.find((p) => p.id === b && !p.deleted && p.status === "completed" && p.auditStatus === "not_applied"), z = t.find((p) => p.id === (M == null ? void 0 : M.id) && !p.deleted && p.status === "completed"), K = t.filter((p) => p.deleted), re = [{ title: "报告名称", dataIndex: "name", width: 271, render: (p) => l.jsx(se, { content: p, children: l.jsx("span", { className: "task-report-name", children: p }) }) }, { title: "行业", dataIndex: "industry", width: 101 }, { title: "标签", dataIndex: "tags", width: 236, render: (p, j) => l.jsx(pt, { task: j }) }, { title: "报告类型", dataIndex: "reportType", width: 129 }, { title: "任务状态", dataIndex: "status", width: 113, render: (p) => l.jsxs("span", { className: "task-status", children: [l.jsx("span", { className: "task-status-dot", children: l.jsx(Se, { name: `tasks-${p === "generating" ? "imgEllipse14306" : p === "completed" ? "imgEllipse14307" : "imgEllipse14308"}.svg`, size: 10 }) }), Ze[p]] }) }, { title: "更新时间", dataIndex: "updatedAt", width: 200, render: (p) => l.jsx("span", { className: "task-updated-time", children: ye(p) }) }, { title: "发布审核", dataIndex: "auditStatus", width: 110, render: (p, j) => l.jsx(yt, { task: j }) }, { title: "操作", width: 220, fixed: "right", render: (p, j) => l.jsx(ra, { task: j, onAction: k }) }];
  return l.jsxs("div", { className: "report-tasks-page", children: [l.jsx("h1", { className: "sr-only", children: "我的报告任务" }), l.jsxs("section", { className: "tasks-card", "aria-label": "报告任务列表", "data-node-id": "1831:14907", children: [l.jsxs("div", { className: "task-industry-filter", "data-node-id": "1831:14908", children: [l.jsx("p", { className: "industry-filter-label", children: "热门行业筛选" }), l.jsx("div", { className: "industry-options", role: "group", "aria-label": "热门行业筛选", children: Lt.map((p) => l.jsx(O, { type: "text", className: `industry-chip ${n === p ? "is-selected" : ""}`, "aria-pressed": n === p, onClick: () => r(p), children: p }, p)) })] }), l.jsxs("form", { className: "task-filter-row", "data-node-id": "1831:14933", onSubmit: (p) => {
    p.preventDefault(), h({ status: s, period: d, query: m }), C(1);
  }, children: [l.jsx(ve, { className: "task-filter-select", "aria-label": "任务状态筛选", placeholder: "任务状态", value: s === "all" ? void 0 : s, onChange: (p) => o(p ?? "all"), allowClear: true, options: [{ value: "all", label: "全部" }, ...Object.entries(Ze).map(([p, j]) => ({ value: p, label: j }))], suffixIcon: l.jsx(Se, { name: "tasks-img.svg" }) }), l.jsx(ve, { className: "task-filter-select", "aria-label": "更新时间筛选", placeholder: "更新时间", value: d === "all" ? void 0 : d, onChange: (p) => x(p ?? "all"), allowClear: true, options: [{ value: "all", label: "全部时间" }, { value: "year", label: "近一年" }, { value: "quarter", label: "近三个月" }, { value: "month", label: "近一个月" }, { value: "week", label: "近一周" }], suffixIcon: l.jsx(Se, { name: "tasks-img.svg" }) }), l.jsx($, { className: "shared-search-input task-keyword-search", "aria-label": "搜索报告任务", placeholder: "搜索报告标题、全文关键词", value: m, onChange: g, allowClear: true }), l.jsxs("div", { className: "task-filter-actions", children: [l.jsx(O, { className: "task-query-button", type: "primary", htmlType: "submit", children: "查询" }), l.jsx(O, { className: "task-reset-button", type: "outline", onClick: R, children: "重置" })] })] }), l.jsx("div", { className: "task-table-scroll", children: l.jsx(ir, { className: "task-table", data: v.slice((L - 1) * y, L * y), columns: re, rowKey: "id", pagination: false, border: false, scroll: { x: 1380 }, noDataElement: l.jsxs("div", { className: "task-empty", children: [l.jsx(ke, { description: "没有符合条件的报告任务" }), l.jsx(O, { type: "text", onClick: R, children: "清空筛选" })] }) }) }), l.jsxs("div", { className: "tasks-pagination", children: [K.length > 0 && l.jsxs(O, { type: "text", className: "removed-tasks-entry", onClick: () => w(true), children: ["已移除 ", K.length, " 条"] }), l.jsx(sr, { current: L, pageSize: y, total: v.length, size: "small", showTotal: (p) => `共计 ${p} 条`, sizeCanChange: true, sizeOptions: [5, 10, 20], onChange: (p, j) => {
    C(p), T(j);
  }, onPageSizeChange: T })] }), a && l.jsx("p", { className: "storage-warning", role: "status", children: "浏览器无法保存任务操作，刷新后将恢复设计稿中的示例记录。" })] }), l.jsx(or, { width: 560, title: "报告任务详情", visible: !!(f && (A == null ? void 0 : A.view) === "detail"), onCancel: () => c(null), footer: l.jsx(O, { onClick: () => c(null), children: "关闭" }), children: f && (A == null ? void 0 : A.view) === "detail" && l.jsxs("div", { className: "task-detail", children: [l.jsx("h2", { children: f.name }), l.jsxs("dl", { children: [l.jsxs("div", { children: [l.jsx("dt", { children: "行业" }), l.jsx("dd", { children: f.industry })] }), l.jsxs("div", { children: [l.jsx("dt", { children: "标签" }), l.jsx("dd", { children: l.jsx(pt, { task: f, expanded: true }) })] }), l.jsxs("div", { children: [l.jsx("dt", { children: "报告类型" }), l.jsx("dd", { children: f.reportType })] }), l.jsxs("div", { children: [l.jsx("dt", { children: "任务状态" }), l.jsx("dd", { children: Ze[f.status] })] }), l.jsxs("div", { children: [l.jsx("dt", { children: "更新时间" }), l.jsx("dd", { children: ye(f.updatedAt) })] }), l.jsxs("div", { children: [l.jsx("dt", { children: "发布审核" }), l.jsx("dd", { children: l.jsx(yt, { task: f }) })] })] }), l.jsxs("div", { className: "task-report-content", children: [l.jsx(ke, { description: "暂无报告正文" }), l.jsx("p", { className: "task-note", children: "当前展示设计稿中的示例任务，报告正文将在生成服务接入后提供。" })] })] }) }), f && (A == null ? void 0 : A.view) === "application" && l.jsx(ua, { task: f, onClose: () => c(null), onWithdraw: () => {
    i(f.id, { auditStatus: "not_applied", applicationNote: void 0, applicationDate: void 0, applicationForm: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }), c(null), ee.success("申请已取消。");
  } }), l.jsx(ue, { title: "已移除的任务", visible: X, onCancel: () => w(false), footer: l.jsx(O, { onClick: () => w(false), children: "关闭" }), children: K.length === 0 ? l.jsx(ke, { description: "没有已移除的任务" }) : l.jsx("ul", { className: "removed-task-list", children: K.map((p) => l.jsxs("li", { children: [l.jsxs("div", { children: [l.jsx("strong", { children: p.name }), l.jsxs("span", { children: [p.reportType, " · ", p.industry] })] }), l.jsx(O, { type: "text", onClick: () => {
    i(p.id, { deleted: false }), ee.success("任务已恢复。");
  }, children: "恢复" })] }, p.id)) }) }), V && l.jsx(da, { task: V, onClose: () => S(null), onSubmit: (p) => {
    const j = (/* @__PURE__ */ new Date()).toISOString();
    i(V.id, { auditStatus: "reviewing", applicationDate: j, updatedAt: j, applicationNote: p.summary, applicationForm: p }), S(null), ee.success("示例任务已进入审核中，可在申请详情中撤回。");
  } }, V.id), z && (M == null ? void 0 : M.type) === "knowledge" && l.jsx(oa, { task: z, onClose: () => P(null), onConfirm: (p) => i(z.id, { knowledgeDraft: p }) }, z.id), z && (M == null ? void 0 : M.type) === "template" && l.jsx(ca, { task: z, onClose: () => P(null) }, z.id)] });
}
export { wa as default };
