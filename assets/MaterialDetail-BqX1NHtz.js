import { ag as A, am as T, r as m, F as e, V as B, G as n, an as K, v as E, X as O, L as w, K as u, ao as Q, ap as V } from "./index-CNdOvyN0.js";
import { U as q } from "./upload-DIU1kIfT.js";
import "./index-BApMjfWm.js";
const N = { processing: "解析中", complete: "已完成", failed: "解析失败" };
function W(o) {
  return o < 1024 * 1024 ? `${Math.max(1, Math.round(o / 1024))} KB` : `${(o / 1024 / 1024).toFixed(1)} MB`;
}
function G(o) {
  var h;
  const c = (h = o.split(".").pop()) == null ? void 0 : h.toUpperCase();
  return c === "DOC" || c === "DOCX" ? "DOCX" : c === "PDF" ? "PDF" : c === "XLS" || c === "XLSX" ? "XLSX" : null;
}
function _() {
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(/* @__PURE__ */ new Date()).replaceAll("/", "-");
}
function Z() {
  const { items: o, updateItem: c, storageWarning: h } = A(), i = o.find((a) => a.id === T() && !a.deleted), [$, D] = m.useState(""), [v, k] = m.useState(""), [f, p] = m.useState(null), [g, F] = m.useState(""), [l, y] = m.useState(null), d = (i == null ? void 0 : i.files) ?? [], C = m.useRef(d);
  C.current = d;
  const R = m.useMemo(() => {
    const a = v.trim().toLocaleLowerCase();
    return d.filter((t) => {
      var x;
      return !a || `${t.name} ${t.format} ${N[t.status]} ${((x = t.localDocument) == null ? void 0 : x.text) ?? ""}`.toLocaleLowerCase().includes(a);
    });
  }, [v, d]);
  function j(a) {
    C.current = a, i && c(i.id, { files: a });
  }
  function X(a) {
    if (!a.localDocument) {
      u.info("当前为前端演示资料，真实文件下载服务尚未接入。");
      return;
    }
    try {
      Q(V(a.localDocument.docxBase64), `${a.name}.docx`);
    } catch {
      u.error("本地报告文件读取失败，请重新保存报告");
    }
  }
  function z(a) {
    if (!i) return;
    const t = a.flatMap((s) => {
      var I, S;
      const b = s.name ?? ((I = s.originFile) == null ? void 0 : I.name) ?? "", M = G(b);
      return M ? [{ id: `${i.id}-local-file-${Date.now()}-${b}`, name: b.replace(/\.[^.]+$/, ""), format: M, size: W(((S = s.originFile) == null ? void 0 : S.size) ?? 0), uploadedAt: _(), status: "processing" }] : [];
    });
    if (!t.length) {
      u.warning("请选择 PDF、Word 或 Excel 文件。");
      return;
    }
    const x = new Set(d.map((s) => `${s.name}-${s.size}`)), r = t.filter((s) => !x.has(`${s.name}-${s.size}`));
    if (!r.length) {
      u.info("所选文件已在当前知识库中。");
      return;
    }
    j([...r, ...d]), u.success(`已添加 ${r.length} 个文件，当前为本地解析状态预览。`);
  }
  function L() {
    const a = g.trim();
    !f || !a || (j(d.map((t) => t.id === f.id ? { ...t, name: a } : t)), p(null), u.success("文件名称已更新。"));
  }
  function P(a) {
    w.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: e.jsxs("div", { className: "task-delete-content", children: [e.jsxs("p", { children: ["确定要删除文件“", a.name, "”吗？"] }), e.jsx("p", { children: "本操作仅影响当前本地预览，可通过提示中的“撤销”恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => {
      const t = d.findIndex((r) => r.id === a.id);
      j(d.filter((r) => r.id !== a.id));
      const x = u.success({ duration: 8e3, content: e.jsxs("span", { className: "material-undo-message", children: ["文件已移除", e.jsx(n, { type: "text", onClick: () => {
        const r = C.current;
        if (!r.some((s) => s.id === a.id)) {
          const s = [...r];
          s.splice(Math.max(0, Math.min(t, s.length)), 0, a), j(s);
        }
        x();
      }, children: "撤销" })] }) });
    } });
  }
  const U = [{ title: "文件名", dataIndex: "name", width: 403, render: (a) => e.jsx("span", { className: "material-file-name", title: a, children: a }) }, { title: "格式", dataIndex: "format", width: 120 }, { title: "大小", dataIndex: "size", width: 120 }, { title: "上传时间", dataIndex: "uploadedAt", width: 181, render: (a) => e.jsx("span", { className: "material-file-time", children: a }) }, { title: "解析状态", dataIndex: "status", width: 136, render: (a) => e.jsxs("span", { className: "material-file-status", children: [e.jsx("i", { className: `is-${a}` }), N[a]] }) }, { title: "操作", width: 188, fixed: "right", render: (a, t) => e.jsxs("span", { className: "material-file-actions", children: [e.jsx(n, { type: "text", "aria-label": `重命名文件：${t.name}`, onClick: () => {
    p(t), F(t.name);
  }, children: "重命名" }), e.jsx(n, { type: "text", "aria-label": `查看文件详情：${t.name}`, onClick: () => y(t), children: "详情" }), e.jsx(n, { type: "text", "aria-label": `下载文件：${t.name}`, onClick: () => X(t), children: "下载" }), e.jsx(n, { type: "text", status: "danger", "aria-label": `删除文件：${t.name}`, onClick: () => P(t), children: "删除" })] }) }];
  return i ? e.jsxs("div", { className: "material-detail-page", children: [e.jsxs("header", { className: "material-detail-heading", "data-node-id": "2157:14901", children: [e.jsx("h1", { children: i.name }), e.jsxs("p", { children: ["简介：", i.description] })] }), e.jsxs("section", { className: "material-detail-files", "aria-label": "知识库文件", "data-node-id": "2157:14904", children: [e.jsxs("form", { className: "material-detail-toolbar", onSubmit: (a) => {
    a.preventDefault(), k($);
  }, children: [e.jsx(q, { accept: ".pdf,.doc,.docx,.xls,.xlsx", autoUpload: false, multiple: true, showUploadList: false, onChange: (a) => z(a), children: e.jsx(n, { type: "primary", children: "上传文件" }) }), e.jsxs("div", { className: "material-detail-search", children: [e.jsx(E, { className: "shared-search-input material-detail-search-input", "aria-label": "搜索报告标题、全文关键词", placeholder: "搜索报告标题、全文关键词", value: $, onChange: D, allowClear: true }), e.jsx(n, { type: "primary", htmlType: "submit", children: "查询" }), e.jsx(n, { onClick: () => {
    D(""), k("");
  }, children: "重置" })] })] }), e.jsx("div", { className: "material-detail-table-scroll", children: e.jsx(O, { className: "material-detail-table", columns: U, data: R, rowKey: "id", pagination: false, border: false, tableLayoutFixed: true, scroll: { x: 1148 }, noDataElement: e.jsx(B, { description: "暂无符合条件的文件" }) }) })] }), h && e.jsx("p", { className: "material-storage-warning", role: "status", children: "浏览器无法保存本次文件操作，刷新后将恢复演示数据。" }), e.jsx(w, { title: "重命名文件", visible: !!f, onCancel: () => p(null), style: { width: 480 }, footer: e.jsxs("div", { className: "task-modal-footer", children: [e.jsx(n, { onClick: () => p(null), children: "取消" }), e.jsx(n, { type: "primary", disabled: !g.trim(), onClick: L, children: "保存" })] }), children: e.jsx(E, { "aria-label": "文件名称", value: g, maxLength: 100, onChange: F, onPressEnter: L }) }), e.jsxs(w, { title: "文件详情", visible: !!l, onCancel: () => y(null), footer: e.jsx(n, { onClick: () => y(null), children: "关闭" }), style: { width: 520 }, children: [l && e.jsxs("dl", { className: "material-file-detail", children: [e.jsxs("div", { children: [e.jsx("dt", { children: "文件名" }), e.jsx("dd", { children: l.name })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "格式" }), e.jsx("dd", { children: l.format })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "大小" }), e.jsx("dd", { children: l.size })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "上传时间" }), e.jsx("dd", { children: l.uploadedAt })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "解析状态" }), e.jsx("dd", { children: N[l.status] })] })] }), (l == null ? void 0 : l.localDocument) && e.jsxs(e.Fragment, { children: [e.jsx("h3", { children: "报告正文" }), e.jsx("pre", { className: "material-local-report-preview", children: l.localDocument.text })] })] })] }) : e.jsxs("div", { className: "material-detail-missing", children: [e.jsx(B, { description: "未找到该知识库，可能已被移除" }), e.jsx(n, { type: "primary", onClick: () => K("materials"), children: "返回我的素材库" })] });
}
export { Z as default };
