import { r as d, Z as e, a2 as q, b7 as G } from "./index-DOWuBEUh.js";
const K = [{ id: "pinned-1", title: "量子资讯热度近月趋势", day: "今天", pinned: true, order: 0 }, { id: "pinned-2", title: "量子资讯热度近月趋势", day: "昨天", pinned: true, order: 1 }, { id: "today-1", title: "全域科技资讯热度大盘", day: "今天", pinned: false, order: 2 }, { id: "today-2", title: "各技术主题咨询占比", day: "今天", pinned: false, order: 3 }, { id: "today-3", title: "被提及企业数与覆盖率", day: "今天", pinned: false, order: 4 }, { id: "today-4", title: "产业链各环节企业数分布", day: "今天", pinned: false, order: 5 }, { id: "yesterday-1", title: "全域科技资讯热度大盘", day: "昨天", pinned: false, order: 6 }, { id: "yesterday-2", title: "各技术主题咨询占比", day: "昨天", pinned: false, order: 7 }, { id: "yesterday-3", title: "被提及企业数与覆盖率", day: "昨天", pinned: false, order: 8 }, { id: "yesterday-4", title: "产业链各环节企业数分布", day: "昨天", pinned: false, order: 9 }];
function O({ name: t }) {
  return e.jsx("img", { src: `./figma/${t}`, width: "16", height: "16", alt: "", "aria-hidden": "true" });
}
function V({ visible: t, onClose: a, generatedEntries: h = [], onSelectRecord: x }) {
  const s = d.useRef(null), [m, g] = d.useState(""), [u, p] = d.useState("today-1"), [y, f] = d.useState(K), [v, w] = d.useState(false);
  d.useEffect(() => {
    h.length !== 0 && f((l) => {
      const o = new Set(l.map((i) => i.id)), r = h.filter((i) => !o.has(i.id));
      return r.length > 0 ? [...r, ...l] : l;
    });
  }, [h]), d.useEffect(() => {
    if (!t) {
      g("");
      return;
    }
    const l = document.activeElement, o = (r) => {
      r.key === "Escape" && a();
    };
    return window.addEventListener("keydown", o), requestAnimationFrame(() => {
      var r;
      return (r = s.current) == null ? void 0 : r.focus({ preventScroll: true });
    }), () => {
      window.removeEventListener("keydown", o), l == null || l.focus({ preventScroll: true });
    };
  }, [a, t]);
  const b = d.useMemo(() => {
    const l = m.trim().toLocaleLowerCase(), o = y.filter((i) => !l || i.title.toLocaleLowerCase().includes(l));
    return [{ label: "已置顶", entries: o.filter((i) => i.pinned) }, { label: "今天", entries: o.filter((i) => !i.pinned && i.day === "今天") }, { label: "昨天", entries: o.filter((i) => !i.pinned && i.day === "昨天") }].map((i) => ({ ...i, entries: [...i.entries].sort((M, k) => M.order - k.order) })).filter((i) => i.entries.length > 0);
  }, [y, m]);
  function N(l) {
    f((o) => o.map((r) => r.id === l ? { ...r, pinned: !r.pinned } : r));
  }
  function S(l) {
    return e.jsxs("div", { className: `hotspot-history-row ${u === l.id ? "is-active" : ""}`, children: [e.jsx("button", { type: "button", className: "hotspot-history-row-main", "aria-pressed": u === l.id, onClick: () => {
      p(l.id), x == null || x(l.id);
    }, children: e.jsx("span", { children: l.title }) }), e.jsx("button", { type: "button", className: "hotspot-history-pin-action", "aria-label": `${l.pinned ? "取消置顶" : "置顶"}：${l.title}`, title: l.pinned ? "取消置顶" : "置顶", onClick: () => N(l.id), children: e.jsx(O, { name: l.pinned ? "hotspot-history-pin.svg" : "hotspot-history-unpin.svg" }) })] }, l.id);
  }
  if (!t) return null;
  const H = e.jsxs("div", { className: "hotspot-history-layer", "data-node-id": "1216:7433", children: [e.jsx("button", { type: "button", tabIndex: -1, className: "hotspot-history-mask", "aria-label": "关闭历史对话", onClick: a }), e.jsxs("aside", { id: "hotspot-history-drawer", className: "hotspot-history-drawer", role: "dialog", "aria-modal": "true", "aria-labelledby": "hotspot-history-title", "data-node-id": "1216:7451", children: [e.jsx("div", { className: "hotspot-history-drawer-heading", children: e.jsxs("div", { children: [e.jsx("h2", { id: "hotspot-history-title", children: "历史对话" }), e.jsx("button", { ref: s, type: "button", "aria-label": "关闭历史对话", onClick: a, children: e.jsx(O, { name: "hotspot-history-close.svg" }) })] }) }), e.jsxs("div", { className: "hotspot-history-drawer-content", children: [e.jsxs("label", { className: "hotspot-history-search", children: [e.jsx(O, { name: "hotspot-history-search.svg" }), e.jsx("input", { value: m, onChange: (l) => g(l.target.value), placeholder: "搜索历史对话", "aria-label": "搜索历史对话" })] }), e.jsx("div", { className: "hotspot-history-list", children: b.length > 0 ? b.map((l) => {
    const o = l.label === "已置顶", r = o && v;
    return e.jsxs("section", { className: "hotspot-history-group", children: [o ? e.jsxs("button", { type: "button", className: "hotspot-history-group-toggle", "aria-expanded": !r, onClick: () => w((i) => !i), children: [e.jsx("span", { children: l.label }), e.jsx("i", { "aria-hidden": "true" })] }) : e.jsx("h3", { children: l.label }), !r && e.jsx("div", { children: l.entries.map(S) })] }, l.label);
  }) : e.jsx("p", { className: "hotspot-history-empty", children: "未找到相关历史对话" }) })] }), e.jsx("div", { className: "hotspot-history-footer", children: e.jsx("button", { type: "button", className: "hotspot-history-manage", onClick: () => q.info("历史对话管理页面将在后续补充。"), children: "历史对话管理" }) })] })] }), C = document.querySelector(".main-panel.is-hotspot-panel");
  return C ? G.createPortal(H, C) : H;
}
function Z({ size: t = 16 }) {
  return e.jsx("svg", { className: "asset-icon hotspot-history-icon", width: t, height: t, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: e.jsx("path", { d: "M4.11035 3.4389C6.46506 1.42794 10.0164 1.5313 12.2422 3.75823C14.5813 6.09923 14.5813 9.90845 12.2422 12.2494C11.0725 13.4199 9.53637 14.0053 8 14.0053C6.46348 14.0053 4.92749 13.4199 3.75781 12.2494C2.62457 11.1157 2.00005 9.60818 2 8.00433C2 7.72804 2.22391 7.50335 2.5 7.50335C2.77609 7.50335 3 7.72804 3 8.00433C3.00005 9.34081 3.52051 10.5974 4.46484 11.5424C6.41445 13.4925 9.58555 13.4925 11.5352 11.5424C13.4844 9.59169 13.4844 6.41712 11.5352 4.46624C9.71202 2.642 6.82006 2.52511 4.8584 4.11273H5.61035C5.88644 4.11273 6.11034 4.33645 6.11035 4.61273C6.11035 4.88901 5.88645 5.11273 5.61035 5.11273H3.61035C3.33446 5.11249 3.11035 4.88887 3.11035 4.61273V2.61175C3.11035 2.33561 3.33446 2.11101 3.61035 2.11077C3.88645 2.11077 4.11035 2.33546 4.11035 2.61175V3.4389ZM8 4.5014C8.27609 4.5014 8.5 4.72609 8.5 5.00237V7.7973L10.3535 9.65179C10.5487 9.84724 10.5488 10.1644 10.3535 10.3598C10.2561 10.4576 10.1277 10.5062 10 10.5063C9.8723 10.5063 9.74411 10.4574 9.64648 10.3598L7.71973 8.43109C7.57827 8.28948 7.50005 8.101 7.5 7.90081V5.00237C7.5 4.72609 7.72391 4.5014 8 4.5014Z", fill: "currentColor" }) });
}
const z = [{ key: "line", label: "折线图" }, { key: "bar", label: "柱状图" }, { key: "table", label: "表格" }];
function X(t, a, h, x, s) {
  const m = Math.min(...t), u = Math.max(...t) - m || 1;
  return t.map((p, y) => ({ x: x + y * a / Math.max(t.length - 1, 1), y: s + h - (p - m) / u * h, value: p }));
}
function ee({ visualization: t }) {
  const [a, h] = d.useState("line"), x = d.useMemo(() => t.series.map((s) => ({ ...s, points: X(s.values, 580, 132, 72, 30) })), [t]);
  return e.jsxs("section", { className: "hotspot-result-chart", "aria-label": t.title, children: [e.jsxs("header", { children: [e.jsx("h3", { children: t.title }), e.jsx("div", { className: "hotspot-chart-switch", role: "tablist", "aria-label": "图表类型", children: z.map((s) => e.jsx("button", { type: "button", role: "tab", "aria-selected": a === s.key, className: a === s.key ? "is-active" : "", onClick: () => h(s.key), children: s.label }, s.key)) })] }), a === "table" ? e.jsx("div", { className: "hotspot-chart-table-wrap", children: e.jsxs("table", { children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "周期" }), t.series.map((s) => e.jsx("th", { children: s.name }, s.name))] }) }), e.jsx("tbody", { children: t.labels.map((s, m) => e.jsxs("tr", { children: [e.jsx("td", { children: s }), t.series.map((g) => e.jsx("td", { children: g.values[m] }, g.name))] }, s)) })] }) }) : e.jsxs("figure", { children: [e.jsx("div", { className: "hotspot-chart-legend", children: t.series.map((s) => e.jsxs("span", { children: [e.jsx("i", { style: { background: s.color } }), s.name] }, s.name)) }), e.jsxs("svg", { viewBox: "0 0 720 210", role: "img", "aria-label": `${t.title}，${a === "line" ? "折线图" : "柱状图"}`, children: [[0, 1, 2, 3, 4].map((s) => e.jsx("line", { x1: "48", x2: "676", y1: 30 + s * 33, y2: 30 + s * 33, stroke: "#E5E6EB", strokeDasharray: s === 4 ? void 0 : "3 3" }, s)), a === "line" && x.map((s) => {
    const m = s.points.map((u) => `${u.x},${u.y}`).join(" "), g = `${s.points[0].x},162 ${m} ${s.points[s.points.length - 1].x},162`;
    return e.jsxs("g", { children: [e.jsx("polygon", { points: g, fill: s.color, opacity: ".06" }), e.jsx("polyline", { points: m, fill: "none", stroke: s.color, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), s.points.map((u) => e.jsx("circle", { cx: u.x, cy: u.y, r: "3", fill: s.color, children: e.jsx("title", { children: `${s.name}: ${u.value}` }) }, `${s.name}-${u.x}`))] }, s.name);
  }), a === "bar" && x.flatMap((s, m) => s.points.map((g, u) => {
    const f = 72 + u * 580 / Math.max(t.labels.length - 1, 1) + (m - 0.5) * 20 - 9;
    return e.jsx("rect", { x: f, y: g.y, width: 18, height: Math.max(2, 162 - g.y), rx: "2", fill: s.color, opacity: m === 0 ? 0.9 : 0.68, children: e.jsx("title", { children: `${s.name}: ${g.value}` }) }, `${s.name}-${u}`);
  })), t.labels.map((s, m) => e.jsx("text", { x: 72 + m * 580 / Math.max(t.labels.length - 1, 1), y: "190", textAnchor: "middle", fill: "#86909C", fontSize: "12", children: s }, s))] }), e.jsx("figcaption", { children: "确定性的前端演示图表，接入真实数据源后由同一字段结构渲染。" })] })] });
}
function D({ name: t }) {
  return e.jsx("img", { src: `./figma/${t}`, width: "16", height: "16", alt: "", "aria-hidden": "true" });
}
function L({ label: t, icon: a, onClick: h, pressed: x }) {
  return e.jsx("button", { type: "button", "aria-label": t, "aria-pressed": x, title: t, onClick: h, children: e.jsx(D, { name: a }) });
}
function te({ conversation: t, completedSteps: a, isAnimating: h, onRegenerate: x, onNewChat: s, onSuggestion: m, onOpenHistory: g, composer: u }) {
  const [p, y] = d.useState(null), [f, v] = d.useState(() => new Set(t.nodes.map((o) => o.key))), w = d.useRef(null), b = d.useRef([]), N = d.useRef(a), S = a >= t.nodes.length;
  d.useEffect(() => {
    v(new Set(t.nodes.map((o) => o.key))), y(null);
  }, [t.id, t.nodes]), d.useEffect(() => {
    const o = N.current;
    if (N.current = a, !h || a <= o) return;
    const r = w.current, i = Math.min(a, t.nodes.length - 1), M = b.current[i];
    if (!r || !M) return;
    const k = r.getBoundingClientRect(), E = M.getBoundingClientRect(), $ = k.top + 24, A = k.bottom - 24, T = E.top < $ ? E.top - $ : E.bottom > A ? E.bottom - A : 0;
    if (Math.abs(T) < 1) return;
    const I = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    r.scrollTo({ top: r.scrollTop + T, behavior: I ? "auto" : "smooth" });
  }, [a, t.nodes.length, h]);
  function H(o) {
    v((r) => {
      const i = new Set(r);
      return i.has(o) ? i.delete(o) : i.add(o), i;
    });
  }
  function C() {
    var r;
    const o = `${t.answer.lead}
${t.answer.detail}`;
    (r = navigator.clipboard) == null || r.writeText(o).then(() => q.success("回答已复制。")).catch(() => q.error("复制失败，请手动选择文本。"));
  }
  function l() {
    const o = new Blob([JSON.stringify(t, null, 2)], { type: "application/json;charset=utf-8" }), r = URL.createObjectURL(o), i = document.createElement("a");
    i.href = r, i.download = `热点问数-${t.id}.json`, i.click(), URL.revokeObjectURL(r);
  }
  return e.jsxs("section", { className: "hotspot-conversation-view", "aria-label": "技术热点问数对话详情", "data-node-id": "1238:9238", children: [e.jsx("button", { type: "button", className: "hotspot-conversation-history", "aria-label": "打开历史对话", onClick: g, children: e.jsx(Z, {}) }), e.jsx("div", { ref: w, className: "hotspot-conversation-scroll", children: e.jsxs("div", { className: "hotspot-conversation-content", children: [e.jsx("div", { className: "hotspot-user-question", children: t.question }), e.jsxs("article", { className: "hotspot-answer-block", children: [e.jsx("p", { className: "hotspot-generating-label", "aria-live": "polite", children: S ? "已完成生成" : "正在为你生成…" }), e.jsx("ol", { className: "hotspot-process-list", "aria-label": "生成流程", children: t.nodes.map((o, r) => {
    const i = r < a, M = r === a, k = M || i && f.has(o.key), E = h && i && r === a - 1;
    return e.jsxs("li", { ref: ($) => {
      b.current[r] = $;
    }, className: `${i ? "is-complete" : M ? "is-running" : ""} ${E ? "is-latest" : ""}`, children: [e.jsx("span", { className: "hotspot-process-rail", children: e.jsx("span", { children: i ? e.jsx(D, { name: "hotspot-answer-step.svg" }) : r + 1 }) }), e.jsxs("div", { children: [e.jsxs("button", { type: "button", className: "hotspot-process-heading", disabled: !i, "aria-expanded": i ? k : void 0, "aria-controls": `hotspot-step-${o.key}`, onClick: () => i && H(o.key), children: [e.jsxs("span", { children: [e.jsx("strong", { children: o.label }), o.tags.map(($) => e.jsx("i", { children: $ }, $))] }), i && e.jsx("span", { className: "hotspot-process-toggle", "aria-hidden": "true" })] }), e.jsx("div", { id: `hotspot-step-${o.key}`, className: `hotspot-process-detail ${k ? "is-expanded" : ""}`, "aria-hidden": !k, children: e.jsx("div", { children: e.jsx("p", { children: o.detail }) }) })] })] }, o.key);
  }) }), S && e.jsxs("div", { className: `hotspot-answer-result ${h ? "is-visible" : ""}`, children: [e.jsxs("div", { className: "hotspot-answer-copy", children: [e.jsx("p", { children: t.answer.lead }), e.jsx("p", { children: t.answer.detail })] }), e.jsx(ee, { visualization: t.visualization }), t.warnings.length > 0 && e.jsxs("aside", { className: "hotspot-answer-warning", children: [e.jsxs("strong", { children: [e.jsx(D, { name: "hotspot-answer-warning.svg" }), "异常发现"] }), t.warnings.map((o) => e.jsx("p", { children: o }, o))] }), e.jsxs("div", { className: "hotspot-answer-actions", children: [e.jsx(L, { label: "重新生成", icon: "hotspot-answer-reset.svg", onClick: x }), e.jsx(L, { label: "复制回答", icon: "hotspot-answer-copy.svg", onClick: C }), e.jsx(L, { label: "在新窗口查看", icon: "hotspot-answer-jump.svg", onClick: () => q.info("独立结果页服务尚未接入。") }), e.jsx(L, { label: "下载结果", icon: "hotspot-answer-download.svg", onClick: l }), e.jsx("span", {}), e.jsx(L, { label: "回答有帮助", icon: "hotspot-answer-like.svg", pressed: p === "like", onClick: () => y((o) => o === "like" ? null : "like") }), e.jsx(L, { label: "回答需改进", icon: "hotspot-answer-dislike.svg", pressed: p === "dislike", onClick: () => y((o) => o === "dislike" ? null : "dislike") })] })] })] }), S && e.jsx("div", { className: "hotspot-followups", children: t.suggestions.map((o) => e.jsx("button", { type: "button", onClick: () => m(o), children: o }, o)) })] }) }), e.jsxs("div", { className: "hotspot-conversation-composer", children: [e.jsxs("button", { type: "button", className: "hotspot-new-chat", onClick: s, children: [e.jsx(D, { name: "hotspot-answer-new.svg" }), "新建对话"] }), u, e.jsx("p", { children: "内容由 AI 流程预览生成，请认真核查结果" })] })] });
}
function se(t) {
  let a = 2166136261;
  for (const h of t) a = Math.imul(a ^ h.charCodeAt(0), 16777619);
  return Math.abs(a >>> 0);
}
function ne(t = 4) {
  const a = /* @__PURE__ */ new Date();
  return Array.from({ length: t }, (h, x) => {
    const s = new Date(a.getFullYear(), a.getMonth() - t + x + 1, 1);
    return `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}`;
  });
}
function Y(t, a) {
  var C;
  const h = t.trim(), x = se(`${h}|${a.join("|")}`), s = /趋势|变化|月度|近\d+个?月|环比|增长|下降/.test(h), m = /对比|比较|哪个|最高|最快|差异/.test(h), g = /占比|构成|分布|结构|环节/.test(h), u = s ? "趋势查询" : m ? "对比分析" : g ? "结构分析" : "综合研判", p = a.length > 0 ? a.join("、") : ((C = h.match(/[\u4e00-\u9fa5A-Za-z0-9]+/)) == null ? void 0 : C[0]) ?? "当前问题", y = 900 + x % 900, f = Array.from({ length: 4 }, (l, o) => Math.round(y * (0.72 + (x >> o * 3) % 50 / 100))), v = f.map((l, o) => o === 0 ? 0 : Number(((l - f[o - 1]) / f[o - 1] * 100).toFixed(1))), w = f[0], b = f[f.length - 1], N = b > w * 1.08 ? "上升" : b < w * 0.92 ? "回落" : "波动", S = ["科技资讯", ...s ? ["资讯热度", "环比"] : [], ...g ? ["结构分布"] : [], ...a.slice(0, 2)], H = ne();
  return { id: `local-${Date.now()}`, question: h, createdAt: (/* @__PURE__ */ new Date()).toISOString(), preview: true, nodes: [{ key: "analysis", label: "问题分析", tags: ["意图识别"], detail: `识别结果：${u}` }, { key: "retrieval", label: "数据检索", tags: [...new Set(S)].slice(0, 4), detail: "命中本地演示数据集（待接入真实数据源）" }, { key: "permission", label: "权限审查", tags: [], detail: "当前为前端流程预览，未执行真实账号权限校验" }, { key: "fetch", label: "数据获取", tags: [], detail: "已生成确定性的本地演示序列" }, { key: "answer", label: "最终回答", tags: ["核心结论"], detail: `${p}呈现${N}特征` }], answer: { lead: `围绕“${h}”已完成本地流程预览。`, detail: `${p}在最近四个演示周期内呈现${N}特征；当前数值用于验证页面结构与交互，不代表真实行业结论。`, direction: N }, visualization: { title: `${p}资讯热度趋势（演示数据）`, labels: H, series: [{ name: "资讯数（演示）", color: "#165DFF", values: f }, { name: "环比（演示）", color: "#FF7D00", values: v }] }, warnings: ["当前图表为确定性的前端演示数据，仅用于验证流程和布局；接入真实数据服务后方可用于分析判断。"], suggestions: [`进一步拆解${p}的核心指标构成，哪些维度贡献最大？`, `查看${p}更长时间范围的变化趋势，主要拐点出现在哪里？`, `分析${p}与本周热点的关联情况，当前关注度最高的话题是什么？`] };
}
const oe = ["AI硬件", "机器人减速器", "N型光伏", "无人配送", "固态电解质", "先进封装", "生物制造", "量子计算"], ae = ["AI硬件", "先进封装", "N型光伏"], ie = ["量子相关资讯的热度近几个月趋势如何，涨还是跌", "各技术主题的资讯占比构成，哪个主题声量最大", "新能源汽车产业链各环节的企业数分布"], J = "thinktank:hotspot-conversations:v1";
function re() {
  try {
    const t = JSON.parse(localStorage.getItem(J) ?? "[]");
    return Array.isArray(t) ? t.slice(0, 20) : [];
  } catch {
    return [];
  }
}
function R({ name: t, size: a }) {
  return e.jsx("img", { src: `./figma/${t}`, width: a, height: a, alt: "", "aria-hidden": "true" });
}
function ce() {
  const [t, a] = d.useState(""), [h, x] = d.useState(0), [s, m] = d.useState([]), [g, u] = d.useState(false), [p, y] = d.useState(null), [f, v] = d.useState(0), [w, b] = d.useState(false), [N, S] = d.useState(re), H = d.useRef(null), [C, l] = d.useState({ visible: false, thumbHeight: 0, thumbTop: 0 });
  d.useEffect(() => (document.body.classList.add("hotspot-page-active"), () => document.body.classList.remove("hotspot-page-active")), []), d.useEffect(() => (document.body.classList.toggle("hotspot-conversation-active", !!p), () => document.body.classList.remove("hotspot-conversation-active")), [p]), d.useEffect(() => {
    const n = () => I();
    return window.addEventListener("hotspot:return-home", n), () => window.removeEventListener("hotspot:return-home", n);
  }, []), d.useEffect(() => {
    const n = H.current;
    if (!n) return;
    n.style.height = "32px";
    const c = Math.min(Math.max(n.scrollHeight, 32), 120);
    n.style.height = `${c}px`, n.style.overflowY = n.scrollHeight > 120 ? "auto" : "hidden", requestAnimationFrame(() => o(n));
  }, [t]), d.useEffect(() => {
    if (!p) return;
    if (!w) {
      v(p.nodes.length);
      return;
    }
    v(0);
    let n = 0;
    const c = window.setInterval(() => {
      n += 1, v(n), n >= p.nodes.length && window.clearInterval(c);
    }, 320);
    return () => window.clearInterval(c);
  }, [w, p]);
  function o(n) {
    if (!(n.scrollHeight > n.clientHeight + 1)) {
      l({ visible: false, thumbHeight: 0, thumbTop: 0 });
      return;
    }
    const j = window.innerWidth <= 767 ? 44 : 32, F = Math.max(n.clientHeight - j - 8, 0), W = Math.max(24, F * n.clientHeight / n.scrollHeight), P = n.scrollHeight - n.clientHeight, _ = P > 0 ? (F - W) * n.scrollTop / P : 0;
    l({ visible: true, thumbHeight: W, thumbTop: _ });
  }
  const r = d.useMemo(() => {
    if (s.length === 0) return ie;
    const n = s.join("、");
    return [`对比${n}的资讯热度趋势`, `${n}中哪个热点声量增长最快`, `对比${n}相关论文发文量与技术热词`];
  }, [s]), i = d.useMemo(() => r.map((n, c) => r[(c + h) % r.length]), [h, r]);
  function M() {
    m(ae), x(0);
  }
  function k(n) {
    m((c) => c.includes(n) ? c.filter((j) => j !== n) : c.length >= 5 ? (q.warning("最多选择 5 个热点，请先移除已有热点。"), c) : [...c, n]), x(0);
  }
  function E(n) {
    m((c) => c.filter((j) => j !== n)), x(0);
  }
  function $(n) {
    S((c) => {
      const j = [n, ...c.filter((F) => F.id !== n.id)].slice(0, 20);
      try {
        localStorage.setItem(J, JSON.stringify(j));
      } catch {
      }
      return j;
    });
  }
  function A(n) {
    if (n.preventDefault(), !t.trim()) return;
    const c = Y(t, s);
    y(c), b(true), $(c), a("");
  }
  function T() {
    if (!p) return;
    const n = Y(p.question, s);
    y(n), b(true), $(n);
  }
  function I() {
    y(null), v(0), b(false), a("");
  }
  function B(n) {
    const c = N.find((j) => j.id === n);
    c && (y(c), b(false), v(c.nodes.length), a(""), u(false));
  }
  function Q(n) {
    const c = n && s.length > 0;
    return e.jsxs("form", { className: `hotspot-question-form ${c ? "has-selected-hotspots" : ""}`, onSubmit: A, "data-node-id": "1183:26321", children: [c && e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "hotspot-selected-row", children: [e.jsxs("span", { className: "hotspot-selected-label", children: ["已选热点（", s.length, "/5）："] }), e.jsx("div", { className: "hotspot-selected-topics", children: s.map((j) => e.jsxs("span", { className: "hotspot-selected-tag", children: [j, e.jsx("button", { type: "button", "aria-label": `移除热点：${j}`, onClick: () => E(j), children: e.jsx(R, { name: "hotspot-tag-close.svg", size: 14 }) })] }, j)) })] }), e.jsx("div", { className: "hotspot-question-divider" })] }), e.jsxs("div", { className: "hotspot-question-entry", children: [e.jsx("textarea", { ref: H, rows: 1, "aria-label": "产业分析或技术分析问题", value: t, onChange: (j) => a(j.target.value), onScroll: (j) => o(j.currentTarget), placeholder: "请输入产业分析或技术分析问题" }), e.jsxs("div", { className: "hotspot-question-controls", children: [C.visible && e.jsx("div", { className: "hotspot-question-scrollbar", "aria-hidden": "true", children: e.jsx("span", { style: { height: C.thumbHeight, transform: `translateY(${C.thumbTop}px)` } }) }), e.jsx("button", { type: "submit", className: "hotspot-send-button", "aria-label": "提交问数问题", disabled: !t.trim(), children: e.jsx("span", { className: "hotspot-send-visual", children: e.jsx(R, { name: "hotspot-send.svg", size: 32 }) }) })] })] })] });
  }
  const U = N.map((n, c) => ({ id: n.id, title: n.question, day: "今天", pinned: false, order: -100 + c }));
  return p ? e.jsxs("section", { className: "hotspot-page hotspot-page-conversation", "aria-label": "技术热点问数对话详情", "data-node-id": "1238:9238", children: [e.jsx(te, { conversation: p, completedSteps: f, isAnimating: w, onRegenerate: T, onNewChat: I, onSuggestion: (n) => a(n), onOpenHistory: () => u(true), composer: Q(false) }), e.jsx(V, { visible: g, onClose: () => u(false), generatedEntries: U, onSelectRecord: B })] }) : e.jsxs("section", { className: "hotspot-page", "aria-labelledby": "hotspot-page-title", "data-node-id": "1183:26293", children: [e.jsx("div", { className: "hotspot-dot-field", "aria-hidden": "true", "data-node-id": "1183:26328", children: e.jsxs("svg", { width: "100%", height: "100%", children: [e.jsx("defs", { children: e.jsx("pattern", { id: "hotspot-dot-pattern", width: "16", height: "14", patternUnits: "userSpaceOnUse", children: e.jsx("image", { href: "./figma/hotspot-dot.svg", width: "4", height: "4" }) }) }), e.jsx("rect", { width: "100%", height: "100%", fill: "url(#hotspot-dot-pattern)" })] }) }), e.jsxs("button", { type: "button", className: "hotspot-history", "aria-expanded": g, "aria-controls": "hotspot-history-drawer", onClick: () => u(true), children: [e.jsx(Z, {}), e.jsx("span", { children: "对话历史" })] }), e.jsxs("div", { className: "hotspot-content", "data-node-id": "1183:26294", children: [e.jsxs("header", { className: "hotspot-heading", "data-node-id": "1183:26296", children: [e.jsx("h1", { id: "hotspot-page-title", children: "问产业、查技术、看趋势，一键形成分析判断" }), e.jsx("p", { children: "从热点发现出发，用数据快速形成产业与技术洞察" })] }), e.jsxs("div", { className: "hotspot-main-area", "data-node-id": "1183:26302", children: [e.jsxs("div", { className: "hotspot-discovery", "data-node-id": "2382:6628", children: [e.jsxs("button", { type: "button", className: "hotspot-discovery-title", "data-node-id": "2382:7967", onClick: M, children: [e.jsx(R, { name: "hotspot-fire.svg", size: 20 }), e.jsx("strong", { children: "本周热点" })] }), e.jsxs("div", { className: "hotspot-topic-cluster", "aria-label": "本周热点主题", "data-node-id": "2382:6630", children: [e.jsx("div", { className: "hotspot-topic-list", children: oe.map((n) => e.jsx("button", { type: "button", "aria-pressed": s.includes(n), className: s.includes(n) ? "is-selected" : "", onClick: () => k(n), children: n }, n)) }), e.jsxs("button", { type: "button", className: "hotspot-analysis-link", onClick: () => q.info("热点分析详情服务尚未接入。"), children: [e.jsx("span", { children: "查看热点分析" }), e.jsx(R, { name: "hotspot-arrow-right.svg", size: 16 })] })] })] }), e.jsxs("div", { className: `hotspot-recommendations ${s.length > 0 ? "has-selected-hotspots" : ""}`, "data-node-id": "1203:1481", children: [e.jsxs("div", { className: "hotspot-recommendation-copy", children: [e.jsxs("div", { className: "hotspot-recommendation-header", "data-node-id": "1203:4535", children: [e.jsxs("strong", { children: [e.jsx(R, { name: "hotspot-ai.svg", size: 20 }), "推荐问"] }), e.jsxs("button", { type: "button", onClick: () => x((n) => (n + 1) % r.length), children: [e.jsx(R, { name: "hotspot-refresh.svg", size: 16 }), "换一换"] })] }), e.jsx("div", { className: "hotspot-question-list", "data-node-id": "1203:1474", children: i.map((n) => {
    const c = s.join("、"), j = c ? n.split(c) : [n];
    return e.jsx("button", { type: "button", onClick: () => a(n), children: c ? e.jsxs(e.Fragment, { children: [j[0], e.jsx("strong", { children: c }), j[1]] }) : n }, n);
  }) })] }), Q(true)] })] })] }), e.jsx(V, { visible: g, onClose: () => u(false), generatedEntries: U, onSelectRecord: B })] });
}
export { ce as default };
