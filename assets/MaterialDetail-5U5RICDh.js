import { ac as U, aE as A, r as m, Z as e, a7 as S, D as n, aF as T, x as z, a2 as u } from "./index-DOWuBEUh.js";
import { U as O, E as w } from "./upload-dwSPQUIn.js";
import { a as K } from "./index-DCvAPB0m.js";
import "./useOverflowHidden-DqOFwnaA.js";
import "./index-gnNGM7My.js";
import "./index-CgcNigm7.js";
import "./pagination-DNEzLAQJ.js";
const N = { processing: "解析中", complete: "已完成", failed: "解析失败" };
function Q(d) {
  return d < 1024 * 1024 ? `${Math.max(1, Math.round(d / 1024))} KB` : `${(d / 1024 / 1024).toFixed(1)} MB`;
}
function q(d) {
  var x;
  const o = (x = d.split(".").pop()) == null ? void 0 : x.toUpperCase();
  return o === "DOC" || o === "DOCX" ? "DOCX" : o === "PDF" ? "PDF" : o === "XLS" || o === "XLSX" ? "XLSX" : null;
}
function V() {
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(/* @__PURE__ */ new Date()).replaceAll("/", "-");
}
function ee() {
  const { items: d, updateItem: o, storageWarning: x } = U(), i = d.find((t) => t.id === A() && !t.deleted), [$, k] = m.useState(""), [v, F] = m.useState(""), [j, h] = m.useState(null), [f, D] = m.useState(""), [c, g] = m.useState(null), r = (i == null ? void 0 : i.files) ?? [], y = m.useRef(r);
  y.current = r;
  const B = m.useMemo(() => {
    const t = v.trim().toLocaleLowerCase();
    return r.filter((a) => !t || `${a.name} ${a.format} ${N[a.status]}`.toLocaleLowerCase().includes(t));
  }, [v, r]);
  function p(t) {
    y.current = t, i && o(i.id, { files: t });
  }
  function R(t) {
    if (!i) return;
    const a = t.flatMap((s) => {
      var I, E;
      const b = s.name ?? ((I = s.originFile) == null ? void 0 : I.name) ?? "", M = q(b);
      return M ? [{ id: `${i.id}-local-file-${Date.now()}-${b}`, name: b.replace(/\.[^.]+$/, ""), format: M, size: Q(((E = s.originFile) == null ? void 0 : E.size) ?? 0), uploadedAt: V(), status: "processing" }] : [];
    });
    if (!a.length) {
      u.warning("请选择 PDF、Word 或 Excel 文件。");
      return;
    }
    const C = new Set(r.map((s) => `${s.name}-${s.size}`)), l = a.filter((s) => !C.has(`${s.name}-${s.size}`));
    if (!l.length) {
      u.info("所选文件已在当前知识库中。");
      return;
    }
    p([...l, ...r]), u.success(`已添加 ${l.length} 个文件，当前为本地解析状态预览。`);
  }
  function L() {
    const t = f.trim();
    !j || !t || (p(r.map((a) => a.id === j.id ? { ...a, name: t } : a)), h(null), u.success("文件名称已更新。"));
  }
  function X(t) {
    w.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: e.jsxs("div", { className: "task-delete-content", children: [e.jsxs("p", { children: ["确定要删除文件“", t.name, "”吗？"] }), e.jsx("p", { children: "本操作仅影响当前本地预览，可通过提示中的“撤销”恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => {
      const a = r.findIndex((l) => l.id === t.id);
      p(r.filter((l) => l.id !== t.id));
      const C = u.success({ duration: 8e3, content: e.jsxs("span", { className: "material-undo-message", children: ["文件已移除", e.jsx(n, { type: "text", onClick: () => {
        const l = y.current;
        if (!l.some((s) => s.id === t.id)) {
          const s = [...l];
          s.splice(Math.max(0, Math.min(a, s.length)), 0, t), p(s);
        }
        C();
      }, children: "撤销" })] }) });
    } });
  }
  const P = [{ title: "文件名", dataIndex: "name", width: 403, render: (t) => e.jsx("span", { className: "material-file-name", title: t, children: t }) }, { title: "格式", dataIndex: "format", width: 120 }, { title: "大小", dataIndex: "size", width: 120 }, { title: "上传时间", dataIndex: "uploadedAt", width: 181, render: (t) => e.jsx("span", { className: "material-file-time", children: t }) }, { title: "解析状态", dataIndex: "status", width: 136, render: (t) => e.jsxs("span", { className: "material-file-status", children: [e.jsx("i", { className: `is-${t}` }), N[t]] }) }, { title: "操作", width: 188, render: (t, a) => e.jsxs("span", { className: "material-file-actions", children: [e.jsx(n, { type: "text", "aria-label": `重命名文件：${a.name}`, onClick: () => {
    h(a), D(a.name);
  }, children: "重命名" }), e.jsx(n, { type: "text", "aria-label": `查看文件详情：${a.name}`, onClick: () => g(a), children: "详情" }), e.jsx(n, { type: "text", "aria-label": `下载文件：${a.name}`, onClick: () => u.info("当前为前端演示资料，真实文件下载服务尚未接入。"), children: "下载" }), e.jsx(n, { type: "text", status: "danger", "aria-label": `删除文件：${a.name}`, onClick: () => X(a), children: "删除" })] }) }];
  return i ? e.jsxs("div", { className: "material-detail-page", children: [e.jsxs("header", { className: "material-detail-heading", "data-node-id": "2157:14901", children: [e.jsx("h1", { children: i.name }), e.jsxs("p", { children: ["简介：", i.description] })] }), e.jsxs("section", { className: "material-detail-files", "aria-label": "知识库文件", "data-node-id": "2157:14904", children: [e.jsxs("form", { className: "material-detail-toolbar", onSubmit: (t) => {
    t.preventDefault(), F($);
  }, children: [e.jsx(O, { accept: ".pdf,.doc,.docx,.xls,.xlsx", autoUpload: false, multiple: true, showUploadList: false, onChange: (t) => R(t), children: e.jsx(n, { type: "primary", children: "上传文件" }) }), e.jsxs("div", { className: "material-detail-search", children: [e.jsx(z, { className: "shared-search-input material-detail-search-input", "aria-label": "搜索报告标题、全文关键词", placeholder: "搜索报告标题、全文关键词", value: $, onChange: k, allowClear: true }), e.jsx(n, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(n, { onClick: () => {
    k(""), F("");
  }, children: "重置" })] })] }), e.jsx("div", { className: "material-detail-table-scroll", children: e.jsx(K, { className: "material-detail-table", columns: P, data: B, rowKey: "id", pagination: false, border: false, tableLayoutFixed: true, scroll: { x: 1148 }, noDataElement: e.jsx(S, { description: "暂无符合条件的文件" }) }) })] }), x && e.jsx("p", { className: "material-storage-warning", role: "status", children: "浏览器无法保存本次文件操作，刷新后将恢复演示数据。" }), e.jsx(w, { title: "重命名文件", visible: !!j, onCancel: () => h(null), style: { width: 480 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(n, { onClick: () => h(null), children: "取消" }), e.jsx(n, { type: "primary", disabled: !f.trim(), onClick: L, children: "保存" })] }), children: e.jsx(z, { "aria-label": "文件名称", value: f, maxLength: 100, onChange: D, onPressEnter: L }) }), e.jsx(w, { title: "文件详情", visible: !!c, onCancel: () => g(null), footer: e.jsx(n, { onClick: () => g(null), children: "关闭" }), style: { width: 520 }, children: c && e.jsxs("dl", { className: "material-file-detail", children: [e.jsxs("div", { children: [e.jsx("dt", { children: "文件名" }), e.jsx("dd", { children: c.name })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "格式" }), e.jsx("dd", { children: c.format })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "大小" }), e.jsx("dd", { children: c.size })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "上传时间" }), e.jsx("dd", { children: c.uploadedAt })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "解析状态" }), e.jsx("dd", { children: N[c.status] })] })] }) })] }) : e.jsxs("div", { className: "material-detail-missing", children: [e.jsx(S, { description: "未找到该知识库，可能已被移除" }), e.jsx(n, { type: "primary", onClick: () => T("materials"), children: "返回我的素材库" })] });
}
export { ee as default };
