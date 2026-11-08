import { R as o, r as u, k as T, _ as K, l as W, C as Ze, u as Be, d as me, s as ze, Q as He, Z as n, D as k, a4 as he, x as Ve, a9 as ve, a2 as Ne } from "./index-DOWuBEUh.js";
import { c as Le, a as Te, b as Ke } from "./caseSquare-Bx8x_2A7.js";
import { P as We } from "./pagination-DNEzLAQJ.js";
function ee(e, r) {
  return r === void 0 && (r = 15), +parseFloat(Number(e).toPrecision(r));
}
function j(e) {
  var r = e.toString().split(/[eE]/), a = (r[0].split(".")[1] || "").length - +(r[1] || 0);
  return a > 0 ? a : 0;
}
function H(e) {
  if (e.toString().indexOf("e") === -1) return Number(e.toString().replace(".", ""));
  var r = j(e);
  return r > 0 ? ee(Number(e) * Math.pow(10, r)) : Number(e);
}
function U(e) {
  Se && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function $(e) {
  return function() {
    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
    var t = r[0], s = r.slice(1);
    return s.reduce(function(f, c) {
      return e(f, c);
    }, t);
  };
}
var N = $(function(e, r) {
  var a = H(e), t = H(r), s = j(e) + j(r), f = a * t;
  return U(f), f / Math.pow(10, s);
}), $e = $(function(e, r) {
  var a = Math.pow(10, Math.max(j(e), j(r)));
  return (N(e, a) + N(r, a)) / a;
}), qe = $(function(e, r) {
  var a = Math.pow(10, Math.max(j(e), j(r)));
  return (N(e, a) - N(r, a)) / a;
}), Pe = $(function(e, r) {
  var a = H(e), t = H(r);
  return U(a), U(t), N(a / t, ee(Math.pow(10, j(r) - j(e))));
});
function Ge(e, r) {
  var a = Math.pow(10, r), t = Pe(Math.round(Math.abs(N(e, a))), a);
  return e < 0 && t !== 0 && (t = N(t, -1)), t;
}
var Se = true;
function Qe(e) {
  e === void 0 && (e = true), Se = e;
}
var Y = { strip: ee, plus: $e, minus: qe, times: N, divide: Pe, round: Ge, digitLength: j, float2Fixed: H, enableBoundaryChecking: Qe };
function ge(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function xe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ge(Object(a), true).forEach(function(t) {
      W(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ge(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Xe(e, r) {
  var a = u.useContext(T), t = a.prefixCls, s = t === void 0 ? "arco" : t, f = e.spin, c = e.className, i = xe(xe({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(c ? c + " " : "").concat(s, "-icon ").concat(s, "-icon-star-fill") });
  return f && (i.className = "".concat(i.className, " ").concat(s, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", K({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }));
}
var ae = o.forwardRef(Xe);
ae.defaultProps = { isIcon: true };
ae.displayName = "IconStarFill";
function je(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function be(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? je(Object(a), true).forEach(function(t) {
      W(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : je(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Je(e, r) {
  var a = u.useContext(T), t = a.prefixCls, s = t === void 0 ? "arco" : t, f = e.spin, c = e.className, i = be(be({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(c ? c + " " : "").concat(s, "-icon ").concat(s, "-icon-face-meh-fill") });
  return f && (i.className = "".concat(i.className, " ").concat(s, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", K({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.321-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM15.999 30a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2Z", clipRule: "evenodd" }));
}
var V = o.forwardRef(Je);
V.defaultProps = { isIcon: true };
V.displayName = "IconFaceMehFill";
function ye(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function Ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ye(Object(a), true).forEach(function(t) {
      W(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ye(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Ue(e, r) {
  var a = u.useContext(T), t = a.prefixCls, s = t === void 0 ? "arco" : t, f = e.spin, c = e.className, i = Ce(Ce({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(c ? c + " " : "").concat(s, "-icon ").concat(s, "-icon-face-smile-fill") });
  return f && (i.className = "".concat(i.className, " ").concat(s, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", K({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.321-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-.355 9.953a1.91 1.91 0 0 1 2.694.177 6.66 6.66 0 0 0 5.026 2.279c1.918 0 3.7-.81 4.961-2.206a1.91 1.91 0 0 1 2.834 2.558 10.476 10.476 0 0 1-7.795 3.466 10.477 10.477 0 0 1-7.897-3.58 1.91 1.91 0 0 1 .177-2.694Z", clipRule: "evenodd" }));
}
var te = o.forwardRef(Ue);
te.defaultProps = { isIcon: true };
te.displayName = "IconFaceSmileFill";
function we(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function Oe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? we(Object(a), true).forEach(function(t) {
      W(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : we(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Ye(e, r) {
  var a = u.useContext(T), t = a.prefixCls, s = t === void 0 ? "arco" : t, f = e.spin, c = e.className, i = Oe(Oe({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(c ? c + " " : "").concat(s, "-icon ").concat(s, "-icon-face-frown-fill") });
  return f && (i.className = "".concat(i.className, " ").concat(s, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", K({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.322-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM31.68 32.88a1.91 1.91 0 0 1-2.694-.176 6.66 6.66 0 0 0-5.026-2.28c-1.918 0-3.701.81-4.962 2.207a1.91 1.91 0 0 1-2.834-2.559 10.476 10.476 0 0 1 7.796-3.465c3.063 0 5.916 1.321 7.896 3.58a1.909 1.909 0 0 1-.176 2.693Z", clipRule: "evenodd" }));
}
var re = o.forwardRef(Ye);
re.defaultProps = { isIcon: true };
re.displayName = "IconFaceFrownFill";
var E = function() {
  return E = Object.assign || function(e) {
    for (var r, a = 1, t = arguments.length; a < t; a++) {
      r = arguments[a];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, E.apply(this, arguments);
}, ea = function(e, r) {
  var a = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) r.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (a[t[s]] = e[t[s]]);
  return a;
}, J = function(e, r) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var t = a.call(e), s, f = [], c;
  try {
    for (; (r === void 0 || r-- > 0) && !(s = t.next()).done; ) f.push(s.value);
  } catch (i) {
    c = { error: i };
  } finally {
    try {
      s && !s.done && (a = t.return) && a.call(t);
    } finally {
      if (c) throw c.error;
    }
  }
  return f;
};
Y.enableBoundaryChecking(false);
var aa = { character: o.createElement(ae, null), count: 5 };
function ta(e, r) {
  var a, t = this, s = u.useContext(Ze), f = s.getPrefixCls, c = s.componentConfig, i = s.rtl, p = Be(e, aa, c == null ? void 0 : c.Rate), A = p.style, Z = A === void 0 ? {} : A, B = p.className, h = p.defaultValue, _ = p.character, C = p.count, b = p.value, w = p.tooltips, v = p.allowHalf, M = p.allowClear, P = p.readonly, F = p.disabled, l = p.grading, S = p.onChange, m = p.onHoverChange, I = ea(p, ["style", "className", "defaultValue", "character", "count", "value", "tooltips", "allowHalf", "allowClear", "readonly", "disabled", "grading", "onChange", "onHoverChange"]), ne = J(u.useState(h || b || 0), 2), ke = ne[0], se = ne[1], le = J(u.useState(0), 2), q = le[0], ie = le[1], ce = J(u.useState(), 2), G = ce[0], oe = ce[1], g = f("rate"), _e = me(g, (a = {}, a[g + "-readonly"] = P, a[g + "-disabled"] = F, a[g + "-rtl"] = i, a), B), z = "value" in p ? b : ke, de = function() {
    q && (ie(0), m && m(0));
  }, ue = function(d, x) {
    var y = x && v ? d + 0.5 : d + 1;
    y !== q && (ie(y), m && m(y));
  }, fe = function(d, x) {
    var y = x && v ? d + 0.5 : d + 1;
    oe(true), y !== z ? (se(y), S && S(y)) : M && (se(0), S && S(0), de());
  }, Me = function(d) {
    var x, y = v ? Y.times(+Y.divide(z || 0, 0.5).toFixed(0), 0.5) : Math.round(z), R = q || y, D = typeof _ == "function" ? _(d) : _;
    l && (R <= 2 ? D = o.createElement(re, null) : R <= 3 ? D = o.createElement(V, null) : D = o.createElement(te, null), R <= d && (D = o.createElement(V, null)));
    var Fe = me(g + "-character", (x = {}, x[g + "-character-half"] = v && d + 0.5 === R, x[g + "-character-full"] = d + 1 <= R, x[g + "-character-scale"] = G && d + 1 < z, x)), Ie = P || F ? {} : { onMouseEnter: ue.bind(t, d, true), onClick: fe.bind(t, d, true) }, Re = P || F ? {} : { onMouseEnter: ue.bind(t, d, false), onClick: fe.bind(t, d, false) }, Q = w && w[d], De = Q ? He : o.Fragment, Ae = Q ? { content: Q } : {};
    function X(pe) {
      return { role: "radio", "aria-checked": d + (pe ? 0.5 : 1) <= R, "aria-setsize": C, "aria-posinset": d + (pe ? 0.5 : 1) };
    }
    return o.createElement(De, E({ key: d }, Ae), o.createElement("div", E({ className: Fe, style: G ? { animationDelay: 50 * d + "ms" } : {}, onAnimationEnd: function() {
      G && d + 1 >= z - 1 && oe(false);
    } }, v ? {} : X()), o.createElement("div", E({ className: g + "-character-left" }, Ie, v ? X(true) : {}), D), o.createElement("div", E({ className: g + "-character-right" }, Re, v ? X() : {}), D)));
  };
  return o.createElement("div", E({ ref: r }, ze(I, ["error"]), { style: Z, className: _e, onMouseLeave: de }), o.createElement("div", { className: g + "-inner" }, Array.apply(null, Array(l ? 5 : C)).map(function(d, x) {
    return Me(x);
  })));
}
var Ee = o.forwardRef(ta);
Ee.displayName = "Rate";
const ra = ["近一年", "近半年", "近三个月", "2026年", "2025年"], na = ["最新优先", "下载量优先", "浏览量优先", "评分优先"];
function O({ name: e }) {
  return n.jsx("img", { src: `./figma/${e}`, alt: "", "aria-hidden": "true" });
}
function L(e) {
  return e.toLocaleString("zh-CN");
}
function sa({ value: e }) {
  return n.jsx("span", { className: "case-list-rating", "aria-label": `评分 ${e.toFixed(1)} 分`, children: n.jsx(Ee, { value: Math.max(0, Math.min(5, Math.round(e))), readonly: true }) });
}
function la({ reports: e, onOpen: r }) {
  return n.jsx("div", { className: "case-list-table-scroll", children: n.jsxs("table", { className: "case-list-table", children: [n.jsxs("colgroup", { children: [n.jsx("col", { className: "case-list-col-title" }), n.jsx("col", {}), n.jsx("col", {}), n.jsx("col", {}), n.jsx("col", {}), n.jsx("col", { className: "case-list-col-rating" }), n.jsx("col", { className: "case-list-col-actions" })] }), n.jsx("thead", { children: n.jsxs("tr", { children: [n.jsx("th", { children: "报告名称" }), n.jsx("th", { children: "作者" }), n.jsx("th", { children: "更新时间" }), n.jsx("th", { children: "浏览量" }), n.jsx("th", { children: "下载量" }), n.jsx("th", { children: "用户评分" }), n.jsx("th", { children: "操作" })] }) }), n.jsx("tbody", { children: e.map((a) => n.jsxs("tr", { children: [n.jsx("td", { title: a.title, children: a.title }), n.jsx("td", { title: a.author, children: a.author }), n.jsx("td", { children: a.updatedAt }), n.jsx("td", { className: "case-list-number", children: L(a.views) }), n.jsx("td", { className: "case-list-number", children: L(a.downloads) }), n.jsx("td", { className: "case-list-rating-cell", children: n.jsx(sa, { value: a.rating }) }), n.jsx("td", { children: n.jsxs("span", { className: "case-list-actions", children: [n.jsx(k, { type: "text", onClick: () => r(a), children: "查看" }), n.jsx(k, { type: "text", onClick: () => Ne.info("当前展示为案例演示数据，下载服务将在接入真实报告后开放。"), children: "下载" })] }) })] }, a.id)) })] }) });
}
function ia({ report: e, mode: r, onOpen: a }) {
  return n.jsxs("article", { className: `case-report-card ${r === "list" ? "is-list" : ""}`, onClick: a, tabIndex: 0, role: "button", onKeyDown: (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), a());
  }, "aria-label": `查看${e.title}`, children: [e.recommended && n.jsx("span", { className: "case-recommendation", children: "专家推荐" }), n.jsxs("div", { className: "case-card-main", children: [n.jsx("h3", { children: e.title }), n.jsxs("div", { className: `case-author ${e.certified ? "is-certified" : ""}`, children: [e.certified ? n.jsx(O, { name: "case-expert.svg" }) : n.jsx(O, { name: "case-author.svg" }), n.jsx("span", { children: e.author })] }), n.jsx("div", { className: "case-tags", children: e.tags.map((t) => n.jsx("span", { children: t }, t)) })] }), n.jsxs("div", { className: "case-card-footer", children: [n.jsxs("div", { className: "case-metrics", children: [n.jsxs("span", { children: [n.jsx(O, { name: "case-calendar.svg" }), e.updatedAt] }), n.jsxs("span", { children: [n.jsx(O, { name: "case-preview.svg" }), L(e.views)] }), n.jsxs("span", { children: [n.jsx(O, { name: "case-download.svg" }), L(e.downloads)] }), n.jsxs("span", { children: [n.jsx(O, { name: "case-rating.svg" }), e.rating.toFixed(1)] })] }), n.jsx(k, { type: "text", className: "case-download-action", onClick: (t) => {
    t.stopPropagation(), Ne.info("当前展示为案例演示数据，下载服务将在接入真实报告后开放。");
  }, children: "下载" })] })] });
}
function ua() {
  const [e, r] = u.useState("研究报告"), [a, t] = u.useState("全部"), [s, f] = u.useState("近一年"), [c, i] = u.useState("最新优先"), [p, A] = u.useState(""), [Z, B] = u.useState(""), [h, _] = u.useState("grid"), [C, b] = u.useState(1), [w, v] = u.useState(12), M = u.useMemo(() => {
    const l = Z.trim().toLowerCase();
    return [...Le.filter((m) => !(a !== "全部" && m.industry !== a || s === "2025年" && !m.updatedAt.startsWith("2025") || l && ![m.title, m.author, m.industry, ...m.tags, m.summary].join(" ").toLowerCase().includes(l)))].sort((m, I) => c === "下载量优先" ? I.downloads - m.downloads : c === "浏览量优先" ? I.views - m.views : c === "评分优先" ? I.rating - m.rating : I.updatedAt.localeCompare(m.updatedAt));
  }, [a, Z, c, s]);
  u.useEffect(() => {
    b(1);
  }, [a, Z, c, e, s]), u.useEffect(() => {
    b(1), v(h === "list" ? 10 : 12);
  }, [h]), u.useEffect(() => {
    const l = Math.max(1, Math.ceil(M.length / w));
    C > l && b(l);
  }, [M.length, C, w]);
  const P = M.slice((C - 1) * w, C * w);
  function F() {
    t("全部"), f("近一年"), i("最新优先"), A(""), B(""), b(1);
  }
  return n.jsxs("div", { className: "case-square-page", children: [n.jsx("nav", { className: "case-tabs", "aria-label": "案例类型", children: Te.map((l) => n.jsx("button", { type: "button", className: e === l ? "is-active" : "", "aria-current": e === l ? "page" : void 0, onClick: () => r(l), children: l }, l)) }), n.jsxs("div", { className: "case-scroll-region", children: [n.jsxs("section", { className: "case-industry-section", "aria-labelledby": "case-industry-label", children: [n.jsx("p", { id: "case-industry-label", children: "热门行业筛选" }), n.jsx("div", { className: "case-industry-options", children: Ke.map((l) => n.jsx(k, { type: "text", className: a === l ? "is-selected" : "", "aria-pressed": a === l, onClick: () => t(l), children: l }, l)) })] }), n.jsxs("div", { className: "case-filter-row", children: [n.jsxs("div", { className: "case-filter-fields", children: [n.jsx(he, { "aria-label": "更新时间", value: s, options: ra, onChange: f }), n.jsx(he, { "aria-label": "排序方式", value: c, options: na, onChange: i }), n.jsx(Ve, { className: "shared-search-input case-keyword-search", "aria-label": "搜索报告", allowClear: true, value: p, placeholder: "搜索报告标题、全文关键词", onChange: A, onPressEnter: () => B(p) }), n.jsx(k, { type: "primary", onClick: () => B(p), children: "查询" }), n.jsx(k, { className: "case-reset-button", onClick: F, children: "重置" })] }), n.jsxs("div", { className: "case-view-switch", role: "group", "aria-label": "视图切换", children: [n.jsx("button", { type: "button", className: h === "grid" ? "is-active" : "", "aria-label": "网格视图", "aria-pressed": h === "grid", onClick: () => _("grid"), children: n.jsx(O, { name: h === "grid" ? "case-grid.svg" : "case-grid-inactive.svg" }) }), n.jsx("button", { type: "button", className: h === "list" ? "is-active" : "", "aria-label": "列表视图", "aria-pressed": h === "list", onClick: () => _("list"), children: n.jsx(O, { name: h === "list" ? "case-list-active.svg" : "case-list.svg" }) })] })] }), n.jsx("div", { className: `case-results-scroll is-${h}`, children: P.length > 0 ? h === "list" ? n.jsx(la, { reports: P, onOpen: (l) => ve(l.id) }) : n.jsx("div", { className: "case-report-grid", "aria-live": "polite", children: P.map((l) => n.jsx(ia, { report: l, mode: h, onOpen: () => ve(l.id) }, l.id)) }) : n.jsxs("div", { className: "case-empty", children: [n.jsx("strong", { children: "没有找到符合条件的案例" }), n.jsx(k, { type: "text", onClick: F, children: "清空筛选" })] }) })] }), n.jsx("div", { className: "case-pagination tasks-pagination", children: n.jsx(We, { current: C, pageSize: w, total: M.length, size: "small", showTotal: (l) => `共计 ${l} 条`, sizeCanChange: true, sizeOptions: [10, 12, 20], onChange: (l, S) => {
    b(l), v(S);
  }, onPageSizeChange: (l) => {
    v(l), b(1);
  } }) })] });
}
export { ua as default };
