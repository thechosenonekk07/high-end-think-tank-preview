import { r as N, C as K, m as Pe, d as Y, R as i, b1 as Ke, M as Le, N as Ve, a4 as Ce, F as De, x as Ge, h as fe, t as Ue, u as We, o as ve, J as qe } from "./index-DOWuBEUh.js";
var B = function() {
  return B = Object.assign || function(e) {
    for (var a, n = 1, l = arguments.length; n < l; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, B.apply(this, arguments);
}, Fe = function(e, a) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var l = n.call(e), t, c = [], u;
  try {
    for (; (a === void 0 || a-- > 0) && !(t = l.next()).done; ) c.push(t.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      t && !t.done && (n = l.return) && n.call(l);
    } finally {
      if (u) throw u.error;
    }
  }
  return c;
}, _;
(function(e) {
  e[e.previous = 0] = "previous", e[e.next = 1] = "next";
})(_ || (_ = {}));
function Q(e) {
  var a, n = N.useContext(K).locale, l = Pe(), t = e.pageNum, c = e.current, u = e.rootPrefixCls, f = e.pageItemStyle, m = e.activePageItemStyle, P = e.itemRender, r = u + "-item", C = c === t, h = Y(r, C ? r + "-active" : ""), p = f;
  C && (p = B(B({}, p), m));
  var b = C ? { "aria-current": true } : {}, s = function(k) {
    var v = e.pageNum, y = e.onClick, w = e.disabled;
    k.currentTarget.dataset.active !== "true" && (k.stopPropagation(), w || y && y(v));
  };
  return i.createElement("li", B({ style: p, className: h, onClick: s, tabIndex: e.disabled ? -1 : 0, "aria-label": (a = n.Pagination.currentPage) === null || a === void 0 ? void 0 : a.replace("{0}", t) }, l({ onPressEnter: s }), b), P ? P(t, "page", t) : t);
}
function ie(e, a) {
  switch (e) {
    case "prev":
      return a && a.prev ? a.prev : i.createElement(Ve, null);
    case "next":
      return a && a.next ? a.next : i.createElement(Le, null);
    case "more":
      return a && a.more ? a.more : i.createElement(Ke, null);
    default:
      return null;
  }
}
var ne = function(e) {
  var a, n, l = N.useContext(K).locale, t = e.rootPrefixCls, c = e.current, u = e.allPages, f = e.jumpPage, m = e.icons, P = e.disabled, r = e.pageItemStyle, C = e.itemRender, h = u > 0 ? 1 : 0, p = Math.min(u, Math.max(h, c + f)), b = t + "-item " + t + "-item-jumper", s = Y(b), k = function() {
    !P && e.onClick && e.onClick(p);
  }, v = ie("more", m), y = f > 0 ? (a = l.Pagination.nextSomePages) === null || a === void 0 ? void 0 : a.replace("{0}", f) : (n = l.Pagination.prevSomePages) === null || n === void 0 ? void 0 : n.replace("{0}", -f);
  return i.createElement("li", { style: r, className: s, onClick: k, "aria-label": y }, C ? C(void 0, "more", v) : v);
}, X = function(e) {
  var a, n = N.useContext(K), l = n.locale, t = n.rtl, c = Pe(), u = e.rootPrefixCls, f = e.current, m = e.allPages, P = e.type, r = e.icons, C = e.disabled, h = e.pageItemStyle, p = e.itemRender, b = u + "-item", s = Fe(t ? ["next", "prev"] : ["prev", "next"], 2), k = s[0], v = s[1], y = P === _.previous ? ie(k, r) : ie(v, r), w = false;
  m === 0 ? w = true : P === _.previous ? w = f <= 1 : w = f === m;
  var o = C || w, x = f + (P === _.previous ? -1 : 1);
  x = Math.max(0, Math.min(m, x));
  var T = _.previous === P ? "prev" : "next", O = Y(b, b + "-" + T, (a = {}, a[b + "-disabled"] = o, a)), L = function() {
    o || e.onClick && e.onClick(x);
  };
  return i.createElement("li", B({ style: h, className: O, onClick: L, tabIndex: o ? -1 : 0, "aria-label": l.Pagination[T] }, c({ onPressEnter: L })), p ? p(void 0, T, y) : y);
}, le = function() {
  return le = Object.assign || function(e) {
    for (var a, n = 1, l = arguments.length; n < l; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, le.apply(this, arguments);
}, He = function() {
}, Qe = Ce.Option, Xe = [10, 20, 30, 40, 50];
function Ye(e) {
  var a = N.useRef(), n = N.useContext(K).locale, l = e.sizeCanChange, t = l === void 0 ? false : l, c = e.onPageSizeChange, u = c === void 0 ? He : c, f = e.rootPrefixCls, m = e.sizeOptions, P = m === void 0 ? Xe : m, r = e.pageSize, C = r === void 0 ? 10 : r, h = e.size, p = e.selectProps, b = e.disabled;
  return t && i.createElement("div", { ref: a, className: f + "-option", "aria-label": n.Pagination.pageSize }, i.createElement(Ce, le({ value: C, onChange: function(s) {
    u(s);
  }, size: h, getPopupContainer: function() {
    return a.current;
  }, disabled: b }, p), P.map(function(s) {
    return i.createElement(Qe, { key: s, value: s }, s + " " + n.Pagination.countPerPage);
  })));
}
var oe = function() {
  return oe = Object.assign || function(e) {
    for (var a, n = 1, l = arguments.length; n < l; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, oe.apply(this, arguments);
}, Ze = function(e, a) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var l = n.call(e), t, c = [], u;
  try {
    for (; (a === void 0 || a-- > 0) && !(t = l.next()).done; ) c.push(t.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      t && !t.done && (n = l.return) && n.call(l);
    } finally {
      if (u) throw u.error;
    }
  }
  return c;
};
function ge(e) {
  var a = e.simple ? e.current : void 0, n = N.useContext(K).locale, l = Ze(N.useState(a), 2), t = l[0], c = l[1], u = N.useRef();
  N.useEffect(function() {
    e.simple && c(e.current);
  }, [e.simple, e.current]);
  var f = function(v) {
    var y = parseInt(v, 10);
    c(isNaN(y) ? void 0 : y);
  }, m = function() {
    var v = e.onPageChange, y = e.totalPages, w = e.current, o = e.simple;
    if (!fe(t)) {
      if (t === w) {
        o || c(void 0);
        return;
      }
      var x = isNaN(Number(t)) ? w : Number(t);
      x < 1 ? x = 1 : x > y && (x = y), c(o ? x : void 0), Ue(v) && v(x);
    }
  }, P = function() {
    var v = u.current.dom;
    String(t) && v && v.setSelectionRange(0, String(t).length);
  }, r = e.rootPrefixCls, C = e.totalPages, h = e.simple, p = e.size, b = e.disabled, s = r + "-jumper", k = oe({ showJumper: true }, De(h) ? h : {});
  return i.createElement("div", { className: "" + s }, !h && i.createElement("span", { className: s + "-text-goto" }, n.Pagination.goto), k.showJumper ? i.createElement(Ge, { _ignorePropsFromGlobal: true, ref: function(v) {
    return u.current = v;
  }, className: s + "-input", value: fe(t) ? void 0 : t.toString(), size: p, disabled: b || !C, onChange: f, onPressEnter: m, onFocus: P, onBlur: m }) : i.createElement("span", null, t), !h && i.createElement("span", { className: s + "-text-goto-suffix" }, n.Pagination.page), h && i.createElement(i.Fragment, null, i.createElement("span", { className: s + "-separator" }, "/"), i.createElement("span", null, C)));
}
var S = function() {
  return S = Object.assign || function(e) {
    for (var a, n = 1, l = arguments.length; n < l; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, S.apply(this, arguments);
}, me = function(e, a) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var l = n.call(e), t, c = [], u;
  try {
    for (; (a === void 0 || a-- > 0) && !(t = l.next()).done; ) c.push(t.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      t && !t.done && (n = l.return) && n.call(l);
    } finally {
      if (u) throw u.error;
    }
  }
  return c;
}, ea = 1, he = 10;
function re(e, a) {
  return e === void 0 && (e = he), Math.ceil(a / e);
}
function aa(e, a) {
  var n = 0, l = Math.floor(a / 2) - 1, t = Math.max(e, n);
  return Math.min(t, l);
}
function de(e) {
  return e && e.length ? e[0] : he;
}
var ta = { total: 0, pageSizeChangeResetCurrent: true, bufferSize: 2 };
function na(e, a) {
  var n, l, t = N.useContext(K), c = t.getPrefixCls, u = t.size, f = t.locale, m = t.componentConfig, P = t.rtl, r = We(e, ta, m == null ? void 0 : m.Pagination), C = r.total, h = r.pageSize, p = r.current, b = r.showMore, s = r.sizeOptions, k = r.pageSizeChangeResetCurrent, v = r.defaultCurrent, y = r.defaultPageSize, w = me(ve(ea, { defaultValue: v, value: p }), 2), o = w[0], x = w[1], T = me(ve(de(s), { defaultValue: y, value: h }), 2), O = T[0], L = T[1], $ = C, pe = !!b;
  p && !r.onChange && console.warn("Warning: you have provide current prop for pagination but without onChange handler , this will cause no-change when you change page. ");
  function ye(g, j) {
    var J = re(g, j), A = o > J ? J : o;
    return A;
  }
  N.useEffect(function() {
    var g = s && !s.includes(O);
    if (g) {
      var j = de(s);
      "pageSize" in r || L(j);
    }
  }, [s]), N.useEffect(function() {
    var g = ye(O, $);
    g !== o && !("current" in r) && x(g);
  }, [$, o, O]);
  var ue = function(g, j) {
    g === void 0 && (g = o), j === void 0 && (j = O);
    var J = r.onChange;
    J && J(g, j);
  }, xe = function(g) {
    var j = r.onPageSizeChange, J = re(g, $), A = { pageSize: g };
    k ? A.current = 1 : A.current = o > J ? J : o, "pageSize" in r || L(A.pageSize), !("current" in r) && o !== A.current && x(A.current), j && j(g, A.current), ue(k ? 1 : A.current, g);
  }, Z = function(g) {
    "current" in r || x(g), ue(g);
  }, Se = r.className, be = r.style, Ee = r.pageItemStyle, ze = r.activePageItemStyle, U = r.showTotal, _e = r.sizeCanChange, Ne = r.sizeOptions, W = r.simple, we = r.mini, ee = r.showJumper, ke = r.selectProps, Ie = r.icons, V = r.disabled, Oe = r.itemRender, Re = r.hideOnSinglePage, je = r.size || u, d = c("pagination"), q = we ? "mini" : je, Me = Y(d, d + "-size-" + q, (n = {}, n[d + "-simple"] = W, n[d + "-disabled"] = V, n[d + "-rtl"] = P, n), Se), ae, E = [], z = re(O, $), R = aa(r.bufferSize, z);
  if (Re && z <= 1) return null;
  var I = { onClick: Z, rootPrefixCls: d, simple: W, current: o, allPages: z, icons: Ie, disabled: V, pageItemStyle: Ee, activePageItemStyle: ze, itemRender: Oe };
  if (W) {
    var Ae = d + "-item-simple";
    ae = i.createElement("ul", { className: d + "-list" }, i.createElement(X, S({ key: "previous" }, I, { type: _.previous })), i.createElement("li", { className: Ae + "-pager" }, i.createElement(ge, { disabled: V, rootPrefixCls: d, totalPages: z, current: o, onPageChange: Z, simple: { showJumper: typeof ee == "boolean" ? ee : true }, size: q })), i.createElement(X, S({ key: "next" }, I, { type: _.next })));
  } else {
    var F = 3 + R, H = z - 2 - R;
    if (z <= 4 + R * 2 || o === F && o === H) for (var M = 1; M <= z; M++) E.push(i.createElement(Q, S({}, I, { key: M, pageNum: M })));
    else {
      var D = 1, G = z, se = true, ce = true;
      o > F && o < H ? (G = o + R, D = o - R) : o <= F ? (se = false, D = 1, G = Math.max(F, R + o)) : o >= H && (ce = false, G = z, D = Math.min(H, o - R));
      for (var M = D; M <= G; M++) E.push(i.createElement(Q, S({ key: M, pageNum: M }, I)));
      var Je = i.createElement(ne, S({}, I, { key: D - 1, type: _.previous, jumpPage: -(R * 2 + 1) })), Te = i.createElement(ne, S({}, I, { key: G + 1, type: _.next, jumpPage: R * 2 + 1 })), $e = i.createElement(Q, S({ key: 1, pageNum: 1 }, I)), Be = i.createElement(Q, S({}, I, { key: z, pageNum: z }));
      se && (E[0] = i.cloneElement(E[0], { className: d + "-item-after-pre" }), E.unshift(Je), E.unshift($e)), ce && (E[E.length - 1] = i.cloneElement(E[E.length - 1], { className: d + "-item-before-next" }), E.push(Te), E.push(Be));
    }
    ae = i.createElement("ul", { className: d + "-list" }, i.createElement(X, S({}, I, { key: "previous", type: _.previous })), E, pe && i.createElement(ne, S({}, I, { key: z + 1, type: _.next, jumpPage: R * 2 + 1 })), i.createElement(X, S({ key: "next" }, I, { type: _.next })));
  }
  var te = null;
  return typeof U == "boolean" && U && (te = i.createElement("div", { className: d + "-total-text" }, (l = f.Pagination.total) === null || l === void 0 ? void 0 : l.replace("{0}", $))), typeof U == "function" && (te = i.createElement("div", { className: d + "-total-text" }, U($, [(o - 1) * O + 1, o * O]))), i.createElement("div", S({}, qe(r), { className: Me, style: be, ref: a }), te, ae, i.createElement(Ye, { disabled: V, rootPrefixCls: d, sizeCanChange: _e, sizeOptions: Ne, onPageSizeChange: xe, pageSize: O, size: q, selectProps: ke }), !W && ee && i.createElement(ge, { disabled: V, rootPrefixCls: d, totalPages: z, current: o, onPageChange: Z, size: q }));
}
var ra = N.forwardRef(na);
ra.displayName = "Pagination";
export { ra as P };
