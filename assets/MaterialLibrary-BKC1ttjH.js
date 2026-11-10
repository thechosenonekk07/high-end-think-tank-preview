import { r as p, F as e, p as ue, G as y, ae as $t, N as q, S as _, v as z, U as Ne, a0 as De, ac as qe, V as Ce, X as lt, L as Z, J as Ve, O as W, K as A, af as Lt, H as _e, M as be, q as qt, ag as Dt, ah as Ft, Y as At } from "./index-BwwIQFuW.js";
import { e as Pt } from "./reportTasks-DAXmF1j7.js";
import { P as Mt, r as Rt, v as Oe, g as it, p as Et, a as nt, b as Vt, c as Ze, d as Ot, f as zt, e as et, h as Fe, i as Ut, j as me, k as Bt, m as Wt, t as Me, n as tt, l as ze, s as Kt, o as Qt, q as Gt, u as rt, w as Xt, x as Yt, y as Ht, z as Jt, A as _t } from "./templateVersionHistory-BLLkZxGf.js";
import { I as Ae } from "./index-DistsoRr.js";
import { S as Re } from "./index-T0DvAvlo.js";
import { U as Be } from "./upload-7h_6sPb4.js";
import "./index-DxCfm1K9.js";
function ot(a) {
  return a === "official" ? { label: "系统模板", editLabel: "复制并编辑" } : { label: "个人模版", editLabel: "编辑" };
}
function Ue(a) {
  return a.ownership === "personal" ? a.sceneTags.slice(0, 1) : a.sceneTags;
}
const de = "适用于产业链梳理、市场空间测算、竞争格局于趋势判断", Zt = [{ id: "investment-value-1", name: "投资价值研究模板", description: de, category: "研究报告", industry: "金融", scene: "投资决策", sceneTags: ["产业研究", "产业链分析", "投资价值"], ownership: "official" }, { id: "investment-value-2", name: "投资价值研究模板", description: de, category: "研究报告", industry: "先进制造", scene: "研究分析", sceneTags: ["产业链分析"], ownership: "official" }, { id: "investment-value-3", name: "投资价值研究模板", description: de, category: "研究报告", industry: "人工智能", scene: "趋势洞察", sceneTags: ["产业研究", "产业链分析", "竞争分析", "投资价值"], ownership: "official" }, { id: "investment-value-4", name: "投资价值研究模板", description: de, category: "研究报告", industry: "新能源", scene: "投资决策", sceneTags: ["产业研究", "投资价值"], ownership: "official" }, { id: "investment-value-5", name: "投资价值研究模板", description: de, category: "研究报告", industry: "低空经济", scene: "研究分析", sceneTags: ["产业研究"], ownership: "personal" }, { id: "investment-value-6", name: "投资价值研究模板", description: de, category: "研究报告", industry: "产业政策", scene: "研究分析", sceneTags: ["产业链分析"], ownership: "personal" }, { id: "insight-low-altitude", name: "低空经济趋势洞察模板", description: "用于梳理政策变化、应用场景与产业发展趋势", category: "洞察报告", industry: "低空经济", scene: "产业研究", sceneTags: ["产业研究", "政策研究", "技术趋势", "投资价值"], ownership: "official" }, { id: "insight-ai-technology", name: "人工智能技术洞察模板", description: "用于跟踪技术路线、产品进展与应用机会", category: "洞察报告", industry: "人工智能", scene: "技术趋势", sceneTags: ["技术趋势", "技术空白"], ownership: "official" }, { id: "insight-chip-supply-chain", name: "集成电路产业链洞察模板", description: "用于分析产业链环节、关键企业与供需变化", category: "洞察报告", industry: "集成电路", scene: "产业链分析", sceneTags: ["产业研究", "产业链分析", "竞争分析"], ownership: "official" }, { id: "insight-biomed-innovation", name: "生物医药创新洞察模板", description: "用于梳理研发热点、创新成果与转化方向", category: "洞察报告", industry: "生物医药", scene: "成果转化", sceneTags: ["成果转化"], ownership: "official" }, { id: "insight-robotics-application", name: "机器人应用场景洞察模板", description: "用于对比典型场景、落地条件与应用需求", category: "洞察报告", industry: "机器人", scene: "产业研究", sceneTags: ["产业研究"], ownership: "personal" }, { id: "insight-connected-vehicles", name: "智能网联汽车市场洞察模板", description: "用于分析市场需求、竞争格局与产品定位", category: "洞察报告", industry: "智能网联汽车", scene: "竞争分析", sceneTags: ["竞争分析"], ownership: "personal" }, { id: "strategy-low-altitude", name: "低空经济产业布局战略模板", description: "用于明确产业定位、重点赛道与布局路径", category: "战略咨询报告", industry: "低空经济", scene: "招商策略", sceneTags: ["产业研究", "政策研究", "招商策略", "转型战略"], ownership: "official" }, { id: "strategy-embodied-intelligence", name: "具身智能产业发展战略模板", description: "用于梳理发展基础、战略目标与行动任务", category: "战略咨询报告", industry: "具身智能", scene: "转型战略", sceneTags: ["产业研究", "技术趋势", "转型战略"], ownership: "official" }, { id: "strategy-chip-investment", name: "集成电路招商策略模板", description: "用于识别产业链缺口、招商对象与落地条件", category: "战略咨询报告", industry: "集成电路", scene: "招商策略", sceneTags: ["产业链分析", "招商策略", "投资价值"], ownership: "official" }, { id: "strategy-digital-transformation", name: "产业数字化转型战略模板", description: "用于评估转型需求、建设重点与实施阶段", category: "战略咨询报告", industry: "软件与信息服务", scene: "转型战略", sceneTags: ["项目评价", "转型战略"], ownership: "official" }, { id: "strategy-biomed-commercialization", name: "生物医药成果转化战略模板", description: "用于梳理成果资源、合作模式与转化路径", category: "战略咨询报告", industry: "生物医药", scene: "成果转化", sceneTags: ["成果转化"], ownership: "personal" }, { id: "strategy-terminal-patents", name: "智能终端专利布局战略模板", description: "用于分析技术方向、专利空白与布局重点", category: "战略咨询报告", industry: "智能终端", scene: "专利布局", sceneTags: ["专利布局"], ownership: "personal" }], ea = ["研究报告", "洞察报告", "战略咨询报告", "其他"], ta = ["全部行业", "传感器", "低空经济", "合成生物", "机器人", "集成电路", "具身智能", "人工智能", "软件与信息服务", "生物医药", "数字创意", "智能网联汽车", "智能终端", "其他"], aa = ["全部场景", "产业研究", "产业链分析", "政策研究", "技术趋势", "技术空白", "成果转化", "产学研", "竞争分析", "专利布局", "项目评价", "招商策略", "转型战略", "投资价值", "其他"];
function sa(a, r, o, j, d = false) {
  if (!r.length) return { sectionId: a };
  const s = r.find((f) => f.itemId === j);
  if (!d && s && o >= s.top && o <= s.bottom) return null;
  const n = d ? void 0 : r.find((f) => o < (f.top + f.bottom) / 2), c = n ?? r[r.length - 1];
  return c.itemId === j ? null : { sectionId: a, itemId: c.itemId, position: n ? "before" : "after" };
}
function la(a, r, o, j) {
  if (!a.length) return [{ id: j, title: "新建一级标题", description: "请输入一级标题说明。", items: [o] }];
  const d = a.find((c) => c.id === r || c.items.some((f) => f.id === r)) ?? a[0], s = d.items.findIndex((c) => c.id === r), n = s >= 0 ? s + 1 : 0;
  return a.map((c) => c.id === d.id ? { ...c, items: [...c.items.slice(0, n), o, ...c.items.slice(n)] } : c);
}
function ia(a, r, o, j, d = "after") {
  const s = a.find((h) => h.items.some((S) => S.id === r)), n = a.find((h) => h.id === o);
  if (!s || !n || j === r) return a;
  const c = s.items.find((h) => h.id === r), f = n.items.filter((h) => h.id !== r);
  let x = j === void 0 ? f.length : f.findIndex((h) => h.id === j);
  return x < 0 || (j !== void 0 && d === "after" && (x += 1), s.id === n.id && s.items.indexOf(c) === x) ? a : (f.splice(x, 0, c), a.map((h) => h.id === n.id ? { ...h, items: f } : h.id === s.id ? { ...h, items: h.items.filter((S) => S.id !== r) } : h));
}
function we({ label: a, title: r, content: o, tooltip: j, onDelete: d }) {
  const [s, n] = p.useState(false), [c, f] = p.useState(false), x = e.jsx(y, { type: "text", status: "danger", className: "custom-template-delete-button", icon: e.jsx($t, {}), "aria-label": a });
  return e.jsx(Mt, { title: r, content: o, position: "tr", popupVisible: s, onVisibleChange: (h) => {
    n(h), h && f(false);
  }, okText: "删除", cancelText: "取消", okButtonProps: { status: "danger" }, onOk: (h) => {
    h.stopPropagation(), d();
  }, onCancel: (h) => h.stopPropagation(), children: e.jsx("span", { className: `custom-template-delete-trigger ${s ? "is-confirming" : ""}`, onClick: (h) => h.stopPropagation(), onKeyDown: (h) => h.stopPropagation(), children: j ? e.jsx(ue, { content: j, position: "top", trigger: ["hover", "focus"], disabled: s, popupVisible: c && !s, onVisibleChange: f, children: x }) : x }) });
}
function ct({ rows: a, config: r }) {
  const o = Rt(r), j = /* @__PURE__ */ new Map();
  a.forEach((h) => {
    const S = String(h[o === "line" ? "period" : "category"]);
    j.set(S, (j.get(S) ?? 0) + Number(h.value));
  });
  const d = [...j], s = Math.max(1, ...d.map(([, h]) => h)), n = ["#165dff", "#4080ff", "#94bfff", "#bedaff"], c = { bar: "柱状图", line: "折线图", pie: "饼图" };
  if (o === "pie") {
    const h = d.reduce((w, [, D]) => w + D, 0);
    let S = -Math.PI / 2;
    return e.jsxs("svg", { className: "custom-template-placeholder-chart", viewBox: "0 0 520 180", role: "img", "aria-label": `${c[o]}预览`, children: [e.jsx("title", { children: "数据构成预览" }), d.map(([w, D], v) => {
      const k = S + D / h * Math.PI * 2, $ = `M 100 90 L ${100 + Math.cos(S) * 65} ${90 + Math.sin(S) * 65} A 65 65 0 ${k - S > Math.PI ? 1 : 0} 1 ${100 + Math.cos(k) * 65} ${90 + Math.sin(k) * 65} Z`;
      return S = k, e.jsxs("g", { children: [e.jsx("path", { d: $, fill: n[v % n.length] }), e.jsx("rect", { x: 220, y: 28 + v * 34, width: 12, height: 12, fill: n[v % n.length] }), e.jsxs("text", { x: 244, y: 39 + v * 34, children: [w, " · ", (D / h * 100).toFixed(1), "%"] })] }, w);
    })] });
  }
  const f = 456 / Math.max(1, d.length), x = d.map(([, h], S) => [40 + (S + 0.5) * f, 145 - h / s * 115]);
  return e.jsxs("svg", { className: "custom-template-placeholder-chart", viewBox: "0 0 520 180", role: "img", "aria-label": `${c[o]}预览`, children: [e.jsxs("title", { children: ["数据", o === "line" ? "趋势" : "对比", "预览"] }), e.jsx("path", { d: "M 40 20 V 145 H 496", fill: "none", stroke: "#e5e6eb" }), o === "line" && e.jsx("polyline", { points: x.map((h) => h.join(",")).join(" "), fill: "none", stroke: "#165dff", strokeWidth: 2 }), d.map(([h, S], w) => e.jsxs("g", { children: [o === "bar" ? e.jsx("rect", { x: x[w][0] - f * 0.23, y: x[w][1], width: f * 0.46, height: 145 - x[w][1], rx: 3, fill: "#165dff" }) : e.jsx("circle", { cx: x[w][0], cy: x[w][1], r: 4, fill: "#165dff" }), e.jsx("text", { x: x[w][0], y: x[w][1] - 8, textAnchor: "middle", children: S }), e.jsx("text", { x: x[w][0], y: 166, textAnchor: "middle", children: h })] }, h))] });
}
function dt({ value: a, onChange: r }) {
  return e.jsxs("section", { className: "custom-template-placeholder-config-section", "aria-label": "文本样式", children: [e.jsx("strong", { children: "文本样式" }), e.jsxs("div", { className: "custom-template-placeholder-grid", children: [e.jsx(q.Item, { label: "字体", children: e.jsx(_, { "aria-label": "字体", value: a.fontFamily, options: [{ value: "Microsoft YaHei", label: "微软雅黑" }, { value: "SimSun", label: "宋体" }, { value: "Arial", label: "Arial" }], onChange: (o) => r({ ...a, fontFamily: o }) }) }), e.jsx(q.Item, { label: "字号（px）", children: e.jsx(Ae, { "aria-label": "字号", value: a.fontSize, min: 12, max: 32, onChange: (o) => r({ ...a, fontSize: o ?? 15 }) }) }), e.jsx(q.Item, { label: "行高", children: e.jsx(Ae, { "aria-label": "行高", value: a.lineHeight, min: 1.2, max: 3, step: 0.1, onChange: (o) => r({ ...a, lineHeight: o ?? 1.8 }) }) }), e.jsx(q.Item, { label: "对齐", children: e.jsx(_, { "aria-label": "对齐", value: a.align, options: [{ value: "left", label: "左对齐" }, { value: "center", label: "居中" }, { value: "right", label: "右对齐" }], onChange: (o) => r({ ...a, align: o }) }) })] })] });
}
function na({ item: a, path: r, onChange: o, onSelect: j, onDelete: d }) {
  const s = a.placeholder, { kind: n, config: c } = s, [f, x] = p.useState(false), [h, S] = p.useState([]), w = Oe(a), D = !!s.validationRequested && w.some((m) => m.field.startsWith("filter-") || ["loopFields", "tableRowLimit"].includes(m.field));
  p.useEffect(() => {
    D && x(true);
  }, [D]);
  const v = (m) => S((g) => g.includes(m) ? g : [...g, m]), k = (m) => {
    var g;
    return s.validationRequested || h.includes(m) ? (g = w.find((T) => T.field === m)) == null ? void 0 : g.message : void 0;
  }, $ = (m) => o({ placeholder: { ...s, config: { ...c, ...m } } }), L = it(c), U = Et.filter((m) => m.dataset === c.dataset).map((m) => m.table), O = nt(c), H = !!L && !!c.queryRequirement.trim() && !w.some((m) => m.field.startsWith("filter-"));
  return e.jsxs("div", { className: "custom-template-placeholder", "data-placeholder-kind": n, onClick: (m) => {
    m.stopPropagation(), j();
  }, onKeyDown: (m) => {
    m.key !== "Escape" && m.stopPropagation();
  }, onFocusCapture: j, children: [e.jsxs("div", { className: "custom-template-placeholder-header", children: [e.jsx("strong", { className: "custom-template-placeholder-title", children: a.title }), e.jsx(we, { label: `删除“${a.title}”`, title: "确认删除占位符？", content: `“${a.title}”及其配置将一起移除。`, onDelete: d })] }), e.jsxs(q, { layout: "vertical", className: "custom-template-form custom-template-placeholder-form", children: [n === "text" && e.jsx(q.Item, { label: "静态正文", required: true, validateStatus: k("description") ? "error" : void 0, help: k("description"), "data-placeholder-field": "description", children: e.jsx(z.TextArea, { "aria-label": "静态正文", placeholder: "请输入正文", value: a.description, maxLength: 2e4, onBlur: () => v("description"), onChange: (m) => o({ description: m }) }) }), (n === "table" || n === "chart") && e.jsx(q.Item, { label: "查数需求", required: true, validateStatus: k("queryRequirement") ? "error" : void 0, help: k("queryRequirement"), "data-placeholder-field": "queryRequirement", children: e.jsx(z.TextArea, { "aria-label": "查数需求", placeholder: "请输入要查什么数据、统计范围及用途，例如：查询报告期内各学科的论文数量，用于分析学科发展趋势。", value: c.queryRequirement, maxLength: 1e3, showWordLimit: true, wordLimitPosition: "outside", onBlur: () => v("queryRequirement"), onChange: (m) => $({ queryRequirement: m }) }) }), n !== "text" && e.jsx(e.Fragment, { children: e.jsxs("div", { className: "custom-template-placeholder-grid", children: [e.jsx(q.Item, { label: "数据集", required: true, validateStatus: k("dataset") ? "error" : void 0, help: k("dataset"), "data-placeholder-field": "dataset", children: e.jsx(_, { "aria-label": "数据集", placeholder: "请选择数据集", value: c.dataset || void 0, options: Vt, showSearch: true, allowClear: true, onBlur: () => v("dataset"), onChange: (m) => $(Ze(c, m || "", "", n)) }) }), e.jsx(q.Item, { label: "数据表", required: true, validateStatus: k("table") ? "error" : void 0, help: k("table"), "data-placeholder-field": "table", children: e.jsx(_, { "aria-label": "数据表", placeholder: c.dataset ? "请选择数据表" : "请先选择数据集", disabled: !c.dataset, value: c.table || void 0, options: U, showSearch: true, allowClear: true, onBlur: () => v("table"), onChange: (m) => $(Ze(c, c.dataset, m || "", n)) }) })] }) }), n === "chart" && e.jsx(q.Item, { label: "图表类型", children: e.jsx(_, { "aria-label": "图表类型", value: c.chartType, options: [{ value: "auto", label: "自动推荐" }, { value: "bar", label: "柱状图" }, { value: "line", label: "折线图" }, { value: "pie", label: "饼图" }], onChange: (m) => $({ chartType: m }) }) }), n === "analysis-summary" && e.jsxs(e.Fragment, { children: [e.jsx(q.Item, { label: "分析脚本", required: true, validateStatus: k("scripts") ? "error" : void 0, help: k("scripts"), "data-placeholder-field": "scripts", children: e.jsx(Ne.Group, { "aria-label": "分析脚本", value: c.scripts, onChange: (m) => {
    v("scripts"), $({ scripts: m });
  }, children: Ot.map((m) => e.jsx(ue, { content: m.description, trigger: ["hover", "focus"], children: e.jsx(Ne, { value: m.value, children: m.label }) }, m.value)) }) }), c.scripts.includes("custom") && e.jsx(q.Item, { label: "自定义分析脚本内容", required: true, validateStatus: k("customAnalysisScript") ? "error" : void 0, help: k("customAnalysisScript"), "data-placeholder-field": "customAnalysisScript", children: e.jsx(z.TextArea, { "aria-label": "自定义分析脚本内容", placeholder: "请输入分析目标、分析步骤和输出要求", value: c.customAnalysisScript, maxLength: 4e3, showWordLimit: true, wordLimitPosition: "outside", onBlur: () => v("customAnalysisScript"), onChange: (m) => $({ customAnalysisScript: m }) }) })] }), e.jsx("div", { className: "custom-template-placeholder-advanced-heading", children: e.jsx(y, { type: "text", className: "custom-template-placeholder-text-action custom-template-placeholder-advanced", icon: e.jsx(De, { style: { transform: f ? "rotate(180deg)" : void 0 } }), "aria-label": `高级配置：${a.title}`, "aria-expanded": f, onClick: () => x((m) => !m), children: "高级配置" }) }), f && e.jsxs("div", { className: "custom-template-placeholder-advanced-body", children: [n === "table" && e.jsxs(e.Fragment, { children: [e.jsxs("section", { "aria-label": "条件显示", className: "custom-template-placeholder-config-section", children: [e.jsx("strong", { children: "条件显示" }), e.jsx("p", { className: "custom-template-placeholder-note", children: "按所选数据表字段筛选数据，多条条件需全部满足。" }), c.filters.map((m, g) => {
    const T = L == null ? void 0 : L.fields.find((I) => I.key === m.field), R = (I) => $({ filters: c.filters.map((E) => E.id === m.id ? { ...E, ...I } : E) });
    return e.jsx(q.Item, { validateStatus: k(`filter-${m.id}`) ? "error" : void 0, help: k(`filter-${m.id}`), "data-placeholder-field": `filter-${m.id}`, children: e.jsxs("div", { className: "custom-template-placeholder-filter-row", children: [e.jsx(_, { "aria-label": `筛选字段 ${g + 1}`, placeholder: "请选择筛选字段", value: m.field || void 0, options: (L == null ? void 0 : L.fields.map((I) => ({ value: I.key, label: I.label }))) ?? [], onChange: (I) => R({ field: I, operator: "eq", value: "" }) }), e.jsx(_, { "aria-label": `筛选关系 ${g + 1}`, disabled: !T, value: m.operator, options: zt((T == null ? void 0 : T.type) ?? "text"), onChange: (I) => R({ operator: I }) }), (T == null ? void 0 : T.type) === "number" ? e.jsx(Ae, { "aria-label": `筛选值 ${g + 1}`, placeholder: "输入数值", value: m.value === "" ? void 0 : Number(m.value), onChange: (I) => R({ value: I === void 0 ? "" : String(I) }) }) : e.jsx(z, { "aria-label": `筛选值 ${g + 1}`, disabled: !T, placeholder: "输入条件值", value: m.value, maxLength: 500, onChange: (I) => R({ value: I }) }), e.jsx(we, { label: `删除筛选条件 ${g + 1}`, title: "确认删除筛选条件？", content: "该条件将从当前表格配置移除。", onDelete: () => $({ filters: c.filters.filter((I) => I.id !== m.id) }) })] }) }, m.id);
  }), e.jsx(y, { type: "text", className: "custom-template-placeholder-text-action", icon: e.jsx(qe, {}), disabled: !L, onClick: () => $({ filters: [...c.filters, { id: crypto.randomUUID(), field: "", operator: "eq", value: "" }] }), children: "添加筛选条件" }), !L && e.jsx("p", { className: "custom-template-placeholder-note", children: "先选择数据表，再添加筛选条件。" }), L && e.jsx("pre", { className: "custom-template-placeholder-syntax", "aria-label": "条件占位符语法", children: et(`表格${r}`, c) })] }), e.jsxs("section", { "aria-label": "循环列表", className: "custom-template-placeholder-config-section", children: [e.jsxs("div", { className: "custom-template-placeholder-section-heading", children: [e.jsx("strong", { children: "循环列表" }), e.jsxs("label", { children: ["最多显示 ", e.jsx("span", { "data-placeholder-field": "tableRowLimit", children: e.jsx(Ae, { "aria-label": "循环列表数量", value: c.tableRowLimit ?? void 0, min: 1, max: 100, precision: 0, onChange: (m) => $({ tableRowLimit: m ?? null }), onBlur: () => {
    c.tableRowLimit === null && $({ tableRowLimit: 100 });
  } }) }), " 条"] })] }), L ? e.jsxs(e.Fragment, { children: [e.jsx(q.Item, { validateStatus: k("loopFields") ? "error" : void 0, help: k("loopFields"), "data-placeholder-field": "loopFields", children: e.jsx(Ne.Group, { "aria-label": "循环内容字段", value: c.loopFields, options: L.fields.map((m) => ({ value: m.key, label: m.label })), onChange: (m) => {
    v("loopFields"), $({ loopFields: m });
  } }) }), e.jsx("p", { className: "custom-template-placeholder-note", children: "点选每条记录展示的字段，支持1—100条。" }), e.jsx("pre", { className: "custom-template-placeholder-syntax", "aria-label": "循环占位符语法", children: et(`表格${r}`, c, true) })] }) : e.jsx("p", { className: "custom-template-placeholder-note", children: "先选择数据表，再点选循环内容。" }), k("tableRowLimit") && e.jsx("p", { className: "custom-template-placeholder-error", role: "alert", "data-placeholder-field": "tableRowLimit", children: k("tableRowLimit") })] })] }), (n === "table" || n === "chart") && e.jsxs("section", { className: "custom-template-placeholder-config-section", "aria-label": "效果预览", children: [e.jsx("div", { className: "custom-template-placeholder-section-heading", children: e.jsx("strong", { children: "效果预览" }) }), H ? O.length ? n === "chart" ? e.jsx(ct, { config: c, rows: O }) : e.jsxs(e.Fragment, { children: [e.jsxs("p", { className: "custom-template-placeholder-note", children: ["筛选后 ", O.length, " 条，预览前 ", Math.min(O.length, c.tableRowLimit ?? 100, 5), " 条。"] }), e.jsx(lt, { rowKey: "id", pagination: false, border: false, size: "mini", data: O.slice(0, Math.min(c.tableRowLimit ?? 100, 5)), scroll: { x: Math.max(440, c.loopFields.length * 120) }, columns: c.loopFields.map((m) => {
    var g;
    return { title: ((g = L == null ? void 0 : L.fields.find((T) => T.key === m)) == null ? void 0 : g.label) ?? m, dataIndex: m, width: 120 };
  }) })] }) : e.jsx(Ce, { description: "暂无匹配数据" }) : e.jsx("p", { className: "custom-template-placeholder-note", children: L ? c.queryRequirement.trim() ? "请完善筛选条件后查看效果预览。" : "填写查数需求后，可查看效果预览。" : "选择有效的数据集和数据表后，可查看效果预览。" })] }), e.jsx(dt, { value: c.style, onChange: (m) => $({ style: m }) })] })] })] });
}
function Le({ label: a, value: r, onChange: o, onSelect: j }) {
  const [d, s] = p.useState(false);
  return e.jsx("div", { className: "custom-template-normal-advanced", onClick: (n) => n.stopPropagation(), onKeyDown: (n) => {
    n.key !== "Escape" && n.stopPropagation();
  }, onFocusCapture: j, children: e.jsxs(q, { layout: "vertical", className: "custom-template-form custom-template-placeholder-form", children: [e.jsx("div", { className: "custom-template-placeholder-advanced-heading", children: e.jsx(y, { type: "text", className: "custom-template-placeholder-text-action custom-template-placeholder-advanced", icon: e.jsx(De, { style: { transform: d ? "rotate(180deg)" : void 0 } }), "aria-label": `高级配置：${a}`, "aria-expanded": d, onClick: () => s((n) => !n), children: "高级配置" }) }), d && e.jsx(dt, { value: r ?? Fe(), onChange: o })] }) });
}
const ra = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
function oa({ record: a, onClose: r, onPreview: o, onRestore: j }) {
  const d = [{ title: "版本", width: 140, render: (s, n) => e.jsxs("span", { className: "template-version-number", children: ["V", n.number, n.number === a.activeVersion && e.jsx(Ve, { color: "arcoblue", children: "当前版本" })] }) }, { title: "保存时间", width: 220, render: (s, n) => ra.format(new Date(n.savedAt)) }, { title: "保存人", dataIndex: "savedBy", width: 120 }, { title: "操作", width: 230, align: "left", render: (s, n) => e.jsxs("div", { className: "template-version-actions", children: [e.jsx(y, { type: "text", onClick: () => o(n), "aria-label": `预览 V${n.number}`, children: "预览" }), e.jsx(y, { type: "text", onClick: () => j(n.number), disabled: n.number === a.activeVersion, "aria-label": `恢复 V${n.number}`, children: "恢复该版本" })] }) }];
  return e.jsxs(Z, { title: "版本控制", visible: true, onCancel: r, focusLock: true, autoFocus: true, maskClosable: false, className: "task-standard-modal template-version-control-modal", style: { width: 800 }, footer: e.jsx("div", { className: "task-modal-footer", children: e.jsx(y, { type: "outline", onClick: r, children: "关闭" }) }), children: [e.jsx("p", { className: "template-version-note", children: "以下为本地示例版本，仅用于交互演示。" }), e.jsx(lt, { rowKey: "number", columns: d, data: [...a.versions].sort((s, n) => n.number - s.number), pagination: false, scroll: { y: 320 }, border: false })] });
}
const at = "当前不可选择，加入组织后可共享给其他组织成员";
function ca({ user: a, scope: r, onClose: o, onSave: j }) {
  const d = Ut(a), [s, n] = p.useState(r === "organization" && d ? r : "private"), c = e.jsxs("div", { className: `template-share-option ${d ? "" : "is-disabled"}`, tabIndex: d ? void 0 : 0, "aria-label": d ? void 0 : at, children: [e.jsx(W, { value: "organization", disabled: !d, children: "组织内共享" }), e.jsx("p", { children: "同一组织／机构的成员可见" })] });
  return e.jsxs(Z, { title: "权限共享", visible: true, onCancel: o, maskClosable: false, focusLock: true, autoFocus: true, className: "task-standard-modal template-sharing-modal", style: { width: 480 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { type: "outline", onClick: o, children: "取消" }), e.jsx(y, { type: "primary", onClick: () => j(s), children: "保存" })] }), children: [e.jsxs(W.Group, { "aria-label": "模板可见范围", value: s, onChange: (f) => n(f), className: "template-sharing-options", children: [e.jsxs("div", { className: "template-share-option", children: [e.jsx(W, { value: "private", children: "仅自己可见" }), e.jsx("p", { children: "仅当前账号可以查看和编辑" })] }), d ? c : e.jsx(ue, { content: at, trigger: ["hover", "focus"], position: "top", children: c })] }), e.jsx("p", { className: "template-version-note", children: "共享设置仅用于本地预览，实际成员访问权限尚未接入。" })] });
}
const ve = (a) => {
  const r = a ?? Fe();
  return { fontFamily: r.fontFamily, fontSize: r.fontSize, lineHeight: r.lineHeight, textAlign: r.align };
};
function da({ draft: a }) {
  return e.jsxs("article", { className: "template-document-preview", "aria-label": "模板排版预览", children: [e.jsx("h1", { style: ve(a.documentTextStyles.title), children: a.title }), a.summaryVisible && e.jsxs("div", { className: "template-document-summary", children: [e.jsx("h2", { children: "摘要" }), e.jsx("p", { style: ve(a.documentTextStyles.summary), children: a.requirement })] }), me(a.outline, a.type).map((r, o) => e.jsxs("section", { children: [e.jsxs("h2", { style: ve(r.textStyle), children: [o + 1, ". ", r.title] }), r.description && e.jsx("p", { children: r.description }), r.items.map((j, d) => {
    var f, x, h, S;
    const s = (f = j.placeholder) == null ? void 0 : f.config, n = s ? nt(s) : [], c = s ? it(s) : void 0;
    return e.jsxs("section", { children: [e.jsxs("h3", { style: ve(j.textStyle ?? (s == null ? void 0 : s.style)), children: [o + 1, ".", d + 1, " ", j.title] }), j.description && e.jsx("p", { style: ve(j.textStyle ?? (s == null ? void 0 : s.style)), children: j.description }), ((x = j.placeholder) == null ? void 0 : x.kind) === "table" && s && c && e.jsxs(e.Fragment, { children: [e.jsx("p", { className: "template-version-note", children: "表格示例数据" }), e.jsx("div", { className: "template-document-table", children: e.jsxs("table", { children: [e.jsx("thead", { children: e.jsx("tr", { children: s.loopFields.map((w) => {
      var D;
      return e.jsx("th", { children: ((D = c.fields.find((v) => v.key === w)) == null ? void 0 : D.label) ?? w }, w);
    }) }) }), e.jsx("tbody", { children: n.slice(0, s.tableRowLimit ?? 100).map((w) => e.jsx("tr", { children: s.loopFields.map((D) => e.jsx("td", { children: w[D] }, D)) }, w.id)) })] }) })] }), ((h = j.placeholder) == null ? void 0 : h.kind) === "chart" && s && n.length > 0 && e.jsxs(e.Fragment, { children: [e.jsx("p", { className: "template-version-note", children: "图表示例数据" }), e.jsx(ct, { config: s, rows: n })] }), ((S = j.placeholder) == null ? void 0 : S.kind) === "analysis-summary" && s && e.jsxs("p", { className: "template-document-placeholder", children: ["智能分析摘要占位：", s.customAnalysisScript || s.queryRequirement || "按已保存的数据与分析配置生成"] })] }, j.id);
  })] }, r.id))] });
}
const ma = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
function st({ secondary: a = false }) {
  return e.jsx("img", { className: "template-detail-node", src: `./figma/template-detail-${a ? "secondary" : "primary"}-node.svg`, alt: "", "aria-hidden": "true", width: "10", height: "10" });
}
function mt({ template: a, onClose: r, onEdit: o, onUse: j, versionPreview: d }) {
  const s = p.useId(), [n, c] = p.useState("outline"), f = p.useMemo(() => d ? me(d.version.draft.outline, d.version.draft.type) : me(Bt(a), a.category), [a, d]), x = ot(a.ownership);
  return e.jsx(Z, { title: d ? `模板详情 · V${d.version.number}` : "模板详情", visible: true, closable: true, onCancel: r, maskClosable: true, escToExit: true, focusLock: true, autoFocus: true, className: "task-standard-modal template-detail-modal", wrapClassName: "template-detail-modal-wrap", style: { width: 800 }, closeIcon: e.jsx("img", { src: "./figma/template-detail-close.svg", alt: "关闭模板详情", width: "16", height: "16" }), footer: d ? e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { type: "outline", onClick: r, children: "关闭" }), e.jsx(y, { type: "primary", disabled: d.version.number === d.activeVersion, onClick: d.onRestore, children: "恢复该版本" })] }) : e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { type: "outline", onClick: r, children: "关闭" }), e.jsx(y, { type: "outline", onClick: o, children: x.editLabel }), e.jsx(y, { type: "primary", onClick: j, children: "使用该模板" })] }), children: e.jsxs("div", { className: "template-detail-layout", "data-node-id": "2216:13443", children: [e.jsxs("section", { className: "template-detail-outline", "aria-labelledby": s, "data-node-id": "2216:13445", children: [e.jsxs("h2", { id: s, className: "template-detail-outline-heading", "data-node-id": "2216:13488", children: [e.jsx("span", { "aria-hidden": "true" }), "大纲结构"] }), d && e.jsxs(W.Group, { type: "button", className: "template-version-preview-mode", "aria-label": "版本预览方式", value: n, onChange: c, children: [e.jsx(W, { value: "outline", children: "大纲结构" }), e.jsx(W, { value: "document", children: "预览效果" })] }), d && n === "document" ? e.jsx("div", { className: "template-detail-outline-scroll", tabIndex: 0, role: "region", "aria-label": "版本预览效果", children: e.jsx(da, { draft: d.version.draft }) }) : f.length ? e.jsx("div", { className: "template-detail-outline-scroll", tabIndex: 0, role: "region", "aria-label": "模板大纲内容", children: e.jsxs("div", { className: "template-detail-timeline", "data-node-id": "2216:13447", children: [e.jsx("img", { className: "template-detail-connector", src: "./figma/template-detail-connector.svg", width: "1", alt: "", "aria-hidden": "true" }), e.jsx("ol", { className: "template-detail-sections", children: f.map((h, S) => e.jsxs("li", { className: "template-detail-section", children: [e.jsxs("div", { className: "template-detail-outline-row", children: [e.jsx(st, {}), e.jsxs("h3", { children: [ma[S] ?? S + 1, "、", h.title] }), h.description && e.jsx("p", { children: h.description })] }), h.items.length > 0 && e.jsx("ol", { className: "template-detail-children", children: h.items.map((w, D) => e.jsxs("li", { className: "template-detail-outline-row is-secondary", children: [e.jsx(st, { secondary: true }), e.jsxs("span", { children: [S + 1, ".", D + 1, " ", w.title] })] }, w.id)) })] }, h.id)) })] }) }) : e.jsx(Ce, { description: "暂无大纲内容" })] }), e.jsxs("div", { className: "template-detail-info", "data-node-id": "2216:13491", children: [e.jsxs("div", { className: "template-detail-info-heading", "data-node-id": "2216:13492", children: [e.jsx("h2", { children: a.category }), e.jsx("span", { className: `template-owner-tag is-${a.ownership}`, children: x.label })] }), e.jsx("p", { "data-node-id": "2216:13496", children: a.description })] })] }) });
}
const ua = ["研究报告", "洞察报告", "战略咨询报告", "其他"], pa = [{ id: "work-review", title: "试用期工作回顾与成果", description: "详细描述试用期内完成的主要工作任务、项目及具体成果，突出个人贡献和成长。", items: [{ id: "work-detail", title: "试用期工作回顾与成果", description: "详细描述试用期内完成的主要工作任务、项目及具体成果，突出个人贡献和成长。" }, { id: "work-result", title: "工作成果展示", description: "分享工作中取得的具体成果，如完成的指标、解决的问题或改进的流程。" }] }, { id: "learning", title: "学习与成长", description: "总结试用期内在知识、技能和职业素养方面的提升，包括对公司的认知和融入。", items: [{ id: "skill-growth", title: "专业知识与技能提升", description: "描述通过培训或自主学习获得的专业知识和技能进步。" }, { id: "culture", title: "公司文化理解与融入", description: "分享对公司文化、价值观的理解及如何融入团队的体会。" }] }];
function ha({ onClose: a, template: r, record: o, user: j = ze, onSavePersonal: d, onCreateVersion: s, onRestoreVersion: n, onShare: c }) {
  const f = p.useRef(r ? (o == null ? void 0 : o.workingDraft) ?? Wt(r) : void 0).current, x = (r == null ? void 0 : r.ownership) === "personal", [h, S] = p.useState(r ? 2 : 1), [w, D] = p.useState((f == null ? void 0 : f.title) ?? "区域产业发展深度分析模板"), [v, k] = p.useState((f == null ? void 0 : f.type) ?? "研究报告"), [$, L] = p.useState((f == null ? void 0 : f.requirement) ?? ""), [U, O] = p.useState((f == null ? void 0 : f.fileName) ?? ""), [H, m] = p.useState(""), [g, T] = p.useState((f == null ? void 0 : f.summaryVisible) ?? true), [R, I] = p.useState(() => structuredClone((f == null ? void 0 : f.outline) ?? pa)), [E, M] = p.useState(() => {
    var t, l, i;
    return r ? ((l = (t = R[0]) == null ? void 0 : t.items[0]) == null ? void 0 : l.id) ?? ((i = R[0]) == null ? void 0 : i.id) ?? "" : "culture";
  }), [pe, G] = p.useState(false), K = p.useRef(null), [he, re] = p.useState(null), [B, xe] = p.useState(null), [fe, Se] = p.useState(""), [ae, je] = p.useState(() => structuredClone((f == null ? void 0 : f.documentTextStyles) ?? { title: { ...Fe(), fontSize: 16 }, summary: { ...Fe(), fontSize: 14 } })), [se, le] = p.useState(false), [ee, X] = p.useState(false), [te, ge] = p.useState(null), [Q, oe] = p.useState(null), ye = p.useRef(null), ke = p.useRef(null), Y = Kt(v), ie = me(R, v), ce = { title: w, type: v, requirement: $, fileName: U, summaryVisible: g, outline: R, documentTextStyles: ae }, u = Me(ce), C = p.useRef(u);
  function P() {
    const t = K.current;
    K.current = null, (t == null ? void 0 : t.frame) !== void 0 && cancelAnimationFrame(t.frame), t != null && t.handle.hasPointerCapture(t.pointerId) && t.handle.releasePointerCapture(t.pointerId), re(null), xe(null);
  }
  function ne(t, l, i, N) {
    const b = ia(R, t, l, i, N);
    if (b === R) return;
    I(b), M(t);
    const V = me(b, v).find((J) => J.id === l), F = V.items.findIndex((J) => J.id === t);
    Se(`已将“${V.items[F].title}”移到“${V.title}”下第 ${F + 1} 项。`);
  }
  function ht(t, l) {
    t.button === 0 && (t.preventDefault(), t.stopPropagation(), t.currentTarget.focus({ preventScroll: true }), t.currentTarget.setPointerCapture(t.pointerId), K.current = { itemId: l.id, pointerId: t.pointerId, startX: t.clientX, startY: t.clientY, x: t.clientX, y: t.clientY, active: false, handle: t.currentTarget });
  }
  function Pe(t, l) {
    var F, J;
    const i = document.elementFromPoint(t, l), N = i == null ? void 0 : i.closest(".custom-template-outline-section");
    if (!(N != null && N.dataset.sectionId)) return null;
    const b = Array.from(N.querySelectorAll(".custom-template-outline-child")).map(($e) => {
      const Je = $e.getBoundingClientRect();
      return { itemId: $e.dataset.itemId, top: Je.top, bottom: Je.bottom };
    }), V = (F = N.querySelector(".custom-template-outline-card.is-section")) == null ? void 0 : F.getBoundingClientRect();
    return sa(N.dataset.sectionId, b, l, ((J = K.current) == null ? void 0 : J.itemId) ?? "", !!V && l <= V.bottom);
  }
  function We(t) {
    xe((l) => (l == null ? void 0 : l.sectionId) === (t == null ? void 0 : t.sectionId) && (l == null ? void 0 : l.itemId) === (t == null ? void 0 : t.itemId) && (l == null ? void 0 : l.position) === (t == null ? void 0 : t.position) ? l : t);
  }
  function Ke() {
    const t = K.current;
    if (!(t != null && t.active)) return;
    const l = t.handle.closest(".arco-modal-content");
    if (l) {
      const i = l.getBoundingClientRect();
      t.x >= i.left && t.x <= i.right && t.y >= i.top && t.y <= i.bottom && (t.y > i.bottom - 40 ? l.scrollTop += 8 : t.y < i.top + 80 && (l.scrollTop -= 8), We(Pe(t.x, t.y)));
    }
    t.frame = requestAnimationFrame(Ke);
  }
  function xt(t) {
    const l = K.current;
    if (!(!l || t.pointerId !== l.pointerId)) {
      if (l.x = t.clientX, l.y = t.clientY, !l.active) {
        if (Math.hypot(l.x - l.startX, l.y - l.startY) < 4) return;
        l.active = true, re(l.itemId), M(l.itemId), l.frame = requestAnimationFrame(Ke);
      }
      t.preventDefault(), We(Pe(l.x, l.y));
    }
  }
  function ft(t) {
    const l = K.current;
    if (!l || t.pointerId !== l.pointerId) return;
    t.preventDefault(), t.stopPropagation();
    const i = Pe(t.clientX, t.clientY);
    l.active && i && ne(l.itemId, i.sectionId, i.itemId, i.position), P();
  }
  function jt(t, l, i) {
    if (t.key === "Escape" && K.current) {
      t.preventDefault(), t.stopPropagation(), P();
      return;
    }
    if (!t.altKey || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(t.key)) return;
    t.preventDefault(), t.stopPropagation();
    const N = ie.findIndex((F) => F.id === l), b = ie[N];
    if (!b) return;
    const V = b.items.findIndex((F) => F.id === i);
    if (t.key === "ArrowUp" || t.key === "ArrowDown") {
      const F = b.items[V + (t.key === "ArrowUp" ? -1 : 1)];
      F && ne(i, l, F.id, t.key === "ArrowUp" ? "before" : "after");
    } else {
      const F = ie[N + (t.key === "ArrowLeft" ? -1 : 1)];
      F && ne(i, F.id);
    }
    requestAnimationFrame(() => {
      var J;
      const F = Array.from(document.querySelectorAll(".custom-template-outline-child")).find(($e) => $e.dataset.itemId === i);
      (J = F == null ? void 0 : F.querySelector(".custom-template-drag-handle")) == null || J.focus({ preventScroll: true }), F == null || F.scrollIntoView({ block: "nearest" });
    });
  }
  function Qe(t) {
    P(), S(t), requestAnimationFrame(() => {
      const l = document.querySelector(".custom-template-modal .arco-modal-content");
      l && (l.scrollTop = 0);
    });
  }
  function gt(t) {
    var i, N, b;
    if (t === v) return;
    P(), G(false);
    const l = me(R, t);
    l.some((V) => V.id === E || V.items.some((F) => F.id === E)) || M(((N = (i = l[0]) == null ? void 0 : i.items[0]) == null ? void 0 : N.id) ?? ((b = l[0]) == null ? void 0 : b.id) ?? ""), k(t);
  }
  function yt() {
    if (P(), u !== Me(JSON.parse(C.current))) {
      G(false), le(true);
      return;
    }
    a();
  }
  function bt() {
    if (!w.trim()) {
      A.warning("请填写模板标题。");
      return;
    }
    if (!$.trim()) {
      m("请填写写作要求");
      return;
    }
    Qe(2);
  }
  function vt() {
    const t = `section-${Date.now()}`;
    I((l) => [...l, { id: t, title: "新建一级标题", description: "请输入一级标题说明。", items: [] }]), M(t);
  }
  function Nt(t) {
    const l = `item-${Date.now()}`, i = { id: l, title: "新建二级标题", description: "请输入二级标题说明。" };
    I((N) => N.map((b) => b.id === t ? { ...b, items: [...b.items, i] } : b)), M(l);
  }
  function wt(t) {
    if (!Y) return;
    const l = Qt(t, `placeholder-${crypto.randomUUID()}`);
    I((i) => la(i, E, l, `section-${crypto.randomUUID()}`)), M(l.id), G(false), requestAnimationFrame(() => {
      var i;
      return (i = document.querySelector(`[data-item-id="${l.id}"]`)) == null ? void 0 : i.scrollIntoView({ block: "start" });
    });
  }
  function Ge(t, l) {
    I((i) => i.map((N) => ({ ...N, items: N.items.map((b) => b.id === t ? { ...b, ...l } : b) })));
  }
  function Ct(t, l) {
    I((i) => i.map((N) => N.id === t ? { ...N, textStyle: l } : N));
  }
  function St(t) {
    const l = R.find((i) => i.id === t);
    I((i) => i.filter((N) => N.id !== t)), (E === t || l != null && l.items.some((i) => i.id === E)) && M("");
  }
  function Xe(t, l) {
    I((i) => i.map((N) => N.id === t ? { ...N, items: N.items.filter((b) => b.id !== l) } : N)), E === l && M("");
  }
  function Ye() {
    if (!w.trim() || !$.trim()) return A.warning({ content: "请填写模板标题和模板简述", duration: 3e3 }), false;
    const t = ie.flatMap((l) => l.items).find((l) => Oe(l).length > 0);
    if (t) {
      const l = Oe(t)[0];
      return I((i) => i.map((N) => ({ ...N, items: N.items.map((b) => b.placeholder ? { ...b, placeholder: { ...b.placeholder, validationRequested: true } } : b) }))), A.warning(`“${t.title || "占位符"}”：${l.message}。`), requestAnimationFrame(() => {
        var b;
        const i = document.querySelector(`[data-item-id="${t.id}"]`);
        i == null || i.scrollIntoView({ block: "nearest" });
        const N = i == null ? void 0 : i.querySelector(`[data-placeholder-field="${l.field}"]`);
        N == null || N.scrollIntoView({ block: "nearest" }), (b = N == null ? void 0 : N.querySelector('input,textarea,[role="combobox"],button')) == null || b.focus({ preventScroll: true });
      }), false;
    }
    return true;
  }
  function kt() {
    if (Ye()) {
      if (x && d) {
        const t = d(ce);
        t.status === "saved" ? (C.current = u, A.success({ content: "已保存模板", duration: 3e3 })) : Ie(t);
        return;
      }
      A.info("模板保存服务尚未接入，当前大纲修改保留在本次弹窗中。");
    }
  }
  function Ie(t) {
    A.error({ content: t.status === "forbidden" ? "当前不可执行此操作" : t.status === "invalid" ? "请完善模板内容后再保存" : "无法保存到本地，请检查浏览器存储后重试", duration: 3e3 });
  }
  function It() {
    if (X(false), !x || !s || !Ye()) return;
    const t = s(ce);
    if (t.status === "unchanged") {
      A.info({ content: "请修改后再保存新版本", duration: 3e3 });
      return;
    }
    if (t.status !== "saved") {
      Ie(t);
      return;
    }
    C.current = u, A.success({ content: `已新建版本V${t.record.activeVersion}`, duration: 3e3 });
  }
  function Te() {
    const t = te === "sharing" ? ke.current : ye.current;
    ge(null), oe(null), requestAnimationFrame(() => t == null ? void 0 : t.focus({ preventScroll: true }));
  }
  function He(t) {
    var N, b, V;
    if (!x || !n) return;
    const l = n(t);
    if (l.status === "unchanged") return;
    if (l.status !== "saved") {
      Ie(l);
      return;
    }
    const i = structuredClone(l.record.workingDraft);
    P(), G(false), D(i.title), k(i.type), L(i.requirement), O(i.fileName), T(i.summaryVisible), I(i.outline), je(i.documentTextStyles), m(""), M(((b = (N = i.outline[0]) == null ? void 0 : N.items[0]) == null ? void 0 : b.id) ?? ((V = i.outline[0]) == null ? void 0 : V.id) ?? ""), C.current = Me(i), Te(), A.success({ content: `已恢复到V${t}版本，模板内容已回退`, duration: 3e3 });
  }
  function Tt(t) {
    if (!x || !c) return;
    const l = c(t);
    if (l.status !== "saved") {
      Ie(l);
      return;
    }
    Te(), A.success({ content: "共享设置已保存", duration: 3e3 });
  }
  return e.jsxs(e.Fragment, { children: [e.jsxs(Z, { title: "自定义模板", visible: true, onCancel: yt, closable: true, maskClosable: false, escToExit: !se && !te && !ee, autoFocus: false, alignCenter: true, className: "task-standard-modal custom-template-modal", wrapClassName: "custom-template-modal-wrap", style: { width: 800 }, maskStyle: { backgroundColor: se || te ? "transparent" : "rgba(0, 0, 0, 0.5)" }, afterOpen: () => requestAnimationFrame(() => {
    var t, l;
    return (l = (t = document.querySelector(".custom-template-modal .arco-modal-close-icon")) == null ? void 0 : t.parentElement) == null ? void 0 : l.focus({ preventScroll: true });
  }), footer: h === 1 ? e.jsx("div", { className: "task-modal-footer custom-template-footer", children: e.jsx(y, { type: "primary", onClick: bt, children: "生成模板" }) }) : e.jsxs("div", { className: `task-modal-footer custom-template-footer custom-template-outline-footer ${Y ? "" : "is-basic"}`, children: [Y && e.jsx(_e, { trigger: "click", position: "top", popupVisible: pe, onVisibleChange: G, getPopupContainer: (t) => t.closest(".arco-modal-footer") ?? document.body, droplist: e.jsx(be, { selectable: false, className: "custom-template-placeholder-menu", onClickMenuItem: (t) => {
    const l = tt.find((i) => i.key === t);
    l && wt(l.key);
  }, children: tt.map((t) => e.jsx(be.Item, { children: t.label }, t.key)) }), children: e.jsx(y, { type: "text", icon: e.jsx(qe, {}), className: "custom-template-placeholder-button", "aria-haspopup": "menu", "aria-expanded": pe, children: "添加占位符" }) }), e.jsxs("div", { children: [e.jsx(y, { type: "secondary", onClick: () => Qe(1), children: "上一步" }), x && e.jsxs(e.Fragment, { children: [e.jsx(_e, { trigger: ["hover", "click"], position: "tl", popupVisible: ee, onVisibleChange: X, getPopupContainer: (t) => t.closest(".arco-modal-footer") ?? document.body, droplist: e.jsxs(be, { selectable: false, className: "custom-template-version-menu", onClickMenuItem: (t) => {
    t === "new" ? It() : (X(false), o ? ge("versions") : A.error("无法读取本地版本记录，请重新打开模板"));
  }, children: [e.jsx(be.Item, { children: "新建版本" }, "new"), e.jsx(be.Item, { children: "版本控制" }, "control")] }), children: e.jsxs(y, { ref: ye, type: "outline", "aria-haspopup": "menu", "aria-expanded": ee, onKeyDown: (t) => {
    t.key === "Escape" && (t.stopPropagation(), X(false));
  }, children: ["版本管理", e.jsx(De, {})] }) }), e.jsx(y, { ref: ke, type: "outline", onClick: () => {
    X(false), G(false), ge("sharing");
  }, children: "权限共享" })] }), e.jsx(y, { type: "primary", onClick: kt, children: "保存为模板库" })] })] }), children: [e.jsx("div", { className: "custom-template-stepbar", children: e.jsxs(Re, { current: h, className: "custom-template-steps", children: [e.jsx(Re.Step, { title: "填写模板" }), e.jsx(Re.Step, { title: "大纲修改" })] }) }), h === 1 ? e.jsxs(q, { layout: "vertical", className: "custom-template-form", children: [e.jsx(q.Item, { label: "模板标题", required: true, className: "custom-template-title-field", children: e.jsx(z, { "aria-label": "模板标题", value: w, onChange: D, allowClear: true, maxLength: 30, showWordLimit: true }) }), e.jsx(q.Item, { label: "模板类型", required: true, className: "custom-template-type-field", children: e.jsx(W.Group, { "aria-label": "模板类型", value: v, onChange: (t) => gt(t), children: ua.map((t) => e.jsx(W, { value: t, children: t }, t)) }) }), e.jsx(q.Item, { label: "写作要求", required: true, validateStatus: H ? "error" : void 0, help: H || void 0, className: "custom-template-requirement-field", children: e.jsx(z.TextArea, { "aria-label": "写作要求", value: $, onChange: (t) => {
    L(t), m("");
  }, placeholder: "请输入", maxLength: 500, showWordLimit: true, wordLimitPosition: "outside" }) }), e.jsx(q.Item, { label: e.jsxs("span", { children: ["上传参考文档", e.jsx("em", { children: "（选填）" })] }), className: "custom-template-upload-field", children: e.jsx(Be, { drag: true, autoUpload: false, accept: ".doc,.docx,.txt", limit: { maxCount: 1, hideOnExceedLimit: false }, showUploadList: false, beforeUpload: (t) => t.size > 50 * 1024 * 1024 ? (A.error(`文件“${t.name}”超过 50MB，请重新选择。`), false) : true, onChange: (t) => {
    var l;
    return O(((l = t[t.length - 1]) == null ? void 0 : l.name) ?? "");
  }, onExceedLimit: () => A.warning("仅支持上传 1 个参考文档，请重新选择。"), tip: e.jsxs(e.Fragment, { children: [e.jsx("span", { children: "支持  Word（.doc/.docx）或 TXT（.txt）" }), e.jsx("span", { children: "大小限制：但文件不超过 50MB" })] }), children: U ? e.jsxs("div", { className: "custom-template-upload-selection", children: [e.jsx("p", { children: U }), e.jsx("span", { children: "已选择文件，点击或拖拽可重新上传" })] }) : void 0 }) })] }) : e.jsxs("div", { className: "custom-template-outline-step", children: [e.jsx(q, { layout: "vertical", className: "custom-template-outline-intro", children: e.jsx(q.Item, { label: "适用行业场景与模板简述", required: true, children: e.jsx(z.TextArea, { "aria-label": "适用行业场景与模板简述", value: $, onChange: L, placeholder: "请输入", maxLength: 500, showWordLimit: true, wordLimitPosition: "outside" }) }) }), e.jsxs("div", { className: "custom-template-outline-heading", children: [e.jsx("span", {}), "文章大纲"] }), e.jsxs("div", { className: "custom-template-outline-tree", children: [e.jsx("p", { className: "sr-only", id: "custom-template-drag-help", children: "拖动手柄调整二级标题顺序，拖到一级标题或其他二级标题可跨组移动。也可按 Alt 加上下方向键排序，Alt 加左右方向键更换一级标题。" }), e.jsx("span", { className: "sr-only", role: "status", "aria-live": "polite", children: fe }), e.jsxs("div", { className: "custom-template-outline-row is-title", children: [e.jsx("div", { className: "custom-template-outline-kind", children: "标题" }), e.jsx("span", { className: "custom-template-outline-node", "aria-hidden": "true" }), e.jsxs("div", { className: "custom-template-outline-card", children: [e.jsx("strong", { children: r ? w : "员工转正述职报告" }), Y && e.jsx(Le, { label: "报告标题", value: ae.title, onChange: (t) => je((l) => ({ ...l, title: t })) })] })] }), g && e.jsxs("div", { className: "custom-template-outline-row is-summary", children: [e.jsxs(y, { type: "text", className: "custom-template-outline-kind is-select", children: ["摘要", e.jsx(De, {})] }), e.jsx("span", { className: "custom-template-outline-node", "aria-hidden": "true" }), e.jsxs("div", { className: "custom-template-outline-card", children: [e.jsxs("div", { children: [e.jsx("strong", { children: r ? `${w}摘要` : "转正述职报告摘要" }), e.jsx(we, { label: "删除摘要", title: "确认删除摘要？", content: "摘要将从当前大纲移除。", onDelete: () => T(false) })] }), e.jsx("p", { children: r ? $ : "简要回顾试用期的工作表现，总结主要成绩和收获，表达转正意愿及未来工作信心。" }), Y && e.jsx(Le, { label: "摘要", value: ae.summary, onChange: (t) => je((l) => ({ ...l, summary: t })) })] })] }), ie.map((t, l) => e.jsxs("div", { className: "custom-template-outline-row is-body", children: [e.jsx("div", { className: "custom-template-outline-kind", children: "正文" }), e.jsx("span", { className: "custom-template-outline-node", "aria-hidden": "true" }), e.jsxs("div", { className: `custom-template-outline-section ${(B == null ? void 0 : B.sectionId) === t.id && !B.itemId ? "is-drop-into" : ""}`, "data-section-id": t.id, children: [e.jsxs("div", { className: "custom-template-outline-card is-section", onClick: () => M(t.id), children: [e.jsxs("div", { children: [e.jsx("strong", { children: t.title }), e.jsxs("span", { className: "custom-template-outline-actions", children: [e.jsx(ue, { content: "添加子标题", position: "top", trigger: ["hover", "focus"], children: e.jsx(y, { type: "text", icon: e.jsx(qe, {}), "aria-label": `在“${t.title}”下添加子标题`, onClick: (i) => {
    i.stopPropagation(), Nt(t.id);
  } }) }), e.jsx(we, { label: `删除“${t.title}”`, tooltip: "删除本章节", title: "确认删除本章节？", content: t.items.length > 0 ? `“${t.title}”及其 ${t.items.length} 个子标题将一起移除。` : `“${t.title}”将从当前大纲移除。`, onDelete: () => St(t.id) })] })] }), e.jsx("p", { children: t.description }), Y && e.jsx(Le, { label: `章节：${t.title}`, value: t.textStyle, onChange: (i) => Ct(t.id, i), onSelect: () => M(t.id) })] }), t.items.length > 0 && e.jsx("div", { className: "custom-template-outline-children", role: "group", "aria-label": `${t.title}的二级标题`, children: t.items.map((i, N) => e.jsxs("div", { className: `custom-template-outline-child ${he === i.id ? "is-dragging" : ""} ${(B == null ? void 0 : B.sectionId) === t.id && B.itemId === i.id ? `is-drop-${B.position}` : ""}`, "data-item-id": i.id, children: [e.jsx("button", { type: "button", className: "custom-template-drag-handle", "aria-label": `拖动“${i.title}”`, "aria-describedby": "custom-template-drag-help", title: "拖动调整顺序；Alt 加方向键可排序或跨组移动", onPointerDown: (b) => ht(b, i), onPointerMove: xt, onPointerUp: ft, onPointerCancel: P, onLostPointerCapture: P, onKeyDown: (b) => jt(b, t.id, i.id), children: e.jsx(Lt, { "aria-hidden": "true" }) }), e.jsx("div", { role: i.placeholder ? void 0 : "group", "aria-label": i.placeholder ? void 0 : i.title, tabIndex: i.placeholder ? void 0 : 0, className: `custom-template-outline-card is-child ${i.placeholder ? "is-placeholder" : ""} ${E === i.id ? "is-selected" : ""}`, onClick: () => M(i.id), onKeyDown: (b) => {
    !i.placeholder && b.target === b.currentTarget && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), M(i.id));
  }, children: Y && i.placeholder ? e.jsx(na, { item: i, path: `${l + 1}-${N + 1}`, onChange: (b) => Ge(i.id, b), onSelect: () => M(i.id), onDelete: () => Xe(t.id, i.id) }) : e.jsxs(e.Fragment, { children: [e.jsxs("span", { children: [e.jsx("strong", { children: i.title }), e.jsx(we, { label: `删除“${i.title}”`, title: "确认删除子标题？", content: `“${i.title}”将从当前章节移除。`, onDelete: () => Xe(t.id, i.id) })] }), e.jsx("p", { children: i.description }), Y && e.jsx(Le, { label: `正文：${i.title}`, value: i.textStyle, onChange: (b) => Ge(i.id, { textStyle: b }), onSelect: () => M(i.id) })] }) })] }, i.id)) })] })] }, t.id)), e.jsx("div", { className: "custom-template-add-section", children: e.jsx(y, { type: "text", icon: e.jsx(qe, {}), onClick: vt, children: "添加一级标题" }) })] })] })] }), x && te === "versions" && o && !Q && e.jsx(oa, { record: o, onClose: Te, onPreview: oe, onRestore: He }), x && te === "sharing" && e.jsx(ca, { user: j, scope: (o == null ? void 0 : o.shareScope) ?? "private", onClose: Te, onSave: Tt }), x && Q && r && e.jsx(mt, { template: { ...r, name: Q.draft.title, description: Q.draft.requirement, category: Q.draft.type, outline: Q.draft.outline }, onClose: () => oe(null), versionPreview: { version: Q, activeVersion: o == null ? void 0 : o.activeVersion, onRestore: () => He(Q.number) } }, Q.number), se && e.jsx(Z, { title: "未保存的修改", visible: true, onCancel: () => le(false), maskClosable: false, className: "task-standard-modal template-unsaved-modal", style: { width: 440 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { type: "outline", onClick: () => le(false), children: "继续编辑" }), e.jsx(y, { type: "primary", status: "danger", onClick: a, children: "放弃修改" })] }), children: e.jsx("p", { className: "template-unsaved-content", children: "当前修改尚未保存，关闭后将丢失。是否放弃修改？" }) })] });
}
function xa({ onClose: a }) {
  const r = p.useId(), [o, j] = p.useState([]), [d, s] = p.useState(false), [n, c] = p.useState("");
  function f(x) {
    return s(false), /\.json$/i.test(x.name) ? x.size > 5 * 1024 * 1024 ? (c("单个模板文件不能超过 5MB"), false) : (c(""), true) : (c("请选择 JSON 模板文件"), false);
  }
  return e.jsxs(Z, { title: "模板上传", visible: true, closable: true, onCancel: a, maskClosable: false, autoFocus: false, className: "task-standard-modal template-upload-modal", style: { width: 800 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { type: "outline", onClick: a, children: "取消" }), e.jsx(y, { type: "primary", disabled: !o.length || !!n, onClick: () => d ? a() : s(true), children: d ? "完成" : "确认上传" })] }), children: [e.jsx(Be, { className: "template-upload-picker", drag: true, autoUpload: false, accept: { type: ".json,application/json", strict: false }, limit: { maxCount: 1, hideOnExceedLimit: false }, beforeUpload: f, fileList: o.map((x) => ({ ...x, status: d ? "done" : "init" })), showUploadList: { startIcon: null, reuploadIcon: null, successIcon: e.jsx(qt, { "aria-label": "已添加文件" }), fileName: (x) => e.jsxs("span", { className: "template-upload-file-name", children: [x.name, e.jsx("small", { children: d ? "已添加" : "已选择" })] }) }, onChange: (x) => {
    j(x.slice(-1)), s(false), x.length || c("");
  }, onExceedLimit: (x) => {
    if (x.length !== 1) {
      c("每次只能选择一个模板文件");
      return;
    }
    f(x[0]) && j([{ uid: `template-${Date.now()}`, name: x[0].name, originFile: x[0], status: "init" }]);
  }, children: e.jsxs("div", { className: "template-upload-dropzone", role: "button", tabIndex: 0, "aria-label": "选择 JSON 模板文件", "aria-describedby": r, onKeyDown: (x) => {
    (x.key === " " || x.key === "Enter") && (x.preventDefault(), x.stopPropagation(), x.currentTarget.click());
  }, children: [e.jsx("img", { className: "template-upload-illustration", src: "./figma/template-upload-folder.png", alt: "", "aria-hidden": "true", draggable: false }), e.jsxs("p", { className: "template-upload-headline", children: ["拖入模板文件，或", e.jsx("span", { children: "点击选择" })] }), e.jsxs("div", { className: "template-upload-requirements", id: r, children: [e.jsx("p", { children: "支持 JSON 模板文件，单个文件不超过 5MB" }), e.jsx("p", { children: "每次选择 1 个文件，选中后可移除或重新选择" })] })] }) }), n && e.jsx("p", { className: "template-upload-error", role: "alert", children: n }), d && e.jsx("p", { className: "template-upload-selection", role: "status", children: "已添加所选模板文件" })] });
}
function ut() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function Ee() {
  const a = ut().getItem(rt);
  if (!a) return {};
  const r = _t(JSON.parse(a));
  if (!r) throw new Error("Invalid template version storage");
  return r;
}
function fa() {
  const [a, r] = p.useState(() => {
    try {
      return Ee();
    } catch {
      return {};
    }
  }), o = p.useMemo(() => {
    const s = new URLSearchParams(window.location.search);
    return s.get("qa") === "1" && s.get("organization") === "none" ? { ...ze, organization: null } : ze;
  }, []);
  p.useEffect(() => {
    const s = () => {
      try {
        r(Ee());
      } catch {
      }
    };
    return window.addEventListener("storage", s), () => window.removeEventListener("storage", s);
  }, []);
  const j = p.useMemo(() => Zt.map((s) => {
    const n = a[s.id];
    return s.ownership !== "personal" || !n || n.ownerId !== o.id ? s : { ...s, name: n.workingDraft.title, category: n.workingDraft.type, description: n.workingDraft.requirement, outline: n.workingDraft.outline };
  }), [a, o.id]), d = p.useCallback((s, n) => {
    if (s.ownership !== "personal") return { status: "forbidden" };
    try {
      const c = Ee(), f = c[s.id] ?? Gt(s, o, (/* @__PURE__ */ new Date()).toISOString()), x = n(f);
      if (x.status !== "saved") return x;
      const h = { ...c, [s.id]: x.record };
      return ut().setItem(rt, JSON.stringify({ schemaVersion: 1, records: h })), r(h), x;
    } catch {
      return { status: "storage-error" };
    }
  }, [o]);
  return { items: j, records: a, user: o, ensurePersonal: (s) => d(s, (n) => n.ownerId === o.id ? { status: "saved", record: n } : { status: "forbidden" }), save: (s, n) => d(s, (c) => Jt(c, n, o)), createVersion: (s, n) => d(s, (c) => Ht(c, n, o, (/* @__PURE__ */ new Date()).toISOString())), restoreVersion: (s, n) => d(s, (c) => Yt(c, n, o)), share: (s, n) => d(s, (c) => Xt(c, n, o)) };
}
function pt(a, r) {
  A.info(`${r ? `“${r.name}”` : "自定义模版"}的${a}能力尚未接入。`);
}
function ja() {
  return e.jsx("div", { className: "template-library-preview", "aria-hidden": "true", "data-node-id": "2057:6121", children: e.jsx("img", { src: "./figma/template-library-cover.png", alt: "" }) });
}
function ga({ item: a, onEdit: r, onPreview: o }) {
  const { label: j, editLabel: d } = ot(a.ownership);
  return e.jsxs("article", { className: "template-library-card", "data-node-id": "2057:6118", children: [e.jsxs("div", { className: "template-category-ribbon", "data-node-id": "2057:6138", children: [e.jsx("img", { src: "./figma/template-library-ribbon.svg", alt: "", "aria-hidden": "true" }), e.jsx("span", { children: a.category })] }), e.jsxs("button", { type: "button", className: "template-library-card-main template-card-detail-trigger", "aria-label": `查看模板详情：${a.name}（${j}，${a.industry}）`, onClick: (s) => o(a, s.currentTarget), children: [e.jsx(ja, {}), e.jsx("div", { className: "template-library-card-copy", children: e.jsxs("div", { children: [e.jsx("h2", { children: a.name }), e.jsx("span", { className: `template-owner-tag is-${a.ownership}`, children: j })] }) })] }), e.jsxs("div", { className: "template-library-scene-tags", "aria-label": a.ownership === "personal" ? "行业与研究场景" : "适用场景", children: [a.ownership === "personal" && e.jsx(Ve, { className: "template-industry-tag", size: "small", "aria-label": `行业：${a.industry}`, children: a.industry }), Ue(a).map((s) => e.jsx(Ve, { size: "small", "aria-label": `研究场景：${s}`, children: s }, s))] }), e.jsx("div", { className: "template-library-divider" }), e.jsx("div", { className: "template-library-card-actions", children: e.jsx("div", { children: e.jsxs("span", { className: "template-card-primary-actions", children: [e.jsx(y, { type: "text", onClick: () => r(a), children: d }), e.jsx(y, { type: "text", onClick: () => pt("使用", a), children: "使用模板" })] }) }) })] });
}
function ya() {
  var m;
  const a = fa(), [r, o] = p.useState(null), j = p.useRef(null), [d, s] = p.useState(false), [n, c] = p.useState("研究报告"), [f, x] = p.useState("全部行业"), [h, S] = p.useState("全部场景"), [w, D] = p.useState(""), [v, k] = p.useState("");
  p.useEffect(() => {
    const g = d && d.template;
    g && g.ownership === "personal" && !a.records[g.id] && a.ensurePersonal(g);
  }, [d, a.records]);
  const $ = p.useMemo(() => {
    const g = v.trim().toLocaleLowerCase();
    return a.items.filter((T) => T.category === n && (f === "全部行业" || T.industry === f) && (h === "全部场景" || T.scene === h || Ue(T).includes(h)) && (!g || `${T.name} ${T.industry} ${T.scene} ${Ue(T).join(" ")}`.toLocaleLowerCase().includes(g)));
  }, [v, n, f, h, a.items]);
  function L() {
    x("全部行业"), S("全部场景"), D(""), k("");
  }
  function U(g) {
    g.ownership === "personal" && a.ensurePersonal(g).status !== "saved" && A.error("无法读取或保存本地模板记录，请检查浏览器存储后重试。"), o(null), s({ template: g });
  }
  function O(g, T) {
    j.current = T, o(g);
  }
  function H() {
    o(null), requestAnimationFrame(() => {
      var g;
      return (g = j.current) == null ? void 0 : g.focus({ preventScroll: true });
    });
  }
  return e.jsxs("section", { className: "template-library-panel", "aria-label": "模版库内容", "data-node-id": "2053:5743", children: [e.jsx("div", { className: "template-category-tabs", role: "tablist", "aria-label": "模版类型", "data-node-id": "2057:6104", children: ea.map((g) => e.jsx("button", { type: "button", role: "tab", "aria-selected": n === g, className: n === g ? "is-active" : "", onClick: () => c(g), children: g }, g)) }), e.jsxs("form", { className: "template-library-toolbar", onSubmit: (g) => {
    g.preventDefault(), k(w);
  }, "data-node-id": "2053:5749", children: [e.jsxs("div", { className: "template-library-filters", children: [e.jsx(_, { "aria-label": "选择模版行业", value: f, options: ta, onChange: x }), e.jsx(_, { "aria-label": "选择模版场景", value: h, options: aa, onChange: S }), e.jsx(z, { "aria-label": "搜索模版名称、行业或场景", value: w, onChange: D, placeholder: "搜索模版名称/行业/场景", allowClear: true }), e.jsx(y, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(y, { type: "outline", onClick: L, children: "重置" })] }), e.jsxs("div", { className: "template-library-actions", children: [e.jsx(y, { type: "primary", onClick: () => s({}), children: "自定义模版" }), e.jsx(y, { type: "outline", onClick: () => s({ upload: true }), children: "模板上传" })] })] }), e.jsx("div", { className: "template-library-results", "data-node-id": "2057:6116", children: $.length > 0 ? e.jsx("div", { className: "template-library-grid", children: $.map((g) => e.jsx(ga, { item: g, onEdit: U, onPreview: O }, g.id)) }) : e.jsxs("div", { className: "material-empty", children: [e.jsx(Ce, { description: "没有符合条件的模版" }), e.jsx(y, { type: "text", onClick: L, children: "清空筛选" })] }) }), r && e.jsx(mt, { template: r, onClose: H, onEdit: () => U(r), onUse: () => pt("使用", r) }), d && (d.upload ? e.jsx(xa, { onClose: () => s(false) }) : e.jsx(ha, { template: d.template, onClose: () => s(false), record: d.template ? a.records[d.template.id] : void 0, user: a.user, onSavePersonal: (g) => a.save(d.template, g), onCreateVersion: (g) => a.createVersion(d.template, g), onRestoreVersion: (g) => a.restoreVersion(d.template, g), onShare: (g) => a.share(d.template, g) }, (m = d.template) == null ? void 0 : m.id))] });
}
const ba = [10, 20, 30], va = { remaining: 15, status: "warning" }, Na = Array.from({ length: 4 }, (a, r) => ({ id: `case-source-${r + 1}`, title: "低空经济政策与试点合集", tags: ["低空经济", "趋势图表"] }));
function wa() {
  return e.jsx("img", { className: "material-folder-preview", src: "./figma/material-library-folder.png", width: "64", height: "66", alt: "", "aria-hidden": "true", "data-node-id": "2035:24807" });
}
function Ca({ remaining: a, status: r }) {
  const o = r === "warning";
  return e.jsx(ue, { content: "设计稿演示值，未接入真实存储配额", children: e.jsxs("span", { className: `material-capacity-main ${o ? "is-warning" : ""}`, "data-node-id": o ? "2095:415" : "2095:401", children: [e.jsx("img", { src: o ? "./figma/material-library-capacity-warning.svg" : "./figma/material-library-capacity.svg", width: "16", height: "16", alt: "", "aria-hidden": "true" }), e.jsxs("span", { className: "material-capacity-copy", children: [e.jsx("span", { children: "剩余知识库容量" }), e.jsxs("strong", { children: [a, "%"] })] })] }) });
}
function Sa({ files: a, onChange: r }) {
  return e.jsx("div", { className: "material-upload-picker", children: e.jsx(Be, { accept: ".pdf,.doc,.docx,.xls,.xlsx", autoUpload: false, multiple: true, drag: true, showUploadList: true, fileList: a.map((o, j) => ({ uid: String(j), name: o.name, status: "init" })), beforeUpload: (o) => o.size > 50 * 1024 * 1024 ? (A.error(`文件“${o.name}”超过 50MB，请重新选择。`), false) : true, onChange: (o) => r(o.map((j) => {
    var d, s;
    return { name: j.name ?? "", size: ((d = j.originFile) == null ? void 0 : d.size) ?? ((s = a[Number(j.uid)]) == null ? void 0 : s.size) ?? 0 };
  })), onExceedLimit: () => A.warning("最多选择 10 个文件，请移除已有文件后重试。"), limit: { maxCount: 10, hideOnExceedLimit: false }, children: e.jsxs("div", { className: "material-upload-trigger", "data-node-id": "I2088:25769;1788:3725", children: [e.jsx("img", { src: "./figma/material-library-upload-plus.svg", width: "14", height: "14", alt: "", "aria-hidden": "true" }), e.jsxs("div", { children: [e.jsx("strong", { children: "点击或拖拽文件到此处上传" }), e.jsxs("span", { children: ["支持 PDF / Word / Excel", e.jsx("br", {}), "单文件不超过50MB"] })] })] }) }) });
}
function Fa() {
  const { items: a, createItem: r, updateItem: o, storageWarning: j } = Dt(), [d, s] = p.useState("knowledge"), [n, c] = p.useState(""), [f, x] = p.useState(""), [h, S] = p.useState(1), [w, D] = p.useState(10), [v, k] = p.useState(null), [$, L] = p.useState(""), [U, O] = p.useState(""), [H, m] = p.useState(""), [g, T] = p.useState("local"), [R, I] = p.useState([]), [E, M] = p.useState(""), [pe, G] = p.useState(""), [K, he] = p.useState([]), [re, B] = p.useState(""), [xe, fe] = p.useState(""), [Se, ae] = p.useState([]), [je, se] = p.useState(false), le = p.useMemo(() => a.filter((u) => !u.deleted), [a]), ee = p.useMemo(() => a.filter((u) => u.deleted), [a]), X = p.useMemo(() => {
    const u = f.trim().toLocaleLowerCase();
    return le.filter((C) => !u || `${C.name} ${C.description}`.toLocaleLowerCase().includes(u));
  }, [le, f]), te = X.slice((h - 1) * w, h * w), ge = p.useMemo(() => {
    const u = pe.trim().toLocaleLowerCase();
    return Na.filter((C) => !u || `${C.title} ${C.tags.join(" ")}`.toLocaleLowerCase().includes(u));
  }, [pe]), Q = p.useMemo(() => {
    const u = xe.trim().toLocaleLowerCase();
    return Pt.slice(0, 4).filter((C) => !u || `${C.name} ${C.industry} ${C.tags.join(" ")}`.toLocaleLowerCase().includes(u));
  }, [xe]), oe = R.length + K.length + Se.length;
  p.useEffect(() => {
    S(1);
  }, [f, w]), p.useEffect(() => {
    S((u) => Math.min(u, Math.max(1, Math.ceil(X.length / w))));
  }, [X.length, w]);
  function ye(u) {
    var C, P;
    k(u), L(((C = u.item) == null ? void 0 : C.name) ?? ""), O(((P = u.item) == null ? void 0 : P.description) ?? ""), m(""), T("local"), I([]), M(""), G(""), he([]), B(""), fe(""), ae([]);
  }
  function ke() {
    const u = $.trim();
    if (!u) {
      m("请输入知识库名称");
      return;
    }
    if (le.some((C) => {
      var P;
      return C.id !== ((P = v == null ? void 0 : v.item) == null ? void 0 : P.id) && C.name === u;
    })) {
      m("已存在同名知识库，请修改名称");
      return;
    }
    (v == null ? void 0 : v.mode) === "edit" && v.item ? (o(v.item.id, { name: u, description: U.trim() || "暂无内容简述" }), A.success("知识库信息已更新。")) : (r({ name: u, description: U.trim() || "暂无内容简述" }), A.success("知识库已创建并保存在本机。")), k(null);
  }
  function Y(u) {
    o(u.id, { deleted: true });
    const C = A.success({ duration: 8e3, content: e.jsxs("span", { className: "material-undo-message", children: ["知识库已移除", e.jsx(y, { type: "text", onClick: () => {
      o(u.id, { deleted: false }), C();
    }, children: "撤销" })] }) });
  }
  function ie(u) {
    Z.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: e.jsxs("div", { className: "task-delete-content", children: [e.jsxs("p", { children: ["确定要删除知识库“", u.name, "”吗？"] }), e.jsx("p", { children: "删除后可通过提示中的“撤销”或“已移除”列表恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => Y(u) });
  }
  function ce() {
    c(""), x(""), S(1);
  }
  return e.jsxs("div", { className: "material-library-page", children: [e.jsx("h1", { className: "sr-only", children: "我的素材库" }), e.jsxs("div", { className: "material-tabs", role: "tablist", "aria-label": "素材库类型", children: [e.jsx("button", { type: "button", role: "tab", "aria-selected": d === "knowledge", className: d === "knowledge" ? "is-active" : "", onClick: () => s("knowledge"), children: "知识库" }), e.jsx("button", { type: "button", role: "tab", "aria-selected": d === "template", className: d === "template" ? "is-active" : "", onClick: () => s("template"), children: "模版库" })] }), d === "knowledge" ? e.jsxs(e.Fragment, { children: [e.jsxs("form", { className: "material-toolbar", onSubmit: (u) => {
    u.preventDefault(), x(n), S(1);
  }, children: [e.jsx(y, { type: "primary", onClick: () => ye({ mode: "create" }), children: "新建知识库" }), e.jsxs("div", { className: "material-search-group", children: [e.jsx(z, { className: "shared-search-input material-search-input", "aria-label": "搜索知识库名称或描述", placeholder: "搜索知识库名称", value: n, onChange: c, allowClear: true }), e.jsx(y, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(y, { type: "outline", onClick: ce, children: "重置" })] })] }), e.jsx("div", { className: "material-results-scroll", children: te.length > 0 ? e.jsx("div", { className: "material-card-grid", children: te.map((u) => e.jsxs("article", { className: "material-card", children: [e.jsxs("button", { type: "button", className: "material-card-main material-card-open", "aria-label": `打开知识库：${u.name}`, onClick: () => Ft(u.id), children: [e.jsx(wa, {}), e.jsxs("div", { className: "material-card-copy", children: [e.jsx(ue, { content: u.name, children: e.jsx("h2", { children: u.name }) }), e.jsx("p", { children: u.description })] })] }), e.jsxs("div", { className: "material-card-footer", children: [e.jsxs("span", { children: ["创建于 ", u.createdAt] }), e.jsxs("div", { "data-node-id": "2095:519", children: [e.jsx(y, { type: "text", status: "danger", "data-node-id": "2095:520", onClick: () => ie(u), children: "删除" }), e.jsx(y, { type: "text", "data-node-id": "2095:521", onClick: () => ye({ mode: "edit", item: u }), children: "编辑" })] })] })] }, u.id)) }) : e.jsxs("div", { className: "material-empty", children: [e.jsx(Ce, { description: "没有符合条件的知识库" }), e.jsx(y, { type: "text", onClick: ce, children: "清空筛选" })] }) }), e.jsxs("div", { className: "material-footer", children: [e.jsxs("div", { className: "material-capacity", children: [e.jsx(Ca, { ...va }), ee.length > 0 && e.jsxs(y, { type: "text", onClick: () => se(true), children: ["已移除 ", ee.length, " 条"] })] }), e.jsx(At, { className: "tasks-pagination material-pagination", current: h, pageSize: w, total: X.length, size: "small", showTotal: (u) => `共计 ${u} 条`, sizeCanChange: true, sizeOptions: ba, onChange: (u, C) => {
    S(u), D(C);
  }, onPageSizeChange: D })] }), j && e.jsx("p", { className: "material-storage-warning", role: "status", children: "浏览器无法保存素材库操作，刷新后将恢复演示数据。" })] }) : e.jsx(ya, {}), e.jsx(Z, { title: (v == null ? void 0 : v.mode) === "edit" ? "编辑知识库" : "新建知识库", visible: !!v, onCancel: () => k(null), maskClosable: false, autoFocus: false, afterOpen: () => requestAnimationFrame(() => {
    var u;
    return (u = document.querySelector(".material-create-modal .arco-modal-close-icon")) == null ? void 0 : u.focus({ preventScroll: true });
  }), className: `material-editor-modal ${(v == null ? void 0 : v.mode) === "create" ? "material-create-modal" : ""}`, style: { width: 480 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(y, { onClick: () => k(null), children: "取消" }), e.jsx(y, { type: "primary", disabled: !$.trim(), onClick: ke, children: (v == null ? void 0 : v.mode) === "edit" ? "保存" : "创建知识库" })] }), children: e.jsxs(q, { layout: "vertical", className: "material-editor-form", children: [e.jsxs(e.Fragment, { children: [e.jsx(q.Item, { label: "知识库名称", required: true, validateStatus: H ? "error" : void 0, help: H || void 0, children: e.jsx(z, { value: $, onChange: (u) => {
    L(u), m("");
  }, maxLength: 80, placeholder: "请输入知识库名称" }) }), e.jsx(q.Item, { label: "内容简述", children: e.jsx(z.TextArea, { className: "material-description-input", value: U, onChange: O, maxLength: 200, placeholder: "请输入知识库名称" }) })] }), (v == null ? void 0 : v.mode) === "create" && e.jsxs("div", { className: `material-source-field ${g !== "local" ? "is-picker" : ""}`, children: [e.jsxs("label", { children: ["来源", e.jsx("span", { className: "material-source-hint", children: "（支持同时从多个来源添加）" })] }), oe > 0 && e.jsxs("div", { className: "material-files-summary", children: [e.jsxs("span", { children: ["已添加 ", oe, " 个文件"] }), e.jsx(y, { type: "text", onClick: () => {
    I([]), he([]), ae([]);
  }, children: "清空" })] }), e.jsxs(W.Group, { value: g, onChange: (u) => {
    T(u), requestAnimationFrame(() => requestAnimationFrame(() => {
      const C = document.querySelector(".material-create-modal .arco-modal-content");
      C && (C.scrollTop = 0);
    }));
  }, className: "material-source-options", children: [e.jsx(W, { value: "local", children: "本地上传" }), e.jsx(W, { value: "cases", children: "案例广场" }), e.jsx(W, { value: "tasks", children: "我的创作任务" })] }), g === "local" ? e.jsx(Sa, { files: R, onChange: I }) : g === "cases" ? e.jsxs("div", { className: "material-case-picker", children: [e.jsxs("div", { className: "material-case-search", children: [e.jsx(z, { className: "shared-search-input", "aria-label": "搜索案例来源", placeholder: "搜索案例名称、行业、标签", value: E, onChange: M, allowClear: true, onPressEnter: () => G(E) }), e.jsx(y, { type: "primary", onClick: () => G(E), children: "查询" })] }), e.jsx("div", { className: "material-case-options", children: ge.map((u) => e.jsxs("label", { className: "material-case-option", children: [e.jsxs("span", { className: "material-case-copy", children: [e.jsx("strong", { children: u.title }), e.jsx("span", { children: u.tags.map((C) => e.jsx("i", { children: C }, C)) })] }), e.jsx(Ne, { checked: K.includes(u.id), onChange: (C) => he((P) => C ? [...P, u.id] : P.filter((ne) => ne !== u.id)), "aria-label": `选择案例：${u.title}` })] }, u.id)) })] }) : e.jsxs("div", { className: "material-case-picker material-task-picker", children: [e.jsxs("div", { className: "material-case-search", children: [e.jsx(z, { className: "shared-search-input", "aria-label": "搜索创作任务来源", placeholder: "搜索任务名称、行业、标签", value: re, onChange: B, allowClear: true, onPressEnter: () => fe(re) }), e.jsx(y, { type: "primary", onClick: () => fe(re), children: "查询" })] }), e.jsx("div", { className: "material-case-options", children: Q.map((u) => e.jsxs("label", { className: "material-case-option", children: [e.jsxs("span", { className: "material-case-copy", children: [e.jsx("strong", { children: u.name }), e.jsx("span", { children: u.tags.slice(0, 2).map((C) => e.jsx("i", { children: C }, C)) })] }), e.jsx(Ne, { checked: Se.includes(u.id), onChange: (C) => ae((P) => C ? [...P, u.id] : P.filter((ne) => ne !== u.id)), "aria-label": `选择任务：${u.name}` })] }, u.id)) })] })] })] }) }), e.jsx(Z, { title: "已移除的知识库", visible: je, onCancel: () => se(false), footer: e.jsx(y, { onClick: () => se(false), children: "关闭" }), children: ee.length === 0 ? e.jsx(Ce, { description: "没有已移除的知识库" }) : e.jsx("ul", { className: "removed-material-list", children: ee.map((u) => e.jsxs("li", { children: [e.jsxs("div", { children: [e.jsx("strong", { children: u.name }), e.jsxs("span", { children: ["创建于 ", u.createdAt] })] }), e.jsx(y, { type: "text", onClick: () => {
    o(u.id, { deleted: false }), A.success("知识库已恢复。");
  }, children: "恢复" })] }, u.id)) }) })] });
}
export { Fa as default };
