import { r as c, F as e, K as F, aZ as K } from "./index-CNdOvyN0.js";
const _ = [{ id: "pinned-1", title: "量子资讯热度近月趋势", day: "今天", pinned: true, order: 0 }, { id: "pinned-2", title: "量子资讯热度近月趋势", day: "昨天", pinned: true, order: 1 }, { id: "today-1", title: "全域科技资讯热度大盘", day: "今天", pinned: false, order: 2 }, { id: "today-2", title: "各技术主题咨询占比", day: "今天", pinned: false, order: 3 }, { id: "today-3", title: "被提及企业数与覆盖率", day: "今天", pinned: false, order: 4 }, { id: "today-4", title: "产业链各环节企业数分布", day: "今天", pinned: false, order: 5 }, { id: "yesterday-1", title: "全域科技资讯热度大盘", day: "昨天", pinned: false, order: 6 }, { id: "yesterday-2", title: "各技术主题咨询占比", day: "昨天", pinned: false, order: 7 }, { id: "yesterday-3", title: "被提及企业数与覆盖率", day: "昨天", pinned: false, order: 8 }, { id: "yesterday-4", title: "产业链各环节企业数分布", day: "昨天", pinned: false, order: 9 }];
function B({ name: t }) {
  return e.jsx("img", { src: `./figma/${t}`, width: "16", height: "16", alt: "", "aria-hidden": "true" });
}
function V({ visible: t, onClose: a, generatedEntries: d = [], onSelectRecord: g }) {
  const s = c.useRef(null), [p, x] = c.useState(""), [u, h] = c.useState("today-1"), [j, y] = c.useState(_), [b, v] = c.useState(false);
  c.useEffect(() => {
    d.length !== 0 && y((r) => {
      const o = new Set(r.map((i) => i.id)), l = d.filter((i) => !o.has(i.id));
      return l.length > 0 ? [...l, ...r] : r;
    });
  }, [d]), c.useEffect(() => {
    if (!t) {
      x("");
      return;
    }
    const r = document.activeElement, o = (l) => {
      l.key === "Escape" && a();
    };
    return window.addEventListener("keydown", o), requestAnimationFrame(() => {
      var l;
      return (l = s.current) == null ? void 0 : l.focus({ preventScroll: true });
    }), () => {
      window.removeEventListener("keydown", o), r == null || r.focus({ preventScroll: true });
    };
  }, [a, t]);
  const f = c.useMemo(() => {
    const r = p.trim().toLocaleLowerCase(), o = j.filter((i) => !r || i.title.toLocaleLowerCase().includes(r));
    return [{ label: "已置顶", entries: o.filter((i) => i.pinned) }, { label: "今天", entries: o.filter((i) => !i.pinned && i.day === "今天") }, { label: "昨天", entries: o.filter((i) => !i.pinned && i.day === "昨天") }].map((i) => ({ ...i, entries: [...i.entries].sort((S, k) => S.order - k.order) })).filter((i) => i.entries.length > 0);
  }, [j, p]);
  function w(r) {
    y((o) => o.map((l) => l.id === r ? { ...l, pinned: !l.pinned } : l));
  }
  function $(r) {
    return e.jsxs("div", { className: `hotspot-history-row ${u === r.id ? "is-active" : ""}`, children: [e.jsx("button", { type: "button", className: "hotspot-history-row-main", "aria-pressed": u === r.id, onClick: () => {
      h(r.id), g == null || g(r.id);
    }, children: e.jsx("span", { children: r.title }) }), e.jsx("button", { type: "button", className: "hotspot-history-pin-action", "aria-label": `${r.pinned ? "取消置顶" : "置顶"}：${r.title}`, title: r.pinned ? "取消置顶" : "置顶", onClick: () => w(r.id), children: e.jsx(B, { name: r.pinned ? "hotspot-history-pin.svg" : "hotspot-history-unpin.svg" }) })] }, r.id);
  }
  if (!t) return null;
  const C = e.jsxs("div", { className: "hotspot-history-layer", "data-node-id": "1216:7433", children: [e.jsx("button", { type: "button", tabIndex: -1, className: "hotspot-history-mask", "aria-label": "关闭历史对话", onClick: a }), e.jsxs("aside", { id: "hotspot-history-drawer", className: "hotspot-history-drawer", role: "dialog", "aria-modal": "true", "aria-labelledby": "hotspot-history-title", "data-node-id": "1216:7451", children: [e.jsx("div", { className: "hotspot-history-drawer-heading", children: e.jsxs("div", { children: [e.jsx("h2", { id: "hotspot-history-title", children: "历史对话" }), e.jsx("button", { ref: s, type: "button", "aria-label": "关闭历史对话", onClick: a, children: e.jsx(B, { name: "hotspot-history-close.svg" }) })] }) }), e.jsxs("div", { className: "hotspot-history-drawer-content", children: [e.jsxs("label", { className: "hotspot-history-search", children: [e.jsx(B, { name: "hotspot-history-search.svg" }), e.jsx("input", { value: p, onChange: (r) => x(r.target.value), placeholder: "搜索历史对话", "aria-label": "搜索历史对话" })] }), e.jsx("div", { className: "hotspot-history-list", children: f.length > 0 ? f.map((r) => {
    const o = r.label === "已置顶", l = o && b;
    return e.jsxs("section", { className: "hotspot-history-group", children: [o ? e.jsxs("button", { type: "button", className: "hotspot-history-group-toggle", "aria-expanded": !l, onClick: () => v((i) => !i), children: [e.jsx("span", { children: r.label }), e.jsx("i", { "aria-hidden": "true" })] }) : e.jsx("h3", { children: r.label }), !l && e.jsx("div", { children: r.entries.map($) })] }, r.label);
  }) : e.jsx("p", { className: "hotspot-history-empty", children: "未找到相关历史对话" }) })] }), e.jsx("div", { className: "hotspot-history-footer", children: e.jsx("button", { type: "button", className: "hotspot-history-manage", onClick: () => F.info("历史对话管理页面将在后续补充。"), children: "历史对话管理" }) })] })] }), N = document.querySelector(".main-panel.is-hotspot-panel");
  return N ? K.createPortal(C, N) : C;
}
function Y({ size: t = 16 }) {
  return e.jsx("svg", { className: "asset-icon hotspot-history-icon", width: t, height: t, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: e.jsx("path", { d: "M4.11035 3.4389C6.46506 1.42794 10.0164 1.5313 12.2422 3.75823C14.5813 6.09923 14.5813 9.90845 12.2422 12.2494C11.0725 13.4199 9.53637 14.0053 8 14.0053C6.46348 14.0053 4.92749 13.4199 3.75781 12.2494C2.62457 11.1157 2.00005 9.60818 2 8.00433C2 7.72804 2.22391 7.50335 2.5 7.50335C2.77609 7.50335 3 7.72804 3 8.00433C3.00005 9.34081 3.52051 10.5974 4.46484 11.5424C6.41445 13.4925 9.58555 13.4925 11.5352 11.5424C13.4844 9.59169 13.4844 6.41712 11.5352 4.46624C9.71202 2.642 6.82006 2.52511 4.8584 4.11273H5.61035C5.88644 4.11273 6.11034 4.33645 6.11035 4.61273C6.11035 4.88901 5.88645 5.11273 5.61035 5.11273H3.61035C3.33446 5.11249 3.11035 4.88887 3.11035 4.61273V2.61175C3.11035 2.33561 3.33446 2.11101 3.61035 2.11077C3.88645 2.11077 4.11035 2.33546 4.11035 2.61175V3.4389ZM8 4.5014C8.27609 4.5014 8.5 4.72609 8.5 5.00237V7.7973L10.3535 9.65179C10.5487 9.84724 10.5488 10.1644 10.3535 10.3598C10.2561 10.4576 10.1277 10.5062 10 10.5063C9.8723 10.5063 9.74411 10.4574 9.64648 10.3598L7.71973 8.43109C7.57827 8.28948 7.50005 8.101 7.5 7.90081V5.00237C7.5 4.72609 7.72391 4.5014 8 4.5014Z", fill: "currentColor" }) });
}
const G = [{ key: "line", label: "折线图" }, { key: "bar", label: "柱状图" }, { key: "table", label: "表格" }];
function X(t, a, d, g, s) {
  const p = Math.min(...t), u = Math.max(...t) - p || 1;
  return t.map((h, j) => ({ x: g + j * a / Math.max(t.length - 1, 1), y: s + d - (h - p) / u * d, value: h }));
}
function z({ visualization: t }) {
  const [a, d] = c.useState("line"), g = c.useMemo(() => t.series.map((s) => ({ ...s, points: X(s.values, 580, 132, 72, 30) })), [t]);
  return e.jsxs("section", { className: "hotspot-result-chart", "aria-label": t.title, children: [e.jsxs("header", { children: [e.jsx("h3", { children: t.title }), e.jsx("div", { className: "hotspot-chart-switch", role: "tablist", "aria-label": "图表类型", children: G.map((s) => e.jsx("button", { type: "button", role: "tab", "aria-selected": a === s.key, className: a === s.key ? "is-active" : "", onClick: () => d(s.key), children: s.label }, s.key)) })] }), a === "table" ? e.jsx("div", { className: "hotspot-chart-table-wrap", children: e.jsxs("table", { children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "周期" }), t.series.map((s) => e.jsx("th", { children: s.name }, s.name))] }) }), e.jsx("tbody", { children: t.labels.map((s, p) => e.jsxs("tr", { children: [e.jsx("td", { children: s }), t.series.map((x) => e.jsx("td", { children: x.values[p] }, x.name))] }, s)) })] }) }) : e.jsxs("figure", { children: [e.jsx("div", { className: "hotspot-chart-legend", children: t.series.map((s) => e.jsxs("span", { children: [e.jsx("i", { style: { background: s.color } }), s.name] }, s.name)) }), e.jsxs("svg", { viewBox: "0 0 720 210", role: "img", "aria-label": `${t.title}，${a === "line" ? "折线图" : "柱状图"}`, children: [[0, 1, 2, 3, 4].map((s) => e.jsx("line", { x1: "48", x2: "676", y1: 30 + s * 33, y2: 30 + s * 33, stroke: "#E5E6EB", strokeDasharray: s === 4 ? void 0 : "3 3" }, s)), a === "line" && g.map((s) => {
    const p = s.points.map((u) => `${u.x},${u.y}`).join(" "), x = `${s.points[0].x},162 ${p} ${s.points[s.points.length - 1].x},162`;
    return e.jsxs("g", { children: [e.jsx("polygon", { points: x, fill: s.color, opacity: ".06" }), e.jsx("polyline", { points: p, fill: "none", stroke: s.color, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), s.points.map((u) => e.jsx("circle", { cx: u.x, cy: u.y, r: "3", fill: s.color, children: e.jsx("title", { children: `${s.name}: ${u.value}` }) }, `${s.name}-${u.x}`))] }, s.name);
  }), a === "bar" && g.flatMap((s, p) => s.points.map((x, u) => {
    const y = 72 + u * 580 / Math.max(t.labels.length - 1, 1) + (p - 0.5) * 20 - 9;
    return e.jsx("rect", { x: y, y: x.y, width: 18, height: Math.max(2, 162 - x.y), rx: "2", fill: s.color, opacity: p === 0 ? 0.9 : 0.68, children: e.jsx("title", { children: `${s.name}: ${x.value}` }) }, `${s.name}-${u}`);
  })), t.labels.map((s, p) => e.jsx("text", { x: 72 + p * 580 / Math.max(t.labels.length - 1, 1), y: "190", textAnchor: "middle", fill: "#86909C", fontSize: "12", children: s }, s))] }), e.jsx("figcaption", { children: "确定性的前端演示图表，接入真实数据源后由同一字段结构渲染。" })] })] });
}
function D({ name: t }) {
  return e.jsx("img", { src: `./figma/${t}`, width: "16", height: "16", alt: "", "aria-hidden": "true" });
}
function L({ label: t, icon: a, onClick: d, pressed: g }) {
  return e.jsx("button", { type: "button", "aria-label": t, "aria-pressed": g, title: t, onClick: d, children: e.jsx(D, { name: a }) });
}
function ee({ conversation: t, completedSteps: a, isAnimating: d, onRegenerate: g, onNewChat: s, onSuggestion: p, onOpenHistory: x, composer: u }) {
  const [h, j] = c.useState(null), [y, b] = c.useState(() => new Set(t.nodes.map((o) => o.key))), v = c.useRef(null), f = c.useRef([]), w = c.useRef(a), $ = a >= t.nodes.length;
  c.useEffect(() => {
    b(new Set(t.nodes.map((o) => o.key))), j(null);
  }, [t.id, t.nodes]), c.useEffect(() => {
    const o = w.current;
    if (w.current = a, !d || a <= o) return;
    const l = v.current, i = Math.min(a, t.nodes.length - 1), S = f.current[i];
    if (!l || !S) return;
    const k = l.getBoundingClientRect(), E = S.getBoundingClientRect(), H = k.top + 24, R = k.bottom - 24, q = E.top < H ? E.top - H : E.bottom > R ? E.bottom - R : 0;
    if (Math.abs(q) < 1) return;
    const T = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    l.scrollTo({ top: l.scrollTop + q, behavior: T ? "auto" : "smooth" });
  }, [a, t.nodes.length, d]);
  function C(o) {
    b((l) => {
      const i = new Set(l);
      return i.has(o) ? i.delete(o) : i.add(o), i;
    });
  }
  function N() {
    var l;
    const o = `${t.answer.lead}
${t.answer.detail}`;
    (l = navigator.clipboard) == null || l.writeText(o).then(() => F.success("回答已复制。")).catch(() => F.error("复制失败，请手动选择文本。"));
  }
  function r() {
    const o = new Blob([JSON.stringify(t, null, 2)], { type: "application/json;charset=utf-8" }), l = URL.createObjectURL(o), i = document.createElement("a");
    i.href = l, i.download = `热点问数-${t.id}.json`, i.click(), URL.revokeObjectURL(l);
  }
  return e.jsxs("section", { className: "hotspot-conversation-view", "aria-label": "技术热点问数对话详情", "data-node-id": "1238:9238", children: [e.jsx("button", { type: "button", className: "hotspot-conversation-history", "aria-label": "打开历史对话", onClick: x, children: e.jsx(Y, {}) }), e.jsx("div", { ref: v, className: "hotspot-conversation-scroll", children: e.jsxs("div", { className: "hotspot-conversation-content", children: [e.jsx("div", { className: "hotspot-user-question", children: t.question }), e.jsxs("article", { className: "hotspot-answer-block", children: [e.jsx("p", { className: "hotspot-generating-label", "aria-live": "polite", children: $ ? "已完成生成" : "正在为你生成…" }), e.jsx("ol", { className: "hotspot-process-list", "aria-label": "生成流程", children: t.nodes.map((o, l) => {
    const i = l < a, S = l === a, k = S || i && y.has(o.key), E = d && i && l === a - 1;
    return e.jsxs("li", { ref: (H) => {
      f.current[l] = H;
    }, className: `${i ? "is-complete" : S ? "is-running" : ""} ${E ? "is-latest" : ""}`, children: [e.jsx("span", { className: "hotspot-process-rail", children: e.jsx("span", { children: i ? e.jsx(D, { name: "hotspot-answer-step.svg" }) : l + 1 }) }), e.jsxs("div", { children: [e.jsxs("button", { type: "button", className: "hotspot-process-heading", disabled: !i, "aria-expanded": i ? k : void 0, "aria-controls": `hotspot-step-${o.key}`, onClick: () => i && C(o.key), children: [e.jsxs("span", { children: [e.jsx("strong", { children: o.label }), o.tags.map((H) => e.jsx("i", { children: H }, H))] }), i && e.jsx("span", { className: "hotspot-process-toggle", "aria-hidden": "true" })] }), e.jsx("div", { id: `hotspot-step-${o.key}`, className: `hotspot-process-detail ${k ? "is-expanded" : ""}`, "aria-hidden": !k, children: e.jsx("div", { children: e.jsx("p", { children: o.detail }) }) })] })] }, o.key);
  }) }), $ && e.jsxs("div", { className: `hotspot-answer-result ${d ? "is-visible" : ""}`, children: [e.jsxs("div", { className: "hotspot-answer-copy", children: [e.jsx("p", { children: t.answer.lead }), e.jsx("p", { children: t.answer.detail })] }), e.jsx(z, { visualization: t.visualization }), t.warnings.length > 0 && e.jsxs("aside", { className: "hotspot-answer-warning", children: [e.jsxs("strong", { children: [e.jsx(D, { name: "hotspot-answer-warning.svg" }), "异常发现"] }), t.warnings.map((o) => e.jsx("p", { children: o }, o))] }), e.jsxs("div", { className: "hotspot-answer-actions", children: [e.jsx(L, { label: "重新生成", icon: "hotspot-answer-reset.svg", onClick: g }), e.jsx(L, { label: "复制回答", icon: "hotspot-answer-copy.svg", onClick: N }), e.jsx(L, { label: "在新窗口查看", icon: "hotspot-answer-jump.svg", onClick: () => F.info("独立结果页服务尚未接入。") }), e.jsx(L, { label: "下载结果", icon: "hotspot-answer-download.svg", onClick: r }), e.jsx("span", {}), e.jsx(L, { label: "回答有帮助", icon: "hotspot-answer-like.svg", pressed: h === "like", onClick: () => j((o) => o === "like" ? null : "like") }), e.jsx(L, { label: "回答需改进", icon: "hotspot-answer-dislike.svg", pressed: h === "dislike", onClick: () => j((o) => o === "dislike" ? null : "dislike") })] })] })] }), $ && e.jsx("div", { className: "hotspot-followups", children: t.suggestions.map((o) => e.jsx("button", { type: "button", onClick: () => p(o), children: o }, o)) })] }) }), e.jsxs("div", { className: "hotspot-conversation-composer", children: [e.jsxs("button", { type: "button", className: "hotspot-new-chat", onClick: s, children: [e.jsx(D, { name: "hotspot-answer-new.svg" }), "新建对话"] }), u, e.jsx("p", { children: "内容由 AI 流程预览生成，请认真核查结果" })] })] });
}
function te(t) {
  let a = 2166136261;
  for (const d of t) a = Math.imul(a ^ d.charCodeAt(0), 16777619);
  return Math.abs(a >>> 0);
}
function se(t = 4) {
  const a = /* @__PURE__ */ new Date();
  return Array.from({ length: t }, (d, g) => {
    const s = new Date(a.getFullYear(), a.getMonth() - t + g + 1, 1);
    return `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}`;
  });
}
function W(t, a) {
  var N;
  const d = t.trim(), g = te(`${d}|${a.join("|")}`), s = /趋势|变化|月度|近\d+个?月|环比|增长|下降/.test(d), p = /对比|比较|哪个|最高|最快|差异/.test(d), x = /占比|构成|分布|结构|环节/.test(d), u = s ? "趋势查询" : p ? "对比分析" : x ? "结构分析" : "综合研判", h = a.length > 0 ? a.join("、") : ((N = d.match(/[\u4e00-\u9fa5A-Za-z0-9]+/)) == null ? void 0 : N[0]) ?? "当前问题", j = 900 + g % 900, y = Array.from({ length: 4 }, (r, o) => Math.round(j * (0.72 + (g >> o * 3) % 50 / 100))), b = y.map((r, o) => o === 0 ? 0 : Number(((r - y[o - 1]) / y[o - 1] * 100).toFixed(1))), v = y[0], f = y[y.length - 1], w = f > v * 1.08 ? "上升" : f < v * 0.92 ? "回落" : "波动", $ = ["科技资讯", ...s ? ["资讯热度", "环比"] : [], ...x ? ["结构分布"] : [], ...a.slice(0, 2)], C = se();
  return { id: `local-${Date.now()}`, question: d, createdAt: (/* @__PURE__ */ new Date()).toISOString(), preview: true, nodes: [{ key: "analysis", label: "问题分析", tags: ["意图识别"], detail: `识别结果：${u}` }, { key: "retrieval", label: "数据检索", tags: [...new Set($)].slice(0, 4), detail: "命中本地演示数据集（待接入真实数据源）" }, { key: "permission", label: "权限审查", tags: [], detail: "当前为前端流程预览，未执行真实账号权限校验" }, { key: "fetch", label: "数据获取", tags: [], detail: "已生成确定性的本地演示序列" }, { key: "answer", label: "最终回答", tags: ["核心结论"], detail: `${h}呈现${w}特征` }], answer: { lead: `围绕“${d}”已完成本地流程预览。`, detail: `${h}在最近四个演示周期内呈现${w}特征；当前数值用于验证页面结构与交互，不代表真实行业结论。`, direction: w }, visualization: { title: `${h}资讯热度趋势（演示数据）`, labels: C, series: [{ name: "资讯数（演示）", color: "#165DFF", values: y }, { name: "环比（演示）", color: "#FF7D00", values: b }] }, warnings: ["当前图表为确定性的前端演示数据，仅用于验证流程和布局；接入真实数据服务后方可用于分析判断。"], suggestions: [`进一步拆解${h}的核心指标构成，哪些维度贡献最大？`, `查看${h}更长时间范围的变化趋势，主要拐点出现在哪里？`, `分析${h}与本周热点的关联情况，当前关注度最高的话题是什么？`] };
}
const ne = ["AI硬件", "机器人减速器", "N型光伏", "无人配送", "固态电解质", "先进封装", "生物制造", "量子计算"], O = ["量子相关资讯的热度近几个月趋势如何，涨还是跌", "各技术主题的资讯占比构成，哪个主题声量最大", "新能源汽车产业链各环节的企业数分布"], Z = "thinktank:hotspot-conversations:v1";
function oe() {
  try {
    const t = JSON.parse(localStorage.getItem(Z) ?? "[]");
    return Array.isArray(t) ? t.slice(0, 20) : [];
  } catch {
    return [];
  }
}
function A({ name: t, size: a }) {
  return e.jsx("img", { src: `./figma/${t}`, width: a, height: a, alt: "", "aria-hidden": "true" });
}
function ie() {
  const [t, a] = c.useState(""), [d, g] = c.useState(0), [s, p] = c.useState([]), [x, u] = c.useState(false), [h, j] = c.useState(null), [y, b] = c.useState(0), [v, f] = c.useState(false), [w, $] = c.useState(oe), C = c.useRef(null), [N, r] = c.useState({ visible: false, thumbHeight: 0, thumbTop: 0 });
  c.useEffect(() => (document.body.classList.add("hotspot-page-active"), () => document.body.classList.remove("hotspot-page-active")), []), c.useEffect(() => (document.body.classList.toggle("hotspot-conversation-active", !!h), () => document.body.classList.remove("hotspot-conversation-active")), [h]), c.useEffect(() => {
    const n = () => R();
    return window.addEventListener("hotspot:return-home", n), () => window.removeEventListener("hotspot:return-home", n);
  }, []), c.useEffect(() => {
    const n = C.current;
    if (!n) return;
    n.style.height = "32px";
    const m = Math.min(Math.max(n.scrollHeight, 32), 120);
    n.style.height = `${m}px`, n.style.overflowY = n.scrollHeight > 120 ? "auto" : "hidden", requestAnimationFrame(() => o(n));
  }, [t]), c.useEffect(() => {
    if (!h) return;
    if (!v) {
      b(h.nodes.length);
      return;
    }
    b(0);
    let n = 0;
    const m = window.setInterval(() => {
      n += 1, b(n), n >= h.nodes.length && window.clearInterval(m);
    }, 320);
    return () => window.clearInterval(m);
  }, [v, h]);
  function o(n) {
    if (!(n.scrollHeight > n.clientHeight + 1)) {
      r({ visible: false, thumbHeight: 0, thumbTop: 0 });
      return;
    }
    const M = window.innerWidth <= 767 ? 44 : 32, I = Math.max(n.clientHeight - M - 8, 0), U = Math.max(24, I * n.clientHeight / n.scrollHeight), P = n.scrollHeight - n.clientHeight, J = P > 0 ? (I - U) * n.scrollTop / P : 0;
    r({ visible: true, thumbHeight: U, thumbTop: J });
  }
  const l = c.useMemo(() => O.map((n, m) => O[(m + d) % O.length]), [d]);
  function i(n) {
    p([n]), a(n), requestAnimationFrame(() => {
      var m;
      return (m = C.current) == null ? void 0 : m.focus({ preventScroll: true });
    });
  }
  function S(n) {
    p([]), a(n), requestAnimationFrame(() => {
      var m;
      return (m = C.current) == null ? void 0 : m.focus({ preventScroll: true });
    });
  }
  function k(n) {
    $((m) => {
      const M = [n, ...m.filter((I) => I.id !== n.id)].slice(0, 20);
      try {
        localStorage.setItem(Z, JSON.stringify(M));
      } catch {
      }
      return M;
    });
  }
  function E(n) {
    if (n.preventDefault(), !t.trim()) return;
    const m = W(t, s);
    j(m), f(true), k(m), a("");
  }
  function H() {
    if (!h) return;
    const n = W(h.question, s);
    j(n), f(true), k(n);
  }
  function R() {
    j(null), b(0), f(false), p([]), a("");
  }
  function q(n) {
    const m = w.find((M) => M.id === n);
    m && (j(m), f(false), b(m.nodes.length), a(""), u(false));
  }
  function T() {
    return e.jsx("form", { className: "hotspot-question-form", onSubmit: E, "data-node-id": "1183:26321", children: e.jsxs("div", { className: "hotspot-question-entry", children: [e.jsx("textarea", { ref: C, rows: 1, "aria-label": "产业分析或技术分析问题", value: t, onChange: (n) => {
      a(n.target.value), s.length > 0 && n.target.value !== s[0] && p([]);
    }, onScroll: (n) => o(n.currentTarget), placeholder: "请输入产业分析或技术分析问题" }), e.jsxs("div", { className: "hotspot-question-controls", children: [N.visible && e.jsx("div", { className: "hotspot-question-scrollbar", "aria-hidden": "true", children: e.jsx("span", { style: { height: N.thumbHeight, transform: `translateY(${N.thumbTop}px)` } }) }), e.jsx("button", { type: "submit", className: "hotspot-send-button", "aria-label": "提交问数问题", disabled: !t.trim(), children: e.jsx("span", { className: "hotspot-send-visual", children: e.jsx(A, { name: "hotspot-send.svg", size: 32 }) }) })] })] }) });
  }
  const Q = w.map((n, m) => ({ id: n.id, title: n.question, day: "今天", pinned: false, order: -100 + m }));
  return h ? e.jsxs("section", { className: "hotspot-page hotspot-page-conversation", "aria-label": "技术热点问数对话详情", "data-node-id": "1238:9238", children: [e.jsx(ee, { conversation: h, completedSteps: y, isAnimating: v, onRegenerate: H, onNewChat: R, onSuggestion: (n) => a(n), onOpenHistory: () => u(true), composer: T() }), e.jsx(V, { visible: x, onClose: () => u(false), generatedEntries: Q, onSelectRecord: q })] }) : e.jsxs("section", { className: "hotspot-page", "aria-labelledby": "hotspot-page-title", "data-node-id": "1183:26293", children: [e.jsx("div", { className: "hotspot-dot-field", "aria-hidden": "true", "data-node-id": "1183:26328", children: e.jsxs("svg", { width: "100%", height: "100%", children: [e.jsx("defs", { children: e.jsx("pattern", { id: "hotspot-dot-pattern", width: "16", height: "14", patternUnits: "userSpaceOnUse", children: e.jsx("image", { href: "./figma/hotspot-dot.svg", width: "4", height: "4" }) }) }), e.jsx("rect", { width: "100%", height: "100%", fill: "url(#hotspot-dot-pattern)" })] }) }), e.jsxs("button", { type: "button", className: "hotspot-history", "aria-expanded": x, "aria-controls": "hotspot-history-drawer", onClick: () => u(true), children: [e.jsx(Y, {}), e.jsx("span", { children: "对话历史" })] }), e.jsxs("div", { className: "hotspot-content", "data-node-id": "1183:26294", children: [e.jsxs("header", { className: "hotspot-heading", "data-node-id": "1183:26296", children: [e.jsx("h1", { id: "hotspot-page-title", children: "问产业、查技术、看趋势，一键形成分析判断" }), e.jsx("p", { children: "从热点发现出发，用数据快速形成产业与技术洞察" })] }), e.jsxs("div", { className: "hotspot-main-area", "data-node-id": "1183:26302", children: [e.jsxs("div", { className: "hotspot-discovery", "data-node-id": "2382:6628", children: [e.jsxs("div", { className: "hotspot-discovery-title", "data-node-id": "2382:7967", children: [e.jsx(A, { name: "hotspot-fire.svg", size: 20 }), e.jsx("strong", { children: "本周热点" })] }), e.jsxs("div", { className: "hotspot-topic-cluster", "aria-label": "本周热点主题", "data-node-id": "2382:6630", children: [e.jsx("div", { className: "hotspot-topic-list", children: ne.map((n) => e.jsx("button", { type: "button", "aria-pressed": s.includes(n), className: s.includes(n) ? "is-selected" : "", onClick: () => i(n), children: n }, n)) }), e.jsxs("button", { type: "button", className: "hotspot-analysis-link", onClick: () => F.info("热点分析详情服务尚未接入。"), children: [e.jsx("span", { children: "查看热点分析" }), e.jsx(A, { name: "hotspot-arrow-right.svg", size: 16 })] })] })] }), e.jsxs("div", { className: "hotspot-recommendations", "data-node-id": "1203:1481", children: [e.jsxs("div", { className: "hotspot-recommendation-copy", children: [e.jsxs("div", { className: "hotspot-recommendation-header", "data-node-id": "1203:4535", children: [e.jsxs("strong", { children: [e.jsx(A, { name: "hotspot-ai.svg", size: 20 }), "推荐问"] }), e.jsxs("button", { type: "button", onClick: () => g((n) => (n + 1) % O.length), children: [e.jsx(A, { name: "hotspot-refresh.svg", size: 16 }), "换一换"] })] }), e.jsx("div", { className: "hotspot-question-list", "data-node-id": "1203:1474", children: l.map((n) => e.jsx("button", { type: "button", onClick: () => S(n), children: n }, n)) })] }), T()] })] })] }), e.jsx(V, { visible: x, onClose: () => u(false), generatedEntries: Q, onSelectRecord: q })] });
}
export { ie as default };
