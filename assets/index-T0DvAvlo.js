import { r as j, c as O, R as r, j as W, h as q, C as B, a as G, ai as H } from "./index-BwwIQFuW.js";
function J(e, c) {
  var n, m = e.style, u = e.className, a = e.prefixCls, p = e.index, t = p === void 0 ? 1 : p, b = e.current, d = b === void 0 ? 1 : b, h = e.status, y = e.title, f = e.description, C = e.icon, E = e.nextStepError, s = e.type, x = e.customDot, S = e.labelPlacement, P = e.disabled, _ = e.onClick, g = e.onChange, l = e.direction, v = e.id, N = e.lineless;
  function R(D) {
    if (s === "dot") return null;
    var k = t;
    return C ? k = C : D === "finish" ? k = r.createElement(W, null) : D === "error" && (k = r.createElement(q, null)), r.createElement("div", { className: a + "-icon" }, k);
  }
  function o(D) {
    P || (g && d !== t && g(t, v), _ && _(t, v, D));
  }
  var i;
  h ? i = h : (d < t && (i = "wait"), d === t && (i = "process"), d > t && (i = "finish"));
  var z = O(a + "-item", a + "-item-" + i, (n = {}, n[a + "-item-custom"] = !!C, n[a + "-item-next-error"] = E, n[a + "-item-disabled"] = P, n[a + "-item-active"] = t === d, n), u), L = R(i), I = r.createElement("div", { className: a + "-item-icon" }, L), M = x ? x(I, { index: t, status: i, title: y, description: f }) : I;
  return r.createElement("div", { ref: c, className: z, style: m, onClick: o }, !N && (S === "vertical" || l === "vertical") && r.createElement("div", { className: a + "-item-tail" }), s !== "arrow" && M, r.createElement("div", { className: a + "-item-content" }, r.createElement("div", { className: a + "-item-title" }, y), f && r.createElement("div", { className: a + "-item-description" }, f)));
}
var A = j.forwardRef(J);
A.displayName = "Step";
var w = function() {
  return w = Object.assign || function(e) {
    for (var c, n = 1, m = arguments.length; n < m; n++) {
      c = arguments[n];
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (e[u] = c[u]);
    }
    return e;
  }, w.apply(this, arguments);
}, K = { current: 1, type: "default", size: "default", direction: "horizontal", labelPlacement: "horizontal" };
function Q(e, c) {
  var n, m = j.useContext(B), u = m.getPrefixCls, a = m.componentConfig, p = m.rtl, t = G(e, K, a == null ? void 0 : a.Steps), b = t.className, d = t.style, h = t.children, y = t.current, f = y === void 0 ? 1 : y, C = t.status, E = t.onChange, s = t.type, x = t.size, S = t.direction, P = t.labelPlacement, _ = t.customDot, g = t.lineless, l = u("steps"), v = P;
  s === "dot" && (v = S === "vertical" ? "horizontal" : "vertical"), s === "navigation" && (v = "horizontal");
  var N = S;
  (s === "navigation" || s === "arrow") && (N = "horizontal");
  var R = O(l, l + "-" + N, l + "-label-" + v, l + "-size-" + x, (n = {}, n[l + "-change-onclick"] = typeof E == "function", n[l + "-mode-" + s] = s !== "default", n[l + "-lineless"] = g, n[l + "-rtl"] = p, n), b);
  return r.createElement("div", w({ ref: c, style: d, className: R }, H(t)), r.Children.toArray(h).filter(function(o) {
    return o && o.type && o.type.displayName === "Step";
  }).map(function(o, i) {
    if (i += 1, o) {
      var z = w({ prefixCls: l, type: s, index: i, current: f, status: f === i ? C : void 0, customDot: _, labelPlacement: v, direction: N, onChange: E, lineless: g }, o.props);
      return C === "error" && f === i + 1 && (z.nextStepError = true), r.cloneElement(o, z);
    }
    return null;
  }));
}
var T = j.forwardRef(Q), F = T;
F.displayName = "Steps";
F.Step = A;
export { F as S };
