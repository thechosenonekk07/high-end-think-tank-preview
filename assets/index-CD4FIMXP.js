import { r as g, C as K, a as Q, a$ as j, b0 as L, m as U, l as W, n as A, c as X, R as r } from "./index-BwwIQFuW.js";
var u = function() {
  return u = Object.assign || function(m) {
    for (var l, s = 1, p = arguments.length; s < p; s++) {
      l = arguments[s];
      for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (m[i] = l[i]);
    }
    return m;
  }, u.apply(this, arguments);
}, Y = function(m, l) {
  var s = typeof Symbol == "function" && m[Symbol.iterator];
  if (!s) return m;
  var p = s.call(m), i, S = [], b;
  try {
    for (; (l === void 0 || l-- > 0) && !(i = p.next()).done; ) S.push(i.value);
  } catch (c) {
    b = { error: c };
  } finally {
    try {
      i && !i.done && (s = p.return) && s.call(p);
    } finally {
      if (b) throw b.error;
    }
  }
  return S;
}, R = function(m) {
  return A(m) ? m.reduce(function(l, s) {
    return l + (s.span || 1);
  }, 0) : 0;
}, Z = { layout: "horizontal", column: 3, tableLayout: "auto" };
function _(m) {
  var l, s = g.useContext(K), p = s.getPrefixCls, i = s.componentConfig, S = s.rtl, b = s.size, c = Q(m, Z, i == null ? void 0 : i.Descriptions), F = c.style, O = c.className, E = c.column, P = c.title, d = c.data, H = c.border, k = c.labelStyle, x = c.valueStyle, C = c.colon, h = c.layout, z = c.size, M = c.tableLayout, t = p("descriptions"), w = Y(g.useState(), 2), T = w[0], V = w[1], D = g.useRef(null);
  g.useEffect(function() {
    return D.current = j.subscribe(function(a) {
      for (var n = 0; n < L.length; n++) {
        var e = L[n];
        if (a[e]) {
          V(e);
          break;
        }
      }
    }), function() {
      j.unsubscribe(D.current);
    };
  }, []);
  var o = 3;
  U(E) && (o = E[T] || 3), W(E) && E > 0 && (o = E);
  var f = [];
  if (A(d) && d.length > 0 && o) {
    d.forEach(function(a) {
      var n = f[f.length - 1], e = R(n);
      e === 0 ? f.push([u(u({}, a), { span: a.span ? a.span > o ? o : a.span : 1 })]) : e === o ? f.push([u(u({}, a), { span: a.span ? a.span > o ? o : a.span : 1 })]) : n.push(u(u({}, a), { span: a.span ? a.span + e > o ? o - e : a.span : 1 }));
    });
    var N = f[f.length - 1], I = R(N);
    I < o && (N[N.length - 1].span = N[N.length - 1].span + o - I);
  }
  function $(a, n) {
    return r.createElement(g.Fragment, { key: n }, r.createElement("tr", { className: t + "-row" }, a.map(function(e, v) {
      var y = e.span > 1 ? { colSpan: e.span } : {};
      return r.createElement("td", u({ key: (e.key || v) + "_label", className: t + "-item-label" }, y, { style: k }), e.label, C);
    })), r.createElement("tr", { className: t + "-row" }, a.map(function(e, v) {
      var y = e.span > 1 ? { colSpan: e.span } : {};
      return r.createElement("td", u({ key: (e.key || v) + "_value", className: t + "-item-value" }, y, { style: x }), e.value);
    })));
  }
  function q(a, n) {
    return r.createElement("tr", { key: n, className: t + "-row" }, a.map(function(e, v) {
      var y = e.span > 1 ? { colSpan: e.span * 2 - 1 } : {};
      return r.createElement(g.Fragment, { key: e.key || v }, r.createElement("td", { className: t + "-item-label", style: k }, e.label, C), r.createElement("td", u({ className: t + "-item-value" }, y, { style: x }), e.value));
    }));
  }
  function B(a, n) {
    return r.createElement("tr", { key: n, className: t + "-row" }, a.map(function(e, v) {
      var y = e.span > 1 ? { colSpan: e.span } : {};
      return r.createElement("td", u({ key: e.key || v }, y, { className: t + "-item" }), r.createElement("div", { className: t + "-item-label-inline", style: k }, e.label, C), r.createElement("div", { className: t + "-item-value-inline", style: x }, e.value));
    }));
  }
  function G(a, n) {
    return h === "inline-vertical" || h === "inline-horizontal" ? B(a, n) : h === "vertical" ? $(a, n) : q(a, n);
  }
  var J = X(t, (l = {}, l[t + "-border"] = H, l[t + "-layout-" + h] = h, l[t + "-size-" + (z || b)] = z || b, l[t + "-table-layout-fixed"] = M === "fixed", l[t + "-rtl"] = S, l), O);
  return r.createElement("div", { className: J, style: F }, P && r.createElement("div", { className: t + "-title" }, P), r.createElement("div", { className: t + "-body" }, r.createElement("table", { className: t + "-table", cellPadding: 0, cellSpacing: 0 }, r.createElement("tbody", null, f.map(function(a, n) {
    return G(a, n);
  })))));
}
_.displayName = "Descriptions";
export { _ as D };
