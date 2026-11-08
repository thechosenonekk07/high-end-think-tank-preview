import { r as m, C as Ee, u as Ce, ay as pe, az as ve, F as xe, w as He, i as ke, d as G, R as t, aX as Me, Y as Ze, aY as Ge, n as We, e as $e, ax as ye, D as be, s as Ye, aZ as Ke, A as ge } from "./index-DOWuBEUh.js";
import { u as Ve, F as Xe, P as qe } from "./useOverflowHidden-DqOFwnaA.js";
var g = function() {
  return g = Object.assign || function(i) {
    for (var l, n = 1, s = arguments.length; n < s; n++) {
      l = arguments[n];
      for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (i[a] = l[a]);
    }
    return i;
  }, g.apply(this, arguments);
}, Je = function(i, l) {
  var n = typeof Symbol == "function" && i[Symbol.iterator];
  if (!n) return i;
  var s = n.call(i), a, h = [], v;
  try {
    for (; (l === void 0 || l-- > 0) && !(a = s.next()).done; ) h.push(a.value);
  } catch (d) {
    v = { error: d };
  } finally {
    try {
      a && !a.done && (n = s.return) && n.call(s);
    } finally {
      if (v) throw v.error;
    }
  }
  return h;
}, he = function(i) {
  return ke(i) ? i.reduce(function(l, n) {
    return l + (n.span || 1);
  }, 0) : 0;
}, Qe = { layout: "horizontal", column: 3, tableLayout: "auto" };
function Ue(i) {
  var l, n = m.useContext(Ee), s = n.getPrefixCls, a = n.componentConfig, h = n.rtl, v = n.size, d = Ce(i, Qe, a == null ? void 0 : a.Descriptions), W = d.style, O = d.className, k = d.column, e = d.title, I = d.data, $ = d.border, _ = d.labelStyle, F = d.valueStyle, R = d.colon, N = d.layout, B = d.size, z = d.tableLayout, c = s("descriptions"), A = Je(m.useState(), 2), Y = A[0], K = A[1], H = m.useRef(null);
  m.useEffect(function() {
    return H.current = pe.subscribe(function(r) {
      for (var f = 0; f < ve.length; f++) {
        var o = ve[f];
        if (r[o]) {
          K(o);
          break;
        }
      }
    }), function() {
      pe.unsubscribe(H.current);
    };
  }, []);
  var y = 3;
  xe(k) && (y = k[Y] || 3), He(k) && k > 0 && (y = k);
  var E = [];
  if (ke(I) && I.length > 0 && y) {
    I.forEach(function(r) {
      var f = E[E.length - 1], o = he(f);
      o === 0 ? E.push([g(g({}, r), { span: r.span ? r.span > y ? y : r.span : 1 })]) : o === y ? E.push([g(g({}, r), { span: r.span ? r.span > y ? y : r.span : 1 })]) : f.push(g(g({}, r), { span: r.span ? r.span + o > y ? y - o : r.span : 1 }));
    });
    var p = E[E.length - 1], M = he(p);
    M < y && (p[p.length - 1].span = p[p.length - 1].span + y - M);
  }
  function V(r, f) {
    return t.createElement(m.Fragment, { key: f }, t.createElement("tr", { className: c + "-row" }, r.map(function(o, C) {
      var x = o.span > 1 ? { colSpan: o.span } : {};
      return t.createElement("td", g({ key: (o.key || C) + "_label", className: c + "-item-label" }, x, { style: _ }), o.label, R);
    })), t.createElement("tr", { className: c + "-row" }, r.map(function(o, C) {
      var x = o.span > 1 ? { colSpan: o.span } : {};
      return t.createElement("td", g({ key: (o.key || C) + "_value", className: c + "-item-value" }, x, { style: F }), o.value);
    })));
  }
  function X(r, f) {
    return t.createElement("tr", { key: f, className: c + "-row" }, r.map(function(o, C) {
      var x = o.span > 1 ? { colSpan: o.span * 2 - 1 } : {};
      return t.createElement(m.Fragment, { key: o.key || C }, t.createElement("td", { className: c + "-item-label", style: _ }, o.label, R), t.createElement("td", g({ className: c + "-item-value" }, x, { style: F }), o.value));
    }));
  }
  function L(r, f) {
    return t.createElement("tr", { key: f, className: c + "-row" }, r.map(function(o, C) {
      var x = o.span > 1 ? { colSpan: o.span } : {};
      return t.createElement("td", g({ key: o.key || C }, x, { className: c + "-item" }), t.createElement("div", { className: c + "-item-label-inline", style: _ }, o.label, R), t.createElement("div", { className: c + "-item-value-inline", style: F }, o.value));
    }));
  }
  function T(r, f) {
    return N === "inline-vertical" || N === "inline-horizontal" ? L(r, f) : N === "vertical" ? V(r, f) : X(r, f);
  }
  var D = G(c, (l = {}, l[c + "-border"] = $, l[c + "-layout-" + N] = N, l[c + "-size-" + (B || v)] = B || v, l[c + "-table-layout-fixed"] = z === "fixed", l[c + "-rtl"] = h, l), O);
  return t.createElement("div", { className: D, style: W }, e && t.createElement("div", { className: c + "-title" }, e), t.createElement("div", { className: c + "-body" }, t.createElement("table", { className: c + "-table", cellPadding: 0, cellSpacing: 0 }, t.createElement("tbody", null, E.map(function(r, f) {
    return T(r, f);
  })))));
}
Ue.displayName = "Descriptions";
var S = function() {
  return S = Object.assign || function(i) {
    for (var l, n = 1, s = arguments.length; n < s; n++) {
      l = arguments[n];
      for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (i[a] = l[a]);
    }
    return i;
  }, S.apply(this, arguments);
}, et = function(i, l) {
  var n = {};
  for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && l.indexOf(s) < 0 && (n[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, s = Object.getOwnPropertySymbols(i); a < s.length; a++) l.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[a]) && (n[s[a]] = i[s[a]]);
  return n;
}, j = function(i, l) {
  var n = typeof Symbol == "function" && i[Symbol.iterator];
  if (!n) return i;
  var s = n.call(i), a, h = [], v;
  try {
    for (; (l === void 0 || l-- > 0) && !(a = s.next()).done; ) h.push(a.value);
  } catch (d) {
    v = { error: d };
  } finally {
    try {
      a && !a.done && (n = s.return) && n.call(s);
    } finally {
      if (v) throw v.error;
    }
  }
  return h;
}, tt = { placement: "right", width: 250, height: 250, escToExit: true, mask: true, closable: true, maskClosable: true, mountOnEnter: true, getPopupContainer: function() {
  return document.body;
} };
function nt(i, l) {
  var n, s, a, h, v = m.useContext(Ee), d = v.locale, W = v.getPrefixCls, O = v.componentConfig, k = v.rtl, e = Ce(i, tt, O == null ? void 0 : O.Drawer), I = e.style, $ = e.className, _ = e.children, F = e.wrapClassName, R = e.maskStyle, N = e.headerStyle, B = e.bodyStyle, z = e.title, c = e.footer, A = e.okText, Y = e.cancelText, K = e.width, H = e.height, y = e.placement, E = e.mask, p = e.visible, M = e.closable, V = e.maskClosable, X = e.confirmLoading, L = e.mountOnEnter, T = e.unmountOnExit, D = e.afterOpen, r = e.afterClose, f = e.getPopupContainer, o = e.escToExit, C = e.getChildrenPopupContainer, x = e.focusLock, Z = e.autoFocus, Ne = e.okButtonProps, Se = e.cancelButtonProps, te = e.zIndex, ne = e.closeIcon, we = et(e, ["style", "className", "children", "wrapClassName", "maskStyle", "headerStyle", "bodyStyle", "title", "footer", "okText", "cancelText", "width", "height", "placement", "mask", "visible", "closable", "maskClosable", "confirmLoading", "mountOnEnter", "unmountOnExit", "afterOpen", "afterClose", "getPopupContainer", "escToExit", "getChildrenPopupContainer", "focusLock", "autoFocus", "okButtonProps", "cancelButtonProps", "zIndex", "closeIcon"]), w = m.useRef(null), ae = m.useRef(null), re = j(m.useState(false), 2), Pe = re[0], Oe = re[1], oe = j(m.useState(), 2), q = oe[0], Ie = oe[1], b = W("drawer"), le = j(m.useState(false), 2), se = le[0], J = le[1], ie = j(m.useState(false), 2), _e = ie[0], ce = ie[1], Q = m.useRef(true), ue = j(m.useState(false), 2), Fe = ue[0], fe = ue[1], U = m.useCallback(function() {
    var u = f == null ? void 0 : f();
    return Me(u) || document.body;
  }, [f]), Re = m.useMemo(function() {
    return !Ze && U() === document.body;
  }, [Pe, U]);
  Ve(U, { hidden: (p || se) && E }), m.useImperativeHandle(l, function() {
    return w.current;
  }), m.useEffect(function() {
    p && e.getPopupContainer && Oe(true);
  }, []), m.useEffect(function() {
    p && Q.current && (Q.current = false, fe(true));
  }, [p]), m.useEffect(function() {
    var u;
    Z && p && Ge(document.body, w.current) && ((u = w.current) === null || u === void 0 || u.focus());
  }, [p, Z]);
  var ze = function() {
    var u;
    if (p && q === void 0 && w.current) {
      var P = +((u = window.getComputedStyle(w.current, null)) === null || u === void 0 ? void 0 : u.zIndex);
      isNaN(P) || Ie(P + 1);
    }
  }, me = t.createElement("div", { className: b + "-scroll", tabIndex: -1 }, z !== null && t.createElement("div", { className: b + "-header", style: N }, t.createElement("div", { className: b + "-header-title" }, z)), M && (ne !== void 0 ? t.createElement("span", { onClick: e.onCancel, className: b + "-close-icon" }, ne) : t.createElement(We, { onClick: e.onCancel, className: b + "-close-icon" }, t.createElement($e, null))), t.createElement("div", { ref: function(u) {
    ae.current = u, ze();
  }, style: B, className: G(b + "-content", (n = {}, n[b + "-content-nofooter"] = c === null, n[b + "-content-noheader"] = z === null, n)) }, t.createElement(ye, S({}, v, { zIndex: q || 1050, getPopupContainer: function(u) {
    return typeof C == "function" ? C(u) : ae.current;
  } }), _)), c !== null && (c ? t.createElement("div", { className: b + "-footer" }, c) : t.createElement("div", { className: b + "-footer" }, t.createElement(be, S({ onClick: e.onCancel }, Se), Y || d.Drawer.cancelText), t.createElement(be, S({ type: "primary", loading: X, onClick: e.onOk }, Ne), A || d.Drawer.okText)))), ee = v.focusLock.drawer, Le = !!ee, Te = xe(ee) && ee.autoFocus, De = x !== void 0 ? x : Le, je = Z !== void 0 ? Z : Te, Be = De ? t.createElement(Xe, { as: "span", disabled: !_e, crossFrame: false, autoFocus: je }, me) : me, de = Q.current ? !L : Fe;
  return !p && !de ? null : t.createElement(qe, { forceRender: de, visible: p, getContainer: f }, t.createElement("div", S({}, Ye(we, ["onCancel", "onOk"]), { ref: w, onKeyDown: function(u) {
    var P, Ae = u.keyCode || u.which;
    Ae === Ke.code && o && p && ((P = e.onCancel) === null || P === void 0 || P.call(e, u));
  }, className: G(b + "-wrapper", (s = {}, s[b + "-no-mask"] = !E, s[b + "-wrapper-hide"] = !p, s), F), style: Re ? { position: "fixed", zIndex: te } : { zIndex: te || "inherit", position: "absolute" } }), E ? t.createElement(ge, { in: p, appear: true, timeout: 300, classNames: "fadeInStandard", mountOnEnter: L, unmountOnExit: T }, t.createElement("div", { className: b + "-mask", style: R, onClick: function(u) {
    !se && V && e.onCancel && e.onCancel(u);
  } })) : null, t.createElement(ge, { in: p, appear: true, timeout: 300, classNames: { top: "slideTop", bottom: "slideBottom", left: "slideLeft", right: "slideRight" }[y], mountOnEnter: L, unmountOnExit: T, onEnter: function(u) {
    u && (u.parentNode.style.display = "block", J(false));
  }, onEntered: function() {
    ce(true), D == null || D();
  }, onExit: function() {
    ce(false), J(true);
  }, onExited: function(u) {
    u && (J(false), u.parentNode.style.display = "", T && fe(false), r == null || r());
  } }, t.createElement("div", { className: G(b, $, (a = {}, a[b + "-rtl"] = k, a)), style: Object.assign(y === "left" || y === "right" ? { width: K } : { height: H }, (h = {}, h[y] = 0, h), I) }, t.createElement("div", { className: b + "-inner" }, t.createElement(ye, S({}, v, { effectGlobalModal: false, effectGlobalNotice: false, zIndex: q || 1050 }), Be))))));
}
var at = t.forwardRef(nt);
at.displayName = "Drawer";
export { Ue as D, at as a };
