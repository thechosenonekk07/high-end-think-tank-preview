import { R as l, aG as xn, r as g, C as at, u as Gt, d as ie, i as pe, w as Je, k as Cn, _ as wn, l as Sn, F as ae, o as bn, Q as _n, aH as En, aI as On, H as Nn, P as $t, a6 as ar, a3 as Fr, D as Er, h as Rn, aJ as kn, at as Ft, aK as Pn, aL as Tn, L as In, v as Fn, aM as Nt, aN as Rt, aO as An, J as Dn, ab as $n, W as jn, s as Hn } from "./index-DOWuBEUh.js";
import { m as Mn, u as Xt } from "./upload-dwSPQUIn.js";
import { I as Kn } from "./index-gnNGM7My.js";
import { I as Bn } from "./index-CgcNigm7.js";
import { P as Or } from "./pagination-DNEzLAQJ.js";
var pt = function(e) {
  return function(t) {
    return Math.pow(t, e);
  };
}, yt = function(e) {
  return function(t) {
    return 1 - Math.abs(Math.pow(t - 1, e));
  };
}, jt = function(e) {
  return function(t) {
    return t < 0.5 ? pt(e)(t * 2) / 2 : yt(e)(t * 2 - 1) / 2 + 0.5;
  };
}, Ln = function(e) {
  return e;
}, zn = pt(2), Wn = yt(2), qn = jt(2), Vn = pt(3), Un = yt(3), Yn = jt(3), Gn = pt(4), Xn = yt(4), Jn = jt(4), Qn = pt(5), Zn = yt(5), ea = jt(5), ta = function(e) {
  return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2);
}, ra = function(e) {
  return Math.sin(Math.PI / 2 * e);
}, na = function(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}, ir = function(e) {
  var t = 7.5625, n = 2.75;
  return e < 1 / n ? t * e * e : e < 2 / n ? (e -= 1.5 / n, t * e * e + 0.75) : e < 2.5 / n ? (e -= 2.25 / n, t * e * e + 0.9375) : (e -= 2.625 / n, t * e * e + 0.984375);
}, Ar = function(e) {
  return 1 - ir(1 - e);
}, aa = function(e) {
  return e < 0.5 ? Ar(e * 2) * 0.5 : ir(e * 2 - 1) * 0.5 + 0.5;
}, ia = Object.freeze({ linear: Ln, quadIn: zn, quadOut: Wn, quadInOut: qn, cubicIn: Vn, cubicOut: Un, cubicInOut: Yn, quartIn: Gn, quartOut: Xn, quartInOut: Jn, quintIn: Qn, quintOut: Zn, quintInOut: ea, sineIn: ta, sineOut: ra, sineInOut: na, bounceOut: ir, bounceIn: Ar, bounceInOut: aa }), Ht = function(t) {
  var n = t.from, r = t.to, a = t.duration, i = t.delay, s = t.easing, o = t.onStart, y = t.onUpdate, f = t.onFinish;
  for (var w in n) r[w] === void 0 && (r[w] = n[w]);
  for (var x in r) n[x] === void 0 && (n[x] = r[x]);
  this.from = n, this.to = r, this.duration = a || 500, this.delay = i || 0, this.easing = s || "linear", this.onStart = o, this.onUpdate = y || function() {
  }, this.onFinish = f, this.startTime = Date.now() + this.delay, this.started = false, this.finished = false, this.timer = null, this.keys = {};
};
Ht.prototype.update = function() {
  if (this.time = Date.now(), !(this.time < this.startTime) && !this.finished) {
    if (this.elapsed === this.duration) {
      this.finished || (this.finished = true, this.onFinish && this.onFinish(this.keys));
      return;
    }
    this.elapsed = this.time - this.startTime, this.elapsed = this.elapsed > this.duration ? this.duration : this.elapsed;
    for (var t in this.to) this.keys[t] = this.from[t] + (this.to[t] - this.from[t]) * ia[this.easing](this.elapsed / this.duration);
    this.started || (this.onStart && this.onStart(this.keys), this.started = true), this.onUpdate(this.keys);
  }
};
Ht.prototype.start = function() {
  var t = this;
  this.startTime = Date.now() + this.delay;
  var n = function() {
    t.update(), t.timer = requestAnimationFrame(n), t.finished && (cancelAnimationFrame(t.timer), t.timer = null);
  };
  n();
};
Ht.prototype.stop = function() {
  cancelAnimationFrame(this.timer), this.timer = null;
};
function Dr(e) {
  var t = [];
  return l.Children.forEach(e, function(n) {
    xn.isFragment(n) && n.props ? t = t.concat(Dr(n.props.children)) : n != null && t.push(n);
  }), t;
}
var Jt = function() {
  return Jt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Jt.apply(this, arguments);
}, oa = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, la = { size: "small", direction: "horizontal" };
function sa(e, t) {
  var n, r = g.useContext(at), a = r.getPrefixCls, i = r.componentConfig, s = r.rtl, o = Gt(e, la, i == null ? void 0 : i.Space), y = o.className, f = o.style, w = o.children, x = o.size, p = o.direction, C = o.align, u = o.wrap, b = o.split, $ = oa(o, ["className", "style", "children", "size", "direction", "align", "wrap", "split"]), S = a("space"), A = C || (p === "horizontal" ? "center" : ""), v = ie(S, (n = {}, n[S + "-" + p] = p, n[S + "-align-" + A] = A, n[S + "-wrap"] = u, n[S + "-rtl"] = s, n), y);
  function F(L) {
    if (Je(L)) return L;
    switch (L) {
      case "mini":
        return 4;
      case "small":
        return 8;
      case "medium":
        return 16;
      case "large":
        return 24;
      default:
        return 8;
    }
  }
  var D = Dr(w);
  function H(L) {
    var T, h, Q, _, q = D.length === L + 1, k = s ? "marginLeft" : "marginRight";
    if (typeof x == "string" || typeof x == "number") {
      var P = F(x);
      return u ? q ? { marginBottom: P } : (T = {}, T["" + k] = P, T.marginBottom = P, T) : q ? {} : (h = {}, h[p === "vertical" ? "marginBottom" : k] = P, h);
    }
    if (pe(x)) {
      var z = F(x[0]), I = F(x[1]);
      return u ? q ? { marginBottom: I } : (Q = {}, Q["" + k] = z, Q.marginBottom = I, Q) : p === "vertical" ? { marginBottom: I } : (_ = {}, _["" + k] = z, _);
    }
  }
  return l.createElement("div", Jt({ ref: t, className: v, style: f }, $), D.map(function(L, T) {
    var h, Q = ((h = L) === null || h === void 0 ? void 0 : h.key) || T, _ = b != null && T > 0;
    return l.createElement(g.Fragment, { key: Q }, _ && l.createElement("div", { className: S + "-item-split" }, b), l.createElement("div", { className: S + "-item", style: H(T) }, L));
  }));
}
var $r = g.forwardRef(sa);
$r.displayName = "Space";
function Nr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nr(Object(n), true).forEach(function(r) {
      Sn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function da(e, t) {
  var n = g.useContext(Cn), r = n.prefixCls, a = r === void 0 ? "arco" : r, i = e.spin, s = e.className, o = Rr(Rr({ "aria-hidden": true, focusable: false, ref: t }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-filter") });
  return i && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, l.createElement("svg", wn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), l.createElement("path", { d: "M30 42V22.549a1 1 0 0 1 .463-.844l10.074-6.41A1 1 0 0 0 41 14.45V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6.451a1 1 0 0 0 .463.844l10.074 6.41a1 1 0 0 1 .463.844V37" }));
}
var or = l.forwardRef(da);
or.defaultProps = { isIcon: true };
or.displayName = "IconFilter";
var kr = { table: "table", header: { operations: function(e) {
  var t = e.selectionNode, n = e.expandNode;
  return [{ name: "expandNode", node: n }, { name: "selectionNode", node: t }];
}, wrapper: "div", thead: "thead", row: "tr", th: "th", cell: "div" }, body: { operations: function(e) {
  var t = e.selectionNode, n = e.expandNode;
  return [{ name: "expandNode", node: n }, { name: "selectionNode", node: t }];
}, wrapper: "div", tbody: "tbody", row: "tr", td: "td", cell: "span" } };
function it(e) {
  var t = g.useMemo(function() {
    return ae(e) ? Mn({}, kr, e) : kr;
  }, [e]);
  return { getHeaderComponentOperations: t.header.operations, getBodyComponentOperations: t.body.operations, ComponentTable: t.table, ComponentHeaderWrapper: t.header.wrapper, ComponentThead: t.header.thead, ComponentHeaderRow: t.header.row, ComponentTh: t.header.th, ComponentHeaderCell: t.header.cell, ComponentBodyWrapper: t.body.wrapper, ComponentTbody: t.body.tbody, ComponentBodyRow: t.body.row, ComponentTd: t.body.td, ComponentBodyCell: t.body.cell };
}
var Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Pe.apply(this, arguments);
}, kt = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, ua = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function ca(e, t) {
  return e === "ascend" ? t.Table.sortAscend : e === "descend" ? t.Table.sortDescend : t.Table.cancelSort;
}
var fa = { bottom: 0 };
function va(e) {
  var t, n, r, a, i = e.onSort, s = e.onFilter, o = e.onHandleFilter, y = e.onHandleFilterReset, f = e.currentFilters, w = f === void 0 ? {} : f, x = e.currentSorter, p = e._key, C = e.dataIndex, u = e.title, b = e.sorter, $ = e.sortDirections, S = $ === void 0 ? ["ascend", "descend"] : $, A = e.filters, v = A === void 0 ? [] : A, F = e.columnFixedStyle, D = e.className, H = e.cellStyle, L = e.headerCellStyle, T = e.rowSpan, h = e.colSpan, Q = e.headerCellProps, _ = e.prefixCls, q = e.align, k = q === void 0 ? "left" : q, P = e.components, z = e.filterIcon, I = e.filterDropdown, K = e.filterMultiple, B = K === void 0 ? true : K, N = e.ellipsis, M = e.filterDropdownProps, U = e.onFilterDropdownVisibleChange, G = e.column, j = e.showSorterTooltip, O = e.index, X = g.useContext(at), oe = X.locale, E = X.rtl, Z = p || C || O, le = kt(bn([], { value: w[Z] || [] }), 3), re = le[0], Ce = le[1], te = le[2], ge = kt(g.useState(false), 2), be = ge[0], _e = ge[1], we = kt(g.useState(false), 2), ye = we[0], Ne = we[1], Re = b && pe(S) && S.length, Ee = Re ? ne() : void 0;
  g.useEffect(function() {
    Ce(w[Z] || []);
  }, [w, Z]), g.useEffect(function() {
    re && re !== te && Ce(re);
  }, [be]);
  function ne() {
    var Y = x && x.direction;
    if (!Y || x && x.field !== Z) return S[0];
    var ce = S.indexOf(Y);
    if (ce < S.length) return S[ce + 1];
  }
  function ot() {
    re && (o && o({ onFilter: s, filters: v, dataIndex: Z }, te), Ve(false));
  }
  function qe() {
    y({ dataIndex: Z }), Ve(false);
  }
  function Ve(Y) {
    _e(Y), U && U(Y);
  }
  function Qe(Y, ce) {
    var ve = ua([], kt(te), false);
    if (B) ce ? ve = ve.concat(Y) : ve.splice(ve.findIndex(function(He) {
      return He === Y;
    }), 1);
    else if (ve.length > 0) if (ve[0] !== Y) ve = [Y];
    else return;
    else ve = [Y];
    Ce(ve);
  }
  function De(Y) {
    Ce(Y || te), _e(false), o && o({ filters: v, onFilter: s, dataIndex: Z }, Y || te);
  }
  function Ze() {
    return typeof I == "function" ? I({ filterKeys: te, setFilterKeys: function(Y, ce) {
      Ce(Y), ce == null || ce();
    }, confirm: De }) : l.createElement("div", { className: _ + "-filters-popup" }, l.createElement("div", { className: _ + "-filters-list" }, v.map(function(Y) {
      var ce = te.findIndex(function(ve) {
        return ve === Y.value;
      }) !== -1;
      return l.createElement("div", { className: _ + "-filters-item", key: Y.value }, B ? l.createElement(ar, { checked: ce, onChange: function(ve) {
        return Qe(Y.value, ve);
      } }, Y.text) : l.createElement(Fr, { checked: ce, onChange: function(ve) {
        return Qe(Y.value, ve);
      } }, Y.text));
    })), l.createElement($r, { className: _ + "-filters-btn" }, l.createElement(Er, { onClick: qe, size: "mini" }, oe.Table.resetText), l.createElement(Er, { onClick: ot, type: "primary", size: "mini" }, oe.Table.okText)));
  }
  var $e = function(Y) {
    var ce;
    return ie(_ + "-sorter-icon", (ce = {}, ce[_ + "-sorter-icon-active"] = x && x.direction === Y && x.field === Z, ce));
  }, et = ie(_ + "-filters", (t = {}, t[_ + "-filters-open"] = be, t[_ + "-filters-active"] = re && re.length, t)), Ie = Pe({}, F);
  ae(H) && (Ie = Pe(Pe({}, Ie), H)), ae(L) && (Ie = Pe(Pe({}, Ie), L)), k && k !== "left" && (Ie.textAlign = k);
  var Le = { style: Ie, key: p || Z };
  h && h > 1 && (Le.colSpan = h), T && T > 1 && (Le.rowSpan = T);
  var Ue = it(P), ee = Ue.ComponentTh, ue = Ue.ComponentHeaderCell, Fe = pe(v) && v.length > 0 || typeof I == "function", Ae = N && typeof u == "string" ? { title: u } : {}, ke = M && M.triggerProps, Oe = l.createElement(l.Fragment, null, Re ? l.createElement(_n, Pe({ content: ca(Ee, oe), disabled: !j }, ae(j) ? j : {}), l.createElement("div", { className: _ + "-cell-with-sorter", onMouseEnter: function() {
    Ne(true);
  }, onMouseLeave: function() {
    Ne(false);
  }, onClick: function() {
    return i(Ee, Z);
  } }, l.createElement("span", Pe({ className: _ + "-th-item-title" }, Ae), u), Re && l.createElement("div", { className: ie(_ + "-sorter", (n = {}, n[_ + "-sorter-direction-one"] = S.length === 1, n)) }, S.indexOf("ascend") !== -1 && l.createElement("div", { className: $e("ascend") }, l.createElement(En, null)), S.indexOf("descend") !== -1 && l.createElement("div", { className: $e("descend") }, l.createElement(On, null))))) : l.createElement("span", Pe({ className: _ + "-th-item-title" }, Ae), u), Fe && l.createElement(Nn, Pe({ popup: Ze, trigger: "click", classNames: "slideDynamicOrigin", position: E ? "bl" : "br", popupAlign: fa, popupVisible: be, onVisibleChange: Ve }, ke), l.createElement("div", { className: et }, z || l.createElement(or, null)))), je = ie(_ + "-th-item", (r = {}, r[_ + "-cell-text-ellipsis"] = N, r[_ + "-cell-mouseenter"] = ye, r[_ + "-cell-next-" + Ee] = ye && Ee, r[_ + "-col-has-sorter"] = Re, r[_ + "-col-has-filter"] = Fe, r));
  return h !== 0 && l.createElement(ee, Pe({ className: ie(_ + "-th", (a = {}, a[_ + "-col-sorted"] = x && x.direction && x.field === Z, a[_ + "-col-first"] = O === 0, a), D) }, Le, Q), $t(ue) ? l.createElement(ue, { className: je }, Oe) : l.createElement(ue, { className: je, column: G }, Oe));
}
var ut = "table_internal_selection_key", ct = "table_internal_expand_key", Ke = function() {
  return Ke = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ke.apply(this, arguments);
};
function ma(e) {
  var t = e.activeSorters, n = e.expandedRowRender, r = e.expandProps, a = r === void 0 ? {} : r, i = e.onSort, s = e.onHandleFilter, o = e.onHandleFilterReset, y = e.onHeaderRow, f = e.prefixCls, w = e.currentFilters, x = e.components, p = e.data, C = e.selectedRowKeys, u = e.rowSelection, b = e.allSelectedRowKeys, $ = b === void 0 ? [] : b, S = e.groupColumns, A = e.stickyOffsets, v = e.groupStickyClassNames, F = e.showSorterTooltip, D = g.useContext(at).rtl, H = it(x), L = H.ComponentThead, T = H.ComponentHeaderRow, h = H.getHeaderComponentOperations, Q = u && (u.type === "checkbox" || !("type" in u)), _ = u && "checkAll" in u ? u.checkAll : true, q = u && u.type === "radio", k = a.columnTitle, P = g.useMemo(function() {
    var K = new Set($);
    return C.filter(function(B) {
      return K.has(B);
    });
  }, [C, $]), z = S.length > 1 ? { rowSpan: S.length } : {}, I = ie(f + "-th", f + "-operation");
  return l.createElement(L, null, S.map(function(K, B) {
    var N = y && y(K, B), M = (Q || q) && B === 0 && l.createElement("th", { className: ie(I, f + "-" + (q ? "radio" : "checkbox")) }, l.createElement("div", { className: f + "-th-item" }, _ && !q ? l.createElement(ar, { indeterminate: p && C.length > 0 && $.length === 0 ? C.length < p.length : P.length > 0 && P.length !== $.length, checked: p && C.length > 0 && ($.length === 0 ? C.length === p.length : P.length === $.length), disabled: !$.length, onChange: e.onCheckAll }) : null, u && u.columnTitle)), U = n && l.createElement("th", { className: ie(I, f + "-expand") }, k && l.createElement("div", { className: f + "-th-item" }, k)), G = v[B], j = h({ selectionNode: M, expandNode: U });
    return l.createElement(T, Ke({}, N, { key: B, className: f + "-tr" }), K.map(function(O, X) {
      var oe, E, Z, le, re, Ce, te = O.$$columnIndex, ge = 0;
      Array.isArray(te) && te.length === 2 ? ge = O.fixed === "right" ? A[te[1]] : A[te[0]] : typeof te == "number" && (ge = A[te] || 0);
      var be = G[X];
      if (O.$$isOperation) {
        var _e = O.node, we = true;
        O.title === ut && (_e = (Z = j.find(function(ne) {
          return ne.name === "selectionNode";
        })) === null || Z === void 0 ? void 0 : Z.node, we = false), O.title === ct && (_e = (le = j.find(function(ne) {
          return ne.name === "expandNode";
        })) === null || le === void 0 ? void 0 : le.node, we = false);
        var ye = _e;
        return l.cloneElement(ye, Ke(Ke(Ke({ key: O.key || X }, ye.props), z), { className: ie(we ? I : "", (re = ye == null ? void 0 : ye.props) === null || re === void 0 ? void 0 : re.className, be, (oe = {}, oe[f + "-col-first"] = X === 0, oe)), style: Ke(Ke(Ke({}, (Ce = ye == null ? void 0 : ye.props) === null || Ce === void 0 ? void 0 : Ce.style), O.fixed === "left" ? (E = {}, E[D ? "right" : "left"] = ge, E) : {}), { width: O.width, minWidth: O.width }) }));
      }
      var Ne = O.onHeaderCell && O.onHeaderCell(O, X), Re = ie(be, O.className), Ee = {};
      return O.fixed === "left" && (Ee[D ? "right" : "left"] = ge), O.fixed === "right" && (Ee[D ? "left" : "right"] = ge), l.createElement(va, Ke({ key: O.key, index: X, onSort: i, onHandleFilter: s, onHandleFilterReset: o, currentSorter: t.find(function(ne) {
        return ne.field === O.key;
      }), currentFilters: w, _key: O.key || O.dataIndex || X }, O, { column: O, headerCellProps: Ne, prefixCls: f, components: x, className: Re, columnFixedStyle: Ee, showSorterTooltip: F }));
    }));
  }));
}
var Qt = function() {
  return Qt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Qt.apply(this, arguments);
}, At = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Dt = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function mt(e) {
  return Je(e) ? e : $t(e) && e.includes("px") ? +e.replace("px", "") : e;
}
function pa(e) {
  return e ? e.offsetHeight - e.clientHeight : 0;
}
function ya(e) {
  return e ? e.offsetWidth - e.clientWidth : 0;
}
function Zt(e, t) {
  return pe(e[t]) && e[t].length;
}
function ha(e, t) {
  function n(r) {
    if (!r) return [];
    var a = [];
    return r.forEach(function(i) {
      if (!ae(i)) a.push(i);
      else {
        var s = Qt({}, i);
        s.__ORIGIN_DATA = i;
        var o = s[t];
        ae(s) && o && pe(o) && (s[t] = n(o)), a.push(s);
      }
    }), a;
  }
  return n(e);
}
function de(e) {
  return ae(e) ? e.__ORIGIN_DATA : !e || !pe(e) ? e : e.map(function(t) {
    return !ae(t) || !("__ORIGIN_DATA" in t) ? t : t.__ORIGIN_DATA;
  });
}
function ga(e, t, n, r, a, i, s) {
  n === void 0 && (n = []), r === void 0 && (r = []);
  var o = new Set(n), y = new Set(r);
  function f(w) {
    t ? (o.add(a(w)), y.delete(a(w))) : o.delete(a(w)), pe(w[i]) && w[i].forEach(function(x) {
      f(x);
    });
  }
  return s ? (f(e), lr(e, o, y, a, i)) : t ? o.add(a(e)) : o.delete(a(e)), { selectedRowKeys: Dt([], At(o), false), indeterminateKeys: Dt([], At(y), false) };
}
function xa(e, t, n, r, a) {
  if (t === void 0 && (t = []), !a) return { selectedRowKeys: t, indeterminateKeys: [] };
  var i = new Set(t), s = /* @__PURE__ */ new Set([]);
  function o(y) {
    i.add(n(y)), s.delete(n(y)), pe(y[r]) && y[r].forEach(function(f) {
      o(f);
    });
  }
  return t.forEach(function(y) {
    var f = e.find(function(w) {
      return n(w) === y;
    });
    !Rn(f) && !kn(f) && (o(f), lr(f, i, s, n, r));
  }), { selectedRowKeys: Dt([], At(i), false), indeterminateKeys: Dt([], At(s), false) };
}
function lr(e, t, n, r, a) {
  if (e.__INTERNAL_PARENT) {
    var i = r(e.__INTERNAL_PARENT);
    if (pe(e.__INTERNAL_PARENT[a])) {
      var s = e.__INTERNAL_PARENT[a].length, o = 0, y = false;
      e.__INTERNAL_PARENT[a].forEach(function(f) {
        t.has(r(f)) && (o += 1), n.has(r(f)) && (n.add(i), y = true);
      }), s === o ? (t.add(i), n.delete(i)) : o > 0 && s > o ? (t.delete(i), n.add(i)) : o === 0 && (t.delete(i), y || n.delete(i));
    }
    lr(e.__INTERNAL_PARENT, t, n, r, a);
  }
}
function er(e) {
  return typeof e == "function" ? e : typeof e == "object" && typeof e.compare == "function" ? e.compare : null;
}
function tr(e) {
  if (typeof e == "object" && typeof e.multiple == "number") return e.multiple;
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Te.apply(this, arguments);
}, Ca = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function wa(e) {
  return e && !l.isValidElement(e) && ae(e);
}
function Sa(e) {
  var t, n, r = e.components, a = e.InnerComponentTd, i = e.column, s = e.columnIndex, o = e.prefixCls, y = e.stickyClassName, f = e.stickyOffset, w = e.currentSorter, x = e.virtualized, p = e.record, C = e.trIndex, u = e.level, b = e.placeholder, $ = e.indentSize, S = e.renderExpandIcon, A = e.rowKey, v = e.recordHaveChildren, F = e.haveTreeData, D = g.useContext(at).rtl, H = it(r).ComponentBodyCell, L = ie(o + "-td", y, (t = {}, t[o + "-col-sorted"] = w && w.direction && w.field === i.dataIndex, t[o + "-col-first"] = s === 0, t), i.className), T = {}, h, Q, _ = {};
  i.fixed === "left" && (_[D ? "right" : "left"] = f), i.fixed === "right" && (_[D ? "left" : "right"] = f), ae(i.cellStyle) && (_ = Te(Te({}, _), i.cellStyle)), ae(i.bodyCellStyle) && (_ = Te(Te({}, _), i.bodyCellStyle)), i.align && (_.textAlign = i.align), x && i.width && (_.width = i.width, _.minWidth = i.width, _.maxWidth = i.width);
  var q = i.onCell ? i.onCell(p, C) : { onHandleSave: function() {
  } }, k = q.onHandleSave, P = Ca(q, ["onHandleSave"]), z = g.useMemo(function() {
    return i.render && i.render(Ft(p, i.dataIndex), de(p), C);
  }, [p, i, C]);
  if (wa(z) && (T = z.props, h = T.rowSpan, Q = T.colSpan, z = z.children), h === 0 || Q === 0) return null;
  var I = Ft(p, i.dataIndex), K = i.render ? z : I === void 0 || typeof I == "string" && I.trim() === "" || I === null ? i.placeholder === void 0 ? b : i.placeholder : I, B = i.ellipsis && typeof K == "string" ? { title: K } : {}, N = F && i.$$isFirstColumn, M = N && v, U = N && u > 0 ? $ * u : 0;
  N && !v && (U += 20);
  var G = l.createElement(l.Fragment, null, M ? l.createElement("span", { className: o + "-cell-expand-icon" }, S(p, A)) : null, $t(H) ? l.createElement(H, Te({}, { className: o + "-cell-wrap-value" }), K) : l.createElement(H, Te({ rowData: de(p), className: o + "-cell-wrap-value", column: i, onHandleSave: k }, P), K));
  return l.createElement(a, Te({ key: i.key || i.dataIndex || s, onMouseEnter: function(j) {
    var O;
    if (h > 1) {
      var X = j.currentTarget.closest("." + o), oe = j.currentTarget.closest("tbody");
      if (X && oe) for (var E = oe.querySelectorAll("." + o + "-tr"), Z = C; Z < C + h; Z++) {
        var le = E[Z];
        le && le.classList.add(o + "-tr-hover");
      }
    }
    (O = P == null ? void 0 : P.onMouseEnter) === null || O === void 0 || O.call(P, j);
  }, onMouseLeave: function(j) {
    var O;
    if (h > 1) {
      var X = j.currentTarget.closest("." + o), oe = j.currentTarget.closest("tbody");
      if (X && oe) for (var E = oe.querySelectorAll("." + o + "-tr"), Z = C; Z < C + h; Z++) {
        var le = E[Z];
        le && le.classList.remove(o + "-tr-hover");
      }
    }
    (O = P == null ? void 0 : P.onMouseLeave) === null || O === void 0 || O.call(P, j);
  } }, Pn(P, ["onClick", "onDoubleClick", "onContextMenu", "onMouseOver", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseDown", "onMouseUp"]), T, { className: ie(L, T.className), style: Te(Te({}, _), T.style) }), l.createElement("div", Te({ className: ie(o + "-cell", (n = {}, n[o + "-cell-text-ellipsis"] = i.ellipsis, n)) }, B), U ? l.createElement("span", { className: o + "-cell-indent", style: { paddingLeft: U } }) : null, G));
}
const ba = g.memo(Sa);
var he = function() {
  return he = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, he.apply(this, arguments);
}, _a = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Ea(e, t) {
  var n, r = e.expandedRowRender, a = e.onClickExpandBtn, i = e.columns, s = e.components, o = e.onCheck, y = e.onCheckRadio, f = e.prefixCls, w = e.selectedRowKeys, x = e.indeterminateKeys, p = e.rowClassName, C = e.onRow, u = e.rowSelection, b = e.indentSize, $ = b === void 0 ? 16 : b, S = e.activeSorters, A = e.virtualized, v = e.stickyOffsets, F = e.stickyClassNames, D = e.getRowKey, H = e.placeholder, L = e.expandProps, T = L === void 0 ? { strictTreeData: true } : L, h = e.data, Q = e.expandedRowKeys, _ = e.childrenColumnName, q = e.record, k = e.index, P = e.type, z = e.shouldRowExpand, I = e.level, K = g.useContext(at).rtl, B = de(q), N = _a(C && C(B, k) || {}, []), M = D(q), U = P === "radio" ? w.slice(0, 1) : w, G = M || k, j = U.indexOf(M) > -1, O = Q.indexOf(M) > -1, X = x.indexOf(M) > -1, oe = ie(f + "-tr", (n = {}, n[f + "-row-checked"] = j, n[f + "-row-expanded"] = O, n), p && p(B, k)), E = u && typeof u.checkboxProps == "function" ? u.checkboxProps(B) : {}, Z = ie(f + "-td", f + "-operation"), le = function(ee) {
    var ue;
    return ie(Z, f + "-" + ee, (ue = {}, ue[f + "-selection-col"] = A && P === "checkbox" || P === "radio", ue[f + "-expand-icon-col"] = A && r, ue));
  };
  function re(ee) {
    return T.strictTreeData ? pe(ee[_]) && ee[_].length : ee[_] !== void 0;
  }
  function Ce() {
    return h.find(function(ee) {
      return re(ee);
    });
  }
  var te = z(q, k), ge = re(q), be = Ce() && !r, _e = be && ge, we = T.expandRowByClick, ye = we && (te || _e) ? { onClick: function(ee) {
    a(M), N && N.onClick && N.onClick(ee);
  } } : {}, Ne = it(s), Re = Ne.ComponentBodyRow, Ee = Ne.ComponentTd, ne = Ne.getBodyComponentOperations, ot = A ? "div" : Re, qe = A ? "div" : Ee, Ve = he(he({ className: oe, key: G }, N), ye), Qe = $t(Re) ? Ve : he(he({}, Ve), { record: q, index: k });
  function De(ee, ue) {
    var Fe = T.icon, Ae = !!~Q.indexOf(ue), ke = { onClick: function(je) {
      je.stopPropagation(), a(ue);
    } };
    if (typeof Fe == "function") {
      var Oe = Fe(he({ expanded: Ae, record: ee }, ke));
      return l.isValidElement(Oe) ? l.cloneElement(Oe, he(he({}, ke), Oe.props)) : Oe;
    }
    return l.createElement("button", he({}, ke, { type: "button" }), Ae ? l.createElement(Bn, null) : l.createElement(Kn, null));
  }
  var Ze = r && l.createElement(qe, { className: le("expand-icon-cell") }, te && De(q, M)), $e = u && u.renderCell, et, Ie = l.createElement(ar, he({ value: M, onChange: function(ee) {
    return o(ee, q);
  }, checked: j, indeterminate: X }, E)), Le = l.createElement(Fr, he({ onChange: function() {
    return y(M, q);
  }, value: M, checked: j }, E));
  P === "checkbox" && (et = l.createElement(qe, { className: le("checkbox") }, $e ? $e(Ie, j, B) : Ie)), P === "radio" && (et = l.createElement(qe, { className: le("radio") }, $e ? $e(Le, j, B) : Le));
  var Ue = ne({ selectionNode: et, expandNode: Ze });
  return l.createElement(ot, he({}, Qe, { ref: t }), i.map(function(ee, ue) {
    var Fe, Ae, ke, Oe, je, Y, ce = v[ue], ve = F[ue];
    if (ee.$$isOperation) {
      var He = ee.node, Ye = true;
      ee.title === ut && (He = (ke = Ue.find(function(me) {
        return me.name === "selectionNode";
      })) === null || ke === void 0 ? void 0 : ke.node, Ye = false), ee.title === ct && (He = (Oe = Ue.find(function(me) {
        return me.name === "expandNode";
      })) === null || Oe === void 0 ? void 0 : Oe.node, Ye = false);
      var Se = typeof He == "function" ? He(q) : He;
      return l.cloneElement(Se, he(he({ key: ee.key || ue }, Se.props), { className: ie(Ye ? Z : "", (je = Se == null ? void 0 : Se.props) === null || je === void 0 ? void 0 : je.className, ve, (Fe = {}, Fe[f + "-col-first"] = ue === 0, Fe)), style: he(he(he({}, (Y = Se == null ? void 0 : Se.props) === null || Y === void 0 ? void 0 : Y.style), ee.fixed === "left" ? (Ae = {}, Ae[K ? "right" : "left"] = ce, Ae) : {}), { width: ee.width, minWidth: ee.width }) }));
    }
    return l.createElement(ba, { key: ue, prefixCls: f, virtualized: A, components: s, currentSorter: S.find(function(me) {
      return me.field === ee.key;
    }), placeholder: H, indentSize: $, stickyClassName: ve, stickyOffset: ce, InnerComponentTd: qe, column: ee, columnIndex: ue, record: q, trIndex: k, level: I, haveTreeData: be, recordHaveChildren: !!ge, rowKey: M, renderExpandIcon: De });
  }));
}
var Pr = g.forwardRef(Ea), Be = function() {
  return Be = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Be.apply(this, arguments);
}, Oa = g.forwardRef(function(e, t) {
  var n = e.record, r = e.index, a = e.virtualized, i = e.tbodyProps, s = i.prefixCls, o = i.columns, y = i.indentSize, f = y === void 0 ? 16 : y, w = i.childrenColumnName, x = w === void 0 ? "children" : w, p = i.expandProps, C = p === void 0 ? {} : p, u = i.rowSelection, b = i.hasFixedColumn, $ = i.tableViewWidth, S = i.getRowKey, A = i.expandedRowKeys, v = i.expandedRowRender, F;
  u && "type" in u ? F = u.type : u && !("type" in u) && (F = "checkbox");
  var D = v && function(k, P) {
    return v(de(k), P);
  }, H = function(k) {
    return pe(k[x]) && k[x].length;
  }, L = function(k, P) {
    return "rowExpandable" in C && typeof C.rowExpandable == "function" ? C.rowExpandable(k) : D && D(k, P) !== null;
  }, T = function(k, P) {
    var z = [], I = Be(Be({}, i), { type: F, shouldRowExpand: L });
    z.push(l.createElement(Pr, Be({ ref: t, key: S(k) }, I, { record: k, level: 0, index: P })));
    var K = function(B, N, M) {
      M === void 0 && (M = 0), pe(B) && B.length && B.forEach(function(U, G) {
        A.indexOf(N) !== -1 && (z.push(l.createElement(Pr, Be({}, I, { key: S(U), record: U, level: M + 1, index: G }))), H(U) && K(U[x], S(U), M + 1));
      });
    };
    return D || K(k[x], S(k)), z;
  }, h = S(n), Q = L(n, r) && A.indexOf(h) !== -1, _ = a ? "div" : "tr", q = a ? "div" : "td";
  return l.createElement(l.Fragment, { key: h }, T(n, r), Q && l.createElement(_, { key: h + "-expanded", className: ie(s + "-tr", s + "-expand-content") }, l.createElement(q, { className: ie(s + "-td", s + "-col-first"), style: { paddingLeft: f }, colSpan: o.length }, b ? l.createElement("div", { className: s + "-expand-fixed-row", style: { width: $ } }, D == null ? void 0 : D(n, r)) : D == null ? void 0 : D(n, r))));
});
function Na(e) {
  var t = e.data, n = e.columns, r = e.prefixCls, a = e.components, i = e.noDataElement, s = e.scroll, o = e.tableViewWidth, y = e.virtualized, f = e.virtualListProps, w = e.getRowKey, x = e.saveVirtualListRef, p = function(v) {
    var F;
    (F = e.saveRef) === null || F === void 0 || F.call(e, v);
  }, C = it(a).ComponentTbody, u = {}, b = {};
  s && (s.x && (typeof s.x == "number" || typeof s.x == "string") && (u = { width: s.x }), s.y && (typeof s.y == "number" || typeof s.y == "string") && (b = { maxHeight: s.y }));
  var $ = { className: r + "-no-data" };
  o && ($.className = r + "-no-data " + r + "-expand-fixed-row", $.style = { width: o });
  var S = l.createElement("tr", { className: ie(r + "-tr", r + "-empty-row") }, l.createElement("td", { className: ie(r + "-td", r + "-col-first"), colSpan: n.length }, l.createElement("div", Be({}, $), i))), A = function(v, F) {
    var D;
    return l.createElement(Oa, { key: (D = w(v)) !== null && D !== void 0 ? D : F, record: v, index: F, virtualized: y, tbodyProps: e });
  };
  return y ? t.length > 0 ? l.createElement(Tn, Be({ data: t, height: b.maxHeight, isStaticItemHeight: false, outerStyle: Be(Be({}, u), { minWidth: "100%", overflow: "visible" }), innerStyle: { right: "auto", minWidth: "100%" }, className: r + "-body", ref: function(v) {
    x(v), p(v == null ? void 0 : v.dom);
  }, itemKey: w }, f), A) : l.createElement("div", { className: r + "-body", ref: p }, l.createElement("table", null, l.createElement("tbody", null, S))) : l.createElement(C, { ref: p }, t.length > 0 ? t.map(A) : S);
}
var jr = g.createContext({});
function Ra(e) {
  var t = e.summary, n = e.data, r = e.prefixCls, a = e.columns, i = e.stickyOffsets, s = e.stickyClassNames;
  return l.createElement("tfoot", { className: r + "-tfoot" }, l.createElement(jr.Provider, { value: { columns: a, stickyOffsets: i, stickyClassNames: s, prefixCls: r } }, t(de(n))));
}
function Ut(e) {
  return typeof e == "number" || typeof e == "string" ? { width: e } : {};
}
function Pt(e) {
  var t = g.useRef(), n = e.prefixCls, r = e.columns, a = e.columnWidths, i = e.producer, s = e.expandedRowKeys, o = e.data, y = e.onSetColumnWidths;
  g.useEffect(function() {
    if (i && t.current) {
      var w = Array.from(t.current.querySelectorAll("col") || []).filter(function(p) {
        return !p.classList.contains(n + "-expand-icon-col") && !p.classList.contains(n + "-selection-col");
      }), x = w.map(function(p) {
        var C = p.getBoundingClientRect().width;
        return C;
      });
      y(x);
    }
  }, [i, y, n, s, o, r]);
  var f = 0;
  return l.createElement("colgroup", { ref: t }, r.map(function(w, x) {
    var p;
    if (w.title === ct) return l.createElement("col", { key: ct, className: n + "-expand-icon-col", style: Ut(w.width) });
    if (w.title === ut) return l.createElement("col", { key: ut, className: n + "-selection-col", style: Ut(w.width) });
    var C;
    return w.width ? C = w.width : !i && a && (C = a[f]), f++, l.createElement("col", { key: (p = w.key) !== null && p !== void 0 ? p : x, style: Ut(C) });
  }));
}
var ka = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
};
function Pa(e, t, n) {
  var r = e.defaultExpandedRowKeys, a = e.defaultExpandAllRows, i = e.expandedRowRender, s = e.onExpand, o = e.onExpandedRowsChange, y = e.childrenColumnName, f = y === void 0 ? "children" : y, w = e.expandProps, x = ka(g.useState($()), 2), p = x[0], C = x[1], u = e.expandedRowKeys || p, b = g.useRef(true);
  g.useEffect(function() {
    if (b.current) {
      b.current = false;
      return;
    }
    a && t && t.length > 0 && C($());
  }, [t == null ? void 0 : t.length, a]);
  function $() {
    var v = [];
    return e.expandedRowKeys ? v = e.expandedRowKeys : r ? v = r : a && (v = t.map(function(F, D) {
      var H = de(F);
      return w && "rowExpandable" in w && typeof w.rowExpandable == "function" ? w.rowExpandable(H) && n(F) : typeof i == "function" ? i(H, D) && n(F) : Zt(F, f) && n(F);
    }).filter(function(F) {
      return F;
    })), v;
  }
  function S(v) {
    var F = u.indexOf(v) === -1, D = F ? u.concat(v) : u.filter(function(L) {
      return v !== L;
    }), H = t.filter(function(L) {
      return D.indexOf(n(L)) !== -1;
    }).map(function(L) {
      return n(L);
    });
    C(H), A(v, F), o && o(H);
  }
  function A(v, F) {
    s && s(de(t.find(function(D) {
      return n(D) === v;
    })), F);
  }
  return [u, S];
}
var rr = function() {
  return rr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, rr.apply(this, arguments);
}, It = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Ta = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function Tr(e) {
  return Ta([], It(new Set(e)), false);
}
function Ia(e, t, n, r) {
  var a = e.rowSelection, i = e.childrenColumnName, s = a == null ? void 0 : a.selectedRowKeys, o = a == null ? void 0 : a.onSelectAll, y = a == null ? void 0 : a.onSelect, f = a == null ? void 0 : a.onChange, w = a == null ? void 0 : a.pureKeys, x = typeof (a == null ? void 0 : a.checkStrictly) == "boolean" ? !a.checkStrictly : false, p = a == null ? void 0 : a.preserveSelectedRowKeys;
  function C() {
    var N = [], M = [], U = function(j) {
      pe(j) && j.length && j.forEach(function(O) {
        var X = r(O), oe = a && typeof a.checkboxProps == "function" ? a.checkboxProps(de(O)) : {};
        oe.disabled || N.push(X), Zt(O, e.childrenColumnName) && U(O[e.childrenColumnName]);
      });
    };
    U(t);
    var G = function(j, O) {
      pe(j) && j.length && j.forEach(function(X) {
        if (O && x && (X.__INTERNAL_PARENT = O), M.push(X), Zt(X, e.childrenColumnName)) {
          var oe = rr({}, X);
          G(X[e.childrenColumnName], oe);
        }
      });
    };
    return G(n, void 0), { allSelectedRowKeys: N, flattenData: M };
  }
  var u = C(), b = u.allSelectedRowKeys, $ = u.flattenData, S = It(g.useState([]), 2), A = S[0], v = S[1], F = It(g.useState([]), 2), D = F[0], H = F[1], L = xa($, Tr(s || A), r, i, x), T = x && !s ? A : L.selectedRowKeys, h = x && !s ? D : L.indeterminateKeys, Q = It(g.useState(w ? [] : k(T)), 2), _ = Q[0], q = Q[1];
  function k(N, M) {
    var U = M ? _.concat($) : $, G = new Map(U.map(function(j) {
      return [r(j), j];
    }));
    return N.map(function(j) {
      return G.get(j);
    }).filter(function(j) {
      return j;
    });
  }
  var P = new Set($.map(function(N) {
    return r(N);
  }));
  function z(N) {
    return p ? N : N.filter(function(M) {
      return P.has(M);
    });
  }
  function I(N) {
    var M = [], U = [];
    if (N) M = z(Tr(T.concat(b)));
    else {
      var G = new Set(b);
      M = z(T.filter(function(O) {
        return !G.has(O);
      }));
    }
    w || (U = k(M, true));
    var j = de(U);
    v(M), q(U), H([]), f && f(M, j), o && o(N, j);
  }
  function K(N, M) {
    var U = ga(M, N, T, D, r, i, x), G = U.selectedRowKeys, j = U.indeterminateKeys, O = z(G), X = k(O, true), oe = de(X);
    v(O), q(X), H(j), y && y(N, de(M), oe), f && f(O, oe);
  }
  function B(N, M) {
    var U = [$.find(function(j) {
      return r(j) === N;
    })], G = de(U);
    v([N]), y && y(true, de(M), G), f && f([N], G);
  }
  return { selectedRowKeys: T, indeterminateKeys: h, onCheckAll: I, onCheck: K, onCheckRadio: B, setSelectedRowKeys: v, allSelectedRowKeys: b, flattenData: $ };
}
var Fa = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Aa = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function Da(e) {
  var t = e.map(function(a) {
    return mt(a.width);
  }), n = e.map(function(a) {
    return a.fixed;
  }), r = g.useMemo(function() {
    return e.map(function(a) {
      var i = 0;
      return a.fixed === "left" && e.some(function(s) {
        if (s.fixed === "left") {
          if (s.key === a.key) return true;
          var o = s.$$isOperation ? mt(s.width) || 40 : mt(s.width);
          return i += o, false;
        }
        return false;
      }), a.fixed === "right" && Aa([], Fa(e), false).reverse().some(function(s) {
        if (s.fixed === "right") {
          if (s.key === a.key) return true;
          var o = s.$$isOperation ? mt(s.width) || 40 : mt(s.width);
          return i += o, false;
        }
        return false;
      }), i;
    });
  }, [t.join("-"), n.join("-")]);
  return r;
}
function $a(e, t, n) {
  var r = t.map(function(o) {
    return o.fixed;
  });
  function a(o, y) {
    var f;
    return ie((f = {}, f[n + "-col-fixed-left"] = o.fixed === "left", f[n + "-col-fixed-right"] = o.fixed === "right", f[n + "-col-fixed-left-last"] = o.fixed === "left" && (ae(t[y + 1]) ? t[y + 1].fixed !== "left" : true), f[n + "-col-fixed-right-first"] = o.fixed === "right" && (ae(t[y - 1]) ? t[y - 1].fixed !== "right" : true), f));
  }
  var i = g.useMemo(function() {
    return t.map(function(o, y) {
      return a(o, y);
    });
  }, [r.join("-")]), s = g.useMemo(function() {
    return e.map(function(o) {
      return o.map(function(y, f) {
        var w = f, x = y.$$columnIndex;
        return Array.isArray(x) && x.length === 2 ? w = y.fixed === "right" ? x[0] : x[1] : typeof x == "number" && (w = x), a(y, w);
      });
    });
  }, [e.map(function(o) {
    return "|" + o.map(function(y) {
      return y.fixed || "undefined";
    }).join("-") + "|";
  }).join("_")]);
  return [s, i];
}
var xe = function() {
  return xe = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, xe.apply(this, arguments);
}, ja = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Ha = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function Ir(e, t) {
  var n = [];
  function r(a) {
    a && a.length > 0 && a.forEach(function(i) {
      i[t] ? r(i[t]) : n.push(xe(xe({}, i), { key: i.key || i.dataIndex }));
    });
  }
  return r(e), n;
}
function Hr(e, t) {
  var n = 0;
  return e && e.length > 0 && e.forEach(function(r) {
    var a = Hr(r[t], t) + 1;
    n = Math.max(a, n);
  }), n;
}
function Ma(e) {
  var t = e.components, n = e.rowSelection, r = e.expandedRowRender, a = e.expandProps, i = a === void 0 ? {} : a, s = e.columns, o = e.childrenColumnName, y = g.useMemo(function() {
    return s || [];
  }, [s]), f = g.useMemo(function() {
    return Ir(y, o);
  }, [y, o]), w = n && n.type === "checkbox" || n && !("type" in n), x = n && n.type === "radio", p = i.width, C = !!r, u = w || x, b = it(t), $ = b.getHeaderComponentOperations, S = b.getBodyComponentOperations, A = g.useMemo(function() {
    return $({ selectionNode: u ? "holder_node" : "", expandNode: C ? "holder_node" : "" });
  }, [u, C, $]), v = g.useMemo(function() {
    return S({ selectionNode: u ? "holder_node" : "", expandNode: C ? "holder_node" : "" });
  }, [u, C, S]), F = n && n.fixed, D = n && n.columnWidth, H = g.useCallback(function(Q, _, q) {
    var k = {}, P = [];
    Q.forEach(function(K, B) {
      var N = xe({}, K);
      (!("key" in K) || typeof K.key > "u") && (N.key = N.dataIndex || B), B === 0 ? (N.$$isFirstColumn = true, N.fixed === "left" && (k.fixed = N.fixed)) : N.$$isFirstColumn = false, P.push(N);
    });
    var z = C && { key: ct, title: ct, width: p, $$isOperation: true }, I = u && { key: ut, title: ut, width: D, $$isOperation: true };
    return F && (k.fixed = "left"), (typeof q != "number" || q === 0) && Ha([], ja(_), false).reverse().forEach(function(K, B) {
      if (K.node) {
        var N = A.filter(function(M) {
          return M.node;
        }).length - B - 1;
        K.name === "expandNode" ? P.unshift(xe(xe(xe({}, z), k), { $$columnIndex: N })) : K.name === "selectionNode" ? P.unshift(xe(xe(xe({}, I), k), { $$columnIndex: N })) : P.unshift(xe(xe(xe({}, K), k), { title: K.name, key: K.name, $$isOperation: true, width: K.width || 40, $$columnIndex: N }));
      }
    }), P;
  }, [p, C, u, D, F, A]), L = g.useMemo(function() {
    return H(f, v);
  }, [f, H, v]), T = g.useMemo(function() {
    return Hr(y, o);
  }, [y, o]), h = g.useMemo(function() {
    var Q = Array.isArray(A) ? A.filter(function(z) {
      return z.node;
    }).length : 0;
    if (T === 1) {
      var _ = y.map(function(z, I) {
        return xe(xe({}, z), { $$columnIndex: I + Q });
      });
      return [H(_, A, 0)];
    }
    var q = Q, k = [], P = function(z, I) {
      I === void 0 && (I = 0), k[I] = k[I] || [], z.forEach(function(K) {
        var B = xe({}, K);
        B[o] ? (B.colSpan = Ir(K[o], o).length, B.$$columnIndex = [q], k[I].push(B), P(B[o], I + 1), B.$$columnIndex.push(q - 1)) : (B.rowSpan = T - I, B.$$columnIndex = q++, k[I].push(B));
      }), k[I] = H(k[I], A, I);
    };
    return P(y), k;
  }, [y, o, T, H, A]);
  return [h, L];
}
var Tt = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Yt = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function Ka(e, t) {
  var n = Tt(g.useState(t), 2), r = n[0], a = n[1], i = Tt(g.useState({}), 2), s = i[0], o = i[1], y = g.useRef(e), f = g.useCallback(function(p) {
    var C = p.field, u = p.direction;
    return r.find(function(b) {
      return b.field === C;
    }) ? u ? r.map(function(b) {
      return b.field === C ? p : b;
    }) : r.filter(function(b) {
      return b.field !== C;
    }) : u ? !Je(p.priority) || r.find(function(b) {
      return !Je(b.priority);
    }) ? [p] : Yt(Yt([], Tt(r), false), [p], false) : Yt([], Tt(r), false);
  }, [r]), w = g.useCallback(function(p) {
    var C = p.filter(function(b) {
      return "sortOrder" in b && typeof b.sortOrder < "u" && b.sortOrder !== null;
    }), u = [];
    return C.forEach(function(b) {
      var $ = tr(b.sorter), S = b.sortOrder;
      if (S) {
        var A = { field: b.key, direction: S, sorterFn: er(b.sorter), priority: $ };
        Je($) ? u.every(function(v) {
          return Je(v.priority) || !v.direction;
        }) && u.push(A) : u.every(function(v) {
          return !v.direction;
        }) ? u.push(A) : u = [A];
      }
    }), u;
  }, []), x = g.useCallback(function(p, C) {
    var u = w(e);
    u.length || (a(C), o(p));
  }, [e, w, a, o]);
  return Xt(function() {
    var p = y.current, C = w(p), u = w(e), b = C.map(function(v) {
      return v.field;
    }), $ = u.map(function(v) {
      return v.field;
    }), S = u.filter(function(v) {
      var F = C.find(function(D) {
        var H = D.field, L = D.direction;
        return v.field === H && v.direction !== L;
      });
      return F ? true : !b.includes(v.field);
    }), A = C.filter(function(v) {
      return !$.includes(v.field);
    });
    (S && S.length || A && A.length) && (a(u), o({})), y.current = e;
  }, [e, w, f, o, a]), { currentSorter: s, activeSorters: r, getNextActiveSorters: f, updateStateSorters: x };
}
var se = function() {
  return se = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, se.apply(this, arguments);
}, We = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}, Ba = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, La = [], za = [], Wa = { showHeader: true, border: true, hover: true, rowKey: "key", pagePosition: "br", childrenColumnName: "children", indentSize: 15, showSorterTooltip: true };
function qa(e, t) {
  var n, r, a, i, s = g.useContext(at), o = s.getPrefixCls, y = s.loadingElement, f = s.size, w = s.tablePagination, x = s.renderEmpty, p = s.componentConfig, C = s.rtl, u = Gt(e, Wa, p == null ? void 0 : p.Table), b = Gt(ae(e == null ? void 0 : e.pagination) ? e == null ? void 0 : e.pagination : {}, ae((a = p == null ? void 0 : p.Table) === null || a === void 0 ? void 0 : a.pagination) ? (i = p == null ? void 0 : p.Table) === null || i === void 0 ? void 0 : i.pagination : {}, w || {}), $ = u.style, S = u.className, A = u.components, v = u.border, F = u.borderCell, D = u.columns, H = D === void 0 ? za : D, L = u.data, T = L === void 0 ? La : L, h = u.scroll, Q = u.noDataElement, _ = u.showHeader, q = u.stripe, k = u.hover, P = u.pagination, z = u.onChange, I = u.pagePosition, K = u.childrenColumnName, B = u.indentSize, N = u.rowSelection, M = u.tableLayoutFixed, U = u.footer, G = u.virtualized, j = u.renderPagination, O = u.summary, X = u.rowKey, oe = g.useMemo(function() {
    return ha(T, K);
  }, [T, K]), E = o("table"), Z = u.size || (["default", "middle", "small", "mini"].indexOf(f) > -1 ? f : "default"), le = g.useRef(null), re = g.useRef(null), Ce = g.useRef(null), te = g.useRef(null), ge = g.useRef(null), be = g.useRef(null), _e = g.useRef(null), we = g.useRef(0), ye = g.useRef([]), Ne = g.useRef(false), Re = We(Ma(u), 2), Ee = Re[0], ne = Re[1], ot = qr(), qe = ot.currentFilters, Ve = ot.defaultSorters, Qe = We(g.useState(1), 2), De = Qe[0], Ze = Qe[1], $e = We(g.useState(b.pageSize || b.defaultPageSize || 10), 2), et = $e[0], Ie = $e[1], Le = We(g.useState(qe), 2), Ue = Le[0], ee = Le[1], ue = We(g.useState(0), 2), Fe = ue[0], Ae = ue[1], ke = We(g.useState([]), 2), Oe = ke[0], je = ke[1], Y = Da(ne), ce = We($a(Ee, ne, E), 2), ve = ce[0], He = ce[1], Ye = Ka(ne, Ve), Se = Ye.currentSorter, me = Ye.activeSorters, Br = Ye.getNextActiveSorters, Lr = Ye.updateStateSorters, Mt = it(A), ht = Mt.ComponentTable, zr = Mt.ComponentBodyWrapper, Wr = Mt.ComponentHeaderWrapper, Kt = g.useMemo(function() {
    return typeof X == "function" ? function(d) {
      return X(de(d));
    } : function(d) {
      return d[X];
    };
  }, [X]);
  function qr() {
    var d = {}, c = [];
    return ne.forEach(function(m) {
      var R = m.key;
      m.defaultFilters && (d[R] = m.defaultFilters), m.filteredValue && (d[R] = m.filteredValue);
      var V = "defaultSortOrder" in m && typeof m.defaultSortOrder < "u" && m.defaultSortOrder !== null, W = "sortOrder" in m && typeof m.sortOrder < "u" && m.sortOrder !== null;
      if (V || W) {
        var J = tr(m.sorter), fe = W ? m.sortOrder : m.defaultSortOrder;
        if (fe) {
          var Xe = { field: R, direction: fe, sorterFn: er(m.sorter), priority: J };
          Je(J) ? c.every(function(Me) {
            return Je(Me.priority) || !Me.direction;
          }) && c.push(Xe) : c.every(function(Me) {
            return !Me.direction;
          }) ? c.push(Xe) : c = [Xe];
        }
      }
    }), { currentFilters: d, defaultSorters: c };
  }
  var gt = g.useMemo(function() {
    var d = ne.filter(function(m) {
      return "filteredValue" in m;
    }), c = {};
    return d.length && d.forEach(function(m, R) {
      var V = m.key || m.dataIndex || R;
      V !== void 0 && (c[V] = m.filteredValue);
    }), c;
  }, [ne]), tt = g.useMemo(function() {
    return Object.keys(gt).length ? gt : Ue;
  }, [Ue, gt]);
  function Vr(d, c) {
    var m = mr(c);
    if (m) {
      var R = { direction: d, field: c, sorterFn: er(m.sorter), priority: tr(m.sorter) }, V = Br(R);
      Lr(R, V);
      var W = St(R, V, tt), J = ft(W);
      z && z(st(W), R, tt, { currentData: de(J), currentAllData: de(W), action: "sort" });
    }
  }
  function Ur(d) {
    var c = function(R, V) {
      return function(W, J) {
        var fe = R(W, J);
        return V === "descend" ? -fe : fe;
      };
    }, m = Ba([], We(d), false);
    return m.sort(function(R, V) {
      return V.priority - R.priority;
    }), function(R, V) {
      for (var W = 0, J = m.length; W < J; W++) {
        var fe = m[W], Xe = fe.sorterFn, Me = fe.direction;
        if (!(typeof Xe != "function" || typeof Me > "u" || Me === null)) {
          var _r = c(Xe, Me)(R, V);
          if (_r !== 0) return _r;
        }
      }
      return 0;
    };
  }
  function Yr(d, c) {
    var m, R = se(se({}, tt), (m = {}, m[d.dataIndex] = c, m)), V = se(se({}, R), gt);
    if (pe(c) && c.length) {
      ee(V);
      var W = St(Se, me, R), J = ft(W);
      z && z(st(W), me.length === 1 ? me[0] : me, R, { currentData: de(J), currentAllData: de(W), action: "filter" });
    } else pe(c) && !c.length && dr(d);
  }
  function dr(d) {
    var c = d.dataIndex, m = se({}, tt);
    delete m[c], ee(m);
    var R = St(Se, me, m), V = ft(R);
    z && z(st(R), me.length === 1 ? me[0] : me, m, { currentData: de(V), currentAllData: de(R), action: "filter" });
  }
  var xt = !!ne.find(function(d) {
    return d.fixed === "left";
  }), Ct = !!ne.find(function(d) {
    return d.fixed === "right";
  }), wt = xt || Ct;
  function St(d, c, m) {
    var R = (oe || []).slice();
    Object.keys(m).forEach(function(W) {
      if (m[W] && m[W].length) {
        var J = mr(W);
        J && typeof J.onFilter == "function" && (R = R.filter(function(fe) {
          return m[W].reduce(function(Xe, Me) {
            return Xe || J.onFilter(Me, fe);
          }, false);
        }));
      }
    });
    var V = function(W) {
      return W.slice().sort(Ur(c)).map(function(J) {
        var fe;
        return pe(J[K]) ? se(se({}, J), (fe = {}, fe[K] = V(J[K]), fe)) : J;
      });
    };
    return d.direction && typeof d.sorterFn == "function" || c.length ? V(R) : R;
  }
  var lt = St(Se, me, tt);
  function st(d) {
    d === void 0 && (d = lt);
    var c = b.pageSize || et || 10, m = Z === "middle" ? "default" : Z, R = "top";
    I === "tl" || I === "bl" ? R = "bottom" : R = "top";
    var V = pe(d) ? d.length : 0, W = Math.ceil(V / c) < De ? 1 : De;
    W !== De && Ze(W);
    var J = { size: m, total: V, pageSize: c, current: W, selectProps: { triggerProps: { position: R } } };
    return typeof P == "object" && P.selectProps && (J.selectProps = se(se({}, J.selectProps), P.selectProps)), ae(P) && (J = se(se({}, J), P)), ae(b) && (J = se(se({}, J), b)), J.onChange = an, J;
  }
  var bt = st(), rt = ft();
  function ft(d, c) {
    d === void 0 && (d = lt), c === void 0 && (c = bt);
    var m = c.current, R = m === void 0 ? 0 : m, V = c.pageSize, W = V === void 0 ? 10 : V;
    return P === false || ae(P) && T.length <= W ? d : d.slice((R - 1) * W, R * W);
  }
  var ur = In(cr, 100), ze = !!(h && h.y), vt = O == null ? void 0 : O(de(lt)), Bt = O && l.isValidElement(vt) && vt.props.fixed, Gr = ze && Bt;
  Fn(function() {
    cr(), Nt(window, "resize", ur);
    var d = le.current, c = re.current, m = te.current;
    c && Nt(c, "scroll", dt);
    var R = d && d.parentNode;
    return d && R && Nt(R, "scroll", dt), m && Nt(m, "scroll", dt), function() {
      Rt(window, "resize", ur), c && Rt(c, "scroll", dt), R && Rt(R, "scroll", dt), m && Rt(m, "scroll", dt);
    };
  }, [xt, Ct, h == null ? void 0 : h.x, h == null ? void 0 : h.y, ne.length, T, G, rt.length === 0]), Xt(function() {
    var d = st(T), c = d.total, m = d.pageSize, R = Math.ceil(c / m);
    R < De && Ze(1);
  }, [T == null ? void 0 : T.length]), Xt(function() {
    _t();
  }, [T, xt, Ct, C]), g.useImperativeHandle(t, function() {
    return { getRootDomElement: Lt, scrollIntoView: function(d) {
      be.current && be.current.scrollTo({ key: d });
    }, getRootDOMNode: Lt };
  });
  function Lt() {
    return ge.current;
  }
  function cr() {
    _t();
    var d = Lt();
    if (d && (wt || h && h.x)) {
      var c = d.querySelector("." + E + "-body") || d.querySelector("." + E + "-content-inner"), m = c.getBoundingClientRect().width;
      Ae(m);
    }
  }
  var Xr = g.useCallback(An(function() {
    var d = ge.current, c = ze ? re.current : _e.current && _e.current.parentNode;
    if (c) {
      var m = C ? -c.scrollLeft : c.scrollLeft, R = m === 0, V = m + 1 >= c.children[0].getBoundingClientRect().width - c.getBoundingClientRect().width;
      R && V ? Et(d.classList, E + "-scroll-position-both") : R ? Et(d.classList, E + "-scroll-position-" + (C ? "right" : "left")) : V ? Et(d.classList, E + "-scroll-position-" + (C ? "left" : "right")) : Et(d.classList, E + "-scroll-position-middle");
    } else d && vr(d.classList);
  }, 100), [ge.current, re.current, ze, C]);
  function _t() {
    if (wt || h && ae(h) && h.x) {
      var d = ge.current;
      d && (xt && fr(d.classList, E + "-has-fixed-col-left"), Ct && fr(d.classList, E + "-has-fixed-col-right")), Xr();
    }
  }
  function fr(d, c) {
    d.contains(c) || d.add(c);
  }
  function vr(d) {
    d.remove(E + "-scroll-position-both"), d.remove(E + "-scroll-position-left"), d.remove(E + "-scroll-position-right"), d.remove(E + "-scroll-position-middle");
  }
  function Et(d, c) {
    d.contains(c) || (vr(d), d.add(c));
  }
  var Ge = Ia(u, rt, oe, Kt), zt = Ge.selectedRowKeys, Jr = Ge.indeterminateKeys, Qr = Ge.onCheckAll, Zr = Ge.onCheck, en = Ge.onCheckRadio, tn = Ge.setSelectedRowKeys, rn = Ge.allSelectedRowKeys, nn = Ge.flattenData;
  function mr(d) {
    return ne.find(function(c, m) {
      return typeof c.key < "u" ? typeof c.key == "number" && typeof d == "string" ? c.key.toString() === d : c.key === d : typeof c.dataIndex < "u" ? c.dataIndex === d : typeof d == "number" ? m === d : false;
    });
  }
  function an(d, c) {
    Ze(d), Ie(c), d !== De && on(), N && !N.checkCrossPage && zt.length && (tn([]), N.onChange && N.onChange([], []));
    var m = se(se({}, st()), { current: d, pageSize: c });
    z && z(m, me.length === 1 ? me[0] : me, tt, { currentData: de(ft(lt, m)), currentAllData: de(lt), action: "paginate" }), b.onChange && b.onChange(d, c);
  }
  function on() {
    var d = re.current;
    if (d) {
      var c = re.current.scrollTop, m = new Ht({ from: { scrollTop: c }, to: { scrollTop: 0 }, easing: "quintInOut", duration: 300, onUpdate: function(R) {
        re.current && (re.current.scrollTop = R.scrollTop);
      } });
      m.start();
    }
  }
  function dt(d) {
    var c = d.target, m = re.current, R = le.current && le.current.parentNode, V = te.current, W = c;
    if (ye.current.includes(W)) {
      ye.current = ye.current.filter(function(fe) {
        return fe !== W;
      }), we.current = W.scrollLeft;
      return;
    }
    if (W.scrollLeft !== we.current) {
      var J = [R, m, V].filter(function(fe) {
        return !!fe && fe !== W;
      });
      ye.current = J, J.forEach(function(fe) {
        fe.scrollLeft = W.scrollLeft;
      }), _t();
    }
    we.current = W.scrollLeft;
  }
  function ln(d) {
    var c = d.target, m = _e.current;
    c.scrollLeft !== we.current && (m.scrollLeft = c.scrollLeft, _t()), we.current = d.target.scrollLeft;
  }
  var pr = We(Pa(u, nn, Kt), 2), yr = pr[0], sn = pr[1], hr = {}, Wt = {};
  h && (h.x && (typeof h.x == "number" || typeof h.x == "string") && (Wt = { width: h.x }), h.y && (typeof h.y == "number" || typeof h.y == "string") && (hr = { maxHeight: h.y }));
  function dn() {
    var d = le.current && le.current.parentNode, c = pa(d);
    c && c > 0 && (d.style.marginBottom = "-" + c + "px", d.style.paddingBottom = "0px", te.current && (te.current.style.marginBottom = "-" + c + "px", te.current.style.paddingBottom = "0px")), setTimeout(function() {
      var m = re.current, R = ya(m);
      R ? (Ne.current = true, d && (d.style.overflowY = "scroll"), te.current && (te.current.style.overflowY = "scroll")) : d && Ne.current && (Ne.current = false, d.style.overflowY = "auto", te.current && (te.current.style.overflowY = "auto"));
    });
  }
  var gr = l.createElement(ma, se({}, u, { activeSorters: me, currentSorter: Se, selectedRowKeys: zt, currentFilters: tt, onCheckAll: Qr, onSort: Vr, data: rt, onHandleFilter: Yr, onHandleFilterReset: dr, prefixCls: E, allSelectedRowKeys: rn, groupColumns: Ee, stickyOffsets: Y, groupStickyClassNames: ve }));
  function un() {
    var d = ae(h) && h.x === "max-content";
    return ze || G ? l.createElement(Wr, { className: E + "-header" }, l.createElement(ht, { ref: le, style: d ? {} : Wt }, l.createElement(Pt, { columns: ne, prefixCls: E, producer: false, columnWidths: d && h.y ? Oe : null }), gr)) : gr;
  }
  var xr = vt && l.createElement(Ra, { prefixCls: E, summary: O, data: rt, columns: ne, stickyOffsets: Y, stickyClassNames: He }), Cr = l.createElement(Na, se({}, u, { saveRef: function(d) {
    Ce.current = d, G && rt.length === 0 && (re.current = d);
  }, selectedRowKeys: zt, indeterminateKeys: Jr, expandedRowKeys: yr, onCheck: Zr, onCheckRadio: en, onClickExpandBtn: sn, columns: ne, data: rt, prefixCls: E, hasFixedColumn: wt, tableViewWidth: Fe, indentSize: B, noDataElement: Q || x("Table"), activeSorters: me, currentSorter: Se, stickyOffsets: Y, stickyClassNames: He, getRowKey: Kt, saveVirtualListRef: function(d) {
    G && (be.current = d, re.current = d == null ? void 0 : d.dom);
  } })), wr = !G && !Gr ? l.createElement(l.Fragment, null, Cr, xr) : Cr;
  function cn() {
    var d = ae(h) && h.x === "max-content" && !!h.y && pe(T) && T.length > 0;
    return l.createElement(jn, { onResize: dn, getTargetDOMNode: function() {
      return re.current || Ce.current;
    } }, ze && !G ? l.createElement(zr, { ref: re, className: E + "-body", style: hr }, l.createElement(ht, { style: Wt }, l.createElement(Pt, { columns: ne, prefixCls: E, producer: d, onSetColumnWidths: je, expandedRowKeys: yr, data: T }), wr)) : wr);
  }
  function fn() {
    var d = {};
    h && ae(h) && h.x && (d = { width: h.x });
    var c = l.createElement("div", { className: E + "-tfoot", ref: te }, l.createElement(ht, { style: d }, l.createElement(Pt, { columns: ne, prefixCls: E }), xr)), m = vt && ze && Bt === "top", R = vt && (ze && Bt === "bottom" || G), V = l.createElement(l.Fragment, null, _ ? un() : null, m && c, cn(), R && c);
    return l.createElement(l.Fragment, null, l.createElement("div", { className: E + "-container" }, l.createElement("div", { className: E + "-content-scroll" }, l.createElement("div", { className: E + "-content-inner", onScroll: ze ? void 0 : ln }, ze || G ? V : l.createElement(ht, { ref: _e, style: d }, l.createElement(Pt, { prefixCls: E, columns: ne }), V)))), typeof U == "function" && l.createElement("div", { className: E + "-footer" }, U(rt)));
  }
  if (!H.length) return null;
  var vn = ae(v) ? v.wrapper : v, qt = ae(v) ? v.cell : F, mn = ae(v) ? v.cell || v.headerCell : F, pn = ae(v) ? v.cell || v.bodyCell : F, yn = ie(E, E + "-size-" + Z, (n = {}, n[E + "-border"] = vn, n[E + "-border-cell"] = qt, n[E + "-border-header-cell"] = !qt && mn, n[E + "-border-body-cell"] = !qt && pn, n[E + "-stripe"] = q, n[E + "-hover"] = k, n[E + "-type-radio"] = N && N.type === "radio", n[E + "-layout-fixed"] = M || h && (h.x || h.y) || H.find(function(d) {
    return d.ellipsis;
  }), n[E + "-fixed-column"] = wt, n[E + "-virtualized"] = G, n[E + "-rtl"] = C, n), S), Vt = I === "tl" || I === "tr" || I === "topCenter", hn = ie(E + "-pagination", (r = {}, r[E + "-pagination-left"] = I === "tl" || I === "bl", r[E + "-pagination-center"] = I === "topCenter" || I === "bottomCenter", r[E + "-pagination-top"] = Vt, r)), Ot = u.loading;
  typeof Ot == "boolean" && (Ot = { loading: Ot });
  var gn = typeof j == "function", Sr = gn ? j(l.createElement(Or, se({}, bt))) : l.createElement("div", { className: hn }, l.createElement(Or, se({}, bt))), br = P !== false && (lt.length !== 0 || bt.total > 0);
  return l.createElement("div", se({ ref: ge, style: $, className: yn }, Dn(u)), l.createElement($n, se({ element: y }, Ot), br && Vt && Sr, fn(), br && !Vt && Sr));
}
var Mr = g.forwardRef(qa);
Mr.displayName = "Table";
var nt = function() {
  return nt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, nt.apply(this, arguments);
}, Va = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Ua(e) {
  var t = g.useContext(at).rtl, n = g.useContext(jr), r = n.columns, a = n.stickyOffsets, i = n.stickyClassNames, s = n.prefixCls, o = e.children, y = Va(e, ["children"]), f = l.Children.map(o, function(x) {
    return x.props.colSpan || 1;
  }), w = l.Children.map(o, function(x, p) {
    var C, u, b, $, S = x, A = Ft(S, "type.__ARCO_TABLE_SUMMARY_CELL__") || Ft(S, "props.$$ArcoTableSummaryCell"), v = (b = S == null ? void 0 : S.props) === null || b === void 0 ? void 0 : b.style, F = ($ = S == null ? void 0 : S.props) === null || $ === void 0 ? void 0 : $.className, D = f.slice(0, p).reduce(function(h, Q) {
      return h + Q;
    }, 0), H = D, L = r[H].fixed === "left" ? (C = {}, C[t ? "right" : "left"] = a[H], C) : r[H].fixed === "right" ? (u = {}, u[t ? "left" : "right"] = a[H], u) : {}, T = r[H].fixed === "left" || r[H].fixed === "right" ? i[H] : "";
    return A ? l.cloneElement(S, nt(nt({}, S.props), { className: ie(s + "-td", T, F), style: nt(nt({}, v), L) })) : x;
  });
  return l.createElement("tr", nt({}, y), w);
}
var nr = function() {
  return nr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, nr.apply(this, arguments);
}, Ya = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Kr(e) {
  var t = e.children, n = Ya(e, ["children"]);
  return l.createElement("td", nr({}, Hn(n, ["$$ArcoTableSummaryCell"])), t);
}
Kr.__ARCO_TABLE_SUMMARY_CELL__ = true;
function sr(e) {
  return e.children;
}
sr.Row = Ua;
sr.Cell = Kr;
var Ga = Mr;
Ga.Summary = sr;
export { Ht as T, Ga as a };
