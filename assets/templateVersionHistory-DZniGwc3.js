import { r as S, C as ue, a as ce, b as pe, R as c, p as fe, c as de, aj as me, G as R, i as z, ak as ye, al as ge } from "./index-CNdOvyN0.js";
var m = function() {
  return m = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, m.apply(this, arguments);
}, be = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}, A = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), s, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; ) o.push(s.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}, ve = { position: "top", okType: "primary", icon: c.createElement(me, null), blurToHide: true, unmountOnExit: true, trigger: "click", escToClose: true };
function he(e, t) {
  var r, n = S.useContext(ue), s = n.getPrefixCls, o = n.locale, i = n.componentConfig, l = n.rtl, a = ce(e, ve, i == null ? void 0 : i.Popconfirm), u = a.style, d = a.className, k = a.children, M = a.position, J = a.getPopupContainer, W = a.blurToHide, U = a.unmountOnExit, G = a.trigger, K = a.escToClose, w = a.onVisibleChange, b = a.triggerProps, P = a.title, O = a.icon, Y = a.okText, Q = a.cancelText, X = a.okType, Z = a.okButtonProps, ee = a.cancelButtonProps, te = a.autoFocus, ne = a.focusLock, v = a.content, re = be(a, ["style", "className", "children", "position", "getPopupContainer", "blurToHide", "unmountOnExit", "trigger", "escToClose", "onVisibleChange", "triggerProps", "title", "icon", "okText", "cancelText", "okType", "okButtonProps", "cancelButtonProps", "autoFocus", "focusLock", "content"]), V = A(pe(false, { defaultValue: a.defaultPopupVisible, value: a.popupVisible }), 2), h = V[0], ie = V[1], $ = A(S.useState(false), 2), E = $[0], C = $[1], p = s("popconfirm"), q = !ge(v), I = function(f) {
    "popupVisible" in a || ie(f), b && b.onVisibleChange && b.onVisibleChange(f), w && w(f);
  }, x = function() {
    I(false);
  }, oe = function(f) {
    x(), a.onCancel && a.onCancel(f);
  }, se = function(f) {
    var F = a.onOk || a.onConfirm, y;
    F && (y = F(f)), y && y.then && (C(true), y.then(function() {
      x();
    }, function(le) {
      C(false), console.error(le);
    })), y || x();
  }, ae = function() {
    var f = c.createElement(c.Fragment, null, c.createElement(R, m({ onClick: oe, size: "mini" }, ee), Q || o.Popconfirm.cancelText), c.createElement(R, m({ loading: E, onClick: se, size: "mini", type: X }, Z), Y || o.Popconfirm.okText));
    return c.createElement("div", { className: p + "-wrapper" }, c.createElement("div", { className: p + "-title" }, O && c.createElement("span", { className: p + "-title-icon" }, O), c.createElement("div", { className: p + "-title-text" }, z(P) ? P() : P)), q && c.createElement("div", { className: p + "-inner-content" }, z(v) ? v() : v), ne ? c.createElement(ye, { returnFocus: true, as: "div", className: p + "-btn", crossFrame: false, disabled: !h, autoFocus: !!te }, f) : c.createElement("div", { className: p + "-btn" }, f));
  };
  return S.useEffect(function() {
    return !h && E && C(false), function() {
      C(false);
    };
  }, [h]), c.createElement(fe, m({}, re, { ref: t, style: m({ maxWidth: 350 }, u), className: de(d, (r = {}, r[p + "-rtl"] = l, r[p + "-has-content"] = q, r)), prefixCls: p, getPopupContainer: J, position: M, trigger: G, escToClose: K, popupVisible: h, content: ae, unmountOnExit: U, blurToHide: W, popupHoverStay: true, triggerProps: b, onVisibleChange: I, childrenPrefix: p }), typeof k == "string" ? c.createElement("span", null, k) : k);
}
var Ce = S.forwardRef(he);
Ce.displayName = "Popconfirm";
const g = () => ({ fontFamily: "Microsoft YaHei", fontSize: 15, lineHeight: 1.8, align: "left" }), Oe = [{ key: "text", label: "文本" }, { key: "table", label: "表格" }, { key: "chart", label: "图表" }, { key: "analysis-summary", label: "智能分析摘要" }], Se = { text: "静态正文", table: "表格", chart: "图表", "analysis-summary": "智能分析摘要" }, Ve = [{ value: "trend", label: "趋势分析", description: "增长率、最大值、最小值与极差" }, { value: "composition", label: "构成分析", description: "最大构成项及其占比" }, { value: "anomaly", label: "异常检测", description: "各项相对对比值的变化幅度" }, { value: "custom", label: "用户自定义模板", description: "自定义分析目标、步骤和输出要求" }], Te = [["资讯数据集", "资讯明细表", "资讯数量", "条", false], ["资讯数据集", "主题热度月表", "主题热度", "次", false], ["资讯数据集", "来源渠道分布表", "渠道资讯数量", "条", true], ["论文数据集", "论文明细表", "论文数量", "篇", true], ["论文数据集", "学科年度统计表", "学科论文数量", "篇", true], ["论文数据集", "引用关系表", "引用数量", "次", true], ["产业链数据集", "产业链节点表", "节点企业数量", "家", true], ["产业链数据集", "环节企业映射表", "环节企业数量", "家", true], ["专利数据集（占位）", "专利申请月表", "专利申请数量", "件", true], ["专利数据集（占位）", "技术领域汇总表", "技术领域数量", "件", true]], _ = Te.map(([e, t, r, n, s]) => ({ dataset: e, table: t, metric: r, unit: n, fields: [{ key: "id", label: "记录ID", type: "text" }, { key: "period", label: "统计月份", type: "text" }, { key: "category", label: t.includes("渠道") ? "来源渠道" : t.includes("学科") ? "学科" : "分类名称", type: "text" }, { key: "value", label: r, type: "number" }, { key: "previous", label: "上期数值", type: "number" }, ...s ? [{ key: "categoryId", label: "分类编码", type: "text" }] : []] })), $e = [...new Set(_.map((e) => e.dataset))], T = (e) => _.find((t) => t.dataset === e.dataset && t.table === e.table);
function Ee(e, t) {
  return { id: t, title: Se[e], description: "", placeholder: { kind: e, config: { dataset: "", table: "", queryRequirement: "", chartType: "auto", scripts: ["trend", "composition", "anomaly"], customAnalysisScript: "", filters: [], loopFields: [], tableRowLimit: 100, style: g() } } };
}
function qe(e, t, r, n = "table") {
  const s = T({ dataset: t, table: r });
  return { ...e, dataset: t, table: s ? r : "", filters: [], loopFields: s && n === "table" ? ["period", "category", "value", "previous"] : [] };
}
const j = [{ value: "eq", label: "等于", symbol: "==" }, { value: "ne", label: "不等于", symbol: "!=" }, { value: "gt", label: "大于", symbol: ">" }, { value: "gte", label: "大于等于", symbol: ">=" }, { value: "lt", label: "小于", symbol: "<" }, { value: "lte", label: "小于等于", symbol: "<=" }, { value: "contains", label: "包含", symbol: "contains" }, { value: "notContains", label: "不包含", symbol: "notContains" }], ke = (e) => j.filter((t) => e === "number" ? !["contains", "notContains"].includes(t.value) : ["eq", "ne", "contains", "notContains"].includes(t.value));
function D(e) {
  if (!e.placeholder) return [];
  const { kind: t, config: r } = e.placeholder, n = [];
  if (e.title.trim() || n.push({ field: "title", message: "请填写占位符标题" }), e.title.length > 100 && n.push({ field: "title", message: "标题最多100字" }), t === "text") return e.description.trim() || n.push({ field: "description", message: "请填写静态正文" }), e.description.length > 2e4 && n.push({ field: "description", message: "静态正文最多20000字" }), n;
  (t === "table" || t === "chart") && (r.queryRequirement.trim() ? r.queryRequirement.length > 1e3 && n.push({ field: "queryRequirement", message: "查数需求最多1000字" }) : n.push({ field: "queryRequirement", message: "请输入查数需求" })), r.dataset || n.push({ field: "dataset", message: "请选择数据集" });
  const s = T(r);
  return s || n.push({ field: "table", message: "请选择当前数据集中的有效数据表" }), t === "analysis-summary" && (r.scripts.length || n.push({ field: "scripts", message: "请至少选择一种分析脚本" }), r.scripts.includes("custom") && !r.customAnalysisScript.trim() && n.push({ field: "customAnalysisScript", message: "请填写自定义分析目标、步骤和输出要求" }), r.customAnalysisScript.length > 4e3 && n.push({ field: "customAnalysisScript", message: "自定义分析脚本内容最多4000字" })), t === "table" && (s && (!r.loopFields.length || r.loopFields.some((o) => !s.fields.some((i) => i.key === o))) && n.push({ field: "loopFields", message: "请至少选择一个有效展示字段" }), (r.tableRowLimit === null || !Number.isInteger(r.tableRowLimit) || r.tableRowLimit < 1 || r.tableRowLimit > 100) && n.push({ field: "tableRowLimit", message: "最多显示数量应为1—100之间的整数" }), r.filters.forEach((o, i) => {
    const l = s == null ? void 0 : s.fields.find((a) => a.key === o.field);
    (!l || !o.value.trim() || !ke(l.type).some((a) => a.value === o.operator) || l.type === "number" && !Number.isFinite(Number(o.value))) && n.push({ field: `filter-${o.id}`, message: `请完善第${i + 1}条筛选条件` });
  })), n;
}
function Ie(e) {
  const t = T(e);
  if (!t) return [];
  const r = t.table.includes("渠道") ? ["科研机构", "产业媒体", "政策平台", "行业组织"] : t.dataset === "论文数据集" ? ["人工智能", "材料科学", "生命科学", "信息工程"] : t.dataset === "产业链数据集" ? ["上游材料", "核心设备", "平台服务", "应用服务"] : t.dataset.startsWith("专利") ? ["智能计算", "绿色能源", "先进制造", "生物技术"] : ["大模型", "智能算力", "智能应用", "数据治理"], n = Array.from(`${t.dataset}|${t.table}|人工智能`).reduce((o, i) => (o * 31 + i.charCodeAt(0)) % 997, 17);
  return ["2026-07", "2026-08", "2026-09"].flatMap((o, i) => r.map((l, a) => {
    const u = 80 + n % 70 + i * 13 + a * 23;
    return { id: `sample-${o}-${a}`, period: o, category: l, previous: u, value: u + 12 + (a === 0 ? i * 7 : i * 2) + a * 4, categoryId: `category-${a + 1}` };
  })).filter((o) => e.filters.every((i) => {
    const l = o[i.field], a = t.fields.find((d) => d.key === i.field);
    if (!a || !i.value.trim()) return false;
    const u = a.type === "number" ? Number(i.value) : i.value;
    return i.operator === "contains" ? String(l).includes(String(u)) : i.operator === "notContains" ? !String(l).includes(String(u)) : i.operator === "eq" ? l === u : i.operator === "ne" ? l !== u : i.operator === "gt" ? Number(l) > Number(u) : i.operator === "gte" ? Number(l) >= Number(u) : i.operator === "lt" ? Number(l) < Number(u) : Number(l) <= Number(u);
  }));
}
function Fe(e) {
  return e.chartType !== "auto" ? e.chartType : /占比|构成|份额|分布/.test(e.queryRequirement) ? "pie" : /趋势|走势|月度|时间|变化/.test(e.queryRequirement) || e.table.includes("月") ? "line" : "bar";
}
function Re(e, t, r = false) {
  const n = T(t), s = (i) => {
    var l;
    return ((l = n == null ? void 0 : n.fields.find((a) => a.key === i)) == null ? void 0 : l.label) ?? i;
  }, o = t.filters.map((i) => {
    var l, a;
    return ` | ${s(i.field)} ${((l = j.find((u) => u.value === i.operator)) == null ? void 0 : l.symbol) ?? "?"} ${((a = n == null ? void 0 : n.fields.find((u) => u.key === i.field)) == null ? void 0 : a.type) === "number" ? i.value : JSON.stringify(i.value)}`;
  }).join("");
  return r ? `{{#each ${e}${o}}}
  ${t.loopFields.map((i) => `{{当前项.${s(i)}}}`).join("：")}
{{/each}}` : `{{${e}${o}}}`;
}
function Pe(e) {
  return { title: e.name, type: e.category, requirement: e.description, fileName: "", summaryVisible: true, outline: xe(e), documentTextStyles: { title: { ...g(), fontSize: 16 }, summary: { ...g(), fontSize: 14 } } };
}
function L(e) {
  return e === "洞察报告";
}
function B(e, t) {
  if (L(t)) return e;
  const r = ({ id: n, title: s, description: o }) => ({ id: n, title: s, description: o });
  return e.map((n) => ({ ...r(n), items: n.items.filter((s) => !s.placeholder).map(r) }));
}
function xe(e) {
  return e.outline ? structuredClone(e.outline) : { 研究报告: [["行业与市场研究", e.description, "政策与发展环境", "市场空间与竞争格局"], ["投资价值与风险分析", `结合${e.scene}，梳理价值评估维度与风险边界。`, "核心价值与关键驱动", "风险因素与研究建议"]], 洞察报告: [["领域发展现状", e.description, "关键数据与变化", "技术进展与应用场景"], ["趋势研判与机会分析", `结合${e.scene}，识别主要变化、潜在机会与关注方向。`, "关键驱动因素", "机会与风险提示"]], 战略咨询报告: [["发展基础与战略目标", e.description, "产业环境与资源条件", "发展定位与阶段目标"], ["战略路径与实施保障", `结合${e.scene}，明确重点任务、推进路径与保障措施。`, "重点任务与实施路径", "风险识别与保障措施"]], 其他: [["背景与研究目标", e.description, "背景信息与研究范围", "目标与分析重点"], ["分析框架与建议", "梳理关键问题、研究思路与后续建议。", "主要发现与分析", "结论与后续建议"]] }[e.category].map(([r, n, s, o], i) => ({ id: `${e.id}-section-${i + 1}`, title: r, description: n, items: [s, o].map((l, a) => ({ id: `${e.id}-section-${i + 1}-item-${a + 1}`, title: l, description: `围绕${e.industry}的${l}组织内容，补充相关依据与分析。` })) }));
}
function N(e) {
  if (!L(e.type)) return JSON.stringify({ ...e, outline: B(e.outline, e.type), documentTextStyles: void 0 });
  const t = e.outline.map((r) => ({ ...r, textStyle: { ...g(), ...r.textStyle }, items: r.items.map((n) => n.placeholder ? n : { ...n, textStyle: { ...g(), ...n.textStyle } }) }));
  return JSON.stringify({ ...e, outline: t }, (r, n) => r === "validationRequested" ? void 0 : n);
}
const ze = "thinktank-personal-template-versions-v1", Ae = { id: "local-li-ke", name: "李科", organization: { id: "local-organization", name: "当前组织" } }, Ne = (e) => {
  var t;
  return !!((t = e.organization) != null && t.id);
};
function _e(e, t, r) {
  const n = Pe(e), s = Array.from({ length: 5 }, (o, i) => {
    const l = structuredClone(n);
    return i < 4 && (l.requirement = `历史示例 V${i + 1}：${n.requirement}`), { number: i + 1, savedAt: new Date(Date.parse(r) - (4 - i) * 864e5).toISOString(), savedBy: t.name, draft: l };
  });
  return { templateId: e.id, ownerId: t.id, activeVersion: 5, workingDraft: n, versions: s, shareScope: "private", organizationId: null };
}
function H(e) {
  return !!e.title.trim() && !!e.requirement.trim() && B(e.outline, e.type).flatMap((t) => t.items).every((t) => !D(t).length);
}
function je(e, t, r, n) {
  if (e.ownerId !== r.id) return { status: "forbidden" };
  const s = e.versions.find((i) => i.number === e.activeVersion);
  if (!s) return { status: "not-found" };
  if (N(t) === N(s.draft)) return { status: "unchanged" };
  if (!H(t)) return { status: "invalid" };
  const o = { number: Math.max(...e.versions.map((i) => i.number)) + 1, savedAt: n, savedBy: r.name, draft: structuredClone(t) };
  return { status: "saved", version: o, record: { ...e, activeVersion: o.number, workingDraft: structuredClone(t), versions: [...e.versions, o] } };
}
function De(e, t, r) {
  if (e.ownerId !== r.id) return { status: "forbidden" };
  if (t === e.activeVersion) return { status: "unchanged" };
  const n = e.versions.find((s) => s.number === t);
  return n ? { status: "saved", version: n, record: { ...e, activeVersion: t, workingDraft: structuredClone(n.draft) } } : { status: "not-found" };
}
function Le(e, t, r) {
  return e.ownerId !== r.id ? { status: "forbidden" } : H(t) ? { status: "saved", record: { ...e, workingDraft: structuredClone(t) } } : { status: "invalid" };
}
function Be(e, t, r) {
  return e.ownerId !== r.id || t === "organization" && !Ne(r) ? { status: "forbidden" } : { status: "saved", record: { ...e, shareScope: t, organizationId: t === "organization" ? r.organization.id : null } };
}
function He(e) {
  if (!e || typeof e != "object" || !("schemaVersion" in e) || e.schemaVersion !== 1 || !("records" in e) || !e.records || typeof e.records != "object") return null;
  const t = ["研究报告", "洞察报告", "战略咨询报告", "其他"];
  function r(s) {
    var l, a;
    if (!s || typeof s != "object") return false;
    const o = s;
    if (!(typeof o.title == "string" && t.includes(o.type) && typeof o.requirement == "string" && typeof o.fileName == "string" && typeof o.summaryVisible == "boolean" && !!((l = o.documentTextStyles) != null && l.title) && !!((a = o.documentTextStyles) != null && a.summary) && Array.isArray(o.outline) && o.outline.every((u) => typeof u.id == "string" && typeof u.title == "string" && typeof u.description == "string" && Array.isArray(u.items) && u.items.every((d) => typeof d.id == "string" && typeof d.title == "string" && typeof d.description == "string")))) return false;
    try {
      return N(o), o.outline.flatMap((u) => u.items).forEach((u) => D(u)), true;
    } catch {
      return false;
    }
  }
  const n = e.records;
  for (const [s, o] of Object.entries(n)) {
    if (!o || o.templateId !== s || typeof o.ownerId != "string" || !r(o.workingDraft) || !Array.isArray(o.versions) || !o.versions.length || !["private", "organization"].includes(o.shareScope) || !(o.organizationId === null || typeof o.organizationId == "string")) return null;
    const i = /* @__PURE__ */ new Set();
    for (const l of o.versions) {
      if (!Number.isInteger(l.number) || l.number < 1 || i.has(l.number) || !Number.isFinite(Date.parse(l.savedAt)) || typeof l.savedBy != "string" || !r(l.draft)) return null;
      i.add(l.number);
    }
    if (!i.has(o.activeVersion)) return null;
  }
  return structuredClone(n);
}
export { He as A, Ce as P, Ie as a, $e as b, qe as c, Ve as d, Re as e, ke as f, T as g, g as h, Ne as i, B as j, xe as k, Ae as l, Pe as m, Oe as n, Ee as o, _ as p, _e as q, Fe as r, L as s, N as t, ze as u, D as v, Be as w, De as x, je as y, Le as z };
