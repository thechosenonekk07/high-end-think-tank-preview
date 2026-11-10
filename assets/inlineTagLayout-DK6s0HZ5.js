import { r as b, F as r, G as at } from "./index-CNdOvyN0.js";
function Q(t, n) {
  return n === void 0 && (n = 15), +parseFloat(Number(t).toPrecision(n));
}
function E(t) {
  var n = t.toString().split(/[eE]/), a = (n[0].split(".")[1] || "").length - +(n[1] || 0);
  return a > 0 ? a : 0;
}
function k(t) {
  if (t.toString().indexOf("e") === -1) return Number(t.toString().replace(".", ""));
  var n = E(t);
  return n > 0 ? Q(Number(t) * Math.pow(10, n)) : Number(t);
}
function X(t) {
  nt && (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER) && console.warn(t + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function G(t) {
  return function() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    var l = n[0], s = n.slice(1);
    return s.reduce(function(u, y) {
      return t(u, y);
    }, l);
  };
}
var I = G(function(t, n) {
  var a = k(t), l = k(n), s = E(t) + E(n), u = a * l;
  return X(u), u / Math.pow(10, s);
}), ot = G(function(t, n) {
  var a = Math.pow(10, Math.max(E(t), E(n)));
  return (I(t, a) + I(n, a)) / a;
}), lt = G(function(t, n) {
  var a = Math.pow(10, Math.max(E(t), E(n)));
  return (I(t, a) - I(n, a)) / a;
}), et = G(function(t, n) {
  var a = k(t), l = k(n);
  return X(a), X(l), I(a / l, Q(Math.pow(10, E(n) - E(t))));
});
function it(t, n) {
  var a = Math.pow(10, n), l = et(Math.round(Math.abs(I(t, a))), a);
  return t < 0 && l !== 0 && (l = I(l, -1)), l;
}
var nt = true;
function ct(t) {
  t === void 0 && (t = true), nt = t;
}
var dt = { strip: Q, plus: ot, minus: lt, times: I, divide: et, round: it, digitLength: E, float2Fixed: k, enableBoundaryChecking: ct };
const R = ["2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09", "2026-10"], mt = { 技术总数: { title: "技术总数 · 指标详情", intro: "统计平台技术目录中已纳入监测范围的去重技术条目。当前示例统计月份为 2026-10。", kpis: [["当前总量", "126 项"], ["较上月", "+8 项"], ["同比变化", "+12.5%"]], history: [91, 94, 98, 101, 105, 109, 114, 118, 126], unit: "项", historyLabel: "技术总数", composition: [["人工智能", 52], ["新能源", 32], ["量子计算", 26], ["其他技术", 16]] }, 投资增长: { title: "投资增长 · 指标详情", intro: "按本月与上月融资金额环比计算。该指标反映样例数据库中的融资变化，不代表整个市场的完整统计。", kpis: [["本月环比", "+18.0%"], ["活跃赛道", "人工智能"], ["统计月份", "2026-10"]], history: [5.2, 8.3, 6.1, 10.2, 12.4, 9.8, 14.1, 16.2, 18], unit: "%", historyLabel: "投资环比增长率", composition: [["人工智能", 540], ["新能源", 260], ["低空经济", 180], ["量子计算", 120], ["其他", 100]], compositionUnit: "亿元", compositionLabel: "本月投资构成" }, 新增专利: { title: "新增专利 · 指标详情", intro: "统计当月首次公开的专利数据，已按平台规则进行去重处理。", kpis: [["本月新增", "342 件"], ["较上月", "+6.9%"], ["重点方向", "智能制造"]], history: [225, 239, 253, 249, 270, 287, 300, 320, 342], unit: "件", historyLabel: "每月新增专利", composition: [["智能制造", 146], ["新能源", 92], ["人工智能", 70], ["其他领域", 34]] }, 本月报告发表数: { title: "本月报告发表数 · 指标详情", intro: "统计本月内正式发表的洞察报告数量，按发布状态为已发布的报告计数。", kpis: [["本月发表", "48 篇"], ["较上月", "+4 篇"], ["同比变化", "+14.3%"]], history: [28, 30, 33, 31, 36, 39, 42, 44, 48], unit: "篇", historyLabel: "每月报告发表数", composition: [["人工智能", 14], ["低空经济", 12], ["新能源", 10], ["其他行业", 12]] } }, rt = (t) => t.toLocaleString("zh-CN", { maximumFractionDigits: 1 }), Z = (t) => `${t > 0 ? "+" : ""}${rt(t)}`;
function P(t, n) {
  const a = t.history[n];
  if (!Number.isInteger(n) || n < 0 || n >= t.history.length) return null;
  const l = n > 0 ? t.history[n - 1] : null, s = l === null ? null : a - l;
  return { month: R[n], value: `${rt(a)} ${t.unit}`, change: s === null ? "暂无上月数据" : `${Z(s)} ${t.unit === "%" ? "个百分点" : t.unit}`, relativeChange: l === null ? "暂无上月数据" : l === 0 ? "—" : `${Z((a - l) / l * 100)}%` };
}
const ft = { industryId: "", technologyId: "", heatLevel: "", period: [2021, 2026] };
function ut(t) {
  return { startDate: `${t[0]}-01-01`, endDate: `${t[1]}-12-31` };
}
function vt(t) {
  return { industryId: t.industryId, technologyId: t.technologyId, heatLevel: t.heatLevel, ...ut(t.period) };
}
function xt(t, n) {
  return `#/hotspot-analysis${t ? `/${t}${n ? `/${encodeURIComponent(n)}` : ""}` : ""}`;
}
const tt = ["#4280FC", "#59A8F8", "#FC7F05", "#4ED065", "#A873E1", "#F5BA23", "#9ED821", "#F67AB6", "#18C6C6", "#E566DD"];
function V(t) {
  return tt[t % tt.length];
}
function pt(t, n) {
  const a = V(t).slice(1), l = Math.min(1, Math.max(0, n));
  return "#" + [0, 2, 4].map((s) => Math.round(255 + (parseInt(a.slice(s, s + 2), 16) - 255) * l).toString(16).padStart(2, "0")).join("").toUpperCase();
}
function gt({ series: t, unit: n, max: a, onPoint: l, onSeriesClick: s, embedded: u = false }) {
  const y = b.useRef(null), [x, L] = b.useState(590), [p, w] = b.useState(null), [m, i] = b.useState(null), f = b.useId();
  b.useEffect(() => {
    const e = y.current;
    if (!e) return;
    const d = new ResizeObserver(() => L(Math.max(590, e.clientWidth - 2)));
    return d.observe(e), () => d.disconnect();
  }, []);
  const h = [...new Set(t.flatMap((e) => e.points.map((d) => d.time)))].sort(), j = p === null ? null : h[p] ?? null;
  b.useEffect(() => w(null), [t]);
  const N = 240, F = 48, H = 24, W = 18, S = 34, B = a ?? Math.max(1, Math.ceil(Math.max(...t.flatMap((e) => e.points.map((d) => d.value ?? 0))) * 1.15)), M = (e) => F + h.indexOf(e) / Math.max(1, h.length - 1) * (x - F - H), $ = (e) => W + (1 - e / B) * (N - W - S);
  function _(e, d) {
    var v, g, o;
    if ((e.key === "Enter" || e.key === " ") && (e.preventDefault(), (v = s ?? l) == null || v(d)), e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const c = Array.from(((g = e.currentTarget.ownerSVGElement) == null ? void 0 : g.querySelectorAll(s ? '[data-line-series][tabindex="0"]' : '[tabindex="0"]')) ?? []);
      (o = c[(c.indexOf(e.currentTarget) + (e.key === "ArrowRight" ? 1 : c.length - 1)) % c.length]) == null || o.focus();
    }
  }
  function q(e, d) {
    const v = e.currentTarget.ownerSVGElement.getBoundingClientRect(), g = { x: (e.clientX - v.left) * x / v.width, y: (e.clientY - v.top) * N / v.height };
    let o = d, c = 1 / 0;
    const C = [...t.filter((A) => A.id === d), ...t.filter((A) => A.id !== d)];
    for (const A of C) A.points.forEach((K, st) => {
      if (K.value === null) return;
      const U = { x: M(K.time), y: $(K.value) }, T = A.points[st - 1], D = T && T.value !== null ? { x: M(T.time), y: $(T.value) } : U, O = U.x - D.x, z = U.y - D.y, Y = Math.max(0, Math.min(1, ((g.x - D.x) * O + (g.y - D.y) * z) / (O * O + z * z || 1))), J = (g.x - D.x - Y * O) ** 2 + (g.y - D.y - Y * z) ** 2;
      J < c - 0.01 && (c = J, o = A.id);
    });
    return o;
  }
  return r.jsx("div", { ref: y, className: `metric-detail-chart-scroll metric-detail-line-scroll${u ? " is-embedded" : ""}`, role: "region", "aria-label": "历史趋势交互图表", children: r.jsxs("div", { className: "metric-detail-line-stage", style: { width: x }, onMouseLeave: () => w(null), children: [r.jsxs("svg", { className: "metric-detail-chart ha-line-chart", width: x, height: N, viewBox: `0 0 ${x} ${N}`, role: "group", "aria-label": s ? `年度趋势，单位${n}。点击热点曲线查看详细分析，方向键切换曲线，回车打开。` : `年度趋势，单位${n}。方向键浏览数据点，回车查看详情。`, children: [[0, 1, 2, 3, 4].map((e) => r.jsxs("g", { children: [r.jsx("line", { x1: F, x2: x - H, y1: $(B * e / 4), y2: $(B * e / 4), stroke: "#E5E6EB", strokeDasharray: e === 0 ? void 0 : "3 3" }), r.jsx("text", { x: F - 12, y: $(B * e / 4) + 4, textAnchor: "end", fill: "#4E5969", fontSize: "12", children: +(B * e / 4).toFixed(1) })] }, e)), h.map((e) => r.jsx("text", { x: M(e), y: N - 10, textAnchor: "middle", fill: "#4E5969", fontSize: "12", children: e.slice(0, 4) }, e)), j !== null && r.jsx("line", { x1: M(j), x2: M(j), y1: W, y2: N - S, stroke: "#C9CDD4", strokeDasharray: "3 3" }), t.map((e, d) => {
    const v = e.points.filter((o) => o.value !== null);
    if (s && !v.length) return null;
    const g = e.points.map((o, c) => o.value === null ? "" : `${c === 0 || e.points[c - 1].value === null ? "M" : "L"}${M(o.time)},${$(o.value)}`).join(" ");
    return r.jsxs("g", { className: s ? "metric-line-series" : void 0, "data-line-series": s ? e.id : void 0, tabIndex: s ? 0 : void 0, role: s ? "button" : void 0, "aria-label": s ? `查看${e.name}热点曲线详情` : void 0, onClick: s ? (o) => s(q(o, e.id)) : void 0, onKeyDown: s ? (o) => _(o, e.id) : void 0, onMouseEnter: s ? () => i(e.id) : void 0, onMouseLeave: s ? () => i(null) : void 0, onFocus: s ? () => i(e.id) : void 0, onBlur: s ? () => i(null) : void 0, onMouseMove: s ? (o) => {
      i(q(o, e.id));
      const c = o.currentTarget.ownerSVGElement.getBoundingClientRect(), C = (o.clientX - c.left) * x / c.width;
      w(Math.max(0, Math.min(h.length - 1, Math.round((C - F) / (x - F - H) * (h.length - 1)))));
    } : void 0, children: [r.jsx("path", { className: "metric-series-ink", d: g, fill: "none", stroke: V(d), strokeWidth: m === e.id ? 3 : 2, strokeLinejoin: "round", strokeLinecap: "round", pointerEvents: "none" }), s && r.jsx("path", { className: "metric-series-hit", d: g, fill: "none", stroke: "transparent", strokeWidth: "16", strokeLinecap: "round", pointerEvents: "stroke" }), s && e.points.filter((o, c) => o.value !== null && (c === 0 || e.points[c - 1].value === null) && (c === e.points.length - 1 || e.points[c + 1].value === null)).map((o) => r.jsx("circle", { className: "metric-series-hit", cx: M(o.time), cy: $(o.value), r: "8", fill: "transparent" }, `hit-${o.time}`)), v.map((o) => r.jsxs("g", { className: "metric-line-point", tabIndex: s ? void 0 : 0, role: s ? "img" : l ? "button" : "img", pointerEvents: s ? "none" : void 0, "aria-label": `${e.name}，${o.time.slice(0, 4)}年：${o.value}${n}`, "aria-describedby": p === h.indexOf(o.time) ? f : void 0, onMouseEnter: s ? void 0 : () => w(h.indexOf(o.time)), onFocus: s ? void 0 : () => w(h.indexOf(o.time)), onBlur: s ? void 0 : () => w(null), onClick: s ? void 0 : () => l == null ? void 0 : l(e.id), onKeyDown: s ? void 0 : (c) => _(c, e.id), children: [!s && r.jsx("circle", { cx: M(o.time), cy: $(o.value), r: "10", fill: "transparent" }), r.jsx("circle", { cx: M(o.time), cy: $(o.value), r: p === h.indexOf(o.time) ? 4 : 3, fill: V(d), stroke: "#fff", strokeWidth: "1" })] }, o.time))] }, e.id);
  })] }), j !== null && r.jsxs("div", { id: f, role: "tooltip", className: "metric-chart-tooltip metric-line-tooltip", style: { left: Math.min(x - 212, Math.max(8, M(j) + 12)) }, children: [r.jsxs("strong", { children: [j.slice(0, 4), "年"] }), t.map((e, d) => {
    var v;
    return r.jsxs("span", { children: [r.jsx("i", { style: { background: V(d) } }), e.name, r.jsxs("b", { children: [((v = e.points.find((g) => g.time === j)) == null ? void 0 : v.value) ?? "—", " ", n] })] }, e.id);
  })] })] }) });
}
function yt({ detail: t }) {
  const [n, a] = b.useState(null), [l, s] = b.useState(null), u = b.useRef([]), y = b.useId(), x = Math.max(...t.history) * 1.16, L = n === null ? null : P(t, n), p = l === null ? null : P(t, l);
  function w(m, i) {
    var j, N;
    const f = t.history.length - 1, h = m.key === "ArrowLeft" ? Math.max(0, i - 1) : m.key === "ArrowRight" ? Math.min(f, i + 1) : m.key === "Home" ? 0 : m.key === "End" ? f : null;
    h !== null && (m.preventDefault(), (j = u.current[h]) == null || j.focus({ preventScroll: true }), (N = u.current[h]) == null || N.scrollIntoView({ block: "nearest", inline: "nearest" }));
  }
  return r.jsxs(r.Fragment, { children: [r.jsx("div", { className: "metric-detail-chart-scroll", role: "region", "aria-label": "历史趋势交互图表", children: r.jsxs("div", { className: "metric-chart-stage", onMouseLeave: () => a(null), children: [r.jsxs("svg", { className: "metric-detail-chart", viewBox: "0 0 590 180", "aria-hidden": "true", children: [[40, 90, 140].map((m) => r.jsx("line", { x1: "22", y1: m, x2: "575", y2: m, stroke: "#e5e6eb" }, m)), t.history.map((m, i) => {
    const f = m / x * 113, h = 140 - f;
    return r.jsxs("g", { children: [l === i && r.jsx("rect", { x: 22 + i * 63, y: "18", width: "52", height: "155", rx: "4", fill: "#e8f3ff" }), r.jsx("rect", { x: 35 + i * 63, y: h, width: "26", height: f, rx: "4", fill: n === i ? "var(--brand-hover)" : "var(--brand)" }), r.jsxs("text", { x: 48 + i * 63, y: h - 7, textAnchor: "middle", fill: "#4e5969", fontSize: "12", children: [m.toLocaleString("zh-CN"), t.unit === "%" ? "%" : ""] }), r.jsx("text", { x: 48 + i * 63, y: "164", textAnchor: "middle", fill: "#4e5969", fontSize: "12", children: R[i] })] }, R[i]);
  })] }), t.history.map((m, i) => r.jsx("button", { type: "button", className: "metric-chart-point", style: { left: 22 + i * 63 }, ref: (f) => {
    u.current[i] = f;
  }, "aria-label": `${R[i]}，${m}${t.unit}，查看月份详情`, "aria-pressed": l === i, "aria-describedby": n === i ? y : void 0, onMouseEnter: () => a(i), onFocus: () => a(i), onBlur: () => a(null), onKeyDown: (f) => w(f, i), onClick: () => s((f) => f === i ? null : i) }, R[i])), L && r.jsxs("div", { id: y, role: "tooltip", className: "metric-chart-tooltip", style: { left: Math.min(Math.max(48 + n * 63 - 100, 8), 382) }, children: [r.jsx("strong", { children: L.month }), r.jsxs("span", { children: [t.historyLabel, "：", L.value] }), r.jsxs("span", { children: ["较上月：", L.change] })] })] }) }), p ? r.jsxs("section", { className: "metric-point-detail", "aria-label": "所选月份详情", "aria-live": "polite", children: [r.jsxs("div", { className: "metric-point-detail-heading", children: [r.jsxs("strong", { children: [p.month, " · 月份详情"] }), r.jsx(at, { type: "text", onClick: () => s(null), children: "清除选择" })] }), r.jsxs("dl", { children: [r.jsxs("div", { children: [r.jsx("dt", { children: t.historyLabel }), r.jsx("dd", { children: p.value })] }), r.jsxs("div", { children: [r.jsx("dt", { children: "较上月变化" }), r.jsx("dd", { children: p.change })] }), r.jsxs("div", { children: [r.jsx("dt", { children: t.unit === "%" ? "相对上月变化" : "环比变化" }), r.jsx("dd", { children: p.relativeChange })] })] })] }) : r.jsx("p", { className: "metric-chart-help", children: "悬停查看数值，点击柱形查看月份详情；支持左右方向键切换月份。" })] });
}
function bt(t, n, a, l) {
  if (t.reduce((u, y) => u + y, 0) + Math.max(0, t.length - 1) * l <= n + 0.1) return t.length;
  for (let u = t.length - 1; u >= 0; u--) {
    const y = t.length - u;
    if (t.slice(0, u).reduce((L, p) => L + p, 0) + u * l + (a[y] ?? 0) <= n + 0.1) return u;
  }
  return 0;
}
export { yt as I, mt as a, bt as b, tt as c, et as d, V as e, gt as f, pt as g, ft as h, dt as i, xt as j, vt as k, ut as l, lt as m, ot as p, I as t };
