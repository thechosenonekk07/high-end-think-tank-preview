import { r as l, Z as e, D as i, a4 as ce, x as f, a7 as G, a2 as j, ac as ye, Q as de, ad as ge, a3 as M, a6 as oe } from "./index-DOWuBEUh.js";
import { e as ve } from "./reportTasks-DAXmF1j7.js";
import { P as fe } from "./pagination-DNEzLAQJ.js";
import { E as R, U as be } from "./upload-dwSPQUIn.js";
import { F as W } from "./index-C6f6IxNt.js";
import "./useOverflowHidden-DqOFwnaA.js";
import "./index-gnNGM7My.js";
const v = "适用于产业链梳理、市场空间测算、竞争格局于趋势判断", K = [{ id: "investment-value-1", name: "投资价值研究模板", description: v, category: "研究报告", industry: "金融", scene: "投资决策", ownership: "official" }, { id: "investment-value-2", name: "投资价值研究模板", description: v, category: "研究报告", industry: "先进制造", scene: "研究分析", ownership: "official" }, { id: "investment-value-3", name: "投资价值研究模板", description: v, category: "研究报告", industry: "人工智能", scene: "趋势洞察", ownership: "official" }, { id: "investment-value-4", name: "投资价值研究模板", description: v, category: "研究报告", industry: "新能源", scene: "投资决策", ownership: "official" }, { id: "investment-value-5", name: "投资价值研究模板", description: v, category: "研究报告", industry: "低空经济", scene: "研究分析", ownership: "personal" }, { id: "investment-value-6", name: "投资价值研究模板", description: v, category: "研究报告", industry: "产业政策", scene: "研究分析", ownership: "personal" }], Ce = ["研究报告", "洞察报告", "战略咨询报告", "其他"], Ne = ["全部行业", ...Array.from(new Set(K.map((s) => s.industry)))], ke = ["全部场景", ...Array.from(new Set(K.map((s) => s.scene)))];
function k(s, o) {
  j.info(`${o ? `“${o.name}”` : "自定义模版"}的${s}能力尚未接入，当前仅还原模版库页面与筛选交互。`);
}
function we() {
  return e.jsxs("div", { className: "template-library-preview", "aria-hidden": "true", "data-node-id": "2057:6121", children: [e.jsx("img", { src: "./figma/template-library-preview.svg", alt: "" }), e.jsx("span", { children: "template" }), e.jsxs("i", { children: [e.jsx("b", {}), e.jsx("b", {})] })] });
}
function Se({ item: s }) {
  const o = s.ownership === "official" ? "官方模版" : "个人模版", r = s.ownership === "official" ? "复制并编辑" : "编辑";
  return e.jsxs("article", { className: "template-library-card", "data-node-id": "2057:6118", children: [e.jsxs("div", { className: "template-category-ribbon", "data-node-id": "2057:6138", children: [e.jsx("img", { src: "./figma/template-library-ribbon.svg", alt: "", "aria-hidden": "true" }), e.jsx("span", { children: s.category })] }), e.jsxs("div", { className: "template-library-card-main", children: [e.jsx(we, {}), e.jsxs("div", { className: "template-library-card-copy", children: [e.jsxs("div", { children: [e.jsx("h2", { children: s.name }), e.jsx("span", { className: `template-owner-tag is-${s.ownership}`, children: o })] }), e.jsx("p", { children: s.description })] })] }), e.jsx("div", { className: "template-library-divider" }), e.jsxs("div", { className: "template-library-card-actions", children: [e.jsx(i, { type: "text", className: "template-card-muted-action", onClick: () => k("删除", s), children: "删除" }), e.jsxs("div", { children: [e.jsx(i, { type: "text", className: "template-card-muted-action", onClick: () => k("预览", s), children: "预览" }), e.jsxs("span", { className: "template-card-primary-actions", children: [e.jsx(i, { type: "text", onClick: () => k(r, s), children: r }), e.jsx(i, { type: "text", onClick: () => k("使用", s), children: "使用模板" })] })] })] })] });
}
function Le() {
  const [s, o] = l.useState("研究报告"), [r, p] = l.useState("全部行业"), [d, h] = l.useState("全部场景"), [b, C] = l.useState(""), [y, N] = l.useState(""), g = l.useMemo(() => {
    const c = y.trim().toLocaleLowerCase();
    return K.filter((u) => u.category === s && (r === "全部行业" || u.industry === r) && (d === "全部场景" || u.scene === d) && (!c || `${u.name} ${u.industry} ${u.scene}`.toLocaleLowerCase().includes(c)));
  }, [y, s, r, d]);
  function x() {
    p("全部行业"), h("全部场景"), C(""), N("");
  }
  return e.jsxs("section", { className: "template-library-panel", "aria-label": "模版库内容", "data-node-id": "2053:5743", children: [e.jsx("div", { className: "template-category-tabs", role: "tablist", "aria-label": "模版类型", "data-node-id": "2057:6104", children: Ce.map((c) => e.jsx("button", { type: "button", role: "tab", "aria-selected": s === c, className: s === c ? "is-active" : "", onClick: () => o(c), children: c }, c)) }), e.jsxs("form", { className: "template-library-toolbar", onSubmit: (c) => {
    c.preventDefault(), N(b);
  }, "data-node-id": "2053:5749", children: [e.jsx(i, { type: "primary", onClick: () => k("创建"), children: "自定义模版" }), e.jsxs("div", { className: "template-library-filters", children: [e.jsx(ce, { "aria-label": "选择模版行业", value: r, options: Ne, onChange: p }), e.jsx(ce, { "aria-label": "选择模版场景", value: d, options: ke, onChange: h }), e.jsx(f, { "aria-label": "搜索模版名称、行业或场景", value: b, onChange: C, placeholder: "搜索模版名称/行业/场景", allowClear: true }), e.jsx(i, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(i, { type: "outline", onClick: x, children: "重置" })] })] }), e.jsx("div", { className: "template-library-results", "data-node-id": "2057:6116", children: g.length > 0 ? e.jsx("div", { className: "template-library-grid", children: g.map((c) => e.jsx(Se, { item: c }, c.id)) }) : e.jsxs("div", { className: "material-empty", children: [e.jsx(G, { description: "没有符合条件的模版" }), e.jsx(i, { type: "text", onClick: x, children: "清空筛选" })] }) })] });
}
const $e = [10, 20, 30], Ee = { remaining: 15, status: "warning" }, Me = Array.from({ length: 4 }, (s, o) => ({ id: `case-source-${o + 1}`, title: "低空经济政策与试点合集", tags: ["低空经济", "趋势图表"] }));
function Te() {
  return e.jsx("img", { className: "material-folder-preview", src: "./figma/material-library-folder.png", width: "64", height: "66", alt: "", "aria-hidden": "true", "data-node-id": "2035:24807" });
}
function Ie({ remaining: s, status: o }) {
  const r = o === "warning";
  return e.jsx(de, { content: "设计稿演示值，未接入真实存储配额", children: e.jsxs("span", { className: `material-capacity-main ${r ? "is-warning" : ""}`, "data-node-id": r ? "2095:415" : "2095:401", children: [e.jsx("img", { src: r ? "./figma/material-library-capacity-warning.svg" : "./figma/material-library-capacity.svg", width: "16", height: "16", alt: "", "aria-hidden": "true" }), e.jsxs("span", { className: "material-capacity-copy", children: [e.jsx("span", { children: "剩余知识库容量" }), e.jsxs("strong", { children: [s, "%"] })] })] }) });
}
function Ae({ files: s, onChange: o }) {
  return e.jsx("div", { className: "material-upload-picker", children: e.jsx(be, { accept: ".pdf,.doc,.docx,.xls,.xlsx", autoUpload: false, multiple: true, drag: true, showUploadList: true, fileList: s.map((r, p) => ({ uid: String(p), name: r.name, status: "init" })), beforeUpload: (r) => r.size > 50 * 1024 * 1024 ? (j.error(`文件“${r.name}”超过 50MB，请重新选择。`), false) : true, onChange: (r) => o(r.map((p) => {
    var d, h;
    return { name: p.name ?? "", size: ((d = p.originFile) == null ? void 0 : d.size) ?? ((h = s[Number(p.uid)]) == null ? void 0 : h.size) ?? 0 };
  })), onExceedLimit: () => j.warning("最多选择 10 个文件，请移除已有文件后重试。"), limit: { maxCount: 10, hideOnExceedLimit: false }, children: e.jsxs("div", { className: "material-upload-trigger", "data-node-id": "I2088:25769;1788:3725", children: [e.jsx("img", { src: "./figma/material-library-upload-plus.svg", width: "14", height: "14", alt: "", "aria-hidden": "true" }), e.jsxs("div", { children: [e.jsx("strong", { children: "点击或拖拽文件到此处上传" }), e.jsxs("span", { children: ["支持 PDF / Word / Excel", e.jsx("br", {}), "单文件不超过50MB"] })] })] }) }) });
}
function De() {
  const { items: s, createItem: o, updateItem: r, storageWarning: p } = ye(), [d, h] = l.useState("knowledge"), [b, C] = l.useState(""), [y, N] = l.useState(""), [g, x] = l.useState(1), [c, u] = l.useState(10), [n, w] = l.useState(null), [T, Z] = l.useState(""), [I, _] = l.useState(""), [H, S] = l.useState(""), [L, J] = l.useState("local"), [V, A] = l.useState([]), [Q, X] = l.useState(""), [Y, z] = l.useState(""), [ee, P] = l.useState([]), [F, ae] = l.useState(""), [se, q] = l.useState(""), [te, O] = l.useState([]), [me, B] = l.useState(false), D = l.useMemo(() => s.filter((a) => !a.deleted), [s]), $ = l.useMemo(() => s.filter((a) => a.deleted), [s]), E = l.useMemo(() => {
    const a = y.trim().toLocaleLowerCase();
    return D.filter((t) => !a || `${t.name} ${t.description}`.toLocaleLowerCase().includes(a));
  }, [D, y]), le = E.slice((g - 1) * c, g * c), pe = l.useMemo(() => {
    const a = Y.trim().toLocaleLowerCase();
    return Me.filter((t) => !a || `${t.title} ${t.tags.join(" ")}`.toLocaleLowerCase().includes(a));
  }, [Y]), ue = l.useMemo(() => {
    const a = se.trim().toLocaleLowerCase();
    return ve.slice(0, 4).filter((t) => !a || `${t.name} ${t.industry} ${t.tags.join(" ")}`.toLocaleLowerCase().includes(a));
  }, [se]), re = V.length + ee.length + te.length;
  l.useEffect(() => {
    x(1);
  }, [y, c]), l.useEffect(() => {
    x((a) => Math.min(a, Math.max(1, Math.ceil(E.length / c))));
  }, [E.length, c]);
  function ie(a) {
    var t, m;
    w(a), Z(((t = a.item) == null ? void 0 : t.name) ?? ""), _(((m = a.item) == null ? void 0 : m.description) ?? ""), S(""), J("local"), A([]), X(""), z(""), P([]), ae(""), q(""), O([]);
  }
  function he() {
    const a = T.trim();
    if (!a) {
      S("请输入知识库名称");
      return;
    }
    if (D.some((t) => {
      var m;
      return t.id !== ((m = n == null ? void 0 : n.item) == null ? void 0 : m.id) && t.name === a;
    })) {
      S("已存在同名知识库，请修改名称");
      return;
    }
    (n == null ? void 0 : n.mode) === "edit" && n.item ? (r(n.item.id, { name: a, description: I.trim() || "暂无内容简述" }), j.success("知识库信息已更新。")) : (o({ name: a, description: I.trim() || "暂无内容简述" }), j.success("知识库已创建并保存在本机。")), w(null);
  }
  function xe(a) {
    r(a.id, { deleted: true });
    const t = j.success({ duration: 8e3, content: e.jsxs("span", { className: "material-undo-message", children: ["知识库已移除", e.jsx(i, { type: "text", onClick: () => {
      r(a.id, { deleted: false }), t();
    }, children: "撤销" })] }) });
  }
  function je(a) {
    R.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: e.jsxs("div", { className: "task-delete-content", children: [e.jsxs("p", { children: ["确定要删除知识库“", a.name, "”吗？"] }), e.jsx("p", { children: "删除后可通过提示中的“撤销”或“已移除”列表恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => xe(a) });
  }
  function ne() {
    C(""), N(""), x(1);
  }
  return e.jsxs("div", { className: "material-library-page", children: [e.jsx("h1", { className: "sr-only", children: "我的素材库" }), e.jsxs("div", { className: "material-tabs", role: "tablist", "aria-label": "素材库类型", children: [e.jsx("button", { type: "button", role: "tab", "aria-selected": d === "knowledge", className: d === "knowledge" ? "is-active" : "", onClick: () => h("knowledge"), children: "知识库" }), e.jsx("button", { type: "button", role: "tab", "aria-selected": d === "template", className: d === "template" ? "is-active" : "", onClick: () => h("template"), children: "模版库" })] }), d === "knowledge" ? e.jsxs(e.Fragment, { children: [e.jsxs("form", { className: "material-toolbar", onSubmit: (a) => {
    a.preventDefault(), N(b), x(1);
  }, children: [e.jsx(i, { type: "primary", onClick: () => ie({ mode: "create" }), children: "新建知识库" }), e.jsxs("div", { className: "material-search-group", children: [e.jsx(f, { className: "shared-search-input material-search-input", "aria-label": "搜索知识库名称或描述", placeholder: "搜索知识库名称", value: b, onChange: C, allowClear: true }), e.jsx(i, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(i, { type: "outline", onClick: ne, children: "重置" })] })] }), e.jsx("div", { className: "material-results-scroll", children: le.length > 0 ? e.jsx("div", { className: "material-card-grid", children: le.map((a) => e.jsxs("article", { className: "material-card", children: [e.jsxs("button", { type: "button", className: "material-card-main material-card-open", "aria-label": `打开知识库：${a.name}`, onClick: () => ge(a.id), children: [e.jsx(Te, {}), e.jsxs("div", { className: "material-card-copy", children: [e.jsx(de, { content: a.name, children: e.jsx("h2", { children: a.name }) }), e.jsx("p", { children: a.description })] })] }), e.jsxs("div", { className: "material-card-footer", children: [e.jsxs("span", { children: ["创建于 ", a.createdAt] }), e.jsxs("div", { "data-node-id": "2095:519", children: [e.jsx(i, { type: "text", status: "danger", "data-node-id": "2095:520", onClick: () => je(a), children: "删除" }), e.jsx(i, { type: "text", "data-node-id": "2095:521", onClick: () => ie({ mode: "edit", item: a }), children: "编辑" })] })] })] }, a.id)) }) : e.jsxs("div", { className: "material-empty", children: [e.jsx(G, { description: "没有符合条件的知识库" }), e.jsx(i, { type: "text", onClick: ne, children: "清空筛选" })] }) }), e.jsxs("div", { className: "material-footer", children: [e.jsxs("div", { className: "material-capacity", children: [e.jsx(Ie, { ...Ee }), $.length > 0 && e.jsxs(i, { type: "text", onClick: () => B(true), children: ["已移除 ", $.length, " 条"] })] }), e.jsx(fe, { className: "tasks-pagination material-pagination", current: g, pageSize: c, total: E.length, size: "small", showTotal: (a) => `共计 ${a} 条`, sizeCanChange: true, sizeOptions: $e, onChange: (a, t) => {
    x(a), u(t);
  }, onPageSizeChange: u })] }), p && e.jsx("p", { className: "material-storage-warning", role: "status", children: "浏览器无法保存素材库操作，刷新后将恢复演示数据。" })] }) : e.jsx(Le, {}), e.jsx(R, { title: (n == null ? void 0 : n.mode) === "edit" ? "编辑知识库" : "新建知识库", visible: !!n, onCancel: () => w(null), maskClosable: false, autoFocus: false, afterOpen: () => requestAnimationFrame(() => {
    var a;
    return (a = document.querySelector(".material-create-modal .arco-modal-close-icon")) == null ? void 0 : a.focus({ preventScroll: true });
  }), className: `material-editor-modal ${(n == null ? void 0 : n.mode) === "create" ? "material-create-modal" : ""}`, style: { width: 480 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(i, { onClick: () => w(null), children: "取消" }), e.jsx(i, { type: "primary", disabled: !T.trim(), onClick: he, children: (n == null ? void 0 : n.mode) === "edit" ? "保存" : "创建知识库" })] }), children: e.jsxs(W, { layout: "vertical", className: "material-editor-form", children: [e.jsxs(e.Fragment, { children: [e.jsx(W.Item, { label: "知识库名称", required: true, validateStatus: H ? "error" : void 0, help: H || void 0, children: e.jsx(f, { value: T, onChange: (a) => {
    Z(a), S("");
  }, maxLength: 80, placeholder: "请输入知识库名称" }) }), e.jsx(W.Item, { label: "内容简述", children: e.jsx(f.TextArea, { className: "material-description-input", value: I, onChange: _, maxLength: 200, placeholder: "请输入知识库名称" }) })] }), (n == null ? void 0 : n.mode) === "create" && e.jsxs("div", { className: `material-source-field ${L !== "local" ? "is-picker" : ""}`, children: [e.jsxs("label", { children: ["来源", e.jsx("span", { className: "material-source-hint", children: "（支持同时从多个来源添加）" })] }), re > 0 && e.jsxs("div", { className: "material-files-summary", children: [e.jsxs("span", { children: ["已添加 ", re, " 个文件"] }), e.jsx(i, { type: "text", onClick: () => {
    A([]), P([]), O([]);
  }, children: "清空" })] }), e.jsxs(M.Group, { value: L, onChange: (a) => {
    J(a), requestAnimationFrame(() => requestAnimationFrame(() => {
      const t = document.querySelector(".material-create-modal .arco-modal-content");
      t && (t.scrollTop = 0);
    }));
  }, className: "material-source-options", children: [e.jsx(M, { value: "local", children: "本地上传" }), e.jsx(M, { value: "cases", children: "案例广场" }), e.jsx(M, { value: "tasks", children: "我的创作任务" })] }), L === "local" ? e.jsx(Ae, { files: V, onChange: A }) : L === "cases" ? e.jsxs("div", { className: "material-case-picker", children: [e.jsxs("div", { className: "material-case-search", children: [e.jsx(f, { className: "shared-search-input", "aria-label": "搜索案例来源", placeholder: "搜索案例名称、行业、标签", value: Q, onChange: X, allowClear: true, onPressEnter: () => z(Q) }), e.jsx(i, { type: "primary", onClick: () => z(Q), children: "查询" })] }), e.jsx("div", { className: "material-case-options", children: pe.map((a) => e.jsxs("label", { className: "material-case-option", children: [e.jsxs("span", { className: "material-case-copy", children: [e.jsx("strong", { children: a.title }), e.jsx("span", { children: a.tags.map((t) => e.jsx("i", { children: t }, t)) })] }), e.jsx(oe, { checked: ee.includes(a.id), onChange: (t) => P((m) => t ? [...m, a.id] : m.filter((U) => U !== a.id)), "aria-label": `选择案例：${a.title}` })] }, a.id)) })] }) : e.jsxs("div", { className: "material-case-picker material-task-picker", children: [e.jsxs("div", { className: "material-case-search", children: [e.jsx(f, { className: "shared-search-input", "aria-label": "搜索创作任务来源", placeholder: "搜索任务名称、行业、标签", value: F, onChange: ae, allowClear: true, onPressEnter: () => q(F) }), e.jsx(i, { type: "primary", onClick: () => q(F), children: "查询" })] }), e.jsx("div", { className: "material-case-options", children: ue.map((a) => e.jsxs("label", { className: "material-case-option", children: [e.jsxs("span", { className: "material-case-copy", children: [e.jsx("strong", { children: a.name }), e.jsx("span", { children: a.tags.slice(0, 2).map((t) => e.jsx("i", { children: t }, t)) })] }), e.jsx(oe, { checked: te.includes(a.id), onChange: (t) => O((m) => t ? [...m, a.id] : m.filter((U) => U !== a.id)), "aria-label": `选择任务：${a.name}` })] }, a.id)) })] })] })] }) }), e.jsx(R, { title: "已移除的知识库", visible: me, onCancel: () => B(false), footer: e.jsx(i, { onClick: () => B(false), children: "关闭" }), children: $.length === 0 ? e.jsx(G, { description: "没有已移除的知识库" }) : e.jsx("ul", { className: "removed-material-list", children: $.map((a) => e.jsxs("li", { children: [e.jsxs("div", { children: [e.jsx("strong", { children: a.name }), e.jsxs("span", { children: ["创建于 ", a.createdAt] })] }), e.jsx(i, { type: "text", onClick: () => {
    r(a.id, { deleted: false }), j.success("知识库已恢复。");
  }, children: "恢复" })] }, a.id)) }) })] });
}
export { De as default };
