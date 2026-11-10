import { r as u, F as n, a1 as N, $, G as c, a0 as S, Z as C, v as w } from "./index-CNdOvyN0.js";
function D() {
  const [e, t] = u.useState(() => window.matchMedia("(max-width: 767px)").matches);
  return u.useEffect(() => {
    const a = window.matchMedia("(max-width: 767px)"), s = () => t(a.matches);
    return s(), a.addEventListener("change", s), () => a.removeEventListener("change", s);
  }, []), e;
}
const d = [{ client: "深圳市发改委", investment: 12.8, roi: 21, actual: true }, { client: "苏州市工信局", investment: 8.4, roi: 18.5, actual: false }, { client: "成都市科技局", investment: 6.2, roi: 16, actual: true }, { client: "南京市发改委", investment: 5.6, roi: 15.2, actual: false }, { client: "广州市商务局", investment: 3.1, roi: 14.5, actual: true }, { client: "杭州市经信局", investment: 4.8, roi: 19.6, actual: false }, { client: "武汉市科技局", investment: 9.6, roi: 20.2, actual: true }, { client: "北京市科委", investment: 7.3, roi: 17.4, actual: false }, { client: "福建省能源发展中心", investment: 6.9, roi: 18.2, actual: true }, { client: "合肥高新区管委会", investment: 2.9, roi: 16.7, actual: false }, { client: "宁波市招商局", investment: 1.8, roi: 13.6, actual: true }, { client: "天津市发改委", investment: 4.2, roi: 17.8, actual: false }], g = ["监管平台建设方案", "产业链补链强链研究", "科技成果转化路径咨询", "区域布局战略规划", "招商政策实施效果评估", "产业园数字化转型方案", "产业协同发展规划", "基础设施布局与运营咨询", "关键技术商业化路径研究", "产业园招商定位研究", "重点企业引育策略", "应用场景推进方案"], f = ["梳理监管平台建设需求、协同机制与分阶段实施路径，完善运行管理和服务体系。", "识别产业链关键环节与配套缺口，提出补链强链、企业协作和重点招商建议。", "对接科技成果与应用需求，设计成果转化路径、产学研协同及实施保障机制。", "比较区域产业基础与承载条件，明确重点赛道、空间布局及阶段性发展策略。", "评估招商政策执行效果与企业反馈，提出政策优化方向及资源配置建议。", "评估产业园数字化需求，规划平台建设、运营协同和分阶段转型任务。", "梳理产业协作关系与资源需求，明确协同发展目标、重点项目和推进机制。", "分析基础设施服务需求与建设条件，提出布局方案、运营模式及实施重点。", "比较关键技术商业化条件，识别优先应用方向、合作模式与落地路径。", "明确产业园招商定位与目标企业画像，设计招商策略及持续运营服务方案。", "识别重点企业发展需求，提出企业引育、资源对接和产业配套建设建议。", "比较典型应用场景与落地条件，规划示范项目、评估指标及规模推广路径。"];
function R(e, t) {
  const a = d[e % d.length], s = Math.floor(e / d.length), r = new Date(Date.UTC(2026, 10, 1));
  r.setUTCDate(r.getUTCDate() - e * 2);
  const l = s > 0 ? `（${r.getUTCFullYear()}年第${Math.floor(r.getUTCMonth() / 3) + 1}季度）` : "";
  return { ...a, title: `${t}${g[e % g.length]}${l}`, summary: `围绕${t}领域，${f[e % f.length]}`, investment: Number((a.investment + s * 0.4).toFixed(1)), roi: Number((a.roi + s * 0.2).toFixed(1)), satisfaction: a.actual ? Number((92 + e % 7 + s * 0.1).toFixed(1)) : void 0, date: { kind: a.actual ? "completed" : "updated", value: r.toISOString().slice(0, 10) } };
}
function T(e) {
  return e ? `${e.actual ? "实际投资额" : "计划投资额"} ${e.investment.toFixed(1)} 亿元 · ${e.actual ? "ROI" : "目标 ROI"} ${e.roi.toFixed(1)}%` : "待补充";
}
function k(e) {
  return (e == null ? void 0 : e.kind) === "completed" ? "完成时间" : "更新时间";
}
function E(e, t) {
  const a = e != null && e.actual && Number.isFinite(e.investment) ? e.investment : null, s = t != null && t.actual && Number.isFinite(t.investment) ? t.investment : null;
  return a !== null && s !== null ? s - a : a !== null ? -1 : s !== null ? 1 : 0;
}
const K = ["研究报告", "洞察报告", "战略咨询报告", "研报库"], F = ["全部", "新能源", "人工智能", "低空经济", "量子计算", "产业政策", "通信及通信设备", "交通运输", "房地产", "电力设备", "国防军工", "机械设备", "食品饮料", "非银金融", "计算机", "其他"], b = ["低空经济政策环境研究", "V2G产业政策建议报告", "量子计算产业链研究", "无人机物流商业化路径", "具身智能产业链研究", "未来产业区域差异化布局与重点城市承载能力评估研究", "低空基础设施建设白皮书", "AI硬件产业发展情报报告", "新能源产业政策地图"], I = ["李智慧·科技情报专家认证", "李智慧", "张明远·国家发展研究院-研究员"], x = F.slice(1), z = Array.from({ length: 120 }, (e, t) => {
  const a = t < 12, s = t % 3, r = a ? "低空经济" : x[t % x.length], l = a ? "低空经济政策环境研究" : b[t % b.length], i = a ? "2026-05-18" : `2026-${String(4 - t % 3).padStart(2, "0")}-${String(2 + t % 16).padStart(2, "0")}`, o = R(t, r);
  return { id: `case-${t + 1}`, title: l, author: I[s], version: "V1.0", sourceKind: "platform-user", librarySource: t % 2 === 0 ? "organization" : "licensed", licenseValidUntil: t % 2 === 1 ? "2027-06-30" : void 0, certified: s !== 1, recommended: s !== 1, industry: r, tags: [r, a ? "趋势图表" : t % 2 ? "产业链" : "政策研究", "城市治理", "产业战略"], updatedAt: i, views: a ? 1418 : 760 + t % 9 * 86, downloads: a ? 286 : 118 + t % 8 * 23, rating: a ? 4.8 : Number((3.7 + t % 6 * 0.2).toFixed(1)), summary: `${l}围绕${r}领域梳理政策、产业与应用信息，形成可供研究与决策参考的结构化报告。`, strategy: o };
}), v = { "platform-user": "平台用户创作", "platform-example": "平台示范案例", "expert-recommended": "专家推荐", official: "官方发布", licensed: "授权采购" };
function j(e, t) {
  return { kind: t ?? (e === v["platform-example"] ? "platform-example" : "platform-user") };
}
function L(e) {
  return { kind: e.recommended ? "expert-recommended" : "official" };
}
function O(e, t) {
  return t === "expert-recommended" || t === "official" ? { kind: t } : j(e, t);
}
function U(e, t) {
  return t === "library" ? e.librarySource === "organization" ? { kind: "organization", name: "权威信源" } : { kind: "licensed" } : j(e.author, e.sourceKind);
}
function P({ source: e, className: t = "", validUntil: a, recommended: s = false }) {
  return n.jsxs("div", { className: `case-source ${t}`, "aria-label": "报告来源", children: [n.jsxs("span", { className: `case-source-badge is-${e.kind}`, children: [e.kind === "organization" ? e.name : v[e.kind], e.kind === "licensed" && a && n.jsxs(n.Fragment, { children: [n.jsx("span", { className: "case-source-separator", "aria-hidden": "true", children: "·" }), n.jsxs("span", { className: "case-source-valid-until", children: ["有效期至 ", n.jsx("time", { dateTime: a, children: a })] })] })] }), s && e.kind !== "expert-recommended" && n.jsx("span", { className: "case-source-badge is-expert-recommended", children: "专家推荐" })] });
}
function V({ tag: e, type: t, resource: a, onActivate: s, className: r = "" }) {
  const l = N(t, e, a);
  return n.jsx("a", { className: `case-topic-tag ${r}`, href: l, title: e, "aria-label": `查看${e}标签下的${$(a ?? t)}`, onClick: (i) => {
    i.stopPropagation(), !(i.metaKey || i.ctrlKey || i.shiftKey || i.altKey || i.button !== 0) && (i.preventDefault(), s == null || s(), window.location.hash = l);
  }, onKeyDown: (i) => i.stopPropagation(), children: e });
}
function B({ value: e, onChange: t, onQuery: a, onReset: s, activeCount: r = 0, children: l, ownSearch: i = true, searchLabel: o = "搜索报告" }) {
  const [p, m] = u.useState(false), h = u.useId();
  return n.jsxs("div", { className: "mobile-case-filters", children: [n.jsxs(c, { type: "text", className: "mobile-case-filter-toggle", "aria-label": `筛选条件${r ? `，已选${r}项` : ""}`, "aria-expanded": p, "aria-controls": h, onClick: () => m((y) => !y), children: [n.jsxs("span", { children: ["筛选条件", r > 0 && n.jsxs("span", { className: "mobile-filter-count", children: ["已选 ", r, " 项"] })] }), n.jsxs("span", { className: "mobile-filter-toggle-action", children: ["打开", n.jsx(S, {})] })] }), n.jsx(C, { className: "case-mobile-filter-page", title: "筛选条件", placement: "bottom", height: "90dvh", visible: p, onCancel: () => m(false), unmountOnExit: true, footer: n.jsxs("div", { className: "mobile-case-filter-footer", children: [i && n.jsx(c, { type: "primary", onClick: a, children: "查询" }), i && n.jsx(c, { onClick: s, children: "重置" }), n.jsx(c, { type: i ? "outline" : "primary", onClick: () => m(false), children: "返回结果" })] }), children: n.jsxs("div", { id: h, className: "mobile-case-filter-body", children: [l, i && n.jsxs("label", { className: "mobile-case-filter-search", children: [o, n.jsx(w, { "aria-label": o, placeholder: "搜索报告标题、全文关键词", value: e, allowClear: true, onChange: t, onPressEnter: a })] })] }) })] });
}
function G({ title: e, children: t }) {
  return n.jsxs("details", { className: "mobile-case-section", children: [n.jsx("summary", { children: e }), n.jsx("div", { children: t })] });
}
function H({ fields: e, views: t, downloads: a, rating: s }) {
  const r = [{ label: "委托机构", value: (e == null ? void 0 : e.client) ?? "待补充" }, { label: "关键指标", value: T(e) }, { label: k(e == null ? void 0 : e.date), value: n.jsx("time", { dateTime: e == null ? void 0 : e.date.value, children: (e == null ? void 0 : e.date.value) ?? "待补充" }) }, { label: "用户评分", value: s === null ? "暂无评分" : `${s.toFixed(1)} / 5.0` }, { label: "浏览量", value: t.toLocaleString("zh-CN") }, { label: "下载量", value: a.toLocaleString("zh-CN") }];
  return n.jsx("dl", { className: "case-detail-info-row", "aria-label": "战略咨询报告信息", children: r.map((l) => n.jsxs("div", { className: "case-detail-info-item", children: [n.jsxs("dt", { children: [l.label, "："] }), n.jsx("dd", { children: l.value })] }, l.label)) });
}
export { P as C, B as M, V as R, H as S, k as a, v as b, F as c, z as d, G as e, U as f, E as g, K as h, L as i, j as p, O as r, T as s, D as u };
